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

const CELL_IDS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x'];

const sheets = [
    { name: '南勢阿美語', url: 'https://docs.google.com/spreadsheets/d/1McauOUMqJg12gIURDvN6b1f1jqOGPko4FuoVxRykLXw/export?format=csv' },
    { name: '秀姑巒阿美語', url: 'https://docs.google.com/spreadsheets/d/18nJ8hK3CVp10Sug9W2uJ4ZG1n4_g8WWMOYZ1BNFVueg/export?format=csv' },
    { name: '海岸阿美語', url: 'https://docs.google.com/spreadsheets/d/19sItQl0-FQrkFJ2-0CAt_012VUU_NqQ41fAkZCzhUXg/export?format=csv' },
    { name: '馬蘭阿美語', url: 'https://docs.google.com/spreadsheets/d/1-ylUliBPAftysD0-sX9WNb7hSWgn0NfK1f44vxtuqtw/export?format=csv' },
    { name: '恆春阿美語', url: 'https://docs.google.com/spreadsheets/d/13nleWXyKi-Q3Ic6IEf6pXH3-_T6ivErErboawyuTMZo/export?format=csv' }
];

async function main() {
    let result = {};
    for (const sheet of sheets) {
        console.log("Fetching", sheet.name);
        const data = await fetchSheet(sheet.url);
        fs.writeFileSync(`topic8_${sheet.name}.csv`, data);
        
        let lines = data.split('\n');
        let soundUrlMap = {};
        for(let i=1; i<lines.length; i++) {
            let row = lines[i];
            // format: id, amis, chinese, image, sound
            let m = row.match(/^([^,]+),([^,]+),([^,]+),([^,]+),(.*)$/);
            if(m) {
                let id = m[1].trim().replace(/^"|"$/g, '').toLowerCase();
                let sound = m[5].trim().replace(/^"|"$/g, '');
                if (CELL_IDS.includes(id)) {
                    soundUrlMap[id] = sound;
                }
            } else {
                // fall back for quoted csv values
                const cols = [];
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
                if (cols.length >= 5) {
                    let id = cols[0].trim();
                    if (CELL_IDS.includes(id)) {
                        soundUrlMap[id] = cols[4].trim();
                    }
                }
            }
        }
        result[sheet.name] = soundUrlMap;
    }
    
    fs.writeFileSync('topic8_extracted_sounds.json', JSON.stringify(result, null, 2));
    console.log('Saved topic8_extracted_sounds.json');
}

main();
