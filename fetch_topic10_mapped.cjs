const fs = require('fs');
const https = require('https');

const fetchSheet = (url) => {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                https.get(res.headers.location, (res2) => {
                    let data = '';
                    res2.on('data', chunk => data += chunk);
                    res2.on('end', () => resolve(data));
                }).on('error', reject);
            } else {
                let data = '';
                res.on('data', chunk => data += chunk);
                res.on('end', () => resolve(data));
            }
        }).on('error', reject);
    });
};

const PATH_ORDER = ['a','b','c','d','e','f','g','h','i','j','o','p','q','r','s','t','u','v','w','x'];

const sheets = [
    { name: '南勢阿美語', url: 'https://docs.google.com/spreadsheets/d/1nMIIuFDZY1l3-8E6uOXxTwyBYnTkaE4nTdsepm_BF08/export?format=csv' },
    { name: '秀姑巒阿美語', url: 'https://docs.google.com/spreadsheets/d/1kC_beyx7d21qGcbf4eqpzR1M5EJVFZoPk6y7cUHXnyU/export?format=csv' },
    { name: '海岸阿美語', url: 'https://docs.google.com/spreadsheets/d/1y9EdIee6qJX5hwoGOXgpdUWNf-wqXwsSFQ2aCyqnbAI/export?format=csv' },
    { name: '馬蘭阿美語', url: 'https://docs.google.com/spreadsheets/d/1od1BwpI_ZEQRjsmTT7HI5LRHyKAQesAws4m6uGTSjUA/export?format=csv' },
    { name: '恆春阿美語', url: 'https://docs.google.com/spreadsheets/d/1j_SxwHFrf7RGSfGpNOF6PTkzxYmbQkDpXpBk7cKYwRA/export?format=csv' }
];

async function main() {
    let result = {};
    for (const sheet of sheets) {
        console.log("Fetching", sheet.name);
        try {
            const data = await fetchSheet(sheet.url);
            
            let lines = data.split('\n');
            let wordMap = {};
            let count = 0;
            
            for(let i=1; i<lines.length; i++) {
                let row = lines[i].trim();
                // skip empty string
                if (!row) continue;
                let cols = [];
                let current = "";
                let inQuotes = false;
                for(let j=0; j<row.length; j++) {
                    if (row[j] === '"') {
                        inQuotes = !inQuotes;
                    } else if (row[j] === ',' && !inQuotes) {
                        cols.push(current);
                        current = "";
                    } else {
                        current += row[j];
                    }
                }
                cols.push(current);
                
                let id = cols[0] ? cols[0].trim().replace(/^"|"$/g, '').toLowerCase() : '';
                
                // Only consider single-letter IDs essentially representing a data row
                if (id && id.length === 1 && id >= 'a' && id <= 'z') {
                    if (count < PATH_ORDER.length) {
                        const targetId = PATH_ORDER[count];
                        wordMap[targetId] = {
                            amis: cols[1]? cols[1].trim().replace(/^"|"$/g, '') : '',
                            chinese: cols[2]? cols[2].trim().replace(/^"|"$/g, '') : '',
                            image: cols[3]? cols[3].trim().replace(/^"|"$/g, '') : '',
                            sound: cols[4]? cols[4].trim().replace(/^"|"$/g, '').split(',')[0].trim() : '',
                            color: cols[5]? cols[5].trim().replace(/^"|"$/g, '') : ''
                        };
                        count++;
                    }
                }
            }
            result[sheet.name] = wordMap;
        } catch (e) {
            console.error("Error fetching", sheet.name, e);
        }
    }
    
    fs.writeFileSync('topic10_data_mapped.json', JSON.stringify(result, null, 2));
    console.log('Saved topic10_data_mapped.json');
}

main();
