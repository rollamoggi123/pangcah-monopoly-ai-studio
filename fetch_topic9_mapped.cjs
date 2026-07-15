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
    { name: '南勢阿美語', url: 'https://docs.google.com/spreadsheets/d/1pJMdARgMm7p_Dm22BaFep-9h8_-2dA7zPz7r3N2ASXU/export?format=csv' },
    { name: '秀姑巒阿美語', url: 'https://docs.google.com/spreadsheets/d/1n2N5DT3VZ1EU3dnQ2_ZTzXjirbCqnG3eIiIn_ba8LZs/export?format=csv' },
    { name: '海岸阿美語', url: 'https://docs.google.com/spreadsheets/d/1nfWuEYybPApM_svNmRkWg_lLDQzu_KoX32z5dbkjd4g/export?format=csv' },
    { name: '馬蘭阿美語', url: 'https://docs.google.com/spreadsheets/d/1-U97KoSGLtEWXr1-FIqwTret_k8gs8A2776dFdbimAA/export?format=csv' },
    { name: '恆春阿美語', url: 'https://docs.google.com/spreadsheets/d/1B2Zen8BHvw1e4UK9ry4r6EddWu-InLPSJUXI6DQJNog/export?format=csv' }
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
                if (!row) continue;
                // handle quotes in csv
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
    
    fs.writeFileSync('topic9_data_mapped.json', JSON.stringify(result, null, 2));
    console.log('Saved topic9_data_mapped.json');
}

main();
