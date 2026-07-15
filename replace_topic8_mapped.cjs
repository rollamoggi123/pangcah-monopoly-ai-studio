const fs = require('fs');

const dataRaw = fs.readFileSync('topic8_data_mapped.json', 'utf8');
const topicData = JSON.parse(dataRaw);
const CELL_IDS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x'];

function formatCell(cell) {
    if (!cell) return `{}`;
    let str = `{ "amis": "${cell.amis}", "chinese": "${cell.chinese.replace(/\n/g, '\\n')}"`;
    if (cell.image) str += `, "image": "${cell.image}"`;
    if (cell.sound) str += `, "sound": "${cell.sound}"`;
    if (cell.color) str += `, "color": "${cell.color}"`;
    str += ` }`;
    return str;
}

let topic8Str = `    topic8: {\n        id: "topic8",\n        title: "全阿美語版-山川地理_自然景觀",\n        sentences: COMMON_SENTENCES,\n        sentencesByDialect: COMMON_SENTENCES_BY_DIALECT,\n        dicePrompts: ["ira ko...", "ira ko...", "ira ko..."],\n        gridData: {\n`;

// Helper to get fallback cell if missing
function getCellDataFallback(data, id) {
    return data[id] || null;
}

const defaultData = topicData["秀姑巒阿美語"];
for (let i = 0; i < CELL_IDS.length; i++) {
    const id = CELL_IDS[i];
    const cellData = getCellDataFallback(defaultData, id);
    if (cellData) {
        topic8Str += `          "${id}": ${formatCell(cellData)}${i < CELL_IDS.length - 1 ? ',' : ''}\n`;
    }
}
topic8Str += `        },\n        gridDataByDialect: {\n`;

const groups = ["南勢阿美語", "秀姑巒阿美語", "海岸阿美語", "馬蘭阿美語", "恆春阿美語"];
for (let j = 0; j < groups.length; j++) {
    const dialect = groups[j];
    const data = topicData[dialect];
    topic8Str += `             "${dialect}": {\n`;
    let added = 0;
    for (let i = 0; i < CELL_IDS.length; i++) {
        const id = CELL_IDS[i];
        const cellData = getCellDataFallback(data, id);
        if (cellData) {
            topic8Str += `                    "${id}": {\n`;
            topic8Str += `                              "amis": "${cellData.amis}",\n`;
            topic8Str += `                              "chinese": "${cellData.chinese}",\n`;
            topic8Str += `                              "image": "${cellData.image}",\n`;
            topic8Str += `                              "sound": "${cellData.sound}",\n`;
            topic8Str += `                              "color": "${cellData.color}"\n`;
            topic8Str += `                    }${i < CELL_IDS.length - 1 ? ',' : ''}\n`;
            added++;
        }
    }
    // Remove last comma if there's no more
    if (topic8Str.endsWith(',\n')) {
        topic8Str = topic8Str.slice(0, -2) + '\n';
    }
    topic8Str += `             }${j < groups.length - 1 ? ',' : ''}\n`;
}
topic8Str += `        }\n    },\n`;

let content = fs.readFileSync('topics.ts', 'utf8');

const startIdx = content.indexOf('topic8: {');
let endIdx = content.indexOf('topic10: {');
if (startIdx !== -1 && endIdx !== -1) {
    const before = content.substring(0, startIdx);
    const after = content.substring(endIdx);
    fs.writeFileSync('topics.ts', before + topic8Str + after, 'utf8');
    console.log('Successfully replaced topic8 with mapped full data!');
} else {
    // If topic9 doesn't exist? Actually topic9 does exist because we updated it earlier.
    console.log('Could not find boundaries for topic8! StartIdx: ' + startIdx + ', EndIdx: ' + endIdx);
}
