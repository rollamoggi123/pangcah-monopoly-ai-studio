const fs = require('fs');

const topicsPath = './topics.ts';
let topicsContent = fs.readFileSync(topicsPath, 'utf8');

const topic8DataRaw = fs.readFileSync('topic8_out.txt', 'utf8');
const topic8Data = topic8DataRaw.substring(topic8DataRaw.indexOf('topic8:')).trim();

// find `topic8: {` and replace until end of file
const index = topicsContent.indexOf('topic8: {');
if (index !== -1) {
    let before = topicsContent.substring(0, index);
    topicsContent = before + topic8Data + '\n};\n';
}

fs.writeFileSync(topicsPath, topicsContent);
console.log('Replaced topic8 in topics.ts');
