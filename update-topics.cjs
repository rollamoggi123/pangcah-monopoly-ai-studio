const fs = require('fs');

let content = fs.readFileSync('topics.ts', 'utf8');

const newSentencesCode = `const COMMON_SENTENCES = [
    { amis: "O maan konini?", chinese: "這是什麼?" },
    { amis: "Mafana' kiso to nini?", chinese: "你知道這個嗎?" },
    { amis: "Samanen ko ngiha' nonini?", chinese: "這個怎麼叫?" },
    { amis: "Papinaay ko paro no loma' namo?", chinese: "你們家有幾個人？", sound: "https://klokah.tw/extension/sp_junior/sound/4/6match/1_1_A.mp3" },
    { amis: "Aenemay ko paro no loma' niyam.", chinese: "我們家有六個人。" },
    { amis: "O singsi ko mira haw?", chinese: "他是老師嗎？", sound: "https://klokah.tw/extension/sp_junior/sound/4/6match/1_1_B.mp3" },
    { amis: "Cowa, o ising ko mira.", chinese: "不是，他是醫生。" },
    { amis: "Mamaanay kiso?", chinese: "你怎麼啦？", sound: "https://klokah.tw/extension/sp_junior/sound/4/6match/1_1_C.mp3" },
    { amis: "Adadaay ko fongoh ako.", chinese: "我的頭很痛。" },
    { amis: "Ma'oraday haw?", chinese: "在下雨嗎？", sound: "https://klokah.tw/extension/sp_junior/sound/4/6match/1_1_D.mp3" },
    { amis: "Hay, ma'oraday.", chinese: "是/對，正在下雨。" },
    { amis: "Pinaay ko toki hatini?", chinese: "現在是幾點鐘？", sound: "https://klokah.tw/extension/sp_junior/sound/4/6match/1_1_E.mp3" },
    { amis: "Sepatay ko toki hatini.", chinese: "現在是四點鐘。" }
];

const COMMON_SENTENCES_BY_DIALECT = {
    "馬蘭阿美語": COMMON_SENTENCES,
    "預設": COMMON_SENTENCES,
    "南勢阿美語": COMMON_SENTENCES,
    "秀姑巒阿美語": [
    { amis: "O maan konini?", chinese: "這是什麼?" },
    { amis: "Mafana' kiso to nini?", chinese: "你知道這個嗎?" },
    { amis: "Samanen ko ngiha' nonini?", chinese: "這個怎麼叫?" },
    { amis: "Papina ko paro no loma' namo?", chinese: "你們家有幾個人？", sound: "https://klokah.tw/extension/sp_junior/sound/2/6match/1_1_A.mp3" },
    { amis: "Aenem ko paro no loma' niyam.", chinese: "我們家有六個人。" },
    { amis: "O singsi ciira haw?", chinese: "他是老師嗎？", sound: "https://klokah.tw/extension/sp_junior/sound/2/6match/1_1_B.mp3" },
    { amis: "Caay, o ising ciira.", chinese: "不是，他是醫生。" },
    { amis: "Mamaan kiso?", chinese: "你怎麼啦？", sound: "https://klokah.tw/extension/sp_junior/sound/2/6match/1_1_C.mp3" },
    { amis: "Adada ko tangal no mako.", chinese: "我的頭很痛。" },
    { amis: "Ma'oraday haw?", chinese: "在下雨嗎？", sound: "https://klokah.tw/extension/sp_junior/sound/2/6match/1_1_D.mp3" },
    { amis: "Hay, ma'oraday i matini.", chinese: "是/對，正在下雨。" },
    { amis: "Pinaay to ko widi i matini?", chinese: "現在是幾點鐘？", sound: "https://klokah.tw/extension/sp_junior/sound/2/6match/1_1_E.mp3" },
    { amis: "Sepatay to ko widi i matini.", chinese: "現在是四點鐘。" }
    ],
    "海岸阿美語": [
    { amis: "O maan konini?", chinese: "這是什麼?" },
    { amis: "Mafana' kiso to nini?", chinese: "你知道這個嗎?" },
    { amis: "Samanen ko ngiha' nonini?", chinese: "這個怎麼叫?" },
    { amis: "Papina ko tamdaw no loma' namo?", chinese: "你們家有幾個人？", sound: "https://klokah.tw/extension/sp_junior/sound/3/6match/1_1_A.mp3" },
    { amis: "A'enem ko tamdaw no loma' niyam.", chinese: "我們家有六個人。" },
    { amis: "O singsi cingra?", chinese: "他是老師嗎？", sound: "https://klokah.tw/extension/sp_junior/sound/3/6match/1_1_B.mp3" },
    { amis: "Caayay, o ising cingra.", chinese: "不是，他是醫生。" },
    { amis: "Mamaan kiso?", chinese: "你怎麼啦？", sound: "https://klokah.tw/extension/sp_junior/sound/3/6match/1_1_C.mp3" },
    { amis: "Talaktak ko fongoh ako.", chinese: "我的頭很痛。" },
    { amis: "Ma'orad?", chinese: "在下雨嗎？", sound: "https://klokah.tw/extension/sp_junior/sound/3/6match/1_1_D.mp3" },
    { amis: "Hai, ma'orad i matini.", chinese: "是/對，正在下雨。" },
    { amis: "pina to ko toki anini?", chinese: "現在是幾點鐘？", sound: "https://klokah.tw/extension/sp_junior/sound/3/6match/1_1_E.mp3" },
    { amis: "Sepat to ko toki anini.", chinese: "現在是四點鐘。" }
    ],
    "恆春阿美語": [
    { amis: "O maan konini?", chinese: "這是什麼?" },
    { amis: "Mafana' kiso to nini?", chinese: "你知道這個嗎?" },
    { amis: "Samanen ko ngiha' nonini?", chinese: "這個怎麼叫?" },
    { amis: "Papinaay ko paro no loma' namo?", chinese: "你們家有幾個人？", sound: "https://klokah.tw/extension/sp_junior/sound/5/6match/1_1_A.mp3" },
    { amis: "A^enemay ko paro no loma' niyam.", chinese: "我們家有六個人。" },
    { amis: "O singsi cingra haw?", chinese: "他是老師嗎？", sound: "https://klokah.tw/extension/sp_junior/sound/5/6match/1_1_B.mp3" },
    { amis: "Cuwa, o ising cingra.", chinese: "不是，他是醫生。" },
    { amis: "Mamaanay kiso?", chinese: "你怎麼啦？", sound: "https://klokah.tw/extension/sp_junior/sound/5/6match/1_1_C.mp3" },
    { amis: "Adadaay ko fongoh ako.", chinese: "我的頭很痛。" },
    { amis: "Ma'oraday haw?", chinese: "在下雨嗎？", sound: "https://klokah.tw/extension/sp_junior/sound/5/6match/1_1_D.mp3" },
    { amis: "Hay, ma'oraday.", chinese: "是/對，正在下雨。" },
    { amis: "Pinaay ko tuki ano hatini?", chinese: "現在是幾點鐘？", sound: "https://klokah.tw/extension/sp_junior/sound/5/6match/1_1_E.mp3" },
    { amis: "Sepatay ko tuki ano hatini.", chinese: "現在是四點鐘。" }
    ]
};

export const TOPIC_TEMPLATES`;

content = content.replace("export const TOPIC_TEMPLATES", newSentencesCode);

content = content.replace(/sentences:\s*\[[\s\S]*?\],\s*dicePrompts:/g, `sentences: COMMON_SENTENCES,\n        sentencesByDialect: COMMON_SENTENCES_BY_DIALECT,\n        dicePrompts:`);

fs.writeFileSync('topics.ts', content);
console.log("Replaced sentences in topics.ts");
