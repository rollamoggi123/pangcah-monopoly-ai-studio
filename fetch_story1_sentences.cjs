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

const sheets = [
    { name: '南勢阿美語', url: 'https://docs.google.com/spreadsheets/d/1-3l7Sd2NZAJoKqGjC71eMO5LXLdYYZ4YWOOaSNVhRq4/export?format=csv' },
    { name: '秀姑巒阿美語', url: 'https://docs.google.com/spreadsheets/d/16im8ukDXDSJwZxcmxka38XBJCGbkPeiZj76lwZBSnZk/export?format=csv' },
    { name: '海岸阿美語', url: 'https://docs.google.com/spreadsheets/d/1B518Gv0rvjjxgjWtSTSWTPTnhX9zfF0zMdEBso5K_NE/export?format=csv' },
    { name: '馬蘭阿美語', url: 'https://docs.google.com/spreadsheets/d/1qJmAymW0E4HX0dk1No4QqWlH2bm1erbA22e_XJUv2ss/export?format=csv' },
    { name: '恆春阿美語', url: 'https://docs.google.com/spreadsheets/d/1Jm8CEuva8zi4CNvq1LgM59s-yeAYCAGs-JrVBlYx0JM/export?format=csv' }
];

async function main() {
    let dialectsData = {};
    for (const sheet of sheets) {
        console.log("Fetching", sheet.name);
        try {
            const data = await fetchSheet(sheet.url);
            let lines = data.split('\n');
            let sentences = [];
            
            for(let i=1; i<lines.length; i++) {
                let row = lines[i].trim();
                // handle CSV parsing properly
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
                
                if (id && id.startsWith('sentence')) {
                    sentences.push({
                        amis: cols[1]? cols[1].trim().replace(/^"|"$/g, '').replace(/\r/g, '') : '',
                        chinese: cols[2]? cols[2].trim().replace(/^"|"$/g, '').replace(/\r/g, '') : '',
                        sound: cols[3]? cols[3].trim().replace(/^"|"$/g, '').split(',')[0].trim() : '',
                        image: cols[4]? cols[4].trim().replace(/^"|"$/g, '').replace(/\r/g, '') : '',
                    });
                }
            }
            dialectsData[sheet.name] = sentences;
        } catch (e) {
            console.error("Error fetching", sheet.name, e);
        }
    }
    
    fs.writeFileSync('story1_sentences.json', JSON.stringify(dialectsData, null, 2));
    console.log('Saved story1_sentences.json');
}

main();
