const fs = require('fs');

let topicsText = fs.readFileSync('topics.ts', 'utf8');

const topic14Data = JSON.parse(fs.readFileSync('topic14_data.json', 'utf8'));

// Prepare gridData
const emptyGrid = {};
const PATH_ORDER = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x'];

PATH_ORDER.forEach(id => {
  emptyGrid[id] = { label: '...', amis: '', chinese: '' };
});

const topic14String = `
  "topic14": {
    "id": "topic14",
    "title": "是非問句 (全)",
    "gridData": ${JSON.stringify(emptyGrid)},
    "sentences": [],
    "sentencesByDialect": ${JSON.stringify(topic14Data.sentencesByDialect)},
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

if (topicsText.includes('"topic14"')) {
    console.log("topic14 already exists");
} else {
    const lastBraceIndex = topicsText.lastIndexOf('}');
    const newTopicsText = topicsText.substring(0, lastBraceIndex) + ',\n' + topic14String + '\n' + topicsText.substring(lastBraceIndex);
    fs.writeFileSync('topics.ts', newTopicsText);
    console.log("Appended topic14 to topics.ts");
}
