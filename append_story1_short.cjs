const fs = require('fs');

function parseCSVString(csvText) {
    let lines = csvText.split('\n');
    let sentences = [];
    
    for(let i=1; i<lines.length; i++) {
        let row = lines[i].trim();
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
        
        if (id && id.length === 1 && id >= 'a' && id <= 'z') {
            sentences.push({
                amis: cols[1]? cols[1].trim().replace(/^"|"$/g, '').replace(/\r/g, '') : '',
                chinese: cols[2]? cols[2].trim().replace(/^"|"$/g, '').replace(/\r/g, '') : '',
                image: cols[3]? cols[3].trim().replace(/^"|"$/g, '').replace(/\r/g, '') : '',
                sound: cols[4]? cols[4].trim().replace(/^"|"$/g, '').split(',')[0].trim() : '',
            });
        }
    }
    return sentences;
}

const data = JSON.parse(fs.readFileSync('fetched_short.json', 'utf8'));

const dialects = {
    '南勢阿美語': parseCSVString(data.nanshi),
    '秀姑巒阿美語': parseCSVString(data.xiugulu),
    '海岸阿美語': parseCSVString(data.coast),
    '馬蘭阿美語': parseCSVString(data.malan),
    '恆春阿美語': parseCSVString(data.hengchun)
};

function formatSentences(arr) {
    return '[\n            ' + arr.map(a => `{ "amis": "${a.amis}", "chinese": "${a.chinese}", "sound": "${a.sound}", "image": "${a.image}" }`).join(',\n            ') + '\n          ]';
}

let topicStr = `
    , story1_short: {
        id: "story1_short",
        title: "短句看圖說故事 1-1～1-2 (朗讀版)",
        sentences: ${formatSentences(dialects['南勢阿美語'])},
        sentencesByDialect: {
          "南勢阿美語": ${formatSentences(dialects['南勢阿美語'])},
          "秀姑巒阿美語": ${formatSentences(dialects['秀姑巒阿美語'])},
          "海岸阿美語": ${formatSentences(dialects['海岸阿美語'])},
          "馬蘭阿美語": ${formatSentences(dialects['馬蘭阿美語'])},
          "恆春阿美語": ${formatSentences(dialects['恆春阿美語'])}
        },
        dicePrompts: ["ira ko...", "ira ko...", "ira ko..."],
        gridData: {}
    }
`;

let content = fs.readFileSync('topics.ts', 'utf8');

const endIdx = content.lastIndexOf('};');
if (endIdx !== -1) {
    content = content.substring(0, endIdx) + topicStr + '};\n';
    fs.writeFileSync('topics.ts', content);
    console.log('Appended story1_short successfully!');
} else {
    console.log('Could not find the end of the TOPIC_TEMPLATES object.');
}
