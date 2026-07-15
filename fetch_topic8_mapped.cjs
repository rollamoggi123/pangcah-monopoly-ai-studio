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
    { name: '南勢阿美語', url: 'https://docs.google.com/spreadsheets/d/1vWvEUkAIYwgbry9XSC-L2O3j3RLEhaUJuxEZTmoVoNs/export?format=csv' },
    { name: '秀姑巒阿美語', url: 'https://docs.google.com/spreadsheets/d/1lKCWkCLeVIhBGMwH6uiyQyW3MTWt1-V2sJ5Mz3MKZ6g/export?format=csv' },
    { name: '海岸阿美語', url: 'https://docs.google.com/spreadsheets/d/12n0gHXfaCiX42_u0opwgMgpZsRtwlHA8rt6zgKGe1n0/export?format=csv' },
    { name: '馬蘭阿美語', url: 'https://docs.google.com/spreadsheets/d/1whVi31SveDrT-TxCz0tPgbl9M32D8bTkC2PbPhACJys/export?format=csv' },
    { name: '恆春阿美語', url: 'https://docs.google.com/spreadsheets/d/1JncOAUu_vbjQlqrVuev6ZJ1rg51tcbW_lP5c_AZFPP0/export?format=csv' }
];

async function main() {
    let result = {};
    for (const sheet of sheets) {
        console.log("Fetching", sheet.name);
        try {
            const data = await fetchSheet(sheet.url);
            
            let lines = data.split('\n');
            let wordMap = {};
            let count = 0; // use count to map sequentially to a,b,c...
            
            // first check if the sheet already has a,b,c... ids or we need to just map the items sequentially
            // Let's assume we read row by row and map.
            for(let i=1; i<lines.length; i++) {
                let row = lines[i].trim();
                // skip empty string but parse CSV correctly
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
                
                let id = cols[0].trim().replace(/^"|"$/g, '').toLowerCase();
                
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
    
    fs.writeFileSync('topic8_data_mapped.json', JSON.stringify(result, null, 2));
    console.log('Saved topic8_data_mapped.json');
}

main();
