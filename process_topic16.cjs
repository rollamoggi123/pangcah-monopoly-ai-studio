const fs = require('fs');

const parseCsv = (filename) => {
    const text = fs.readFileSync(filename, 'utf8');
    const lines = text.split('\n');
    const results = [];
    
    // Simple CSV parser ignoring headers and title
    let isHeader = true;
    for (const line of lines) {
        if (!line.trim()) continue;
        const matches = [...line.matchAll(/"([^"]*)"/g)].map(m => m[1]);
        if (matches.length < 5) continue;
        const [id, amis, chinese, sound, image] = matches;
        
        if (id === 'id' || id === 'TITLE') continue;
        
        // Remove empty strings for sound/image
        results.push({
            amis: amis.trim(),
            chinese: chinese.trim(),
            sound: sound.trim(),
            image: image.trim()
        });
    }
    return results;
};

const dialects = {
    '秀姑巒阿美語': '秀姑巒阿美語_q16.csv',
    '南勢阿美語': '南勢阿美語_q16.csv',
    '恆春阿美語': '恆春阿美語_q16.csv',
    '海岸阿美語': '海岸阿美語_q16.csv',
    '馬蘭阿美語': '馬蘭阿美語_q16.csv'
};

const data = { sentencesByDialect: {} };
for (const [name, file] of Object.entries(dialects)) {
    data.sentencesByDialect[name] = parseCsv(file);
}
data.sentencesByDialect['預設'] = data.sentencesByDialect['秀姑巒阿美語'];

fs.writeFileSync('topic16_data.json', JSON.stringify(data, null, 2));
console.log('Saved to topic16_data.json');
