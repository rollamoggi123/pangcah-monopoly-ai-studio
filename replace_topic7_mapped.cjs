const fs = require('fs');
const data = require('./topic7_data_mapped.json');

const dialects = ['南勢阿美語', '秀姑巒阿美語', '海岸阿美語', '馬蘭阿美語', '恆春阿美語'];

const PATH_ORDER = ['a','b','c','d','e','f','g','h','i','j','o','p','q','r','s','t','u','v','w','x'];

// Base dataset (default) use the first dialect's data
const baseGridData = data['南勢阿美語'];

function formatCellStr(cell) {
    return `{ "amis": "${cell.amis}", "chinese": "${cell.chinese}", "image": "${cell.image}", "sound": "${cell.sound}", "color": "${cell.color}" }`;
}

let topicStr = `    topic7: {\n        id: "topic7",\n        title: "全阿美語版-有聲版-植物物品篇",\n        sentences: COMMON_SENTENCES,\n        sentencesByDialect: COMMON_SENTENCES_BY_DIALECT,\n        dicePrompts: ["ira ko...", "ira ko...", "ira ko..."],\n        gridData: {\n`;

// Helper to get fallback cell if missing
function getCellDataFallback(data, id) {
    if (data && data[id]) return data[id];
    if (baseGridData && baseGridData[id]) return baseGridData[id];
    return { amis: '...', chinese: '...', image: '', sound: '', color: '#ffffff' };
}

for (let i = 0; i < PATH_ORDER.length; i++) {
    const id = PATH_ORDER[i];
    if (baseGridData && baseGridData[id]) {
        topicStr += `          "${id}": ${formatCellStr(baseGridData[id])}`;
        if (i < PATH_ORDER.length - 1 && baseGridData[PATH_ORDER[i+1]]) {
            topicStr += `,\n`;
        } else {
            topicStr += `\n`;
        }
    }
}
topicStr += `        },\n        gridDataByDialect: {\n`;

for (let d = 0; d < dialects.length; d++) {
    const dialect = dialects[d];
    topicStr += `          "${dialect}": {\n`;
    const dialectData = data[dialect];
    for (let i = 0; i < PATH_ORDER.length; i++) {
        const id = PATH_ORDER[i];
        if (baseGridData && baseGridData[id]) {
            const cell = getCellDataFallback(dialectData, id);
            topicStr += `            "${id}": ${formatCellStr(cell)}`;
            if (i < PATH_ORDER.length - 1 && baseGridData[PATH_ORDER[i+1]]) {
                topicStr += `,\n`;
            } else {
                topicStr += `\n`;
            }
        }
    }
    topicStr += `          }`;
    if (d < dialects.length - 1) {
        topicStr += `,\n`;
    } else {
        topicStr += `\n`;
    }
}
topicStr += `        }\n    },\n`;

let content = fs.readFileSync('topics.ts', 'utf8');

const startIdx = content.indexOf('topic7: {');
let endIdx = content.indexOf('topic8: {');
if (startIdx !== -1 && endIdx !== -1) {
    const before = content.substring(0, startIdx);
    const after = content.substring(endIdx);
    content = before + topicStr + after;
    fs.writeFileSync('topics.ts', content);
    console.log("Successfully replaced topic7 with mapped full data!");
} else {
    console.log("Could not find topic7 bounds.");
}
