const fs = require('fs');

const topicData = JSON.parse(fs.readFileSync('topic9_data.json', 'utf8'));
let content = fs.readFileSync('topics.ts', 'utf8');

const dialects = ["秀姑巒阿美語", "南勢阿美語", "海岸阿美語", "馬蘭阿美語", "恆春阿美語"];
const CELL_IDS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x'];

function replaceInBlock(startIdx, endIdx, data) {
    let cellStart = startIdx;
    while(true) {
        let nextCellIdx = -1;
        let nextCellId = '';
        
        for(let id of CELL_IDS) {
            let m = content.substring(cellStart).match(new RegExp(`"${id}"\\s*:\\s*{`));
            if (m && (nextCellIdx === -1 || m.index < nextCellIdx) && (cellStart + m.index < endIdx)) {
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
                 endIdx += targetReplace.length - replaceLen;
            }
            
            // Find image
            const imgMatch = content.substring(startOfCell).match(/"image"\s*:\s*"([^"]*)"/);
            if (imgMatch && imgMatch.index < 500 && newCellData.image) {
                 const before = content.substring(0, startOfCell + imgMatch.index);
                 const replaceLen = `"image": "${imgMatch[1]}"`.length;
                 const targetReplace = `"image": "${newCellData.image}"`;
                 content = before + targetReplace + content.substring(startOfCell + imgMatch.index + replaceLen);
                 endIdx += targetReplace.length - replaceLen;
            }
        }
        
        cellStart = startOfCell + 10;
    }
}

for (const dialect of dialects) {
    const data = topicData[dialect];
    if (!data) continue;
    
    let topicStart = content.indexOf('topic9: {');
    // Find dialect block in topic9
    let searchStr = `"${dialect}": {`;
    let blockStart = content.indexOf(searchStr, topicStart);
    // Find end of this dialect block roughly (e.g. next dialect, or end of gridDataByDialect)
    let blockEnd = blockStart + 4000; 
    
    if (blockStart !== -1) {
        replaceInBlock(blockStart, blockEnd, data);
    }
}

// Default gridData
const defaultData = topicData["秀姑巒阿美語"];
const topic9Start = content.indexOf('topic9: {');
const gridDataStart = content.indexOf(`gridData: {`, topic9Start);
const gridDataDialectStart = content.indexOf(`gridDataByDialect: {`, gridDataStart);

if (gridDataStart !== -1 && gridDataDialectStart !== -1) {
    replaceInBlock(gridDataStart, gridDataDialectStart, defaultData);
}

fs.writeFileSync('topics.ts', content, 'utf8');
console.log('done patching topics.ts');
