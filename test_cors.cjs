const https = require('https');
https.get("https://web.klokah.tw/vocabulary/audio/word/1/10-02.wav", (res) => {
    console.log(res.headers);
});
