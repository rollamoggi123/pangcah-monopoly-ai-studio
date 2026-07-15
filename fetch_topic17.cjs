const fs = require('fs');
const https = require('https');
const ids = {
    '秀姑巒阿美語': '1qIUUfeKXkNIsshbldIPOrhV8219XQAZBfL2YEaHscOs',
    '南勢阿美語': '1kjoDYO5T_CXHYRXrKN0mTtTW2KvXDiRliGenU6lVqhw',
    '恆春阿美語': '1YW9nH-PgPLxPtF6wi6DhB0ViMEMdJ_QTsyTJvMt9FAY',
    '海岸阿美語': '1SFIuUTrKRqCnU8fXjxmKROYCifSa2zVIirYNPwqJO2k',
    '馬蘭阿美語': '1IoQvPfy3pPJMl_8_KjDyub-McOtH3ZQ6CSCpEG-DWmI'
};

const download = (id, filename) => new Promise((resolve, reject) => {
    https.get('https://docs.google.com/uc?export=download&id=' + id, res => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
            https.get(res.headers.location, res2 => {
                 const file = fs.createWriteStream(filename);
                 res2.pipe(file);
                 file.on('finish', () => { file.close(); resolve(); });
            }).on('error', reject);
        } else {
             const file = fs.createWriteStream(filename);
             res.pipe(file);
             file.on('finish', () => { file.close(); resolve(); });
        }
    }).on('error', reject);
});

const parseCsv = (filename) => {
    const text = fs.readFileSync(filename, 'utf8');
    const lines = text.split('\n');
    const results = [];
    
    for (const line of lines) {
        if (!line.trim()) continue;
        const matches = [...line.matchAll(/"([^"]*)"/g)].map(m => m[1]);
        if (matches.length < 5) continue;
        const [id, amis, chinese, sound, image] = matches;
        
        if (id === 'id' || id === 'TITLE') continue;
        
        results.push({
            amis: amis.trim(),
            chinese: chinese.trim(),
            sound: sound.trim(),
            image: image.trim()
        });
    }
    return results;
};

(async () => {
    for (const [name, id] of Object.entries(ids)) {
        await download(id, name + '_q17.csv');
        console.log('Downloaded', name);
    }
    
    const dialects = {
        '秀姑巒阿美語': '秀姑巒阿美語_q17.csv',
        '南勢阿美語': '南勢阿美語_q17.csv',
        '恆春阿美語': '恆春阿美語_q17.csv',
        '海岸阿美語': '海岸阿美語_q17.csv',
        '馬蘭阿美語': '馬蘭阿美語_q17.csv'
    };

    const data = { sentencesByDialect: {} };
    for (const [name, file] of Object.entries(dialects)) {
        data.sentencesByDialect[name] = parseCsv(file);
    }
    data.sentencesByDialect['預設'] = data.sentencesByDialect['秀姑巒阿美語'];

    fs.writeFileSync('topic17_data.json', JSON.stringify(data, null, 2));
    console.log('Saved to topic17_data.json');
    
    // Now append to topics.ts
    let s = fs.readFileSync('topics.ts', 'utf8');
    const PATH_ORDER = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x'];

    const gridDataByDialect = {};
    for (const [dialect, sentences] of Object.entries(data.sentencesByDialect)) {
        gridDataByDialect[dialect] = {};
        for (let i = 0; i < PATH_ORDER.length; i++) {
            const pid = PATH_ORDER[i];
            if (i < sentences.length) {
                gridDataByDialect[dialect][pid] = {
                    label: '...',
                    amis: sentences[i].amis,
                    chinese: sentences[i].chinese,
                    sound: sentences[i].sound || '',
                    image: sentences[i].image || ''
                };
            } else {
                 gridDataByDialect[dialect][pid] = { label: '...', amis: '', chinese: '' };
            }
        }
    }

    const gridData = gridDataByDialect['預設'];

    const newTopicString = `
  "topic17": {
    "id": "topic17",
    "title": "全阿美版-訊息問句_問關係動植物物品_1_1到1_15",
    "gridData": ${JSON.stringify(gridData)},
    "gridDataByDialect": ${JSON.stringify(gridDataByDialect)},
    "sentences": ${JSON.stringify(data.sentencesByDialect['預設'])},
    "sentencesByDialect": ${JSON.stringify(data.sentencesByDialect)},
    "dicePrompts": [
      "請念出句子",
      "請翻譯成中文",
      "閉上眼睛念一遍",
      "用快樂的語氣念",
      "用生氣的語氣念",
      "大聲念三遍"
    ]
  }
`;

    const endIdx = s.lastIndexOf('};');
    const prevBracket = s.substring(endIdx - 10, endIdx).trim();
    const needsComma = !prevBracket.endsWith(',');
    const fixedString = s.substring(0, endIdx) + (needsComma ? ',\n' : '') + newTopicString + '\n};\n';

    fs.writeFileSync('topics.ts', fixedString);
    console.log("Appended topic17!");
})();
