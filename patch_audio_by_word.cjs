const fs = require('fs');

const extractedString = fs.readFileSync('topic8_extracted_sounds.json', 'utf8');

// I will write a script to re-parse the spreadsheets into an amis -> sound dictionary.
const sheets = [
    { name: '南勢阿美語', file: 'topic8_南勢阿美語.csv' },
    { name: '秀姑巒阿美語', file: 'topic8_秀姑巒阿美語.csv' },
    { name: '海岸阿美語', file: 'topic8_海岸阿美語.csv' },
    { name: '馬蘭阿美語', file: 'topic8_馬蘭阿美語.csv' },
    { name: '恆春阿美語', file: 'topic8_恆春阿美語.csv' }
];

let globalSoundMap = {};

for (let sheet of sheets) {
    const data = fs.readFileSync(sheet.file, 'utf8');
    let lines = data.split('\n');
    let wordMap = {};
    for(let i=1; i<lines.length; i++) {
        let row = lines[i].trim();
        if(!row) continue;
        
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
        
        if (cols.length >= 5) {
            let amis = cols[1].trim();
            // remove quotes
            amis = amis.replace(/^"|"$/g, '').toLowerCase().trim();
            let sound = cols[4].trim().replace(/^"|"$/g, '');
            wordMap[amis] = sound;
        }
    }
    globalSoundMap[sheet.name] = wordMap;
}

// console.log(globalSoundMap["秀姑巒阿美語"]);

let content = fs.readFileSync('topics.ts', 'utf8');

const dialects = ["秀姑巒阿美語", "南勢阿美語", "海岸阿美語", "馬蘭阿美語", "恆春阿美語"];

let matches = 0;

for (const dialect of dialects) {
    const dict = globalSoundMap[dialect];
    if (!dict) continue;
    
    const dialectIndex = content.indexOf(`"${dialect}": {`, content.indexOf('topic8: {'));
    if (dialectIndex !== -1) {
        // We will regex find all instances of `"amis": "WORD",` and then find the subsequent `"sound": "URL"`
        let cellStart = dialectIndex;
        while(true) {
            const amisMatch = content.substring(cellStart).match(/"amis"\s*:\s*"([^"]+)"/);
            if (!amisMatch || amisMatch.index > 5000) break; // Arbitrary bound to stay in dialect block
            
            const amisWord = amisMatch[1].toLowerCase().trim();
            const startOfAmis = cellStart + amisMatch.index;
            
            // Find sound block for this cell
            const soundMatch = content.substring(startOfAmis).match(/"sound"\s*:\s*"([^"]*)"/);
            
            if (soundMatch && soundMatch.index < 500) {
                 const newSound = dict[amisWord] || dict[amisWord.replace(/\^/g, '')]; // fallback for ^ differences
                 
                 if (newSound) {
                     const before = content.substring(0, startOfAmis + soundMatch.index);
                     const replaceLen = `"sound": "${soundMatch[1]}"`.length;
                     const targetReplace = `"sound": "${newSound}"`;
                     content = before + targetReplace + content.substring(startOfAmis + soundMatch.index + replaceLen);
                     cellStart = startOfAmis + soundMatch.index + targetReplace.length;
                     matches++;
                 } else {
                     cellStart = startOfAmis + soundMatch.index + 10;
                 }
            } else {
                 cellStart = startOfAmis + 10;
            }
        }
    }
}

// Similarly patch topic8 default block (let's assume it matches Xiuguluan)
const defaultDict = globalSoundMap["秀姑巒阿美語"];
const gridDataStart = content.indexOf(`gridData: {`, content.indexOf('topic8: {'));
const gridDataDialectStart = content.indexOf(`gridDataByDialect: {`, gridDataStart);

if (gridDataStart !== -1 && gridDataDialectStart !== -1) {
    let cellStart = gridDataStart;
    while(true) {
        const amisMatch = content.substring(cellStart).match(/"amis"\s*:\s*"([^"]+)"/);
        if (!amisMatch || (cellStart + amisMatch.index > gridDataDialectStart)) break;
        
        const amisWord = amisMatch[1].toLowerCase().trim();
        const startOfAmis = cellStart + amisMatch.index;
        
        const soundMatch = content.substring(startOfAmis).match(/"sound"\s*:\s*"([^"]*)"/);
        
        if (soundMatch && soundMatch.index < 500) {
             const newSound = defaultDict[amisWord] || defaultDict[amisWord.replace(/\^/g, '')];
             
             if (newSound) {
                 const before = content.substring(0, startOfAmis + soundMatch.index);
                 const replaceLen = `"sound": "${soundMatch[1]}"`.length;
                 const targetReplace = `"sound": "${newSound}"`;
                 content = before + targetReplace + content.substring(startOfAmis + soundMatch.index + replaceLen);
                 cellStart = startOfAmis + soundMatch.index + targetReplace.length;
                 matches++;
             } else {
                 cellStart = startOfAmis + soundMatch.index + 10;
             }
        } else {
             cellStart = startOfAmis + 10;
        }
    }
}

fs.writeFileSync('topics.ts', content, 'utf8');
console.log('done patching topics.ts by amis word mapping, matches:', matches);
