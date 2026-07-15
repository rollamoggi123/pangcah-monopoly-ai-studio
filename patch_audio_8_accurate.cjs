const fs = require('fs');

const extractedString = fs.readFileSync('topic8_extracted_sounds.json', 'utf8');
const extracted = JSON.parse(extractedString);

let content = fs.readFileSync('topics.ts', 'utf8');

const dialects = ["秀姑巒阿美語", "南勢阿美語", "海岸阿美語", "馬蘭阿美語", "恆春阿美語"];

for (const dialect of dialects) {
    const sounds = extracted[dialect];
    if (!sounds) continue;
    
    // Find the section for gridDataByDialect: { "dialect": {
    const dialectIndex = content.indexOf(`"${dialect}": {`, content.indexOf('topic8: {'));
    if (dialectIndex !== -1) {
        for (const [cell, url] of Object.entries(sounds)) {
            let cleanUrl = url.split(',')[0].trim().replace(/^"|"$/g, '');
            // find cell definition
            const cellStart = content.indexOf(`"${cell}": {`, dialectIndex);
            if (cellStart !== -1 && cellStart < dialectIndex + 10000) { // arbitrary limit to ensure we stay in dialect
                // find sound in this cell
                const soundMatch = content.substring(cellStart).match(/"sound":\s*"([^"]+)"/);
                if (soundMatch && (content.substring(cellStart).indexOf(`"${cell}": {`) === 0 || content.substring(cellStart, cellStart+20).includes(`"${cell}":`))) {
                     const before = content.substring(0, cellStart + soundMatch.index);
                     const replaceLen = `"sound": "${soundMatch[1]}"`.length;
                     const targetReplace = `"sound": "${cleanUrl}"`;
                     content = before + targetReplace + content.substring(cellStart + soundMatch.index + replaceLen);
                }
            }
        }
    }
}

// also update the default fallback based on some default dialect's links 
// Wait, topic8 default gridData has identical data to one of the dialects. Is it Nanshi or Xiuguluan? Let's check topic8 default gridData's Amis. "lotok", so probably Xiuguluan.
const defaultSounds = extracted["秀姑巒阿美語"];
const gridDataStart = content.indexOf(`gridData: {`, content.indexOf('topic8: {'));
const gridDataDialectStart = content.indexOf(`gridDataByDialect: {`, gridDataStart);

if (gridDataStart !== -1 && gridDataDialectStart !== -1) {
    for (const [cell, url] of Object.entries(defaultSounds)) {
        let cleanUrl = url.split(',')[0].trim().replace(/^"|"$/g, '');
        const cellStart = content.indexOf(`"${cell}": {`, gridDataStart);
        if (cellStart !== -1 && cellStart < gridDataDialectStart) {
            const soundMatch = content.substring(cellStart).match(/"sound":\s*"([^"]+)"/);
            if (soundMatch) {
                 const before = content.substring(0, cellStart + soundMatch.index);
                 const replaceLen = `"sound": "${soundMatch[1]}"`.length;
                 const targetReplace = `"sound": "${cleanUrl}"`;
                 content = before + targetReplace + content.substring(cellStart + soundMatch.index + replaceLen);
            }
        }
    }
}

fs.writeFileSync('topics.ts', content, 'utf8');
console.log('done patching topics.ts');
