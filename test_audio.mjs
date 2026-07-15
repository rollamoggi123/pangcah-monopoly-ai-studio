const test = async () => {
    let urls = [
        "https://web.klokah.tw/vocabulary/audio/word/1/10-02.wav",
        "https://klokah.tw/extension/sp_junior/sound/1/1word/10_2.mp3",
        "https://klokah.tw/extension/sp_junior/sound/2/1word/11_1.mp3"
    ];
    for (let u of urls) {
        try {
            const r = await fetch(u, { method: 'HEAD' });
            console.log(u, r.status);
        } catch (e) {
            console.log(u, e.message);
        }
    }
}
test();
