const fs = require('fs');

const topic8Data = JSON.parse(fs.readFileSync('topic8_data.json', 'utf8'));
let content = fs.readFileSync('topics.ts', 'utf8');

const dialects = ["秀姑巒阿美語", "南勢阿美語", "海岸阿美語", "馬蘭阿美語", "恆春阿美語"];
const CELL_IDS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x'];

for (const dialect of dialects) {
    const data = topic8Data[dialect];
    if (!data) continue;
    
    const dialectIndex = content.indexOf(`"${dialect}": {`, content.indexOf('topic8: {'));
    if (dialectIndex !== -1) {
        let cellStart = dialectIndex;
        while(true) {
            // Find the next cell in this dialect
            let nextCellIdx = -1;
            let nextCellId = '';
            
            for(let id of CELL_IDS) {
                let m = content.substring(cellStart).match(new RegExp(`"${id}"\\s*:\\s*{`));
                if (m && (nextCellIdx === -1 || m.index < nextCellIdx) && m.index < 4000) {
                    nextCellIdx = m.index;
                    nextCellId = id;
                }
            }
            if (nextCellIdx === -1) break;
            
            const startOfCell = cellStart + nextCellIdx;
            const newCellData = data[nextCellId];
            
            if (newCellData) {
                // Find sound
                const soundMatch = content.substring(startOfCell).match(/"sound"\s*:\s*"([^"]*)"/);
                if (soundMatch && soundMatch.index < 500) {
                     const before = content.substring(0, startOfCell + soundMatch.index);
                     const replaceLen = `"sound": "${soundMatch[1]}"`.length;
                     const targetReplace = `"sound": "${newCellData.sound}"`;
                     content = before + targetReplace + content.substring(startOfCell + soundMatch.index + replaceLen);
                }
                
                // Find image
                const imgMatch = content.substring(startOfCell).match(/"image"\s*:\s*"([^"]*)"/);
                if (imgMatch && imgMatch.index < 500 && newCellData.image) {
                     const before = content.substring(0, startOfCell + imgMatch.index);
                     const replaceLen = `"image": "${imgMatch[1]}"`.length;
                     const targetReplace = `"image": "${newCellData.image}"`;
                     content = before + targetReplace + content.substring(startOfCell + imgMatch.index + replaceLen);
                }
            }
            
            cellStart = startOfCell + 10;
        }
    }
}

// Default gridData
const defaultData = topic8Data["秀姑巒阿美語"];
const gridDataStart = content.indexOf(`gridData: {`, content.indexOf('topic8: {'));
const gridDataDialectStart = content.indexOf(`gridDataByDialect: {`, gridDataStart);

if (gridDataStart !== -1 && gridDataDialectStart !== -1) {
    let cellStart = gridDataStart;
    while(true) {
        let nextCellIdx = -1;
        let nextCellId = '';
        
        for(let id of CELL_IDS) {
            let m = content.substring(cellStart).match(new RegExp(`"${id}"\\s*:\\s*{`));
            if (m && (nextCellIdx === -1 || m.index < nextCellIdx) && (cellStart + m.index < gridDataDialectStart)) {
                nextCellIdx = m.index;
                nextCellId = id;
            }
        }
        if (nextCellIdx === -1) break;
        
        const startOfCell = cellStart + nextCellIdx;
        const newCellData = defaultData[nextCellId];
        
        if (newCellData) {
            const soundMatch = content.substring(startOfCell).match(/"sound"\s*:\s*"([^"]*)"/);
            if (soundMatch && soundMatch.index < 500) {
                 const before = content.substring(0, startOfCell + soundMatch.index);
                 const replaceLen = `"sound": "${soundMatch[1]}"`.length;
                 const targetReplace = `"sound": "${newCellData.sound}"`;
                 content = before + targetReplace + content.substring(startOfCell + soundMatch.index + replaceLen);
            }
            
            const imgMatch = content.substring(startOfCell).match(/"image"\s*:\s*"([^"]*)"/);
            if (imgMatch && imgMatch.index < 500 && newCellData.image) {
                 const before = content.substring(0, startOfCell + imgMatch.index);
                 const replaceLen = `"image": "${imgMatch[1]}"`.length;
                 const targetReplace = `"image": "${newCellData.image}"`;
                 content = before + targetReplace + content.substring(startOfCell + imgMatch.index + replaceLen);
            }
        }
        cellStart = startOfCell + 10;
    }
}

fs.writeFileSync('topics.ts', content, 'utf8');
console.log('done patching topics.ts');
