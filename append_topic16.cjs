const fs = require('fs');

let s = fs.readFileSync('topics.ts', 'utf8');
const topic16Data = JSON.parse(fs.readFileSync('topic16_data.json', 'utf8'));
const sentencesByDialect = topic16Data.sentencesByDialect;

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
const gridData = gridDataByDialect['預設'];

const newTopic16String = `
  "topic16": {
    "id": "topic16",
    "title": "全阿美版-祈使句 4_1~4_11",
    "gridData": ${JSON.stringify(gridData)},
    "gridDataByDialect": ${JSON.stringify(gridDataByDialect)},
    "sentences": ${JSON.stringify(sentencesByDialect['預設'])},
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

// Replace the old block or append
// Since topics.ts ends with `};`, insert before it
const endIdx = s.lastIndexOf('};');
// need to add a comma before if the previous character is not a comma
const prevBracket = s.substring(endIdx - 10, endIdx).trim();
const needsComma = !prevBracket.endsWith(',');
const fixedString = s.substring(0, endIdx) + (needsComma ? ',\n' : '') + newTopic16String + '\n};\n';

fs.writeFileSync('topics.ts', fixedString);
console.log("Appended topic16!");
