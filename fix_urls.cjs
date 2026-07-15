const fs = require('fs');

let content = fs.readFileSync('topics.ts', 'utf8');

// Replace standard web.klokah.tw paths:
// e.g. https://web.klokah.tw/vocabulary/audio/word/1/08_09.wav
// with https://klokah.tw/extension/sp_junior/sound/1/1word/8_9.mp3

content = content.replace(/https:\/\/web\.klokah\.tw\/vocabulary\/audio\/word\/(\d+)\/(\d+)_(\d+)\.wav/g, (match, dialect, lesson, word) => {
    // remove leading zeros from lesson and word
    const l = parseInt(lesson, 10);
    const w = parseInt(word, 10);
    return `https://klokah.tw/extension/sp_junior/sound/${dialect}/1word/${l}_${w}.mp3`;
});

fs.writeFileSync('topics.ts', content, 'utf8');
console.log('done replacing in topics.ts');
