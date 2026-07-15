const fs = require('fs');

const topicData = JSON.parse(fs.readFileSync('topic9_data.json', 'utf8'));

// Format a single cell data
function formatCell(cell) {
    return `{
                    "amis": "${cell.amis}",
                    "chinese": "${cell.chinese}",
                    "image": "${cell.image}",
                    "sound": "${cell.sound}",
                    "color": "${cell.color}"
          }`;
}

const CELL_IDS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x'];
const dialects = ["秀姑巒阿美語", "南勢阿美語", "海岸阿美語", "馬蘭阿美語", "恆春阿美語"];

let topic6Str = `    topic6: {
        id: "topic6",
        title: "5語版-阿美語_動物篇",
        sentences: COMMON_SENTENCES,
        sentencesByDialect: COMMON_SENTENCES_BY_DIALECT,
        dicePrompts: ["ira ko...", "ira ko...", "ira ko..."],
        gridData: {
`;

// Helper to get fallback cell if missing
function getCellDataFallback(data, id) {
    if (data[id]) return data[id];
    if (id === 'v') return data['a'];
    if (id === 'w') return data['b'];
    if (id === 'x') return data['c'];
    return null;
}

// use default dialect (秀姑巒阿美語) for base gridData
const defaultData = topicData["秀姑巒阿美語"];
for (let i = 0; i < CELL_IDS.length; i++) {
    const id = CELL_IDS[i];
    const cellData = getCellDataFallback(defaultData, id);
    if (cellData) {
        topic6Str += `          "${id}": ${formatCell(cellData)}${i < CELL_IDS.length - 1 ? ',' : ''}\n`;
    }
}
topic6Str += `        },\n        gridDataByDialect: {\n`;

for (let d = 0; d < dialects.length; d++) {
    const dialect = dialects[d];
    const data = topicData[dialect];
    if (!data) continue;
    topic6Str += `             "${dialect}": {\n`;
    for (let i = 0; i < CELL_IDS.length; i++) {
        const id = CELL_IDS[i];
        const cellData = getCellDataFallback(data, id);
        if (cellData) {
            topic6Str += `                    "${id}": {\n`;
            topic6Str += `                              "amis": "${cellData.amis}",\n`;
            topic6Str += `                              "chinese": "${cellData.chinese}",\n`;
            topic6Str += `                              "image": "${cellData.image}",\n`;
            topic6Str += `                              "sound": "${cellData.sound}",\n`;
            topic6Str += `                              "color": "${cellData.color}"\n`;
            topic6Str += `                    }${i < CELL_IDS.length - 1 ? ',' : ''}\n`;
        }
    }
    topic6Str += `              }${d < dialects.length - 1 ? ',' : ''}\n`;
}

topic6Str += `        }\n    },\n`;

let content = fs.readFileSync('topics.ts', 'utf8');
const startIdx = content.indexOf('topic6: {');
let endIdx = content.indexOf('topic7: {');
if (startIdx !== -1 && endIdx !== -1) {
    const before = content.substring(0, startIdx);
    const after = content.substring(endIdx);
    fs.writeFileSync('topics.ts', before + topic6Str + after, 'utf8');
    console.log('Successfully replaced topic6');
} else {
    console.log('Could not find topic6 or topic7 in topics.ts');
}
