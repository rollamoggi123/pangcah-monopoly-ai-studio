import fs from 'fs';

const ids = {
    '秀姑巒阿美語': '1qIUUfeKXkNIsshbldIPOrhV8219XQAZBfL2YEaHscOs',
    '南勢阿美語': '1kjoDYO5T_CXHYRXrKN0mTtTW2KvXDiRliGenU6lVqhw',
    '恆春阿美語': '1YW9nH-PgPLxPtF6wi6DhB0ViMEMdJ_QTsyTJvMt9FAY',
    '海岸阿美語': '1SFIuUTrKRqCnU8fXjxmKROYCifSa2zVIirYNPwqJO2k',
    '馬蘭阿美語': '1IoQvPfy3pPJMl_8_KjDyub-McOtH3ZQ6CSCpEG-DWmI'
};

function parseCsv(text) {
    const lines = text.split('\n');
    const results = [];
    
    // Ignore header
    for (const line of lines) {
        let trimmed = line.trim();
        if (!trimmed) continue;
        if (trimmed.endsWith('\r')) trimmed = trimmed.substring(0, trimmed.length - 1);
        const cells = trimmed.split(',');
        if (cells.length < 5) continue;
        // In case there are commas in the url or sentences, we should be careful. 
        // Assuming id,amis,chinese,sound,image
        // What if there's a comma in the chinese sentence? The size will be > 5.
        // Let's just join the remaining for Chinese or handle it nicely.
        // Actually, no quotes means no commas in strings in Google Sheets export (Google Sheets escapes commas with quotes).
        // If there's no quote in the file at all, there's no comma inside the values.
        const id = cells[0];
        const amis = cells[1];
        const chinese = cells[2];
        const sound = cells[3];
        const image = cells[4];
        
        if (id === 'id' || id === 'TITLE') continue;
        
        results.push({
            amis: amis.trim(),
            chinese: chinese.trim(),
            sound: sound.trim(),
            image: image.trim()
        });
    }
    return results;
}

(async () => {
    const data = { sentencesByDialect: {} };
    for (const [name, id] of Object.entries(ids)) {
        console.log('Downloading', name);
        const url = `https://docs.google.com/spreadsheets/d/${id}/export?format=csv`;
        try {
            const res = await fetch(url);
            const text = await res.text();
            fs.writeFileSync(`${name}_q17.csv`, text);
            data.sentencesByDialect[name] = parseCsv(text);
            console.log(`Parsed ${data.sentencesByDialect[name].length} sentences for ${name}`);
        } catch (e) {
            console.error('Failed to download/parse', name, e);
        }
    }
    
    data.sentencesByDialect['預設'] = data.sentencesByDialect['秀姑巒阿美語'];

    fs.writeFileSync('topic17_data.json', JSON.stringify(data, null, 2));
    
    // update topics.ts
    let s = fs.readFileSync('topics.ts', 'utf8');
    const PATH_ORDER = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x'];

    const gridDataByDialect = {};
    for (const [dialect, sentences] of Object.entries(data.sentencesByDialect)) {
        gridDataByDialect[dialect] = {};
        for (let i = 0; i < PATH_ORDER.length; i++) {
            const pid = PATH_ORDER[i];
            if (i < sentences?.length) {
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

    const newTopicString = JSON.stringify({
        id: "topic17",
        title: "全阿美版-訊息問句_問關係動植物物品_1_1到1_15",
        gridData: gridData,
        gridDataByDialect: gridDataByDialect,
        sentences: data.sentencesByDialect['預設'],
        sentencesByDialect: data.sentencesByDialect,
        dicePrompts: [
          "請念出句子",
          "請翻譯成中文",
          "閉上眼睛念一遍",
          "用快樂的語氣念",
          "用生氣的語氣念",
          "大聲念三遍"
        ]
    }, null, 2);

    const endIdx = s.lastIndexOf('};');
    // Look for topic17 definition to replace it, or append it
    if (s.includes('"topic17"')) {
        console.log("Replacing existing topic17");
        const parts = s.split('"topic17":');
        const before = parts[0];
        
        let after = parts[1];
        let bracketCount = 0;
        let p = 0;
        let started = false;
        while(p < after.length) {
            if (after[p] === '{') {
                bracketCount++;
                started = true;
            } else if (after[p] === '}') {
                bracketCount--;
            }
            p++;
            if (started && bracketCount === 0) break;
        }
        
        // Skip trailing comma
        while(p < after.length && (after[p] === ',' || after[p] === '\n' || after[p] === '\r' || after[p] === ' ')) {
            p++;
        }
        const remaining = after.substring(p);
        
        s = before + '"topic17": ' + newTopicString + (remaining.startsWith('}') ? '\n' : ',\n') + remaining;
    } else {
        const prevBracket = s.substring(endIdx - 10, endIdx).trim();
        const needsComma = !prevBracket.endsWith(',');
        s = s.substring(0, endIdx) + (needsComma ? ',\n' : '') + `"topic17": ` + newTopicString + '\n};\n';
    }
    fs.writeFileSync('topics.ts', s);
    console.log("Finished!");
})();
