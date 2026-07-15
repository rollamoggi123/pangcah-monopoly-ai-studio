import fs from 'fs';

const ids = {
    '秀姑巒阿美語': '1Xfqz5nuWMqnmkWrGtjO3TeLOJ0SPhYU3',
    '南勢阿美語': '1LvwWzo15GBM01g7gc77642h96PBRD_t_',
    '恆春阿美語': '1QEyjO2ancpF7U6LGo5mME_pw_A8CQmcc',
    '海岸阿美語': '12XVFCAqh1cBPIOKXNS88KT6O3EuUAGrN',
    '馬蘭阿美語': '1eK4Vyy2FhfDhYeaIFEyzQS7wq0IL1wZu'
};

function parseCsvTokens(text) {
    const results = [];
    let currentCell = '';
    let inQuotes = false;
    let currentRow = [];
    
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        
        if (char === '"') {
            if (inQuotes && text[i+1] === '"') {
                currentCell += '"';
                i++;
            } else {
                inQuotes = !inQuotes;
            }
        } else if (char === ',' && !inQuotes) {
            currentRow.push(currentCell);
            currentCell = '';
        } else if ((char === '\n' || char === '\r') && !inQuotes) {
            if (char === '\r' && text[i+1] === '\n') {
                i++;
            }
            currentRow.push(currentCell);
            results.push(currentRow);
            currentRow = [];
            currentCell = '';
        } else {
            currentCell += char;
        }
    }
    
    if (currentCell !== '' || currentRow.length > 0) {
        currentRow.push(currentCell);
        results.push(currentRow);
    }
    
    return results;
}

function parseCsv(text) {
    const rows = parseCsvTokens(text);
    const results = [];
    
    for (const cells of rows) {
        if (cells.length < 5) continue;
        
        const id = (cells[0] || '').trim();
        const amis = (cells[1] || '').trim();
        const chinese = (cells[2] || '').trim();
        const sound = (cells[3] || '').trim();
        const image = (cells[4] || '').trim();
        
        if (id === 'id' || id === 'TITLE' || id === '') continue;
        
        results.push({
            amis,
            chinese: chinese.replace(/\s*C:\s*如果會話只有兩句本欄位請勿更動/g, '').trim(),
            sound,
            image
        });
    }
    return results;
}

(async () => {
    const data = { sentencesByDialect: {} };
    for (const [name, id] of Object.entries(ids)) {
        console.log('Downloading', name);
        const url = `https://docs.google.com/uc?export=download&id=${id}`;
        try {
            const res = await fetch(url);
            const text = await res.text();
            fs.writeFileSync(`${name}_q18.csv`, text);
            data.sentencesByDialect[name] = parseCsv(text);
            console.log(`Parsed ${data.sentencesByDialect[name].length} sentences for ${name}`);
        } catch (e) {
            console.error('Failed to download/parse', name, e);
        }
    }
    
    data.sentencesByDialect['預設'] = data.sentencesByDialect['秀姑巒阿美語'];

    fs.writeFileSync('topic18_data.json', JSON.stringify(data, null, 2));
    
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
        id: "topic18",
        title: "全阿美版-生活百句_否定句_5_1到5_27",
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
    if (s.includes('"topic18"')) {
        console.log("Replacing existing topic18");
        const parts = s.split('"topic18":');
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
        
        while(p < after.length && (after[p] === ',' || after[p] === '\n' || after[p] === '\r' || after[p] === ' ')) {
            p++;
        }
        const remaining = after.substring(p);
        
        s = before + '"topic18": ' + newTopicString + (remaining.startsWith('}') ? '\n' : ',\n') + remaining;
    } else {
        const prevBracket = s.substring(endIdx - 10, endIdx).trim();
        const needsComma = !prevBracket.endsWith(',');
        s = s.substring(0, endIdx) + (needsComma ? ',\n' : '') + `"topic18": ` + newTopicString + '\n};\n';
    }
    fs.writeFileSync('topics.ts', s);
    console.log("Finished!");
})();
