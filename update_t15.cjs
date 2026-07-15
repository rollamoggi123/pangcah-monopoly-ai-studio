const fs = require('fs');

let s = fs.readFileSync('topics.ts', 'utf8');
const topic14Data = JSON.parse(fs.readFileSync('topic14_data.json', 'utf8'));
const sentencesByDialect = topic14Data.sentencesByDialect;

const PATH_ORDER = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x'];

const gridDataByDialect = {};
for (const [dialect, sentences] of Object.entries(sentencesByDialect)) {
    gridDataByDialect[dialect] = {};
    for (let i = 0; i < PATH_ORDER.length; i++) {
        const id = PATH_ORDER[i];
        if (i < sentences.length) {
            gridDataByDialect[dialect][id] = {
                label: '...',
                amis: sentences[i].amis,
                chinese: sentences[i].chinese,
                sound: sentences[i].sound || '',
                image: sentences[i].image || ''
            };
        } else {
             gridDataByDialect[dialect][id] = { label: '...', amis: '', chinese: '' };
        }
    }
}

// default gridData will be the first dialect
const gridData = gridDataByDialect['秀姑巒阿美語'];
gridDataByDialect['預設'] = gridData;
sentencesByDialect['預設'] = sentencesByDialect['秀姑巒阿美語'];

const newTopic15String = `
  "topic15": {
    "id": "topic15",
    "title": "是非問句 4_1~4_16, 5_1~5_16",
    "gridData": ${JSON.stringify(gridData)},
    "gridDataByDialect": ${JSON.stringify(gridDataByDialect)},
    "sentences": ${JSON.stringify(sentencesByDialect['秀姑巒阿美語'])},
    "sentencesByDialect": ${JSON.stringify(sentencesByDialect)},
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

// Replace the old topic15 block
const startIdx = s.indexOf('"topic15": {');
const endIdx = s.lastIndexOf('}');
const fixedString = s.substring(0, startIdx) + newTopic15String + '\n' + s.substring(endIdx);

fs.writeFileSync('topics.ts', fixedString);
console.log("Updated topic15!");
