import { TopicTemplate } from './types';

// ==========================================
// 📖 課程內容設定區 (老師請在此編輯題目)
// ==========================================
const COMMON_SENTENCES = [
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

export const TOPIC_TEMPLATES: Record<string, TopicTemplate> = {
    topic1: {
        id: 'topic1',
        title: "生活會話篇 第11課 Papinaay ko salikaka iso? 你有幾個兄弟姊妹？",
        sentences: COMMON_SENTENCES,
        sentencesByDialect: COMMON_SENTENCES_BY_DIALECT,
        dicePrompts: ["ira ko...", "ira ko..."],
        gridData: {
            a: { amis: "cecay", chinese: "1", image: 'https://res.cloudinary.com/dm1ksvptk/image/upload/v1766833615/1_cecay_pwaqo9.jpg' },
            b: { amis: "tosa", chinese: "2", image: 'https://res.cloudinary.com/dm1ksvptk/image/upload/v1766835102/2_d4uspg.png' },
            c: { amis: "tolo", chinese: "3", image: 'https://res.cloudinary.com/dm1ksvptk/image/upload/v1766835199/3_v9nmob.png' },
            d: { amis: "sepat", chinese: "4", image: 'https://res.cloudinary.com/dm1ksvptk/image/upload/v1766835214/4_rcu9ld.png' },
            e: { amis: "lima", chinese: "5", image: 'https://res.cloudinary.com/dm1ksvptk/image/upload/v1766835308/5_slpohd.png' },
            f: { amis: "enem", chinese: "6", image: 'https://res.cloudinary.com/dm1ksvptk/image/upload/v1766835373/6_u3xlq9.png' },
            g: { amis: "pito", chinese: "7", image: 'https://res.cloudinary.com/dm1ksvptk/image/upload/v1766835444/7_jgkd0a.png' },
            h: { amis: "falo", chinese: "8", image: 'https://res.cloudinary.com/dm1ksvptk/image/upload/v1766836039/8_ksomjx.png' },
            i: { amis: "siwa", chinese: "9", image: 'https://res.cloudinary.com/dm1ksvptk/image/upload/v1766836115/9_ptywp8.png' },
            j: { amis: "moetep", chinese: "10", image: 'https://res.cloudinary.com/dm1ksvptk/image/upload/v1766836190/10_ewv3y8.png' },
            o: { amis: "tosa polo'", chinese: "20" },
            p: { amis: "tolo polo'", chinese: "30" },
            q: { amis: "sepat polo'", chinese: "40" },
            r: { amis: "lima polo'", chinese: "50" },
            s: { amis: "enem polo'", chinese: "60" },
            t: { amis: "pito polo'", chinese: "70" },
            u: { amis: "falo polo'", chinese: "80" },
            v: { amis: "siwa polo'", chinese: "90" },
            w: { amis: "somo'ot", chinese: "100" },
            x: { amis: "cowa kafana' kako", chinese: "我不知道" },
        }
    },
    topic2: {
        id: 'topic2',
        title: "第5階-9課 riyal 海",
        sentences: COMMON_SENTENCES,
        sentencesByDialect: COMMON_SENTENCES_BY_DIALECT,
        dicePrompts: ["ira ko...", "ira ko...", "ira ko...", "ira ko..."],
        gridData: {
            a: { amis: "foting", chinese: "魚" },
            b: { amis: "'afar", chinese: "蝦子" },
            c: { amis: "kalang", chinese: "螃蟹" },
            d: { amis: "cekiw", chinese: "貝類" },
            e: { amis: "sampilaw", chinese: "珊瑚" },
            f: { amis: "'adipit", chinese: "海藻" },
            g: { amis: "solita", chinese: "章魚" },
            h: { amis: "riyal", chinese: "海" },
            i: { amis: "tafokod", chinese: "撒網" },
            j: { amis: "takora'", chinese: "青蛙" },
            o: { amis: "'angdisay", chinese: "鹹的" },
            p: { amis: "no", chinese: "的" },
            q: { amis: "ko", chinese: "主格標記" },
            r: { amis: "to", chinese: "受格標記" },
            s: { amis: "samanay", chinese: "如何" },
            t: { amis: "nananonem", chinese: "喝" },
            u: { amis: "fanaw", chinese: "池塘" },
            v: { amis: "'alo", chinese: "河流" },
            w: { amis: "anini", chinese: "今天" },
            x: { amis: "anocila", chinese: "明天" },
        }
    },
    topic3: {
        id: 'topic3',
        title: "情境族語 第 10課 商品買賣",
        sentences: COMMON_SENTENCES,
        sentencesByDialect: COMMON_SENTENCES_BY_DIALECT,
        dicePrompts: [
            "Mi'aca to ...", 
            "數字1~10斤?", 
            "ira ko...",
            "ira ko...",
            "ira ko..."
        ],
        gridData: {
            a: { amis: "ko^epo", chinese: "杯子" },
            b: { amis: "'icep", chinese: "檳榔" },
            c: { amis: "felac", chinese: "米" },
            d: { amis: "tingting", chinese: "斤" },
            e: { amis: "kenaw", chinese: "蔥" },
            f: { amis: "fita'ol", chinese: "雞蛋" },
            g: { amis: "konga", chinese: "地瓜" },
            h: { amis: "dateng", chinese: "菜" },
            i: { amis: "kasing", chinese: "碗" },
            j: { amis: "tali", chinese: "芋頭" },
            o: { amis: "talacay", chinese: "鳯梨" },
            p: { amis: "faniw", chinese: "香菇" },
            q: { amis: "siraw", chinese: "醃肉" },
            r: { amis: "'aca", chinese: "買" },
            s: { amis: "pacakay", chinese: "賣" },
            t: { amis: "'a'acaen", chinese: "將要買" },
            u: { amis: "cakay", chinese: "將要購買" },
            v: { amis: "mipacakayay", chinese: "賣家" },
            w: { amis: "kami", chinese: "我們(排除式)" },
            x: { amis: "caay", chinese: "不" },
        }
    },
    topic4: {
        id: 'topic4',
        title: "族語期末檢測",
        sentences: COMMON_SENTENCES,
        sentencesByDialect: COMMON_SENTENCES_BY_DIALECT,
        dicePrompts: [
            "ira ko...", 
            "ira ko...",
            "ira ko..."
        ],
        gridData: {
            a: { amis: "mata", chinese: "眼睛" },
            b: { amis: "oo’", chinese: "腳" },
            c: { amis: "ina", chinese: "媽媽" },
            d: { amis: "wama", chinese: "父親" },
            e: { amis: "titi", chinese: "肉" },
            f: { amis: "foting", chinese: "魚" },
            g: { amis: "fai", chinese: "阿姨" },
            h: { amis: "faki", chinese: "叔叔" },
            i: { amis: "ekong", chinese: "貓頭鷹" },
            j: { amis: "posi", chinese: "猫" },
            o: { amis: "waco", chinese: "狗" },
            p: { amis: "karang", chinese: "螃蟹" },
            q: { amis: "kaka", chinese: "哥哥/姐姐" },
            r: { amis: "solita", chinese: "章魚" },
            s: { amis: "lotong", chinese: "猴子" },
            t: { amis: "takora'", chinese: "青蛙" },
            u: { amis: "kacingco", chinese: "老鼠" },
            v: { amis: "tamina", chinese: "船" },
            w: { amis: "safa", chinese: "弟弟/妹妹" },
            x: { amis: "fofo", chinese: "爺爺/奶奶" },
        }
    },
    topic5: {
        id: 'topic5',
        title: "阿美語 器官篇 (4美語有聲版)",
        sentences: COMMON_SENTENCES,
        sentencesByDialect: COMMON_SENTENCES_BY_DIALECT,
        dicePrompts: [
            "ira ko...", 
            "ira ko...",
            "ira ko..."
        ],
        gridData: {
            a: { amis: "tangila", chinese: "耳朵", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769507351/%E8%80%B3%E6%9C%B5_2026-01-27_174619_ipp97p.png", sound: "https://klokah.tw/extension/sp_junior/sound/1/1word/6_1.mp3" },
            b: { amis: "cepi’", chinese: "大腿", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769543531/%E5%A4%A7%E8%85%BF_gofzbe.png", sound: "https://klokah.tw/extension/sp_junior/sound/1/1word/6_2.mp3" },
            c: { amis: "mata", chinese: "眼睛", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769543536/%E7%9C%BC%E7%9D%9B3_jwmp0g.png", sound: "https://klokah.tw/extension/sp_junior/sound/1/1word/6_3.mp3" },
            d: { amis: "pising", chinese: "臉", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769553002/%E8%87%89_wq9cbq.png", sound: "https://klokah.tw/extension/sp_junior/sound/1/1word/6_4.mp3" },
            e: { amis: "nguyus", chinese: "嘴巴", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769544408/%E5%98%B4%E5%B7%B4_dr1fnn.png", sound: "https://klokah.tw/extension/sp_junior/sound/1/1word/6_5.mp3" },
            f: { amis: "tangal", chinese: "頭", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769553183/%E9%A0%AD_vnafrp.png", sound: "https://klokah.tw/extension/sp_junior/sound/1/1word/6_6.mp3" },
            g: { amis: "kanuus/kanus", chinese: "指甲", image: "https://res.cloudinary.com/deljuj25x/image/upload/v1769581531/Gemini_Generated_Image_9wmzub9wmzub9wmz_ndwlh0.png", sound: "https://klokah.tw/extension/sp_junior/sound/1/1word/6_7.mp3" },
            h: { amis: "kamay", chinese: "手", image: "https://res.cloudinary.com/deljuj25x/image/upload/v1769582421/Gemini_Generated_Image_xodtecxodtecxodt_gw1ghh.png", sound: "https://klokah.tw/extension/sp_junior/sound/1/1word/6_8.mp3" },
            i: { amis: "tireng", chinese: "身體", image: "https://res.cloudinary.com/deljuj25x/image/upload/v1769582120/Gemini_Generated_Image_ct7mmpct7mmpct7m_k4tq6w.png", sound: "https://klokah.tw/extension/sp_junior/sound/1/1word/6_9.mp3" },
            j: { amis: "ngangusuan", chinese: "鼻子", image: "https://res.cloudinary.com/deljuj25x/image/upload/v1769582147/Gemini_Generated_Image_knqsywknqsywknqs_ged0hp.png", sound: "https://klokah.tw/extension/sp_junior/sound/1/1word/6_10.mp3" },
            o: { amis: "kuku’", chinese: "腳", image: "https://res.cloudinary.com/deljuj25x/image/upload/v1769582131/Gemini_Generated_Image_cw7x6ncw7x6ncw7x_duzvny.png", sound: "https://klokah.tw/extension/sp_junior/sound/1/1word/6_11.mp3" },
            p: { amis: "wadis", chinese: "牙齒", image: "https://res.cloudinary.com/deljuj25x/image/upload/v1769582155/Gemini_Generated_Image_via007via007via0_e3xbbm.png", sound: "https://klokah.tw/extension/sp_junior/sound/1/1word/6_12.mp3" },
            q: { amis: "vukes", chinese: "頭髮", image: "https://res.cloudinary.com/deljuj25x/image/upload/v1769582203/Gemini_Generated_Image_59ffdy59ffdy59ff_jjtjwa.png", sound: "https://klokah.tw/extension/sp_junior/sound/1/1word/6_13.mp3" },
            r: { amis: "remes", chinese: "血", image: "https://res.cloudinary.com/deljuj25x/image/upload/v1769582508/Gemini_Generated_Image_btged8btged8btge_fafcqs.png", sound: "https://klokah.tw/extension/sp_junior/sound/1/1word/6_14.mp3" },
            s: { amis: "titi", chinese: "肉", image: "https://res.cloudinary.com/djidzt4nv/image/upload/v1769582554/Gemini_Generated_Image_h4si9zh4si9zh4si_nahhu5.png", sound: "https://klokah.tw/extension/sp_junior/sound/1/1word/6_15.mp3" },
            t: { amis: "laway", chinese: "額頭", image: "https://res.cloudinary.com/djidzt4nv/image/upload/v1769582707/Gemini_Generated_Image_c0040wc0040wc004_urbszq.png", sound: "https://klokah.tw/extension/sp_junior/sound/1/1word/6_16.mp3" },
            u: { amis: "tiyad", chinese: "肚子", image: "https://res.cloudinary.com/deljuj25x/image/upload/v1769582891/Gemini_Generated_Image_75185t75185t7518_ly9lzf.png", sound: "https://klokah.tw/extension/sp_junior/sound/1/1word/6_17.mp3" },
            v: { amis: "cucu", chinese: "乳房", image: "https://res.cloudinary.com/djidzt4nv/image/upload/v1769583569/Gemini_Generated_Image_lnd5vclnd5vclnd5_ftfqnm.png", sound: "https://klokah.tw/extension/sp_junior/sound/1/1word/6_18.mp3" },
            w: { amis: "heci nu vatac", chinese: "小腿肚", image: "https://res.cloudinary.com/djidzt4nv/image/upload/v1769582941/Gemini_Generated_Image_kiq4ktkiq4ktkiq4_pcthql.png", sound: "https://klokah.tw/extension/sp_junior/sound/1/1word/6_19.mp3" },
            x: { amis: "avala", chinese: "肩膀", image: "https://res.cloudinary.com/djidzt4nv/image/upload/v1769582872/Gemini_Generated_Image_4p04mr4p04mr4p04_jqj2jw.png", sound: "https://klokah.tw/extension/sp_junior/sound/1/1word/6_20.mp3" },
        },
        gridDataByDialect: {
            "南勢阿美語": {
                a: { amis: "tangila", chinese: "耳朵", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769507351/%E8%80%B3%E6%9C%B5_2026-01-27_174619_ipp97p.png", sound: "https://klokah.tw/extension/sp_junior/sound/1/1word/6_1.mp3" },
                b: { amis: "cepi’", chinese: "大腿", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769543531/%E5%A4%A7%E8%85%BF_gofzbe.png", sound: "https://klokah.tw/extension/sp_junior/sound/1/1word/6_2.mp3" },
                c: { amis: "mata", chinese: "眼睛", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769543536/%E7%9C%BC%E7%9D%9B3_jwmp0g.png", sound: "https://klokah.tw/extension/sp_junior/sound/1/1word/6_3.mp3" },
                d: { amis: "pising", chinese: "臉", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769553002/%E8%87%89_wq9cbq.png", sound: "https://klokah.tw/extension/sp_junior/sound/1/1word/6_4.mp3" },
                e: { amis: "nguyus", chinese: "嘴巴", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769544408/%E5%98%B4%E5%B7%B4_dr1fnn.png", sound: "https://klokah.tw/extension/sp_junior/sound/1/1word/6_5.mp3" },
                f: { amis: "tangal", chinese: "頭", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769553183/%E9%A0%AD_vnafrp.png", sound: "https://klokah.tw/extension/sp_junior/sound/1/1word/6_6.mp3" },
                g: { amis: "kanuus/kanus", chinese: "指甲", image: "https://res.cloudinary.com/deljuj25x/image/upload/v1769581531/Gemini_Generated_Image_9wmzub9wmzub9wmz_ndwlh0.png", sound: "https://klokah.tw/extension/sp_junior/sound/1/1word/6_7.mp3" },
                h: { amis: "kamay", chinese: "手", image: "https://res.cloudinary.com/deljuj25x/image/upload/v1769582421/Gemini_Generated_Image_xodtecxodtecxodt_gw1ghh.png", sound: "https://klokah.tw/extension/sp_junior/sound/1/1word/6_8.mp3" },
                i: { amis: "tireng", chinese: "身體", image: "https://res.cloudinary.com/deljuj25x/image/upload/v1769582120/Gemini_Generated_Image_ct7mmpct7mmpct7m_k4tq6w.png", sound: "https://klokah.tw/extension/sp_junior/sound/1/1word/6_9.mp3" },
                j: { amis: "ngangusuan", chinese: "鼻子", image: "https://res.cloudinary.com/deljuj25x/image/upload/v1769582147/Gemini_Generated_Image_knqsywknqsywknqs_ged0hp.png", sound: "https://klokah.tw/extension/sp_junior/sound/1/1word/6_10.mp3" },
                o: { amis: "kuku’", chinese: "腳", image: "https://res.cloudinary.com/deljuj25x/image/upload/v1769582131/Gemini_Generated_Image_cw7x6ncw7x6ncw7x_duzvny.png", sound: "https://klokah.tw/extension/sp_junior/sound/1/1word/6_11.mp3" },
                p: { amis: "wadis", chinese: "牙齒", image: "https://res.cloudinary.com/deljuj25x/image/upload/v1769582155/Gemini_Generated_Image_via007via007via0_e3xbbm.png", sound: "https://klokah.tw/extension/sp_junior/sound/1/1word/6_12.mp3" },
                q: { amis: "vukes", chinese: "頭髮", image: "https://res.cloudinary.com/deljuj25x/image/upload/v1769582203/Gemini_Generated_Image_59ffdy59ffdy59ff_jjtjwa.png", sound: "https://klokah.tw/extension/sp_junior/sound/1/1word/6_13.mp3" },
                r: { amis: "remes", chinese: "血", image: "https://res.cloudinary.com/deljuj25x/image/upload/v1769582508/Gemini_Generated_Image_btged8btged8btge_fafcqs.png", sound: "https://klokah.tw/extension/sp_junior/sound/1/1word/6_14.mp3" },
                s: { amis: "titi", chinese: "肉", image: "https://res.cloudinary.com/djidzt4nv/image/upload/v1769582554/Gemini_Generated_Image_h4si9zh4si9zh4si_nahhu5.png", sound: "https://klokah.tw/extension/sp_junior/sound/1/1word/6_15.mp3" },
                t: { amis: "laway", chinese: "額頭", image: "https://res.cloudinary.com/djidzt4nv/image/upload/v1769582707/Gemini_Generated_Image_c0040wc0040wc004_urbszq.png", sound: "https://klokah.tw/extension/sp_junior/sound/1/1word/6_16.mp3" },
                u: { amis: "tiyad", chinese: "肚子", image: "https://res.cloudinary.com/deljuj25x/image/upload/v1769582891/Gemini_Generated_Image_75185t75185t7518_ly9lzf.png", sound: "https://klokah.tw/extension/sp_junior/sound/1/1word/6_17.mp3" },
                v: { amis: "cucu", chinese: "乳房", image: "https://res.cloudinary.com/djidzt4nv/image/upload/v1769583569/Gemini_Generated_Image_lnd5vclnd5vclnd5_ftfqnm.png", sound: "https://klokah.tw/extension/sp_junior/sound/1/1word/6_18.mp3" },
                w: { amis: "heci nu vatac", chinese: "小腿肚", image: "https://res.cloudinary.com/djidzt4nv/image/upload/v1769582941/Gemini_Generated_Image_kiq4ktkiq4ktkiq4_pcthql.png", sound: "https://klokah.tw/extension/sp_junior/sound/1/1word/6_19.mp3" },
                x: { amis: "avala", chinese: "肩膀", image: "https://res.cloudinary.com/djidzt4nv/image/upload/v1769582872/Gemini_Generated_Image_4p04mr4p04mr4p04_jqj2jw.png", sound: "https://klokah.tw/extension/sp_junior/sound/1/1word/6_20.mp3" },
            },
            "秀姑巒阿美語": {
                a: { amis: "tangila^", chinese: "耳朵", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769507351/%E8%80%B3%E6%9C%B5_2026-01-27_174619_ipp97p.png", sound: "https://klokah.tw/extension/sp_junior/sound/2/1word/6_1.mp3" },
                b: { amis: "cepi’", chinese: "大腿", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769543531/%E5%A4%A7%E8%85%BF_gofzbe.png", sound: "https://klokah.tw/extension/sp_junior/sound/2/1word/6_2.mp3" },
                c: { amis: "mata", chinese: "眼睛", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769543536/%E7%9C%BC%E7%9D%9B3_jwmp0g.png", sound: "https://klokah.tw/extension/sp_junior/sound/2/1word/6_3.mp3" },
                d: { amis: "pising", chinese: "臉", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769553002/%E8%87%89_wq9cbq.png", sound: "https://klokah.tw/extension/sp_junior/sound/2/1word/6_4.mp3" },
                e: { amis: "ngapa^/ ngoyos", chinese: "嘴巴", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769544408/%E5%98%B4%E5%B7%B4_dr1fnn.png", sound: "https://klokah.tw/extension/sp_junior/sound/2/1word/6_5.mp3" },
                f: { amis: "tangal", chinese: "頭", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769553183/%E9%A0%AD_vnafrp.png", sound: "https://klokah.tw/extension/sp_junior/sound/2/1word/6_6.mp3" },
                g: { amis: "kanoos", chinese: "指甲", image: "https://res.cloudinary.com/deljuj25x/image/upload/v1769581531/Gemini_Generated_Image_9wmzub9wmzub9wmz_ndwlh0.png", sound: "https://klokah.tw/extension/sp_junior/sound/2/1word/6_7.mp3" },
                h: { amis: "kamay", chinese: "手", image: "https://res.cloudinary.com/deljuj25x/image/upload/v1769582421/Gemini_Generated_Image_xodtecxodtecxodt_gw1ghh.png", sound: "https://klokah.tw/extension/sp_junior/sound/2/1word/6_8.mp3" },
                i: { amis: "tireng", chinese: "身體", image: "https://res.cloudinary.com/deljuj25x/image/upload/v1769582120/Gemini_Generated_Image_ct7mmpct7mmpct7m_k4tq6w.png", sound: "https://klokah.tw/extension/sp_junior/sound/2/1word/6_9.mp3" },
                j: { amis: "songetan/ ngoso’", chinese: "鼻子", image: "https://res.cloudinary.com/deljuj25x/image/upload/v1769582147/Gemini_Generated_Image_knqsywknqsywknqs_ged0hp.png", sound: "https://klokah.tw/extension/sp_junior/sound/2/1word/6_10.mp3" },
                o: { amis: "wa’ay", chinese: "腳", image: "https://res.cloudinary.com/deljuj25x/image/upload/v1769582131/Gemini_Generated_Image_cw7x6ncw7x6ncw7x_duzvny.png", sound: "https://klokah.tw/extension/sp_junior/sound/2/1word/6_11.mp3" },
                p: { amis: "wadis", chinese: "牙齒", image: "https://res.cloudinary.com/deljuj25x/image/upload/v1769582155/Gemini_Generated_Image_via007via007via0_e3xbbm.png", sound: "https://klokah.tw/extension/sp_junior/sound/2/1word/6_12.mp3" },
                q: { amis: "fokes", chinese: "頭髮", image: "https://res.cloudinary.com/deljuj25x/image/upload/v1769582203/Gemini_Generated_Image_59ffdy59ffdy59ff_jjtjwa.png", sound: "https://klokah.tw/extension/sp_junior/sound/2/1word/6_13.mp3" },
                r: { amis: "remes", chinese: "血", image: "https://res.cloudinary.com/deljuj25x/image/upload/v1769582508/Gemini_Generated_Image_btged8btged8btge_fafcqs.png", sound: "https://klokah.tw/extension/sp_junior/sound/2/1word/6_14.mp3" },
                s: { amis: "titi^", chinese: "肉", image: "https://res.cloudinary.com/djidzt4nv/image/upload/v1769582554/Gemini_Generated_Image_h4si9zh4si9zh4si_nahhu5.png", sound: "https://klokah.tw/extension/sp_junior/sound/2/1word/6_15.mp3" },
                t: { amis: "ca^ong", chinese: "額頭", image: "https://res.cloudinary.com/djidzt4nv/image/upload/v1769582707/Gemini_Generated_Image_c0040wc0040wc004_urbszq.png", sound: "https://klokah.tw/extension/sp_junior/sound/2/1word/6_16.mp3" },
                u: { amis: "tiyad", chinese: "肚子", image: "https://res.cloudinary.com/deljuj25x/image/upload/v1769582891/Gemini_Generated_Image_75185t75185t7518_ly9lzf.png", sound: "https://klokah.tw/extension/sp_junior/sound/2/1word/6_17.mp3" },
                v: { amis: "coco^", chinese: "乳房", image: "https://res.cloudinary.com/djidzt4nv/image/upload/v1769583569/Gemini_Generated_Image_lnd5vclnd5vclnd5_ftfqnm.png", sound: "https://klokah.tw/extension/sp_junior/sound/2/1word/6_18.mp3" },
                w: { amis: "edo^ no wa’ay/ ’amatorod", chinese: "小腿肚", image: "https://res.cloudinary.com/djidzt4nv/image/upload/v1769582941/Gemini_Generated_Image_kiq4ktkiq4ktkiq4_pcthql.png", sound: "https://klokah.tw/extension/sp_junior/sound/2/1word/6_19.mp3" },
                x: { amis: "’afala^", chinese: "肩膀", image: "https://res.cloudinary.com/djidzt4nv/image/upload/v1769582872/Gemini_Generated_Image_4p04mr4p04mr4p04_jqj2jw.png", sound: "https://klokah.tw/extension/sp_junior/sound/2/1word/6_20.mp3" },
            },
            "海岸阿美語": {
                a: { amis: "tanginga/tangingla/ wanginga", chinese: "耳朵", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769507351/%E8%80%B3%E6%9C%B5_2026-01-27_174619_ipp97p.png", sound: "https://klokah.tw/extension/sp_junior/sound/3/1word/6_1.mp3" },
                b: { amis: "cepi’", chinese: "大腿", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769543531/%E5%A4%A7%E8%85%BF_gofzbe.png", sound: "https://klokah.tw/extension/sp_junior/sound/3/1word/6_2.mp3" },
                c: { amis: "mata", chinese: "眼睛", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769543536/%E7%9C%BC%E7%9D%9B3_jwmp0g.png", sound: "https://klokah.tw/extension/sp_junior/sound/3/1word/6_3.mp3" },
                d: { amis: "pising", chinese: "臉", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769553002/%E8%87%89_wq9cbq.png", sound: "https://klokah.tw/extension/sp_junior/sound/3/1word/6_4.mp3" },
                e: { amis: "ngoyos", chinese: "嘴巴", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769544408/%E5%98%B4%E5%B7%B4_dr1fnn.png", sound: "https://klokah.tw/extension/sp_junior/sound/3/1word/6_5.mp3" },
                f: { amis: "fongoh", chinese: "頭", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769553183/%E9%A0%AD_vnafrp.png", sound: "https://klokah.tw/extension/sp_junior/sound/3/1word/6_6.mp3" },
                g: { amis: "kanoos", chinese: "指甲", image: "https://res.cloudinary.com/deljuj25x/image/upload/v1769581531/Gemini_Generated_Image_9wmzub9wmzub9wmz_ndwlh0.png", sound: "https://klokah.tw/extension/sp_junior/sound/3/1word/6_7.mp3" },
                h: { amis: "kamay", chinese: "手", image: "https://res.cloudinary.com/deljuj25x/image/upload/v1769582421/Gemini_Generated_Image_xodtecxodtecxodt_gw1ghh.png", sound: "https://klokah.tw/extension/sp_junior/sound/3/1word/6_8.mp3" },
                i: { amis: "tatirengan", chinese: "身體", image: "https://res.cloudinary.com/deljuj25x/image/upload/v1769582120/Gemini_Generated_Image_ct7mmpct7mmpct7m_k4tq6w.png", sound: "https://klokah.tw/extension/sp_junior/sound/3/1word/6_9.mp3" },
                j: { amis: "ngoso’", chinese: "鼻子", image: "https://res.cloudinary.com/deljuj25x/image/upload/v1769582147/Gemini_Generated_Image_knqsywknqsywknqs_ged0hp.png", sound: "https://klokah.tw/extension/sp_junior/sound/3/1word/6_10.mp3" },
                o: { amis: "wa’ay", chinese: "腳", image: "https://res.cloudinary.com/deljuj25x/image/upload/v1769582131/Gemini_Generated_Image_cw7x6ncw7x6ncw7x_duzvny.png", sound: "https://klokah.tw/extension/sp_junior/sound/3/1word/6_11.mp3" },
                p: { amis: "wadis", chinese: "牙齒", image: "https://res.cloudinary.com/deljuj25x/image/upload/v1769582155/Gemini_Generated_Image_via007via007via0_e3xbbm.png", sound: "https://klokah.tw/extension/sp_junior/sound/3/1word/6_12.mp3" },
                q: { amis: "fokes", chinese: "頭髮", image: "https://res.cloudinary.com/deljuj25x/image/upload/v1769582203/Gemini_Generated_Image_59ffdy59ffdy59ff_jjtjwa.png", sound: "https://klokah.tw/extension/sp_junior/sound/3/1word/6_13.mp3" },
                r: { amis: "remes/’irang", chinese: "血", image: "https://res.cloudinary.com/deljuj25x/image/upload/v1769582508/Gemini_Generated_Image_btged8btged8btge_fafcqs.png", sound: "https://klokah.tw/extension/sp_junior/sound/3/1word/6_14.mp3" },
                s: { amis: "titi", chinese: "肉", image: "https://res.cloudinary.com/djidzt4nv/image/upload/v1769582554/Gemini_Generated_Image_h4si9zh4si9zh4si_nahhu5.png", sound: "https://klokah.tw/extension/sp_junior/sound/3/1word/6_15.mp3" },
                t: { amis: "’atongol", chinese: "額頭", image: "https://res.cloudinary.com/djidzt4nv/image/upload/v1769582707/Gemini_Generated_Image_c0040wc0040wc004_urbszq.png", sound: "https://klokah.tw/extension/sp_junior/sound/3/1word/6_16.mp3" },
                u: { amis: "tiyad", chinese: "肚子", image: "https://res.cloudinary.com/deljuj25x/image/upload/v1769582891/Gemini_Generated_Image_75185t75185t7518_ly9lzf.png", sound: "https://klokah.tw/extension/sp_junior/sound/3/1word/6_17.mp3" },
                v: { amis: "coco", chinese: "乳房", image: "https://res.cloudinary.com/djidzt4nv/image/upload/v1769583569/Gemini_Generated_Image_lnd5vclnd5vclnd5_ftfqnm.png", sound: "https://klokah.tw/extension/sp_junior/sound/3/1word/6_18.mp3" },
                w: { amis: "’aftoy", chinese: "小腿肚", image: "https://res.cloudinary.com/djidzt4nv/image/upload/v1769582941/Gemini_Generated_Image_kiq4ktkiq4ktkiq4_pcthql.png", sound: "https://klokah.tw/extension/sp_junior/sound/3/1word/6_19.mp3" },
                x: { amis: "’afala", chinese: "肩膀", image: "https://res.cloudinary.com/djidzt4nv/image/upload/v1769582872/Gemini_Generated_Image_4p04mr4p04mr4p04_jqj2jw.png", sound: "https://klokah.tw/extension/sp_junior/sound/3/1word/6_20.mp3" },
            },
            "馬蘭阿美語": {
                a: { amis: "tangila", chinese: "耳朵", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769507351/%E8%80%B3%E6%9C%B5_2026-01-27_174619_ipp97p.png", sound: "https://klokah.tw/extension/sp_junior/sound/4/1word/6_1.mp3" },
                b: { amis: "cepi’", chinese: "大腿", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769543531/%E5%A4%A7%E8%85%BF_gofzbe.png", sound: "https://klokah.tw/extension/sp_junior/sound/4/1word/6_2.mp3" },
                c: { amis: "mata", chinese: "眼睛", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769543536/%E7%9C%BC%E7%9D%9B3_jwmp0g.png", sound: "https://klokah.tw/extension/sp_junior/sound/4/1word/6_3.mp3" },
                d: { amis: "pising/ laway", chinese: "臉", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769553002/%E8%87%89_wq9cbq.png", sound: "https://klokah.tw/extension/sp_junior/sound/4/1word/6_4.mp3" },
                e: { amis: "ngoyos", chinese: "嘴巴", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769544408/%E5%98%B4%E5%B7%B4_dr1fnn.png", sound: "https://klokah.tw/extension/sp_junior/sound/4/1word/6_5.mp3" },
                f: { amis: "fongoh", chinese: "頭", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769553183/%E9%A0%AD_vnafrp.png", sound: "https://klokah.tw/extension/sp_junior/sound/4/1word/6_6.mp3" },
                g: { amis: "kinoos", chinese: "指甲", image: "https://res.cloudinary.com/deljuj25x/image/upload/v1769581531/Gemini_Generated_Image_9wmzub9wmzub9wmz_ndwlh0.png", sound: "https://klokah.tw/extension/sp_junior/sound/4/1word/6_7.mp3" },
                h: { amis: "kamay", chinese: "手", image: "https://res.cloudinary.com/deljuj25x/image/upload/v1769582421/Gemini_Generated_Image_xodtecxodtecxodt_gw1ghh.png", sound: "https://klokah.tw/extension/sp_junior/sound/4/1word/6_8.mp3" },
                i: { amis: "tatirengan", chinese: "身體", image: "https://res.cloudinary.com/deljuj25x/image/upload/v1769582120/Gemini_Generated_Image_ct7mmpct7mmpct7m_k4tq6w.png", sound: "https://klokah.tw/extension/sp_junior/sound/4/1word/6_9.mp3" },
                j: { amis: "ngoso’", chinese: "鼻子", image: "https://res.cloudinary.com/deljuj25x/image/upload/v1769582147/Gemini_Generated_Image_knqsywknqsywknqs_ged0hp.png", sound: "https://klokah.tw/extension/sp_junior/sound/4/1word/6_10.mp3" },
                o: { amis: "oo’", chinese: "腳", image: "https://res.cloudinary.com/deljuj25x/image/upload/v1769582131/Gemini_Generated_Image_cw7x6ncw7x6ncw7x_duzvny.png", sound: "https://klokah.tw/extension/sp_junior/sound/4/1word/6_11.mp3" },
                p: { amis: "wadis", chinese: "牙齒", image: "https://res.cloudinary.com/deljuj25x/image/upload/v1769582155/Gemini_Generated_Image_via007via007via0_e3xbbm.png", sound: "https://klokah.tw/extension/sp_junior/sound/4/1word/6_12.mp3" },
                q: { amis: "fokes", chinese: "頭髮", image: "https://res.cloudinary.com/deljuj25x/image/upload/v1769582203/Gemini_Generated_Image_59ffdy59ffdy59ff_jjtjwa.png", sound: "https://klokah.tw/extension/sp_junior/sound/4/1word/6_13.mp3" },
                r: { amis: "remes/’irang", chinese: "血", image: "https://res.cloudinary.com/deljuj25x/image/upload/v1769582508/Gemini_Generated_Image_btged8btged8btge_fafcqs.png", sound: "https://klokah.tw/extension/sp_junior/sound/4/1word/6_14.mp3" },
                s: { amis: "titi", chinese: "肉", image: "https://res.cloudinary.com/djidzt4nv/image/upload/v1769582554/Gemini_Generated_Image_h4si9zh4si9zh4si_nahhu5.png", sound: "https://klokah.tw/extension/sp_junior/sound/3/1word/6_15.mp3" },
                t: { amis: "’atongol", chinese: "額頭", image: "https://res.cloudinary.com/djidzt4nv/image/upload/v1769582707/Gemini_Generated_Image_c0040wc0040wc004_urbszq.png", sound: "https://klokah.tw/extension/sp_junior/sound/4/1word/6_16.mp3" },
                u: { amis: "tiyad", chinese: "肚子", image: "https://res.cloudinary.com/deljuj25x/image/upload/v1769582891/Gemini_Generated_Image_75185t75185t7518_ly9lzf.png", sound: "https://klokah.tw/extension/sp_junior/sound/4/1word/6_17.mp3" },
                v: { amis: "coco", chinese: "乳房", image: "https://res.cloudinary.com/djidzt4nv/image/upload/v1769583569/Gemini_Generated_Image_lnd5vclnd5vclnd5_ftfqnm.png", sound: "https://klokah.tw/extension/sp_junior/sound/4/1word/6_18.mp3" },
                w: { amis: "nonol", chinese: "小腿肚", image: "https://res.cloudinary.com/djidzt4nv/image/upload/v1769582941/Gemini_Generated_Image_kiq4ktkiq4ktkiq4_pcthql.png", sound: "https://klokah.tw/extension/sp_junior/sound/4/1word/6_19.mp3" },
                x: { amis: "’afala", chinese: "肩膀", image: "https://res.cloudinary.com/djidzt4nv/image/upload/v1769582872/Gemini_Generated_Image_4p04mr4p04mr4p04_jqj2jw.png", sound: "https://klokah.tw/extension/sp_junior/sound/4/1word/6_20.mp3" },
            },
        }
    },

                                    topic6: {
        id: "topic6",
        title: "全阿美語版-有聲版-動物篇",
        sentences: COMMON_SENTENCES,
        sentencesByDialect: COMMON_SENTENCES_BY_DIALECT,
        dicePrompts: ["ira ko...", "ira ko...", "ira ko..."],
        gridData: {
          "a": { "amis": "waco", "chinese": "狗", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769546397/%E7%8B%97_puoq3v.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513729/amis_audio/sp_junior/did2_8_1.mp3", "color": "#bae6fd" },
          "b": { "amis": "posi", "chinese": "貓", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774742400/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_075941_gmvu30.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513731/amis_audio/sp_junior/did2_8_2.mp3", "color": "#ffe8b3" },
          "c": { "amis": "fafoy", "chinese": "豬", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774742009/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_075223_yc4avu.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513734/amis_audio/sp_junior/did2_8_3.mp3", "color": "#fb8c00" },
          "d": { "amis": "kolong", "chinese": "牛", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774742796/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_080620_clolxm.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513736/amis_audio/sp_junior/did2_8_4.mp3", "color": "#e63946" },
          "e": { "amis": "siri", "chinese": "羊", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774742310/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_075753_zehkvt.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513738/amis_audio/sp_junior/did2_8_5.mp3", "color": "#f48fb1" },
          "f": { "amis": "lotong", "chinese": "猴", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774742683/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_080330_gb8dql.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513740/amis_audio/sp_junior/did2_8_6.mp3", "color": "#66bb6a" },
          "g": { "amis": "edo", "chinese": "鼠", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743269/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_081341_iy0h1l.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513741/amis_audio/sp_junior/did2_8_7.mp3", "color": "#ba68c8" },
          "h": { "amis": "koko'/'ayam", "chinese": "雞", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774742829/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_080658_gttt9q.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513743/amis_audio/sp_junior/did2_8_8.mp3", "color": "#fdd835" },
          "i": { "amis": "ayam", "chinese": "鳥", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743163/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_081223_x4kdr3.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513745/amis_audio/sp_junior/did2_8_9.mp3", "color": "#4db6ac" },
          "j": { "amis": "foting", "chinese": "魚", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769579622/%E9%AD%9A_2_dnf6jt.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513747/amis_audio/sp_junior/did2_8_10.mp3", "color": "#ff8a65" },
          "o": { "amis": "takola' / takora'", "chinese": "青蛙", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743425/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_081617_r9xzk3.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513839/amis_audio/vocabulary/did2_07_12.wav", "color": "#bae6fd" },
          "p": { "amis": "ekong", "chinese": "貓頭鷹", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743357/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_081541_hh9zgt.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513841/amis_audio/vocabulary/did2_07_13.wav", "color": "#ffe8b3" },
          "q": { "amis": "fao", "chinese": "蟲(統稱)", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778943158/Gemini_Generated_Image_sj3aunsj3aunsj3a_zoxmds.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513844/amis_audio/vocabulary/did2_07_17.wav", "color": "#fb8c00" },
          "r": { "amis": "rarokoh", "chinese": "烏龜", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778943246/Gemini_Generated_Image_if9kfmif9kfmif9k_ygnqux.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513846/amis_audio/vocabulary/did2_07_18.wav", "color": "#e63946" },
          "s": { "amis": "lawal", "chinese": "飛鼠", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743525/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_081829_s3cmdk.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513849/amis_audio/vocabulary/did2_07_20.wav", "color": "#f48fb1" },
          "t": { "amis": "tomay", "chinese": "熊", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743569/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_081918_lle6ha.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513852/amis_audio/vocabulary/did2_07_23.wav", "color": "#66bb6a" },
          "u": { "amis": "lalangaw", "chinese": "蒼蠅", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743721/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_082148_dofyif.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513855/amis_audio/vocabulary/did2_07_34.wav", "color": "#ba68c8" },
          "v": { "amis": "odal", "chinese": "蜜蜂", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743795/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_082256_nsisfq.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513857/amis_audio/vocabulary/did2_07_35.wav", "color": "#fdd835" },
          "w": { "amis": "atikak", "chinese": "蚯蚓", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778943498/Gemini_Generated_Image_c5ix70c5ix70c5ix_m8p1bx.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513860/amis_audio/vocabulary/did2_07_39.wav", "color": "#4db6ac" },
          "x": { "amis": "afar", "chinese": "蝦", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743873/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_082414_tuluq4.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513862/amis_audio/vocabulary/did2_07_42.wav", "color": "#ff8a65" }
        },
        gridDataByDialect: {
             "南勢阿美語": {
                    "a": {
                              "amis": "wacu",
                              "chinese": "狗",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769546397/%E7%8B%97_puoq3v.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513708/amis_audio/sp_junior/did1_8_1.mp3",
                              "color": "#bae6fd"
                    },
                    "b": {
                              "amis": "nani",
                              "chinese": "貓",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774742400/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_075941_gmvu30.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513710/amis_audio/sp_junior/did1_8_2.mp3",
                              "color": "#ffe8b3"
                    },
                    "c": {
                              "amis": "vavuy",
                              "chinese": "豬",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774742009/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_075223_yc4avu.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513712/amis_audio/sp_junior/did1_8_3.mp3",
                              "color": "#fb8c00"
                    },
                    "d": {
                              "amis": "rarapa",
                              "chinese": "牛",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774742796/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_080620_clolxm.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513715/amis_audio/sp_junior/did1_8_4.mp3",
                              "color": "#e63946"
                    },
                    "e": {
                              "amis": "siri",
                              "chinese": "羊",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774742310/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_075753_zehkvt.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513717/amis_audio/sp_junior/did1_8_5.mp3",
                              "color": "#f48fb1"
                    },
                    "f": {
                              "amis": "ungay",
                              "chinese": "猴",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774742683/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_080330_gb8dql.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513719/amis_audio/sp_junior/did1_8_6.mp3",
                              "color": "#66bb6a"
                    },
                    "g": {
                              "amis": "edu",
                              "chinese": "鼠",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743269/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_081341_iy0h1l.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513721/amis_audio/sp_junior/did1_8_7.mp3",
                              "color": "#ba68c8"
                    },
                    "h": {
                              "amis": "ayam",
                              "chinese": "雞",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774742829/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_080658_gttt9q.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513723/amis_audio/sp_junior/did1_8_8.mp3",
                              "color": "#fdd835"
                    },
                    "i": {
                              "amis": "ayam",
                              "chinese": "鳥",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743163/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_081223_x4kdr3.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513725/amis_audio/sp_junior/did1_8_9.mp3",
                              "color": "#4db6ac"
                    },
                    "j": {
                              "amis": "vuting",
                              "chinese": "魚",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769579622/%E9%AD%9A_2_dnf6jt.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513727/amis_audio/sp_junior/did1_8_10.mp3",
                              "color": "#ff8a65"
                    },
                    "o": {
                              "amis": "tatakula'",
                              "chinese": "青蛙",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743425/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_081617_r9xzk3.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513812/amis_audio/vocabulary/did1_07_12.wav",
                              "color": "#bae6fd"
                    },
                    "p": {
                              "amis": "tuul",
                              "chinese": "貓頭鷹",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743357/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_081541_hh9zgt.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513814/amis_audio/vocabulary/did1_07_13.wav",
                              "color": "#ffe8b3"
                    },
                    "q": {
                              "amis": "cirekay",
                              "chinese": "蟲(統稱)",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778943158/Gemini_Generated_Image_sj3aunsj3aunsj3a_zoxmds.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513817/amis_audio/vocabulary/did1_07_17.wav",
                              "color": "#fb8c00"
                    },
                    "r": {
                              "amis": "rarukuh",
                              "chinese": "烏龜",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778943246/Gemini_Generated_Image_if9kfmif9kfmif9k_ygnqux.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513819/amis_audio/vocabulary/did1_07_18.wav",
                              "color": "#e63946"
                    },
                    "s": {
                              "amis": "rapic",
                              "chinese": "飛鼠",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743525/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_081829_s3cmdk.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513822/amis_audio/vocabulary/did1_07_20.wav",
                              "color": "#f48fb1"
                    },
                    "t": {
                              "amis": "tumay",
                              "chinese": "熊",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743569/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_081918_lle6ha.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513824/amis_audio/vocabulary/did1_07_23.wav",
                              "color": "#66bb6a"
                    },
                    "u": {
                              "amis": "lalangaw",
                              "chinese": "蒼蠅",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743721/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_082148_dofyif.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513827/amis_audio/vocabulary/did1_07_34.wav",
                              "color": "#ba68c8"
                    },
                    "v": {
                              "amis": "udal",
                              "chinese": "蜜蜂",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743795/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_082256_nsisfq.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513829/amis_audio/vocabulary/did1_07_35.wav",
                              "color": "#fdd835"
                    },
                    "w": {
                              "amis": "atikak",
                              "chinese": "蚯蚓",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778943498/Gemini_Generated_Image_c5ix70c5ix70c5ix_m8p1bx.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513832/amis_audio/vocabulary/did1_07_39.wav",
                              "color": "#4db6ac"
                    },
                    "x": {
                              "amis": "urang",
                              "chinese": "蝦",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743873/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_082414_tuluq4.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513834/amis_audio/vocabulary/did1_07_42.wav",
                              "color": "#ff8a65"
                    }
             },
             "秀姑巒阿美語": {
                    "a": {
                              "amis": "waco",
                              "chinese": "狗",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769546397/%E7%8B%97_puoq3v.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513729/amis_audio/sp_junior/did2_8_1.mp3",
                              "color": "#bae6fd"
                    },
                    "b": {
                              "amis": "posi",
                              "chinese": "貓",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774742400/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_075941_gmvu30.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513731/amis_audio/sp_junior/did2_8_2.mp3",
                              "color": "#ffe8b3"
                    },
                    "c": {
                              "amis": "fafoy",
                              "chinese": "豬",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774742009/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_075223_yc4avu.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513734/amis_audio/sp_junior/did2_8_3.mp3",
                              "color": "#fb8c00"
                    },
                    "d": {
                              "amis": "kolong",
                              "chinese": "牛",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774742796/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_080620_clolxm.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513736/amis_audio/sp_junior/did2_8_4.mp3",
                              "color": "#e63946"
                    },
                    "e": {
                              "amis": "siri",
                              "chinese": "羊",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774742310/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_075753_zehkvt.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513738/amis_audio/sp_junior/did2_8_5.mp3",
                              "color": "#f48fb1"
                    },
                    "f": {
                              "amis": "lotong",
                              "chinese": "猴",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774742683/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_080330_gb8dql.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513740/amis_audio/sp_junior/did2_8_6.mp3",
                              "color": "#66bb6a"
                    },
                    "g": {
                              "amis": "edo",
                              "chinese": "鼠",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743269/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_081341_iy0h1l.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513741/amis_audio/sp_junior/did2_8_7.mp3",
                              "color": "#ba68c8"
                    },
                    "h": {
                              "amis": "koko'/'ayam",
                              "chinese": "雞",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774742829/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_080658_gttt9q.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513743/amis_audio/sp_junior/did2_8_8.mp3",
                              "color": "#fdd835"
                    },
                    "i": {
                              "amis": "ayam",
                              "chinese": "鳥",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743163/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_081223_x4kdr3.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513745/amis_audio/sp_junior/did2_8_9.mp3",
                              "color": "#4db6ac"
                    },
                    "j": {
                              "amis": "foting",
                              "chinese": "魚",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769579622/%E9%AD%9A_2_dnf6jt.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513747/amis_audio/sp_junior/did2_8_10.mp3",
                              "color": "#ff8a65"
                    },
                    "o": {
                              "amis": "takola' / takora'",
                              "chinese": "青蛙",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743425/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_081617_r9xzk3.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513839/amis_audio/vocabulary/did2_07_12.wav",
                              "color": "#bae6fd"
                    },
                    "p": {
                              "amis": "ekong",
                              "chinese": "貓頭鷹",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743357/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_081541_hh9zgt.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513841/amis_audio/vocabulary/did2_07_13.wav",
                              "color": "#ffe8b3"
                    },
                    "q": {
                              "amis": "fao",
                              "chinese": "蟲(統稱)",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778943158/Gemini_Generated_Image_sj3aunsj3aunsj3a_zoxmds.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513844/amis_audio/vocabulary/did2_07_17.wav",
                              "color": "#fb8c00"
                    },
                    "r": {
                              "amis": "rarokoh",
                              "chinese": "烏龜",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778943246/Gemini_Generated_Image_if9kfmif9kfmif9k_ygnqux.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513846/amis_audio/vocabulary/did2_07_18.wav",
                              "color": "#e63946"
                    },
                    "s": {
                              "amis": "lawal",
                              "chinese": "飛鼠",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743525/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_081829_s3cmdk.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513849/amis_audio/vocabulary/did2_07_20.wav",
                              "color": "#f48fb1"
                    },
                    "t": {
                              "amis": "tomay",
                              "chinese": "熊",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743569/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_081918_lle6ha.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513852/amis_audio/vocabulary/did2_07_23.wav",
                              "color": "#66bb6a"
                    },
                    "u": {
                              "amis": "lalangaw",
                              "chinese": "蒼蠅",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743721/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_082148_dofyif.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513855/amis_audio/vocabulary/did2_07_34.wav",
                              "color": "#ba68c8"
                    },
                    "v": {
                              "amis": "odal",
                              "chinese": "蜜蜂",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743795/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_082256_nsisfq.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513857/amis_audio/vocabulary/did2_07_35.wav",
                              "color": "#fdd835"
                    },
                    "w": {
                              "amis": "atikak",
                              "chinese": "蚯蚓",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778943498/Gemini_Generated_Image_c5ix70c5ix70c5ix_m8p1bx.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513860/amis_audio/vocabulary/did2_07_39.wav",
                              "color": "#4db6ac"
                    },
                    "x": {
                              "amis": "afar",
                              "chinese": "蝦",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743873/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_082414_tuluq4.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513862/amis_audio/vocabulary/did2_07_42.wav",
                              "color": "#ff8a65"
                    }
             },
             "海岸阿美語": {
                    "a": {
                              "amis": "waco",
                              "chinese": "狗",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769546397/%E7%8B%97_puoq3v.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513749/amis_audio/sp_junior/did3_8_1.mp3",
                              "color": "#bae6fd"
                    },
                    "b": {
                              "amis": "posi",
                              "chinese": "貓",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774742400/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_075941_gmvu30.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513752/amis_audio/sp_junior/did3_8_2.mp3",
                              "color": "#ffe8b3"
                    },
                    "c": {
                              "amis": "fafoy",
                              "chinese": "豬",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774742009/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_075223_yc4avu.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513754/amis_audio/sp_junior/did3_8_3.mp3",
                              "color": "#fb8c00"
                    },
                    "d": {
                              "amis": "kolong",
                              "chinese": "牛",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774742796/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_080620_clolxm.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513756/amis_audio/sp_junior/did3_8_4.mp3",
                              "color": "#e63946"
                    },
                    "e": {
                              "amis": "siri",
                              "chinese": "羊",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774742310/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_075753_zehkvt.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513758/amis_audio/sp_junior/did3_8_5.mp3",
                              "color": "#f48fb1"
                    },
                    "f": {
                              "amis": "lotong",
                              "chinese": "猴",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774742683/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_080330_gb8dql.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513760/amis_audio/sp_junior/did3_8_6.mp3",
                              "color": "#66bb6a"
                    },
                    "g": {
                              "amis": "edo",
                              "chinese": "鼠",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743269/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_081341_iy0h1l.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513763/amis_audio/sp_junior/did3_8_7.mp3",
                              "color": "#ba68c8"
                    },
                    "h": {
                              "amis": "koko'",
                              "chinese": "雞",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774742829/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_080658_gttt9q.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513765/amis_audio/sp_junior/did3_8_8.mp3",
                              "color": "#fdd835"
                    },
                    "i": {
                              "amis": "ayam",
                              "chinese": "鳥",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743163/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_081223_x4kdr3.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513767/amis_audio/sp_junior/did3_8_9.mp3",
                              "color": "#4db6ac"
                    },
                    "j": {
                              "amis": "foting",
                              "chinese": "魚",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769579622/%E9%AD%9A_2_dnf6jt.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513769/amis_audio/sp_junior/did3_8_10.mp3",
                              "color": "#ff8a65"
                    },
                    "o": {
                              "amis": "takola'",
                              "chinese": "青蛙",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743425/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_081617_r9xzk3.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513868/amis_audio/vocabulary/did3_07_12.wav",
                              "color": "#bae6fd"
                    },
                    "p": {
                              "amis": "ekong",
                              "chinese": "貓頭鷹",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743357/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_081541_hh9zgt.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513870/amis_audio/vocabulary/did3_07_13.wav",
                              "color": "#ffe8b3"
                    },
                    "q": {
                              "amis": "fao",
                              "chinese": "蟲(統稱)",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778943158/Gemini_Generated_Image_sj3aunsj3aunsj3a_zoxmds.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513872/amis_audio/vocabulary/did3_07_17.wav",
                              "color": "#fb8c00"
                    },
                    "r": {
                              "amis": "rarokoh",
                              "chinese": "烏龜",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778943246/Gemini_Generated_Image_if9kfmif9kfmif9k_ygnqux.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513875/amis_audio/vocabulary/did3_07_18.wav",
                              "color": "#e63946"
                    },
                    "s": {
                              "amis": "lawal",
                              "chinese": "飛鼠",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743525/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_081829_s3cmdk.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513877/amis_audio/vocabulary/did3_07_20.wav",
                              "color": "#f48fb1"
                    },
                    "t": {
                              "amis": "tomay",
                              "chinese": "熊",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743569/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_081918_lle6ha.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513880/amis_audio/vocabulary/did3_07_23.wav",
                              "color": "#66bb6a"
                    },
                    "u": {
                              "amis": "lalangaw",
                              "chinese": "蒼蠅",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743721/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_082148_dofyif.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513882/amis_audio/vocabulary/did3_07_34.wav",
                              "color": "#ba68c8"
                    },
                    "v": {
                              "amis": "odal",
                              "chinese": "蜜蜂",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743795/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_082256_nsisfq.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513885/amis_audio/vocabulary/did3_07_35.wav",
                              "color": "#fdd835"
                    },
                    "w": {
                              "amis": "arikak",
                              "chinese": "蚯蚓",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778943498/Gemini_Generated_Image_c5ix70c5ix70c5ix_m8p1bx.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513887/amis_audio/vocabulary/did3_07_39.wav",
                              "color": "#4db6ac"
                    },
                    "x": {
                              "amis": "afar",
                              "chinese": "蝦",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743873/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_082414_tuluq4.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513890/amis_audio/vocabulary/did3_07_42.wav",
                              "color": "#ff8a65"
                    }
             },
             "馬蘭阿美語": {
                    "a": {
                              "amis": "waco",
                              "chinese": "狗",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769546397/%E7%8B%97_puoq3v.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513771/amis_audio/sp_junior/did4_8_1.mp3",
                              "color": "#bae6fd"
                    },
                    "b": {
                              "amis": "posi",
                              "chinese": "貓",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774742400/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_075941_gmvu30.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513773/amis_audio/sp_junior/did4_8_2.mp3",
                              "color": "#ffe8b3"
                    },
                    "c": {
                              "amis": "diyong / fafoy",
                              "chinese": "豬",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774742009/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_075223_yc4avu.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513775/amis_audio/sp_junior/did4_8_3.mp3",
                              "color": "#fb8c00"
                    },
                    "d": {
                              "amis": "kolong",
                              "chinese": "牛",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774742796/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_080620_clolxm.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513777/amis_audio/sp_junior/did4_8_4.mp3",
                              "color": "#e63946"
                    },
                    "e": {
                              "amis": "siri",
                              "chinese": "羊",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774742310/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_075753_zehkvt.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513779/amis_audio/sp_junior/did4_8_5.mp3",
                              "color": "#f48fb1"
                    },
                    "f": {
                              "amis": "lotong",
                              "chinese": "猴",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774742683/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_080330_gb8dql.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513780/amis_audio/sp_junior/did4_8_6.mp3",
                              "color": "#66bb6a"
                    },
                    "g": {
                              "amis": "kacingcon",
                              "chinese": "鼠",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743269/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_081341_iy0h1l.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513782/amis_audio/sp_junior/did4_8_7.mp3",
                              "color": "#ba68c8"
                    },
                    "h": {
                              "amis": "koko'",
                              "chinese": "雞",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774742829/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_080658_gttt9q.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513784/amis_audio/sp_junior/did4_8_8.mp3",
                              "color": "#fdd835"
                    },
                    "i": {
                              "amis": "ayam",
                              "chinese": "鳥",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743163/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_081223_x4kdr3.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513786/amis_audio/sp_junior/did4_8_9.mp3",
                              "color": "#4db6ac"
                    },
                    "j": {
                              "amis": "foting",
                              "chinese": "魚",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769579622/%E9%AD%9A_2_dnf6jt.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513788/amis_audio/sp_junior/did4_8_10.mp3",
                              "color": "#ff8a65"
                    },
                    "o": {
                              "amis": "takora'",
                              "chinese": "青蛙",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743425/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_081617_r9xzk3.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513894/amis_audio/vocabulary/did4_07_12.wav",
                              "color": "#bae6fd"
                    },
                    "p": {
                              "amis": "ekong",
                              "chinese": "貓頭鷹",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743357/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_081541_hh9zgt.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513896/amis_audio/vocabulary/did4_07_13.wav",
                              "color": "#ffe8b3"
                    },
                    "q": {
                              "amis": "fao",
                              "chinese": "蟲(統稱)",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778943158/Gemini_Generated_Image_sj3aunsj3aunsj3a_zoxmds.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513899/amis_audio/vocabulary/did4_07_17.wav",
                              "color": "#fb8c00"
                    },
                    "r": {
                              "amis": "rarokoh",
                              "chinese": "烏龜",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778943246/Gemini_Generated_Image_if9kfmif9kfmif9k_ygnqux.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513901/amis_audio/vocabulary/did4_07_18.wav",
                              "color": "#e63946"
                    },
                    "s": {
                              "amis": "lawal",
                              "chinese": "飛鼠",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743525/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_081829_s3cmdk.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513903/amis_audio/vocabulary/did4_07_20.wav",
                              "color": "#f48fb1"
                    },
                    "t": {
                              "amis": "tomay",
                              "chinese": "熊",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743569/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_081918_lle6ha.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513905/amis_audio/vocabulary/did4_07_23.wav",
                              "color": "#66bb6a"
                    },
                    "u": {
                              "amis": "lalangaw",
                              "chinese": "蒼蠅",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743721/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_082148_dofyif.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513908/amis_audio/vocabulary/did4_07_34.wav",
                              "color": "#ba68c8"
                    },
                    "v": {
                              "amis": "facacenal",
                              "chinese": "蜜蜂",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743795/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_082256_nsisfq.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513910/amis_audio/vocabulary/did4_07_35.wav",
                              "color": "#fdd835"
                    },
                    "w": {
                              "amis": "arikak",
                              "chinese": "蚯蚓",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778943498/Gemini_Generated_Image_c5ix70c5ix70c5ix_m8p1bx.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513913/amis_audio/vocabulary/did4_07_39.wav",
                              "color": "#4db6ac"
                    },
                    "x": {
                              "amis": "afar",
                              "chinese": "蝦",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743873/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_082414_tuluq4.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513916/amis_audio/vocabulary/did4_07_42.wav",
                              "color": "#ff8a65"
                    }
             },
             "恆春阿美語": {
                    "a": {
                              "amis": "takora'",
                              "chinese": "青蛙(恆春)",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743425/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_081617_r9xzk3.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513790/amis_audio/sp_junior/did5_8_1.mp3",
                              "color": "#bae6fd"
                    },
                    "b": {
                              "amis": "ngiyaw",
                              "chinese": "貓",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774742400/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_075941_gmvu30.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513792/amis_audio/sp_junior/did5_8_2.mp3",
                              "color": "#ffe8b3"
                    },
                    "c": {
                              "amis": "diyong",
                              "chinese": "豬",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774742009/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_075223_yc4avu.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513794/amis_audio/sp_junior/did5_8_3.mp3",
                              "color": "#fb8c00"
                    },
                    "d": {
                              "amis": "kolong",
                              "chinese": "牛",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774742796/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_080620_clolxm.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513796/amis_audio/sp_junior/did5_8_4.mp3",
                              "color": "#e63946"
                    },
                    "e": {
                              "amis": "siri",
                              "chinese": "羊",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774742310/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_075753_zehkvt.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513798/amis_audio/sp_junior/did5_8_5.mp3",
                              "color": "#f48fb1"
                    },
                    "f": {
                              "amis": "lotong",
                              "chinese": "猴",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774742683/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_080330_gb8dql.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513800/amis_audio/sp_junior/did5_8_6.mp3",
                              "color": "#66bb6a"
                    },
                    "g": {
                              "amis": "edo",
                              "chinese": "鼠",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743269/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_081341_iy0h1l.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513802/amis_audio/sp_junior/did5_8_7.mp3",
                              "color": "#ba68c8"
                    },
                    "h": {
                              "amis": "koko'",
                              "chinese": "雞",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774742829/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_080658_gttt9q.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513805/amis_audio/sp_junior/did5_8_8.mp3",
                              "color": "#fdd835"
                    },
                    "i": {
                              "amis": "ayam",
                              "chinese": "鳥",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743163/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_081223_x4kdr3.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513807/amis_audio/sp_junior/did5_8_9.mp3",
                              "color": "#4db6ac"
                    },
                    "j": {
                              "amis": "foting",
                              "chinese": "魚",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769579622/%E9%AD%9A_2_dnf6jt.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513809/amis_audio/sp_junior/did5_8_10.mp3",
                              "color": "#ff8a65"
                    },
                    "o": {
                              "amis": "takola'",
                              "chinese": "青蛙",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743425/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_081617_r9xzk3.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513920/amis_audio/vocabulary/did5_07_12.wav",
                              "color": "#bae6fd"
                    },
                    "p": {
                              "amis": "ekong",
                              "chinese": "貓頭鷹",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743357/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_081541_hh9zgt.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513923/amis_audio/vocabulary/did5_07_13.wav",
                              "color": "#ffe8b3"
                    },
                    "q": {
                              "amis": "fao",
                              "chinese": "蟲(統稱)",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778943158/Gemini_Generated_Image_sj3aunsj3aunsj3a_zoxmds.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513925/amis_audio/vocabulary/did5_07_17.wav",
                              "color": "#fb8c00"
                    },
                    "r": {
                              "amis": "rarokoh",
                              "chinese": "烏龜",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778943246/Gemini_Generated_Image_if9kfmif9kfmif9k_ygnqux.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513928/amis_audio/vocabulary/did5_07_18.wav",
                              "color": "#e63946"
                    },
                    "s": {
                              "amis": "lawal",
                              "chinese": "飛鼠",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743525/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_081829_s3cmdk.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513930/amis_audio/vocabulary/did5_07_20.wav",
                              "color": "#f48fb1"
                    },
                    "t": {
                              "amis": "tomay",
                              "chinese": "熊",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743569/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_081918_lle6ha.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513933/amis_audio/vocabulary/did5_07_23.wav",
                              "color": "#66bb6a"
                    },
                    "u": {
                              "amis": "lalangaw",
                              "chinese": "蒼蠅",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743721/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_082148_dofyif.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513935/amis_audio/vocabulary/did5_07_34.wav",
                              "color": "#ba68c8"
                    },
                    "v": {
                              "amis": "fitengal",
                              "chinese": "蜜蜂",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743795/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_082256_nsisfq.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513938/amis_audio/vocabulary/did5_07_35.wav",
                              "color": "#fdd835"
                    },
                    "w": {
                              "amis": "arikak",
                              "chinese": "蚯蚓",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778943498/Gemini_Generated_Image_c5ix70c5ix70c5ix_m8p1bx.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513940/amis_audio/vocabulary/did5_07_39.wav",
                              "color": "#4db6ac"
                    },
                    "x": {
                              "amis": "afar",
                              "chinese": "蝦",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774743873/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_082414_tuluq4.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779513943/amis_audio/vocabulary/did5_07_42.wav",
                              "color": "#ff8a65"
                    }
             }
        }
    },
    topic7: {
        id: "topic7",
        title: "全阿美語版-有聲版-植物物品篇",
        sentences: COMMON_SENTENCES,
        sentencesByDialect: COMMON_SENTENCES_BY_DIALECT,
        dicePrompts: ["ira ko...", "ira ko...", "ira ko..."],
        gridData: {
          "a": { "amis": "vunga", "chinese": "地瓜", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777153909/%E5%9C%B0%E7%93%9C_fnjii7.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516821/amis_audio/vocabulary/did1_08_56.wav", "color": "#bae6fd" },
          "b": { "amis": "pawli", "chinese": "香蕉", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769552419/%E9%A6%99%E8%95%89_skemlo.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516823/amis_audio/vocabulary/did1_08_01.wav", "color": "#ffe8b3" },
          "c": { "amis": "papah", "chinese": "葉子", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777153825/papah_zaxyps.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516826/amis_audio/vocabulary/did1_08_06.wav", "color": "#fb8c00" },
          "d": { "amis": "tevus", "chinese": "甘蔗", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778952491/Gemini_Generated_Image_9dzcqy9dzcqy9dzc_tm01xb.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516828/amis_audio/vocabulary/did1_08_05.wav", "color": "#e63946" },
          "e": { "amis": "tali", "chinese": "芋頭", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778952586/Gemini_Generated_Image_evnpcnevnpcnevnp_iq5iz7.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516830/amis_audio/vocabulary/did1_08_04.wav", "color": "#f48fb1" },
          "f": { "amis": "taviras", "chinese": "玉米", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777153955/%E7%8E%89%E7%B1%B3_oyyfa9.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516833/amis_audio/vocabulary/did1_08_12.wav", "color": "#66bb6a" },
          "g": { "amis": "savak", "chinese": "稻穀", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779521076/savak_%E7%A8%BB%E7%A9%80_gfakww.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516836/amis_audio/vocabulary/did1_08_02.wav", "color": "#ba68c8" },
          "h": { "amis": "kama", "chinese": "柑橘", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777154953/mami_i_ocivep.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516838/amis_audio/vocabulary/did1_08_08.wav", "color": "#fdd835" },
          "i": { "amis": "kilang", "chinese": "樹", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777155615/kilang_ox9hma.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516841/amis_audio/vocabulary/did1_08_03.wav", "color": "#4db6ac" },
          "j": { "amis": "varu", "chinese": "花朵", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777152680/%E8%8A%B1_0_gpvoq2.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516844/amis_audio/vocabulary/did1_08_09.wav", "color": "#ff8a65" },
          "o": { "amis": "cudad", "chinese": "書", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777155060/tilid_ew1rtz.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516846/amis_audio/vocabulary/did1_09_01.wav", "color": "#bae6fd" },
          "p": { "amis": "pida", "chinese": "錢", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156600/payso_cqkezl.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516848/amis_audio/vocabulary/did1_09_02.wav", "color": "#ffe8b3" },
          "q": { "amis": "mali", "chinese": "球", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777157447/Gemini_Generated_Image_3aflyv3aflyv3afl_fol4mn.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516852/amis_audio/vocabulary/did1_09_03.wav", "color": "#fb8c00" },
          "r": { "amis": "sapad", "chinese": "桌子", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156371/%E6%A1%8C%E5%AD%90_fcjkgu.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516855/amis_audio/vocabulary/did1_09_04.wav", "color": "#e63946" },
          "s": { "amis": "telay/dingwa", "chinese": "電話", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777157306/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-04-26_064756_vpkhto.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516857/amis_audio/vocabulary/did1_09_05.wav", "color": "#f48fb1" },
          "t": { "amis": "sapisurit", "chinese": "筆", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777155464/Gemini_Generated_Image_sccsjosccsjosccs_hzjlvc.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516860/amis_audio/vocabulary/did1_09_06.wav", "color": "#66bb6a" },
          "u": { "amis": "elun", "chinese": "椅子", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156867/Gemini_Generated_Image_q46gggq46gggq46g_gwiz9l.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516862/amis_audio/vocabulary/did1_09_07.wav", "color": "#ba68c8" },
          "v": { "amis": "sapaiyu", "chinese": "藥物", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778952649/Gemini_Generated_Image_zboiwszboiwszboi_d0ueaj.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516865/amis_audio/vocabulary/did1_09_08.wav", "color": "#fdd835" },
          "w": { "amis": "cacevaren", "chinese": "雨傘", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777157104/dinay_qeg0rx.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516868/amis_audio/vocabulary/did1_09_10.wav", "color": "#4db6ac" },
          "x": { "amis": "savuric", "chinese": "橡皮擦", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156728/sasipasip_qhetcn.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516870/amis_audio/vocabulary/did1_09_70.wav", "color": "#ff8a65" }
        },
        gridDataByDialect: {
          "南勢阿美語": {
            "a": { "amis": "vunga", "chinese": "地瓜", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777153909/%E5%9C%B0%E7%93%9C_fnjii7.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516821/amis_audio/vocabulary/did1_08_56.wav", "color": "#bae6fd" },
            "b": { "amis": "pawli", "chinese": "香蕉", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769552419/%E9%A6%99%E8%95%89_skemlo.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516823/amis_audio/vocabulary/did1_08_01.wav", "color": "#ffe8b3" },
            "c": { "amis": "papah", "chinese": "葉子", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777153825/papah_zaxyps.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516826/amis_audio/vocabulary/did1_08_06.wav", "color": "#fb8c00" },
            "d": { "amis": "tevus", "chinese": "甘蔗", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778952491/Gemini_Generated_Image_9dzcqy9dzcqy9dzc_tm01xb.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516828/amis_audio/vocabulary/did1_08_05.wav", "color": "#e63946" },
            "e": { "amis": "tali", "chinese": "芋頭", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778952586/Gemini_Generated_Image_evnpcnevnpcnevnp_iq5iz7.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516830/amis_audio/vocabulary/did1_08_04.wav", "color": "#f48fb1" },
            "f": { "amis": "taviras", "chinese": "玉米", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777153955/%E7%8E%89%E7%B1%B3_oyyfa9.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516833/amis_audio/vocabulary/did1_08_12.wav", "color": "#66bb6a" },
            "g": { "amis": "savak", "chinese": "稻穀", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779521076/savak_%E7%A8%BB%E7%A9%80_gfakww.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516836/amis_audio/vocabulary/did1_08_02.wav", "color": "#ba68c8" },
            "h": { "amis": "kama", "chinese": "柑橘", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777154953/mami_i_ocivep.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516838/amis_audio/vocabulary/did1_08_08.wav", "color": "#fdd835" },
            "i": { "amis": "kilang", "chinese": "樹", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777155615/kilang_ox9hma.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516841/amis_audio/vocabulary/did1_08_03.wav", "color": "#4db6ac" },
            "j": { "amis": "varu", "chinese": "花朵", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777152680/%E8%8A%B1_0_gpvoq2.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516844/amis_audio/vocabulary/did1_08_09.wav", "color": "#ff8a65" },
            "o": { "amis": "cudad", "chinese": "書", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777155060/tilid_ew1rtz.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516846/amis_audio/vocabulary/did1_09_01.wav", "color": "#bae6fd" },
            "p": { "amis": "pida", "chinese": "錢", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156600/payso_cqkezl.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516848/amis_audio/vocabulary/did1_09_02.wav", "color": "#ffe8b3" },
            "q": { "amis": "mali", "chinese": "球", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777157447/Gemini_Generated_Image_3aflyv3aflyv3afl_fol4mn.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516852/amis_audio/vocabulary/did1_09_03.wav", "color": "#fb8c00" },
            "r": { "amis": "sapad", "chinese": "桌子", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156371/%E6%A1%8C%E5%AD%90_fcjkgu.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516855/amis_audio/vocabulary/did1_09_04.wav", "color": "#e63946" },
            "s": { "amis": "telay/dingwa", "chinese": "電話", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777157306/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-04-26_064756_vpkhto.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516857/amis_audio/vocabulary/did1_09_05.wav", "color": "#f48fb1" },
            "t": { "amis": "sapisurit", "chinese": "筆", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777155464/Gemini_Generated_Image_sccsjosccsjosccs_hzjlvc.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516860/amis_audio/vocabulary/did1_09_06.wav", "color": "#66bb6a" },
            "u": { "amis": "elun", "chinese": "椅子", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156867/Gemini_Generated_Image_q46gggq46gggq46g_gwiz9l.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516862/amis_audio/vocabulary/did1_09_07.wav", "color": "#ba68c8" },
            "v": { "amis": "sapaiyu", "chinese": "藥物", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778952649/Gemini_Generated_Image_zboiwszboiwszboi_d0ueaj.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516865/amis_audio/vocabulary/did1_09_08.wav", "color": "#fdd835" },
            "w": { "amis": "cacevaren", "chinese": "雨傘", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777157104/dinay_qeg0rx.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516868/amis_audio/vocabulary/did1_09_10.wav", "color": "#4db6ac" },
            "x": { "amis": "savuric", "chinese": "橡皮擦", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156728/sasipasip_qhetcn.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516870/amis_audio/vocabulary/did1_09_70.wav", "color": "#ff8a65" }
          },
          "秀姑巒阿美語": {
            "a": { "amis": "fonga / konga", "chinese": "地瓜", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777153909/%E5%9C%B0%E7%93%9C_fnjii7.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516873/amis_audio/vocabulary/did2_08_56.wav", "color": "#bae6fd" },
            "b": { "amis": "pawli", "chinese": "香蕉", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769552419/%E9%A6%99%E8%95%89_skemlo.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516876/amis_audio/vocabulary/did2_08_01.wav", "color": "#ffe8b3" },
            "c": { "amis": "papah", "chinese": "葉子", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777153825/papah_zaxyps.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516878/amis_audio/vocabulary/did2_08_06.wav", "color": "#fb8c00" },
            "d": { "amis": "tefos", "chinese": "甘蔗", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778952491/Gemini_Generated_Image_9dzcqy9dzcqy9dzc_tm01xb.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516880/amis_audio/vocabulary/did2_08_05.wav", "color": "#e63946" },
            "e": { "amis": "tali", "chinese": "芋頭", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778952586/Gemini_Generated_Image_evnpcnevnpcnevnp_iq5iz7.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516883/amis_audio/vocabulary/did2_08_04.wav", "color": "#f48fb1" },
            "f": { "amis": "ariray", "chinese": "玉米", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777153955/%E7%8E%89%E7%B1%B3_oyyfa9.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516885/amis_audio/vocabulary/did2_08_12.wav", "color": "#66bb6a" },
            "g": { "amis": "savak", "chinese": "稻穀", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779521076/savak_%E7%A8%BB%E7%A9%80_gfakww.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516888/amis_audio/vocabulary/did2_08_02.wav", "color": "#ba68c8" },
            "h": { "amis": "mami' / mami'", "chinese": "柑橘", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777154953/mami_i_ocivep.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516890/amis_audio/vocabulary/did2_08_08.wav", "color": "#fdd835" },
            "i": { "amis": "kilang", "chinese": "樹", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777155615/kilang_ox9hma.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516893/amis_audio/vocabulary/did2_08_03.wav", "color": "#4db6ac" },
            "j": { "amis": "rohayan", "chinese": "花朵", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777152680/%E8%8A%B1_0_gpvoq2.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516895/amis_audio/vocabulary/did2_08_09.wav", "color": "#ff8a65" },
            "o": { "amis": "codad", "chinese": "書", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777155060/tilid_ew1rtz.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516899/amis_audio/vocabulary/did2_09_01.wav", "color": "#bae6fd" },
            "p": { "amis": "pida", "chinese": "錢", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156600/payso_cqkezl.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516902/amis_audio/vocabulary/did2_09_02.wav", "color": "#ffe8b3" },
            "q": { "amis": "mali", "chinese": "球", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777157447/Gemini_Generated_Image_3aflyv3aflyv3afl_fol4mn.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516904/amis_audio/vocabulary/did2_09_03.wav", "color": "#fb8c00" },
            "r": { "amis": "sapad / cokowi / parar", "chinese": "桌子", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156371/%E6%A1%8C%E5%AD%90_fcjkgu.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516907/amis_audio/vocabulary/did2_09_04.wav", "color": "#e63946" },
            "s": { "amis": "dingwa", "chinese": "電話", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777157306/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-04-26_064756_vpkhto.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516910/amis_audio/vocabulary/did2_09_05.wav", "color": "#f48fb1" },
            "t": { "amis": "impic", "chinese": "筆", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777155464/Gemini_Generated_Image_sccsjosccsjosccs_hzjlvc.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516912/amis_audio/vocabulary/did2_09_06.wav", "color": "#66bb6a" },
            "u": { "amis": "anengan", "chinese": "椅子", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156867/Gemini_Generated_Image_q46gggq46gggq46g_gwiz9l.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516915/amis_audio/vocabulary/did2_09_07.wav", "color": "#ba68c8" },
            "v": { "amis": "sapaiyo", "chinese": "藥物", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778952649/Gemini_Generated_Image_zboiwszboiwszboi_d0ueaj.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516917/amis_audio/vocabulary/did2_09_08.wav", "color": "#fdd835" },
            "w": { "amis": "cacilakan/linay/sawong", "chinese": "雨傘", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777157104/dinay_qeg0rx.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516920/amis_audio/vocabulary/did2_09_10.wav", "color": "#4db6ac" },
            "x": { "amis": "sasisit", "chinese": "橡皮擦", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156728/sasipasip_qhetcn.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516922/amis_audio/vocabulary/did2_09_70.wav", "color": "#ff8a65" }
          },
          "海岸阿美語": {
            "a": { "amis": "konga", "chinese": "地瓜", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777153909/%E5%9C%B0%E7%93%9C_fnjii7.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516924/amis_audio/vocabulary/did3_08_56.wav", "color": "#bae6fd" },
            "b": { "amis": "pawli", "chinese": "香蕉", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769552419/%E9%A6%99%E8%95%89_skemlo.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516927/amis_audio/vocabulary/did3_08_01.wav", "color": "#ffe8b3" },
            "c": { "amis": "papah", "chinese": "葉子", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777153825/papah_zaxyps.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516929/amis_audio/vocabulary/did3_08_06.wav", "color": "#fb8c00" },
            "d": { "amis": "tefos", "chinese": "甘蔗", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778952491/Gemini_Generated_Image_9dzcqy9dzcqy9dzc_tm01xb.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516931/amis_audio/vocabulary/did3_08_05.wav", "color": "#e63946" },
            "e": { "amis": "tali", "chinese": "芋頭", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778952586/Gemini_Generated_Image_evnpcnevnpcnevnp_iq5iz7.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516934/amis_audio/vocabulary/did3_08_04.wav", "color": "#f48fb1" },
            "f": { "amis": "ariray", "chinese": "玉米", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777153955/%E7%8E%89%E7%B1%B3_oyyfa9.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516937/amis_audio/vocabulary/did3_08_12.wav", "color": "#66bb6a" },
            "g": { "amis": "panay", "chinese": "稻米", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777154570/%E7%A8%BB%E5%AD%90_nblr8d.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516939/amis_audio/vocabulary/did3_08_02.wav", "color": "#ba68c8" },
            "h": { "amis": "mami'", "chinese": "柑橘", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777154953/mami_i_ocivep.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516942/amis_audio/vocabulary/did3_08_08.wav", "color": "#fdd835" },
            "i": { "amis": "kilang", "chinese": "樹", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777155615/kilang_ox9hma.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516944/amis_audio/vocabulary/did3_08_03.wav", "color": "#4db6ac" },
            "j": { "amis": "hana", "chinese": "花朵", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777152680/%E8%8A%B1_0_gpvoq2.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516946/amis_audio/vocabulary/did3_08_09.wav", "color": "#ff8a65" },
            "o": { "amis": "codad/hong", "chinese": "書", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777155060/tilid_ew1rtz.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516949/amis_audio/vocabulary/did3_09_01.wav", "color": "#bae6fd" },
            "p": { "amis": "payso", "chinese": "錢", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156600/payso_cqkezl.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516951/amis_audio/vocabulary/did3_09_02.wav", "color": "#ffe8b3" },
            "q": { "amis": "mali", "chinese": "球", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777157447/Gemini_Generated_Image_3aflyv3aflyv3afl_fol4mn.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516954/amis_audio/vocabulary/did3_09_03.wav", "color": "#fb8c00" },
            "r": { "amis": "parad", "chinese": "桌子", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156371/%E6%A1%8C%E5%AD%90_fcjkgu.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516956/amis_audio/vocabulary/did3_09_04.wav", "color": "#e63946" },
            "s": { "amis": "tingwa", "chinese": "電話", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777157306/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-04-26_064756_vpkhto.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516959/amis_audio/vocabulary/did3_09_05.wav", "color": "#f48fb1" },
            "t": { "amis": "impic", "chinese": "筆", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777155464/Gemini_Generated_Image_sccsjosccsjosccs_hzjlvc.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516961/amis_audio/vocabulary/did3_09_06.wav", "color": "#66bb6a" },
            "u": { "amis": "anengan", "chinese": "椅子", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156867/Gemini_Generated_Image_q46gggq46gggq46g_gwiz9l.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516963/amis_audio/vocabulary/did3_09_07.wav", "color": "#ba68c8" },
            "v": { "amis": "sapaiyo", "chinese": "藥物", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778952649/Gemini_Generated_Image_zboiwszboiwszboi_d0ueaj.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516966/amis_audio/vocabulary/did3_09_08.wav", "color": "#fdd835" },
            "w": { "amis": "linay", "chinese": "雨傘", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777157104/dinay_qeg0rx.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516968/amis_audio/vocabulary/did3_09_10.wav", "color": "#4db6ac" },
            "x": { "amis": "sararop/sasisit", "chinese": "橡皮擦", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156728/sasipasip_qhetcn.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516971/amis_audio/vocabulary/did3_09_70.wav", "color": "#ff8a65" }
          },
          "馬蘭阿美語": {
            "a": { "amis": "konga", "chinese": "地瓜", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777153909/%E5%9C%B0%E7%93%9C_fnjii7.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516973/amis_audio/vocabulary/did4_08_56.wav", "color": "#bae6fd" },
            "b": { "amis": "pawli", "chinese": "香蕉", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769552419/%E9%A6%99%E8%95%89_skemlo.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516975/amis_audio/vocabulary/did4_08_01.wav", "color": "#ffe8b3" },
            "c": { "amis": "papah", "chinese": "葉子", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777153825/papah_zaxyps.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516978/amis_audio/vocabulary/did4_08_06.wav", "color": "#fb8c00" },
            "d": { "amis": "tefos", "chinese": "甘蔗", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778952491/Gemini_Generated_Image_9dzcqy9dzcqy9dzc_tm01xb.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516980/amis_audio/vocabulary/did4_08_05.wav", "color": "#e63946" },
            "e": { "amis": "tali", "chinese": "芋頭", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778952586/Gemini_Generated_Image_evnpcnevnpcnevnp_iq5iz7.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516982/amis_audio/vocabulary/did4_08_04.wav", "color": "#f48fb1" },
            "f": { "amis": "ariray", "chinese": "玉米", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777153955/%E7%8E%89%E7%B1%B3_oyyfa9.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516985/amis_audio/vocabulary/did4_08_12.wav", "color": "#66bb6a" },
            "g": { "amis": "adas", "chinese": "稻穀", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777154570/%E7%A8%BB%E5%AD%90_nblr8d.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516988/amis_audio/vocabulary/did4_08_02.wav", "color": "#ba68c8" },
            "h": { "amis": "asilo", "chinese": "柑橘", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777154953/mami_i_ocivep.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516990/amis_audio/vocabulary/did4_08_08.wav", "color": "#fdd835" },
            "i": { "amis": "kilang", "chinese": "樹", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777155615/kilang_ox9hma.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516992/amis_audio/vocabulary/did4_08_03.wav", "color": "#4db6ac" },
            "j": { "amis": "falo", "chinese": "花朵", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777152680/%E8%8A%B1_0_gpvoq2.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516995/amis_audio/vocabulary/did4_08_09.wav", "color": "#ff8a65" },
            "o": { "amis": "tilid", "chinese": "書", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777155060/tilid_ew1rtz.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779516997/amis_audio/vocabulary/did4_09_01.wav", "color": "#bae6fd" },
            "p": { "amis": "payci", "chinese": "錢", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156600/payso_cqkezl.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779517000/amis_audio/vocabulary/did4_09_02.wav", "color": "#ffe8b3" },
            "q": { "amis": "mali", "chinese": "球", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777157447/Gemini_Generated_Image_3aflyv3aflyv3afl_fol4mn.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779517002/amis_audio/vocabulary/did4_09_03.wav", "color": "#fb8c00" },
            "r": { "amis": "cokowi", "chinese": "桌子", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156371/%E6%A1%8C%E5%AD%90_fcjkgu.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779517004/amis_audio/vocabulary/did4_09_04.wav", "color": "#e63946" },
            "s": { "amis": "tingwa", "chinese": "電話", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777157306/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-04-26_064756_vpkhto.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779517006/amis_audio/vocabulary/did4_09_05.wav", "color": "#f48fb1" },
            "t": { "amis": "impic", "chinese": "筆", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777155464/Gemini_Generated_Image_sccsjosccsjosccs_hzjlvc.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779517009/amis_audio/vocabulary/did4_09_06.wav", "color": "#66bb6a" },
            "u": { "amis": "hakenang", "chinese": "椅子", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156867/Gemini_Generated_Image_q46gggq46gggq46g_gwiz9l.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779517011/amis_audio/vocabulary/did4_09_07.wav", "color": "#ba68c8" },
            "v": { "amis": "sapaiyo", "chinese": "藥物", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778952649/Gemini_Generated_Image_zboiwszboiwszboi_d0ueaj.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779517014/amis_audio/vocabulary/did4_09_08.wav", "color": "#fdd835" },
            "w": { "amis": "dinay", "chinese": "雨傘", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777157104/dinay_qeg0rx.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779517016/amis_audio/vocabulary/did4_09_10.wav", "color": "#4db6ac" },
            "x": { "amis": "sasipasip", "chinese": "橡皮擦", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156728/sasipasip_qhetcn.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779517018/amis_audio/vocabulary/did4_09_70.wav", "color": "#ff8a65" }
          },
          "恆春阿美語": {
            "a": { "amis": "konga", "chinese": "地瓜", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777153909/%E5%9C%B0%E7%93%9C_fnjii7.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779517020/amis_audio/vocabulary/did5_08_56.wav", "color": "#bae6fd" },
            "b": { "amis": "pawli", "chinese": "香蕉", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769552419/%E9%A6%99%E8%95%89_skemlo.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779517023/amis_audio/vocabulary/did5_08_01.wav", "color": "#ffe8b3" },
            "c": { "amis": "papah", "chinese": "葉子", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777153825/papah_zaxyps.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779517025/amis_audio/vocabulary/did5_08_06.wav", "color": "#fb8c00" },
            "d": { "amis": "tefos", "chinese": "甘蔗", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778952491/Gemini_Generated_Image_9dzcqy9dzcqy9dzc_tm01xb.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779517028/amis_audio/vocabulary/did5_08_05.wav", "color": "#e63946" },
            "e": { "amis": "tali", "chinese": "芋頭", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778952586/Gemini_Generated_Image_evnpcnevnpcnevnp_iq5iz7.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779517030/amis_audio/vocabulary/did5_08_04.wav", "color": "#f48fb1" },
            "f": { "amis": "ariray", "chinese": "玉米", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777153955/%E7%8E%89%E7%B1%B3_oyyfa9.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779517033/amis_audio/vocabulary/did5_08_12.wav", "color": "#66bb6a" },
            "g": { "amis": "asad", "chinese": "稻穀", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777154570/%E7%A8%BB%E5%AD%90_nblr8d.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779517035/amis_audio/vocabulary/did5_08_02.wav", "color": "#ba68c8" },
            "h": { "amis": "asilo", "chinese": "柑橘", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777154953/mami_i_ocivep.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779517038/amis_audio/vocabulary/did5_08_08.wav", "color": "#fdd835" },
            "i": { "amis": "kilang", "chinese": "樹", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777155615/kilang_ox9hma.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779517040/amis_audio/vocabulary/did5_08_03.wav", "color": "#4db6ac" },
            "j": { "amis": "hana", "chinese": "花朵", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777152680/%E8%8A%B1_0_gpvoq2.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779517043/amis_audio/vocabulary/did5_08_09.wav", "color": "#ff8a65" },
            "o": { "amis": "tilid", "chinese": "書", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777155060/tilid_ew1rtz.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779517045/amis_audio/vocabulary/did5_09_01.wav", "color": "#bae6fd" },
            "p": { "amis": "payci", "chinese": "錢", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156600/payso_cqkezl.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779517048/amis_audio/vocabulary/did5_09_02.wav", "color": "#ffe8b3" },
            "q": { "amis": "mali", "chinese": "球", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777157447/Gemini_Generated_Image_3aflyv3aflyv3afl_fol4mn.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779517050/amis_audio/vocabulary/did5_09_03.wav", "color": "#fb8c00" },
            "r": { "amis": "^eto", "chinese": "桌子", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156371/%E6%A1%8C%E5%AD%90_fcjkgu.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779517052/amis_audio/vocabulary/did5_09_04.wav", "color": "#e63946" },
            "s": { "amis": "tingwa", "chinese": "電話", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777157306/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-04-26_064756_vpkhto.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779517055/amis_audio/vocabulary/did5_09_05.wav", "color": "#f48fb1" },
            "t": { "amis": "impic", "chinese": "筆", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777155464/Gemini_Generated_Image_sccsjosccsjosccs_hzjlvc.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779517057/amis_audio/vocabulary/did5_09_06.wav", "color": "#66bb6a" },
            "u": { "amis": "axnan", "chinese": "椅子", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156867/Gemini_Generated_Image_q46gggq46gggq46g_gwiz9l.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779517060/amis_audio/vocabulary/did5_09_07.wav", "color": "#ba68c8" },
            "v": { "amis": "cemel", "chinese": "藥物", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778952649/Gemini_Generated_Image_zboiwszboiwszboi_d0ueaj.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779517062/amis_audio/vocabulary/did5_09_08.wav", "color": "#fdd835" },
            "w": { "amis": "dinay", "chinese": "雨傘", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777157104/dinay_qeg0rx.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779517064/amis_audio/vocabulary/did5_09_10.wav", "color": "#4db6ac" },
            "x": { "amis": "sasipasip", "chinese": "橡皮擦", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156728/sasipasip_qhetcn.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779517067/amis_audio/vocabulary/did5_09_70.wav", "color": "#ff8a65" }
          }
        }
    },
topic8: {
        id: "topic8",
        title: "全阿美語版-山川地理_自然景觀",
        sentences: COMMON_SENTENCES,
        sentencesByDialect: COMMON_SENTENCES_BY_DIALECT,
        dicePrompts: ["ira ko...", "ira ko...", "ira ko..."],
        gridData: {
          "a": { "amis": "lotok", "chinese": "山", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778934960/Gemini_Generated_Image_nb8gp1nb8gp1nb8g_llhrdf.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510479/amis_audio/sp_junior/did2_11_1.mp3", "color": "#bae6fd" },
          "b": { "amis": "loma'", "chinese": "家", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778935143/Gemini_Generated_Image_gp0qt0gp0qt0gp0q_lmcgsp.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510481/amis_audio/sp_junior/did2_11_2.mp3", "color": "#ffe8b3" },
          "c": { "amis": "picodadan", "chinese": "學校", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778935511/unnamed_kluw8s.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510483/amis_audio/sp_junior/did2_11_3.mp3", "color": "#fb8c00" },
          "d": { "amis": "cidal", "chinese": "太陽", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778936150/copy_of_unnamed_3_tvfuqa.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510485/amis_audio/sp_junior/did2_11_4.mp3", "color": "#e63946" },
          "e": { "amis": "folad", "chinese": "月亮", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778936398/Gemini_Generated_Image_h5oyy5h5oyy5h5oy_nywaek.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510487/amis_audio/sp_junior/did2_11_5.mp3", "color": "#f48fb1" },
          "f": { "amis": "fo'is", "chinese": "星星", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778937086/Gemini_Generated_Image_79nivo79nivo79ni_ru93ep.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510489/amis_audio/sp_junior/did2_11_6.mp3", "color": "#66bb6a" },
          "g": { "amis": "o'ol/cahid", "chinese": "雲", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778937367/unnamed_5_ntvwmu.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510492/amis_audio/sp_junior/did2_11_7.mp3", "color": "#ba68c8" },
          "h": { "amis": "tarakar ni idek / tilo ni idek", "chinese": "彩虹", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778937541/Gemini_Generated_Image_9ar6tr9ar6tr9ar6_ligz9v.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510494/amis_audio/sp_junior/did2_11_8.mp3", "color": "#fdd835" },
          "i": { "amis": "kakarayan", "chinese": "天空", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778937639/Gemini_Generated_Image_pp1r97pp1r97pp1r_labr8v.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510496/amis_audio/sp_junior/did2_11_9.mp3", "color": "#4db6ac" },
          "j": { "amis": "kilakilangan", "chinese": "山林", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778937709/Gemini_Generated_Image_t1oaczt1oaczt1oa_l4zjc8.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510587/amis_audio/vocabulary/did2_10_02.wav", "color": "#ff8a65" },
          "o": { "amis": "alo", "chinese": "小溪", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778937781/Gemini_Generated_Image_790nww790nww790n_fnvubi.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510590/amis_audio/vocabulary/did2_10_03.wav", "color": "#bae6fd" },
          "p": { "amis": "ma'orad", "chinese": "下雨", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778937929/Gemini_Generated_Image_gcn621gcn621gcn6_iui1zt.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510592/amis_audio/vocabulary/did2_11_01.wav", "color": "#ffe8b3" },
          "q": { "amis": "orad", "chinese": "雨", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778938494/unnamed_9_n6bf7b.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510596/amis_audio/vocabulary/did2_11_06.wav", "color": "#fb8c00" },
          "r": { "amis": "kasienawan", "chinese": "冬天", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778938709/unnamed_10_x47k6x.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510599/amis_audio/vocabulary/did2_11_08.wav", "color": "#e63946" },
          "s": { "amis": "kaciherangan/lalood", "chinese": "夏天", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778939133/06957e05-da09-48c5-955d-39601594a1dd_x8ln5h.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510602/amis_audio/vocabulary/did2_11_09.wav", "color": "#f48fb1" },
          "t": { "amis": "kacanglahan", "chinese": "春天", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778938926/7db6e1a2-2740-4430-94a0-39aa004d34db_fqlijc.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510608/amis_audio/vocabulary/did2_11_25.wav", "color": "#66bb6a" },
          "u": { "amis": "kafarawfawan", "chinese": "秋天", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778939262/unnamed_12_b6cyfs.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510611/amis_audio/vocabulary/did2_11_27.wav", "color": "#ba68c8" },
          "v": { "amis": "micelem to ko cidal", "chinese": "日落", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778940047/unnamed_15_ovtzbv.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510614/amis_audio/vocabulary/did2_11_29.wav", "color": "#fdd835" },
          "w": { "amis": "masefad to ko to'man", "chinese": "天黑", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778940175/unnamed_16_qesivg.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510616/amis_audio/vocabulary/did2_11_30.wav", "color": "#4db6ac" },
          "x": { "amis": "kafaliyosan", "chinese": "刮颱風", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778940776/Gemini_Generated_Image_3nxd9g3nxd9g3nxd_ys709u.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510619/amis_audio/vocabulary/did2_11_32.wav", "color": "#ff8a65" }
        },
        gridDataByDialect: {
             "南勢阿美語": {
                    "a": {
                              "amis": "lutuk",
                              "chinese": "山",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778934960/Gemini_Generated_Image_nb8gp1nb8gp1nb8g_llhrdf.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510460/amis_audio/sp_junior/did1_11_1.mp3",
                              "color": "#bae6fd"
                    },
                    "b": {
                              "amis": "luma'",
                              "chinese": "家",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778935143/Gemini_Generated_Image_gp0qt0gp0qt0gp0q_lmcgsp.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510462/amis_audio/sp_junior/did1_11_2.mp3",
                              "color": "#ffe8b3"
                    },
                    "c": {
                              "amis": "cacudadan",
                              "chinese": "學校",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778935511/unnamed_kluw8s.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510464/amis_audio/sp_junior/did1_11_3.mp3",
                              "color": "#fb8c00"
                    },
                    "d": {
                              "amis": "cidal",
                              "chinese": "太陽",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778936150/copy_of_unnamed_3_tvfuqa.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510466/amis_audio/sp_junior/did1_11_4.mp3",
                              "color": "#e63946"
                    },
                    "e": {
                              "amis": "vulad",
                              "chinese": "月亮",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778936398/Gemini_Generated_Image_h5oyy5h5oyy5h5oy_nywaek.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510468/amis_audio/sp_junior/did1_11_5.mp3",
                              "color": "#f48fb1"
                    },
                    "f": {
                              "amis": "vuis",
                              "chinese": "星星",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778937086/Gemini_Generated_Image_79nivo79nivo79ni_ru93ep.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510470/amis_audio/sp_junior/did1_11_6.mp3",
                              "color": "#66bb6a"
                    },
                    "g": {
                              "amis": "kutem",
                              "chinese": "雲",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778937367/unnamed_5_ntvwmu.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510472/amis_audio/sp_junior/did1_11_7.mp3",
                              "color": "#ba68c8"
                    },
                    "h": {
                              "amis": "talakal ni Adek",
                              "chinese": "彩虹",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778937541/Gemini_Generated_Image_9ar6tr9ar6tr9ar6_ligz9v.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510475/amis_audio/sp_junior/did1_11_8.mp3",
                              "color": "#fdd835"
                    },
                    "i": {
                              "amis": "kakarayan",
                              "chinese": "天空",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778937639/Gemini_Generated_Image_pp1r97pp1r97pp1r_labr8v.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510477/amis_audio/sp_junior/did1_11_9.mp3",
                              "color": "#4db6ac"
                    },
                    "j": {
                              "amis": "kilakilangan",
                              "chinese": "山林",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778937709/Gemini_Generated_Image_t1oaczt1oaczt1oa_l4zjc8.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510554/amis_audio/vocabulary/did1_10_02.wav",
                              "color": "#ff8a65"
                    },
                    "o": {
                              "amis": "sauwac",
                              "chinese": "小溪",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778937781/Gemini_Generated_Image_790nww790nww790n_fnvubi.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510557/amis_audio/vocabulary/did1_10_03.wav",
                              "color": "#bae6fd"
                    },
                    "p": {
                              "amis": "maurad",
                              "chinese": "下雨",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778937929/Gemini_Generated_Image_gcn621gcn621gcn6_iui1zt.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510560/amis_audio/vocabulary/did1_11_01.wav",
                              "color": "#ffe8b3"
                    },
                    "q": {
                              "amis": "urad",
                              "chinese": "雨",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778938494/unnamed_9_n6bf7b.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510562/amis_audio/vocabulary/did1_11_06.wav",
                              "color": "#fb8c00"
                    },
                    "r": {
                              "amis": "kasienawan",
                              "chinese": "冬天",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778938709/unnamed_10_x47k6x.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510564/amis_audio/vocabulary/did1_11_08.wav",
                              "color": "#e63946"
                    },
                    "s": {
                              "amis": "kalaludan",
                              "chinese": "夏天",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778939133/06957e05-da09-48c5-955d-39601594a1dd_x8ln5h.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510567/amis_audio/vocabulary/did1_11_09.wav",
                              "color": "#f48fb1"
                    },
                    "t": {
                              "amis": "kacanglahan",
                              "chinese": "春天",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778938926/7db6e1a2-2740-4430-94a0-39aa004d34db_fqlijc.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510572/amis_audio/vocabulary/did1_11_25.wav",
                              "color": "#66bb6a"
                    },
                    "u": {
                              "amis": "kasariwsiwan",
                              "chinese": "秋天",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778939262/unnamed_12_b6cyfs.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510574/amis_audio/vocabulary/did1_11_27.wav",
                              "color": "#ba68c8"
                    },
                    "v": {
                              "amis": "kacereman nu cidal",
                              "chinese": "日落",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778940047/unnamed_15_ovtzbv.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510577/amis_audio/vocabulary/did1_11_29.wav",
                              "color": "#fdd835"
                    },
                    "w": {
                              "amis": "tuemanan",
                              "chinese": "天黑",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778940175/unnamed_16_qesivg.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510579/amis_audio/vocabulary/did1_11_30.wav",
                              "color": "#4db6ac"
                    },
                    "x": {
                              "amis": "valiyusan",
                              "chinese": "刮颱風",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778940776/Gemini_Generated_Image_3nxd9g3nxd9g3nxd_ys709u.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510582/amis_audio/vocabulary/did1_11_32.wav",
                              "color": "#ff8a65"
                    }
             },
             "秀姑巒阿美語": {
                    "a": {
                              "amis": "lotok",
                              "chinese": "山",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778934960/Gemini_Generated_Image_nb8gp1nb8gp1nb8g_llhrdf.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510479/amis_audio/sp_junior/did2_11_1.mp3",
                              "color": "#bae6fd"
                    },
                    "b": {
                              "amis": "loma'",
                              "chinese": "家",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778935143/Gemini_Generated_Image_gp0qt0gp0qt0gp0q_lmcgsp.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510481/amis_audio/sp_junior/did2_11_2.mp3",
                              "color": "#ffe8b3"
                    },
                    "c": {
                              "amis": "picodadan",
                              "chinese": "學校",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778935511/unnamed_kluw8s.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510483/amis_audio/sp_junior/did2_11_3.mp3",
                              "color": "#fb8c00"
                    },
                    "d": {
                              "amis": "cidal",
                              "chinese": "太陽",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778936150/copy_of_unnamed_3_tvfuqa.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510485/amis_audio/sp_junior/did2_11_4.mp3",
                              "color": "#e63946"
                    },
                    "e": {
                              "amis": "folad",
                              "chinese": "月亮",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778936398/Gemini_Generated_Image_h5oyy5h5oyy5h5oy_nywaek.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510487/amis_audio/sp_junior/did2_11_5.mp3",
                              "color": "#f48fb1"
                    },
                    "f": {
                              "amis": "fo'is",
                              "chinese": "星星",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778937086/Gemini_Generated_Image_79nivo79nivo79ni_ru93ep.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510489/amis_audio/sp_junior/did2_11_6.mp3",
                              "color": "#66bb6a"
                    },
                    "g": {
                              "amis": "o'ol/cahid",
                              "chinese": "雲",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778937367/unnamed_5_ntvwmu.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510492/amis_audio/sp_junior/did2_11_7.mp3",
                              "color": "#ba68c8"
                    },
                    "h": {
                              "amis": "tarakar ni idek / tilo ni idek",
                              "chinese": "彩虹",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778937541/Gemini_Generated_Image_9ar6tr9ar6tr9ar6_ligz9v.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510494/amis_audio/sp_junior/did2_11_8.mp3",
                              "color": "#fdd835"
                    },
                    "i": {
                              "amis": "kakarayan",
                              "chinese": "天空",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778937639/Gemini_Generated_Image_pp1r97pp1r97pp1r_labr8v.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510496/amis_audio/sp_junior/did2_11_9.mp3",
                              "color": "#4db6ac"
                    },
                    "j": {
                              "amis": "kilakilangan",
                              "chinese": "山林",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778937709/Gemini_Generated_Image_t1oaczt1oaczt1oa_l4zjc8.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510587/amis_audio/vocabulary/did2_10_02.wav",
                              "color": "#ff8a65"
                    },
                    "o": {
                              "amis": "alo",
                              "chinese": "小溪",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778937781/Gemini_Generated_Image_790nww790nww790n_fnvubi.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510590/amis_audio/vocabulary/did2_10_03.wav",
                              "color": "#bae6fd"
                    },
                    "p": {
                              "amis": "ma'orad",
                              "chinese": "下雨",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778937929/Gemini_Generated_Image_gcn621gcn621gcn6_iui1zt.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510592/amis_audio/vocabulary/did2_11_01.wav",
                              "color": "#ffe8b3"
                    },
                    "q": {
                              "amis": "orad",
                              "chinese": "雨",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778938494/unnamed_9_n6bf7b.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510596/amis_audio/vocabulary/did2_11_06.wav",
                              "color": "#fb8c00"
                    },
                    "r": {
                              "amis": "kasienawan",
                              "chinese": "冬天",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778938709/unnamed_10_x47k6x.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510599/amis_audio/vocabulary/did2_11_08.wav",
                              "color": "#e63946"
                    },
                    "s": {
                              "amis": "kaciherangan/lalood",
                              "chinese": "夏天",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778939133/06957e05-da09-48c5-955d-39601594a1dd_x8ln5h.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510602/amis_audio/vocabulary/did2_11_09.wav",
                              "color": "#f48fb1"
                    },
                    "t": {
                              "amis": "kacanglahan",
                              "chinese": "春天",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778938926/7db6e1a2-2740-4430-94a0-39aa004d34db_fqlijc.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510608/amis_audio/vocabulary/did2_11_25.wav",
                              "color": "#66bb6a"
                    },
                    "u": {
                              "amis": "kafarawfawan",
                              "chinese": "秋天",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778939262/unnamed_12_b6cyfs.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510611/amis_audio/vocabulary/did2_11_27.wav",
                              "color": "#ba68c8"
                    },
                    "v": {
                              "amis": "micelem to ko cidal",
                              "chinese": "日落",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778940047/unnamed_15_ovtzbv.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510614/amis_audio/vocabulary/did2_11_29.wav",
                              "color": "#fdd835"
                    },
                    "w": {
                              "amis": "masefad to ko to'man",
                              "chinese": "天黑",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778940175/unnamed_16_qesivg.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510616/amis_audio/vocabulary/did2_11_30.wav",
                              "color": "#4db6ac"
                    },
                    "x": {
                              "amis": "kafaliyosan",
                              "chinese": "刮颱風",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778940776/Gemini_Generated_Image_3nxd9g3nxd9g3nxd_ys709u.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510619/amis_audio/vocabulary/did2_11_32.wav",
                              "color": "#ff8a65"
                    }
             },
             "海岸阿美語": {
                    "a": {
                              "amis": "lotok",
                              "chinese": "山",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778934960/Gemini_Generated_Image_nb8gp1nb8gp1nb8g_llhrdf.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510498/amis_audio/sp_junior/did3_11_1.mp3",
                              "color": "#bae6fd"
                    },
                    "b": {
                              "amis": "loma'",
                              "chinese": "家",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778935143/Gemini_Generated_Image_gp0qt0gp0qt0gp0q_lmcgsp.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510500/amis_audio/sp_junior/did3_11_2.mp3",
                              "color": "#ffe8b3"
                    },
                    "c": {
                              "amis": "pitilidan",
                              "chinese": "學校",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778935511/unnamed_kluw8s.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510502/amis_audio/sp_junior/did3_11_3.mp3",
                              "color": "#fb8c00"
                    },
                    "d": {
                              "amis": "cidal",
                              "chinese": "太陽",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778936150/copy_of_unnamed_3_tvfuqa.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510504/amis_audio/sp_junior/did3_11_4.mp3",
                              "color": "#e63946"
                    },
                    "e": {
                              "amis": "folad",
                              "chinese": "月亮",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778936398/Gemini_Generated_Image_h5oyy5h5oyy5h5oy_nywaek.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510506/amis_audio/sp_junior/did3_11_5.mp3",
                              "color": "#f48fb1"
                    },
                    "f": {
                              "amis": "fo'is",
                              "chinese": "星星",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778937086/Gemini_Generated_Image_79nivo79nivo79ni_ru93ep.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510508/amis_audio/sp_junior/did3_11_6.mp3",
                              "color": "#66bb6a"
                    },
                    "g": {
                              "amis": "kadit",
                              "chinese": "雲",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778937367/unnamed_5_ntvwmu.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510510/amis_audio/sp_junior/did3_11_7.mp3",
                              "color": "#ba68c8"
                    },
                    "h": {
                              "amis": "tilo ni Idek",
                              "chinese": "彩虹",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778937541/Gemini_Generated_Image_9ar6tr9ar6tr9ar6_ligz9v.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510512/amis_audio/sp_junior/did3_11_8.mp3",
                              "color": "#fdd835"
                    },
                    "i": {
                              "amis": "kakarayan",
                              "chinese": "天空",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778937639/Gemini_Generated_Image_pp1r97pp1r97pp1r_labr8v.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510514/amis_audio/sp_junior/did3_11_9.mp3",
                              "color": "#4db6ac"
                    },
                    "j": {
                              "amis": "lotolotokan",
                              "chinese": "山林",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778937709/Gemini_Generated_Image_t1oaczt1oaczt1oa_l4zjc8.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510624/amis_audio/vocabulary/did3_10_02.wav",
                              "color": "#ff8a65"
                    },
                    "o": {
                              "amis": "cieci'",
                              "chinese": "小溪",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778937781/Gemini_Generated_Image_790nww790nww790n_fnvubi.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510626/amis_audio/vocabulary/did3_10_03.wav",
                              "color": "#bae6fd"
                    },
                    "p": {
                              "amis": "ma'orad",
                              "chinese": "下雨",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778937929/Gemini_Generated_Image_gcn621gcn621gcn6_iui1zt.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510628/amis_audio/vocabulary/did3_11_01.wav",
                              "color": "#ffe8b3"
                    },
                    "q": {
                              "amis": "orad",
                              "chinese": "雨",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778938494/unnamed_9_n6bf7b.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510631/amis_audio/vocabulary/did3_11_06.wav",
                              "color": "#fb8c00"
                    },
                    "r": {
                              "amis": "kasienawan",
                              "chinese": "冬天",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778938709/unnamed_10_x47k6x.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510633/amis_audio/vocabulary/did3_11_08.wav",
                              "color": "#e63946"
                    },
                    "s": {
                              "amis": "kaciherangan",
                              "chinese": "夏天",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778939133/06957e05-da09-48c5-955d-39601594a1dd_x8ln5h.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510636/amis_audio/vocabulary/did3_11_09.wav",
                              "color": "#f48fb1"
                    },
                    "t": {
                              "amis": "kacanglahan",
                              "chinese": "春天",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778938926/7db6e1a2-2740-4430-94a0-39aa004d34db_fqlijc.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510641/amis_audio/vocabulary/did3_11_25.wav",
                              "color": "#66bb6a"
                    },
                    "u": {
                              "amis": "kalaloodan",
                              "chinese": "秋天",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778939262/unnamed_12_b6cyfs.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510644/amis_audio/vocabulary/did3_11_27.wav",
                              "color": "#ba68c8"
                    },
                    "v": {
                              "amis": "hakakerem",
                              "chinese": "日落",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778940047/unnamed_15_ovtzbv.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510647/amis_audio/vocabulary/did3_11_29.wav",
                              "color": "#fdd835"
                    },
                    "w": {
                              "amis": "to'eman",
                              "chinese": "天黑",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778940175/unnamed_16_qesivg.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510649/amis_audio/vocabulary/did3_11_30.wav",
                              "color": "#4db6ac"
                    },
                    "x": {
                              "amis": "mafaliyos",
                              "chinese": "刮颱風",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778940776/Gemini_Generated_Image_3nxd9g3nxd9g3nxd_ys709u.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510652/amis_audio/vocabulary/did3_11_32.wav",
                              "color": "#ff8a65"
                    }
             },
             "馬蘭阿美語": {
                    "a": {
                              "amis": "tokos",
                              "chinese": "山",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778934960/Gemini_Generated_Image_nb8gp1nb8gp1nb8g_llhrdf.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510516/amis_audio/sp_junior/did4_11_1.mp3",
                              "color": "#bae6fd"
                    },
                    "b": {
                              "amis": "loma'",
                              "chinese": "家",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778935143/Gemini_Generated_Image_gp0qt0gp0qt0gp0q_lmcgsp.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510518/amis_audio/sp_junior/did4_11_2.mp3",
                              "color": "#ffe8b3"
                    },
                    "c": {
                              "amis": "kongkoan",
                              "chinese": "學校",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778935511/unnamed_kluw8s.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510520/amis_audio/sp_junior/did4_11_3.mp3",
                              "color": "#fb8c00"
                    },
                    "d": {
                              "amis": "cidal",
                              "chinese": "太陽",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778936150/copy_of_unnamed_3_tvfuqa.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510522/amis_audio/sp_junior/did4_11_4.mp3",
                              "color": "#e63946"
                    },
                    "e": {
                              "amis": "folad",
                              "chinese": "月亮",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778936398/Gemini_Generated_Image_h5oyy5h5oyy5h5oy_nywaek.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510524/amis_audio/sp_junior/did4_11_5.mp3",
                              "color": "#f48fb1"
                    },
                    "f": {
                              "amis": "fo'is",
                              "chinese": "星星",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778937086/Gemini_Generated_Image_79nivo79nivo79ni_ru93ep.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510526/amis_audio/sp_junior/did4_11_6.mp3",
                              "color": "#66bb6a"
                    },
                    "g": {
                              "amis": "toem",
                              "chinese": "雲",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778937367/unnamed_5_ntvwmu.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510528/amis_audio/sp_junior/did4_11_7.mp3",
                              "color": "#ba68c8"
                    },
                    "h": {
                              "amis": "talakar ni Idek",
                              "chinese": "彩虹",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778937541/Gemini_Generated_Image_9ar6tr9ar6tr9ar6_ligz9v.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510530/amis_audio/sp_junior/did4_11_8.mp3",
                              "color": "#fdd835"
                    },
                    "i": {
                              "amis": "kakarayan",
                              "chinese": "天空",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778937639/Gemini_Generated_Image_pp1r97pp1r97pp1r_labr8v.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510532/amis_audio/sp_junior/did4_11_9.mp3",
                              "color": "#4db6ac"
                    },
                    "j": {
                              "amis": "lotok",
                              "chinese": "山林",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778937709/Gemini_Generated_Image_t1oaczt1oaczt1oa_l4zjc8.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510657/amis_audio/vocabulary/did4_10_02.wav",
                              "color": "#ff8a65"
                    },
                    "o": {
                              "amis": "ci'ci'",
                              "chinese": "小溪",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778937781/Gemini_Generated_Image_790nww790nww790n_fnvubi.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510659/amis_audio/vocabulary/did4_10_03.wav",
                              "color": "#bae6fd"
                    },
                    "p": {
                              "amis": "ma'orad",
                              "chinese": "下雨",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778937929/Gemini_Generated_Image_gcn621gcn621gcn6_iui1zt.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510662/amis_audio/vocabulary/did4_11_01.wav",
                              "color": "#ffe8b3"
                    },
                    "q": {
                              "amis": "orad",
                              "chinese": "雨",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778938494/unnamed_9_n6bf7b.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510664/amis_audio/vocabulary/did4_11_06.wav",
                              "color": "#fb8c00"
                    },
                    "r": {
                              "amis": "kasienawan",
                              "chinese": "冬天",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778938709/unnamed_10_x47k6x.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510666/amis_audio/vocabulary/did4_11_08.wav",
                              "color": "#e63946"
                    },
                    "s": {
                              "amis": "laloodan",
                              "chinese": "夏天",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778939133/06957e05-da09-48c5-955d-39601594a1dd_x8ln5h.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510669/amis_audio/vocabulary/did4_11_09.wav",
                              "color": "#f48fb1"
                    },
                    "t": {
                              "amis": "kacanglahan",
                              "chinese": "春天",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778938926/7db6e1a2-2740-4430-94a0-39aa004d34db_fqlijc.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510674/amis_audio/vocabulary/did4_11_25.wav",
                              "color": "#66bb6a"
                    },
                    "u": {
                              "amis": "kafarawfawan",
                              "chinese": "秋天",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778939262/unnamed_12_b6cyfs.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510677/amis_audio/vocabulary/did4_11_27.wav",
                              "color": "#ba68c8"
                    },
                    "v": {
                              "amis": "maringaring",
                              "chinese": "日落",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778940047/unnamed_15_ovtzbv.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510679/amis_audio/vocabulary/did4_11_29.wav",
                              "color": "#fdd835"
                    },
                    "w": {
                              "amis": "to'eman",
                              "chinese": "天黑",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778940175/unnamed_16_qesivg.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510681/amis_audio/vocabulary/did4_11_30.wav",
                              "color": "#4db6ac"
                    },
                    "x": {
                              "amis": "mafaliyos",
                              "chinese": "刮颱風",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778940776/Gemini_Generated_Image_3nxd9g3nxd9g3nxd_ys709u.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510684/amis_audio/vocabulary/did4_11_32.wav",
                              "color": "#ff8a65"
                    }
             },
             "恆春阿美語": {
                    "a": {
                              "amis": "lotok",
                              "chinese": "山",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778934960/Gemini_Generated_Image_nb8gp1nb8gp1nb8g_llhrdf.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510534/amis_audio/sp_junior/did5_11_1.mp3",
                              "color": "#bae6fd"
                    },
                    "b": {
                              "amis": "loma'",
                              "chinese": "家",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778935143/Gemini_Generated_Image_gp0qt0gp0qt0gp0q_lmcgsp.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510535/amis_audio/sp_junior/did5_11_2.mp3",
                              "color": "#ffe8b3"
                    },
                    "c": {
                              "amis": "kongkoan",
                              "chinese": "學校",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778935511/unnamed_kluw8s.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510539/amis_audio/sp_junior/did5_11_4.mp3",
                              "color": "#fb8c00"
                    },
                    "d": {
                              "amis": "cidal",
                              "chinese": "太陽",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778936150/copy_of_unnamed_3_tvfuqa.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510541/amis_audio/sp_junior/did5_11_5.mp3",
                              "color": "#e63946"
                    },
                    "e": {
                              "amis": "folad",
                              "chinese": "月亮",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778936398/Gemini_Generated_Image_h5oyy5h5oyy5h5oy_nywaek.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510543/amis_audio/sp_junior/did5_11_6.mp3",
                              "color": "#f48fb1"
                    },
                    "f": {
                              "amis": "fo'is",
                              "chinese": "星星",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778937086/Gemini_Generated_Image_79nivo79nivo79ni_ru93ep.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510545/amis_audio/sp_junior/did5_11_7.mp3",
                              "color": "#66bb6a"
                    },
                    "g": {
                              "amis": "o'ol;carofacof",
                              "chinese": "雲",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778937367/unnamed_5_ntvwmu.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510705/amis_audio/vocabulary/did5_11_12.wav",
                              "color": "#ba68c8"
                    },
                    "h": {
                              "amis": "lidek",
                              "chinese": "彩虹",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778937541/Gemini_Generated_Image_9ar6tr9ar6tr9ar6_ligz9v.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510547/amis_audio/sp_junior/did5_11_8.mp3",
                              "color": "#fdd835"
                    },
                    "i": {
                              "amis": "kakalayan",
                              "chinese": "天空",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778937639/Gemini_Generated_Image_pp1r97pp1r97pp1r_labr8v.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510549/amis_audio/sp_junior/did5_11_9.mp3",
                              "color": "#4db6ac"
                    },
                    "j": {
                              "amis": "lotolotokan",
                              "chinese": "山林",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778937709/Gemini_Generated_Image_t1oaczt1oaczt1oa_l4zjc8.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510688/amis_audio/vocabulary/did5_10_02.wav",
                              "color": "#ff8a65"
                    },
                    "o": {
                              "amis": "alo",
                              "chinese": "小溪",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778937781/Gemini_Generated_Image_790nww790nww790n_fnvubi.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510692/amis_audio/vocabulary/did5_10_03.wav",
                              "color": "#bae6fd"
                    },
                    "p": {
                              "amis": "ma'orad",
                              "chinese": "下雨",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778937929/Gemini_Generated_Image_gcn621gcn621gcn6_iui1zt.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510694/amis_audio/vocabulary/did5_11_01.wav",
                              "color": "#ffe8b3"
                    },
                    "q": {
                              "amis": "orad",
                              "chinese": "雨",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778938494/unnamed_9_n6bf7b.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510697/amis_audio/vocabulary/did5_11_06.wav",
                              "color": "#fb8c00"
                    },
                    "r": {
                              "amis": "katiposan",
                              "chinese": "冬天",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778938709/unnamed_10_x47k6x.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510699/amis_audio/vocabulary/did5_11_08.wav",
                              "color": "#e63946"
                    },
                    "s": {
                              "amis": "kacidalan / laloodan",
                              "chinese": "夏天",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778939133/06957e05-da09-48c5-955d-39601594a1dd_x8ln5h.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510703/amis_audio/vocabulary/did5_11_09.wav",
                              "color": "#f48fb1"
                    },
                    "t": {
                              "amis": "o'ol /carofacof",
                              "chinese": "彩雲",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778939796/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-05-16_215605_d5jjjq.png",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510705/amis_audio/vocabulary/did5_11_12.wav",
                              "color": "#66bb6a"
                    },
                    "u": {
                              "amis": "kacanglahan",
                              "chinese": "春天",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778938926/7db6e1a2-2740-4430-94a0-39aa004d34db_fqlijc.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510708/amis_audio/vocabulary/did5_11_25.wav",
                              "color": "#ba68c8"
                    },
                    "v": {
                              "amis": "kafarawfawan",
                              "chinese": "秋天",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778939262/unnamed_12_b6cyfs.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510710/amis_audio/vocabulary/did5_11_27.wav",
                              "color": "#fdd835"
                    },
                    "w": {
                              "amis": "micelem ko cidal",
                              "chinese": "日落",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778940047/unnamed_15_ovtzbv.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510713/amis_audio/vocabulary/did5_11_29.wav",
                              "color": "#4db6ac"
                    },
                    "x": {
                              "amis": "to'eman",
                              "chinese": "天黑",
                              "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778940175/unnamed_16_qesivg.jpg",
                              "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779510716/amis_audio/vocabulary/did5_11_30.wav",
                              "color": "#ff8a65"
                    }
             }
        }
    },
topic10: {
        id: "topic10",
        title: "全阿美語版-顏色時間否定指示-有聲版",
        sentences: COMMON_SENTENCES,
        sentencesByDialect: COMMON_SENTENCES_BY_DIALECT,
        dicePrompts: ["ira ko...", "ira ko...", "ira ko..."],
        gridData: {
          "a": { "amis": "vuhecalay", "chinese": "白色的", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779573998/%E7%99%BD%E8%89%B2_gcsfaf.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531898/amis_audio/vocabulary/did1_22_01.wav", "color": "#bae6fd" },
          "b": { "amis": "muhetingay", "chinese": "黑色的", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779574004/%E9%BB%91%E8%89%B2_q18ewk.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531901/amis_audio/vocabulary/did1_22_02.wav", "color": "#ffe8b3" },
          "c": { "amis": "lahengangay", "chinese": "紅色的", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779574081/%E7%B4%85%E8%89%B2_ezcgez.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531903/amis_audio/vocabulary/did1_22_03.wav", "color": "#fb8c00" },
          "d": { "amis": "langdaway", "chinese": "綠色的", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779574225/%E7%B6%A0%E8%89%B2_wt1c6d.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531906/amis_audio/vocabulary/did1_22_08.wav", "color": "#e63946" },
          "e": { "amis": "kulit", "chinese": "顏色", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779574443/%E9%A1%8F%E8%89%B2_zkc65x.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531909/amis_audio/vocabulary/did1_22_09.wav", "color": "#f48fb1" },
          "f": { "amis": "lavii", "chinese": "晚上", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778940175/unnamed_16_qesivg.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531911/amis_audio/vocabulary/did1_13_02.wav", "color": "#66bb6a" },
          "g": { "amis": "nacila", "chinese": "昨天", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575782/%E6%98%A8%E5%A4%A9_nmutvj.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531913/amis_audio/vocabulary/did1_13_03.wav", "color": "#ba68c8" },
          "h": { "amis": "anucila", "chinese": "明天", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779576026/%E6%98%8E%E5%A4%A9_rghput.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531916/amis_audio/vocabulary/did1_13_04.wav", "color": "#fdd835" },
          "i": { "amis": "anini", "chinese": "今天", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575726/%E4%BB%8A%E5%A4%A9_qplqjs.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531918/amis_audio/vocabulary/did1_13_05.wav", "color": "#4db6ac" },
          "j": { "amis": "davak", "chinese": "早上", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779574698/%E6%97%A9%E4%B8%8A_wbr1af.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531920/amis_audio/vocabulary/did1_13_06.wav", "color": "#ff8a65" },
          "o": { "amis": "herek nu lahuk", "chinese": "下午", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779574783/%E4%B8%8B%E5%8D%88_dfyxvy.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531923/amis_audio/vocabulary/did1_13_25.wav", "color": "#bae6fd" },
          "p": { "amis": "anini", "chinese": "現在", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575907/%E7%8F%BE%E5%9C%A8_wvirb9.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531926/amis_audio/vocabulary/did1_13_30.wav", "color": "#ffe8b3" },
          "q": { "amis": "naay", "chinese": "不要", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575485/%E4%B8%8D%E8%A6%81_hjulv8.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531928/amis_audio/vocabulary/did1_35_01.wav", "color": "#fb8c00" },
          "r": { "amis": "akaa", "chinese": "不可以", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575344/%E4%B8%8D%E8%A1%8C_x6sugw.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531930/amis_audio/vocabulary/did1_35_02.wav", "color": "#e63946" },
          "s": { "amis": "caay", "chinese": "不是", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575599/%E4%B8%8D%E6%98%AF_zxvpnl.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531933/amis_audio/vocabulary/did1_35_03.wav", "color": "#f48fb1" },
          "t": { "amis": "awaay", "chinese": "沒有", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779576070/%E6%B2%A1%E6%9C%89_o6bptz.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531935/amis_audio/vocabulary/did1_35_04.wav", "color": "#66bb6a" },
          "u": { "amis": "naw'ay", "chinese": "不要(祈使)", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575344/%E4%B8%8D%E8%A1%8C_x6sugw.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531938/amis_audio/vocabulary/did1_35_05.wav", "color": "#ba68c8" },
          "v": { "amis": "caay kavana'", "chinese": "不知道", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575247/%E4%B8%8D%E7%9F%A5%E9%81%93_qa6uhg.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531941/amis_audio/vocabulary/did1_35_06.wav", "color": "#fdd835" },
          "w": { "amis": "itini", "chinese": "這裡", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575091/%E9%80%99%E8%A3%A1_zjahuo.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531944/amis_audio/vocabulary/did1_02_18.wav", "color": "#4db6ac" },
          "x": { "amis": "itila", "chinese": "那裡", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575141/%E9%82%A3%E8%A3%A1_nnazlo.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531946/amis_audio/vocabulary/did1_02_19.wav", "color": "#ff8a65" }
        },
        gridDataByDialect: {
          "南勢阿美語": {
            "a": { "amis": "vuhecalay", "chinese": "白色的", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779573998/%E7%99%BD%E8%89%B2_gcsfaf.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531898/amis_audio/vocabulary/did1_22_01.wav", "color": "#bae6fd" },
            "b": { "amis": "muhetingay", "chinese": "黑色的", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779574004/%E9%BB%91%E8%89%B2_q18ewk.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531901/amis_audio/vocabulary/did1_22_02.wav", "color": "#ffe8b3" },
            "c": { "amis": "lahengangay", "chinese": "紅色的", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779574081/%E7%B4%85%E8%89%B2_ezcgez.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531903/amis_audio/vocabulary/did1_22_03.wav", "color": "#fb8c00" },
            "d": { "amis": "langdaway", "chinese": "綠色的", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779574225/%E7%B6%A0%E8%89%B2_wt1c6d.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531906/amis_audio/vocabulary/did1_22_08.wav", "color": "#e63946" },
            "e": { "amis": "kulit", "chinese": "顏色", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779574443/%E9%A1%8F%E8%89%B2_zkc65x.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531909/amis_audio/vocabulary/did1_22_09.wav", "color": "#f48fb1" },
            "f": { "amis": "lavii", "chinese": "晚上", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778940175/unnamed_16_qesivg.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531911/amis_audio/vocabulary/did1_13_02.wav", "color": "#66bb6a" },
            "g": { "amis": "nacila", "chinese": "昨天", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575782/%E6%98%A8%E5%A4%A9_nmutvj.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531913/amis_audio/vocabulary/did1_13_03.wav", "color": "#ba68c8" },
            "h": { "amis": "anucila", "chinese": "明天", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779576026/%E6%98%8E%E5%A4%A9_rghput.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531916/amis_audio/vocabulary/did1_13_04.wav", "color": "#fdd835" },
            "i": { "amis": "anini", "chinese": "今天", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575726/%E4%BB%8A%E5%A4%A9_qplqjs.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531918/amis_audio/vocabulary/did1_13_05.wav", "color": "#4db6ac" },
            "j": { "amis": "davak", "chinese": "早上", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779574698/%E6%97%A9%E4%B8%8A_wbr1af.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531920/amis_audio/vocabulary/did1_13_06.wav", "color": "#ff8a65" },
            "o": { "amis": "herek nu lahuk", "chinese": "下午", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779574783/%E4%B8%8B%E5%8D%88_dfyxvy.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531923/amis_audio/vocabulary/did1_13_25.wav", "color": "#bae6fd" },
            "p": { "amis": "anini", "chinese": "現在", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575907/%E7%8F%BE%E5%9C%A8_wvirb9.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531926/amis_audio/vocabulary/did1_13_30.wav", "color": "#ffe8b3" },
            "q": { "amis": "naay", "chinese": "不要", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575485/%E4%B8%8D%E8%A6%81_hjulv8.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531928/amis_audio/vocabulary/did1_35_01.wav", "color": "#fb8c00" },
            "r": { "amis": "akaa", "chinese": "不可以", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575344/%E4%B8%8D%E8%A1%8C_x6sugw.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531930/amis_audio/vocabulary/did1_35_02.wav", "color": "#e63946" },
            "s": { "amis": "caay", "chinese": "不是", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575599/%E4%B8%8D%E6%98%AF_zxvpnl.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531933/amis_audio/vocabulary/did1_35_03.wav", "color": "#f48fb1" },
            "t": { "amis": "awaay", "chinese": "沒有", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779576070/%E6%B2%A1%E6%9C%89_o6bptz.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531935/amis_audio/vocabulary/did1_35_04.wav", "color": "#66bb6a" },
            "u": { "amis": "naw'ay", "chinese": "不要(祈使)", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575344/%E4%B8%8D%E8%A1%8C_x6sugw.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531938/amis_audio/vocabulary/did1_35_05.wav", "color": "#ba68c8" },
            "v": { "amis": "caay kavana'", "chinese": "不知道", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575247/%E4%B8%8D%E7%9F%A5%E9%81%93_qa6uhg.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531941/amis_audio/vocabulary/did1_35_06.wav", "color": "#fdd835" },
            "w": { "amis": "itini", "chinese": "這裡", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575091/%E9%80%99%E8%A3%A1_zjahuo.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531944/amis_audio/vocabulary/did1_02_18.wav", "color": "#4db6ac" },
            "x": { "amis": "itila", "chinese": "那裡", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575141/%E9%82%A3%E8%A3%A1_nnazlo.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531946/amis_audio/vocabulary/did1_02_19.wav", "color": "#ff8a65" }
          },
          "秀姑巒阿美語": {
            "a": { "amis": "fohecalay", "chinese": "白色的", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779573998/%E7%99%BD%E8%89%B2_gcsfaf.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531949/amis_audio/vocabulary/did2_22_01.wav", "color": "#bae6fd" },
            "b": { "amis": "kohetingay", "chinese": "黑色的", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779574004/%E9%BB%91%E8%89%B2_q18ewk.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531952/amis_audio/vocabulary/did2_22_02.wav", "color": "#ffe8b3" },
            "c": { "amis": "kahengangay", "chinese": "紅色的", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779574081/%E7%B4%85%E8%89%B2_ezcgez.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531954/amis_audio/vocabulary/did2_22_03.wav", "color": "#fb8c00" },
            "d": { "amis": "kangdaway", "chinese": "綠色的", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779574225/%E7%B6%A0%E8%89%B2_wt1c6d.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531957/amis_audio/vocabulary/did2_22_08.wav", "color": "#e63946" },
            "e": { "amis": "cengel", "chinese": "顏色", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779574443/%E9%A1%8F%E8%89%B2_zkc65x.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531960/amis_audio/vocabulary/did2_22_09.wav", "color": "#f48fb1" },
            "f": { "amis": "dadaya^", "chinese": "晚上", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778940175/unnamed_16_qesivg.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531962/amis_audio/vocabulary/did2_13_02.wav", "color": "#66bb6a" },
            "g": { "amis": "inacila^", "chinese": "昨天", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575782/%E6%98%A8%E5%A4%A9_nmutvj.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531965/amis_audio/vocabulary/did2_13_03.wav", "color": "#ba68c8" },
            "h": { "amis": "anocila^", "chinese": "明天", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779576026/%E6%98%8E%E5%A4%A9_rghput.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531968/amis_audio/vocabulary/did2_13_04.wav", "color": "#fdd835" },
            "i": { "amis": "anini", "chinese": "今天", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575726/%E4%BB%8A%E5%A4%A9_qplqjs.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531970/amis_audio/vocabulary/did2_13_05.wav", "color": "#4db6ac" },
            "j": { "amis": "dafak", "chinese": "早上", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779574698/%E6%97%A9%E4%B8%8A_wbr1af.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531973/amis_audio/vocabulary/did2_13_06.wav", "color": "#ff8a65" },
            "o": { "amis": "herek no lahok", "chinese": "下午", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779574783/%E4%B8%8B%E5%8D%88_dfyxvy.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531976/amis_audio/vocabulary/did2_13_25.wav", "color": "#bae6fd" },
            "p": { "amis": "matini", "chinese": "現在", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575907/%E7%8F%BE%E5%9C%A8_wvirb9.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531978/amis_audio/vocabulary/did2_13_30.wav", "color": "#ffe8b3" },
            "q": { "amis": "na'ay", "chinese": "不要", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575485/%E4%B8%8D%E8%A6%81_hjulv8.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531982/amis_audio/vocabulary/did2_35_01.wav", "color": "#fb8c00" },
            "r": { "amis": "akaa / tatiih", "chinese": "不可以", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575344/%E4%B8%8D%E8%A1%8C_x6sugw.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531985/amis_audio/vocabulary/did2_35_02.wav", "color": "#e63946" },
            "s": { "amis": "caay / cai", "chinese": "不是", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575599/%E4%B8%8D%E6%98%AF_zxvpnl.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531987/amis_audio/vocabulary/did2_35_03.wav", "color": "#f48fb1" },
            "t": { "amis": "na'ayen", "chinese": "沒有", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779576070/%E6%B2%A1%E6%9C%89_o6bptz.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531990/amis_audio/vocabulary/did2_35_04.wav", "color": "#66bb6a" },
            "u": { "amis": "na'ayen", "chinese": "不要(祈使)", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575344/%E4%B8%8D%E8%A1%8C_x6sugw.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531993/amis_audio/vocabulary/did2_35_05.wav", "color": "#ba68c8" },
            "v": { "amis": "hakeno", "chinese": "不知道", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575247/%E4%B8%8D%E7%9F%A5%E9%81%93_qa6uhg.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531995/amis_audio/vocabulary/did2_35_06.wav", "color": "#fdd835" },
            "w": { "amis": "itini", "chinese": "這裡", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575091/%E9%80%99%E8%A3%A1_zjahuo.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779531997/amis_audio/vocabulary/did2_02_18.wav", "color": "#4db6ac" },
            "x": { "amis": "itira", "chinese": "那裡", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575141/%E9%82%A3%E8%A3%A1_nnazlo.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532000/amis_audio/vocabulary/did2_02_19.wav", "color": "#ff8a65" }
          },
          "海岸阿美語": {
            "a": { "amis": "kohecalay", "chinese": "白色的", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779573998/%E7%99%BD%E8%89%B2_gcsfaf.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532003/amis_audio/vocabulary/did3_22_01.wav", "color": "#bae6fd" },
            "b": { "amis": "kohetingay", "chinese": "黑色的", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779574004/%E9%BB%91%E8%89%B2_q18ewk.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532006/amis_audio/vocabulary/did3_22_02.wav", "color": "#ffe8b3" },
            "c": { "amis": "kahengangay", "chinese": "紅色的", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779574081/%E7%B4%85%E8%89%B2_ezcgez.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532009/amis_audio/vocabulary/did3_22_03.wav", "color": "#fb8c00" },
            "d": { "amis": "kandaway", "chinese": "綠色的", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779574225/%E7%B6%A0%E8%89%B2_wt1c6d.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532011/amis_audio/vocabulary/did3_22_08.wav", "color": "#e63946" },
            "e": { "amis": "cengel", "chinese": "顏色", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779574443/%E9%A1%8F%E8%89%B2_zkc65x.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532014/amis_audio/vocabulary/did3_22_09.wav", "color": "#f48fb1" },
            "f": { "amis": "dadaya", "chinese": "晚上", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778940175/unnamed_16_qesivg.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532016/amis_audio/vocabulary/did3_13_02.wav", "color": "#66bb6a" },
            "g": { "amis": "inacila", "chinese": "昨天", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575782/%E6%98%A8%E5%A4%A9_nmutvj.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532019/amis_audio/vocabulary/did3_13_03.wav", "color": "#ba68c8" },
            "h": { "amis": "anodafak/anocila", "chinese": "明天", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779576026/%E6%98%8E%E5%A4%A9_rghput.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532022/amis_audio/vocabulary/did3_13_04.wav", "color": "#fdd835" },
            "i": { "amis": "anini", "chinese": "今天", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575726/%E4%BB%8A%E5%A4%A9_qplqjs.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532025/amis_audio/vocabulary/did3_13_05.wav", "color": "#4db6ac" },
            "j": { "amis": "dafak", "chinese": "早上", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779574698/%E6%97%A9%E4%B8%8A_wbr1af.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532028/amis_audio/vocabulary/did3_13_06.wav", "color": "#ff8a65" },
            "o": { "amis": "herek no lahok", "chinese": "下午", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779574783/%E4%B8%8B%E5%8D%88_dfyxvy.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532030/amis_audio/vocabulary/did3_13_25.wav", "color": "#bae6fd" },
            "p": { "amis": "anini", "chinese": "現在", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575907/%E7%8F%BE%E5%9C%A8_wvirb9.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532033/amis_audio/vocabulary/did3_13_30.wav", "color": "#ffe8b3" },
            "q": { "amis": "naay", "chinese": "不要", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575485/%E4%B8%8D%E8%A6%81_hjulv8.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532035/amis_audio/vocabulary/did3_35_01.wav", "color": "#fb8c00" },
            "r": { "amis": "tati'ih", "chinese": "不可以", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575344/%E4%B8%8D%E8%A1%8C_x6sugw.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532038/amis_audio/vocabulary/did3_35_02.wav", "color": "#e63946" },
            "s": { "amis": "caayay", "chinese": "不是", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575599/%E4%B8%8D%E6%98%AF_zxvpnl.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532040/amis_audio/vocabulary/did3_35_03.wav", "color": "#f48fb1" },
            "t": { "amis": "awa", "chinese": "沒有", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779576070/%E6%B2%A1%E6%9C%89_o6bptz.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532043/amis_audio/vocabulary/did3_35_04.wav", "color": "#66bb6a" },
            "u": { "amis": "aka", "chinese": "不要(祈使)", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575344/%E4%B8%8D%E8%A1%8C_x6sugw.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532045/amis_audio/vocabulary/did3_35_05.wav", "color": "#ba68c8" },
            "v": { "amis": "hakeno", "chinese": "不知道", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575247/%E4%B8%8D%E7%9F%A5%E9%81%93_qa6uhg.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532047/amis_audio/vocabulary/did3_35_06.wav", "color": "#fdd835" },
            "w": { "amis": "ini", "chinese": "這裡", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575091/%E9%80%99%E8%A3%A1_zjahuo.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532050/amis_audio/vocabulary/did3_02_18.wav", "color": "#4db6ac" },
            "x": { "amis": "iraw", "chinese": "那裡", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575141/%E9%82%A3%E8%A3%A1_nnazlo.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532052/amis_audio/vocabulary/did3_02_19.wav", "color": "#ff8a65" }
          },
          "馬蘭阿美語": {
            "a": { "amis": "kohecalay", "chinese": "白色的", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779573998/%E7%99%BD%E8%89%B2_gcsfaf.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532056/amis_audio/vocabulary/did4_22_01.wav", "color": "#bae6fd" },
            "b": { "amis": "kohetingay", "chinese": "黑色的", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779574004/%E9%BB%91%E8%89%B2_q18ewk.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532059/amis_audio/vocabulary/did4_22_02.wav", "color": "#ffe8b3" },
            "c": { "amis": "kahengangay", "chinese": "紅色的", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779574081/%E7%B4%85%E8%89%B2_ezcgez.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532062/amis_audio/vocabulary/did4_22_03.wav", "color": "#fb8c00" },
            "d": { "amis": "kangdaway", "chinese": "綠色的", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779574225/%E7%B6%A0%E8%89%B2_wt1c6d.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532065/amis_audio/vocabulary/did4_22_08.wav", "color": "#e63946" },
            "e": { "amis": "cengel", "chinese": "顏色", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779574443/%E9%A1%8F%E8%89%B2_zkc65x.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532067/amis_audio/vocabulary/did4_22_09.wav", "color": "#f48fb1" },
            "f": { "amis": "dadaya", "chinese": "晚上", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778940175/unnamed_16_qesivg.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532070/amis_audio/vocabulary/did4_13_02.wav", "color": "#66bb6a" },
            "g": { "amis": "nacila", "chinese": "昨天", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575782/%E6%98%A8%E5%A4%A9_nmutvj.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532072/amis_audio/vocabulary/did4_13_03.wav", "color": "#ba68c8" },
            "h": { "amis": "anocila", "chinese": "明天", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779576026/%E6%98%8E%E5%A4%A9_rghput.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532074/amis_audio/vocabulary/did4_13_04.wav", "color": "#fdd835" },
            "i": { "amis": "anini", "chinese": "今天", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575726/%E4%BB%8A%E5%A4%A9_qplqjs.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532077/amis_audio/vocabulary/did4_13_05.wav", "color": "#4db6ac" },
            "j": { "amis": "papacem", "chinese": "早上", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779574698/%E6%97%A9%E4%B8%8A_wbr1af.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532079/amis_audio/vocabulary/did4_13_06.wav", "color": "#ff8a65" },
            "o": { "amis": "ikor no lahok", "chinese": "下午", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779574783/%E4%B8%8B%E5%8D%88_dfyxvy.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532082/amis_audio/vocabulary/did4_13_25.wav", "color": "#bae6fd" },
            "p": { "amis": "hatini", "chinese": "現在", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575907/%E7%8F%BE%E5%9C%A8_wvirb9.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532085/amis_audio/vocabulary/did4_13_30.wav", "color": "#ffe8b3" },
            "q": { "amis": "aka to", "chinese": "不要", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575485/%E4%B8%8D%E8%A6%81_hjulv8.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532091/amis_audio/vocabulary/did4_35_01.wav", "color": "#fb8c00" },
            "r": { "amis": "ca kanga'ay/tati'ih", "chinese": "不可以", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575344/%E4%B8%8D%E8%A1%8C_x6sugw.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532094/amis_audio/vocabulary/did4_35_02.wav", "color": "#e63946" },
            "s": { "amis": "cowa", "chinese": "不是", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575599/%E4%B8%8D%E6%98%AF_zxvpnl.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532096/amis_audio/vocabulary/did4_35_03.wav", "color": "#f48fb1" },
            "t": { "amis": "awa", "chinese": "沒有", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779576070/%E6%B2%A1%E6%9C%89_o6bptz.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532099/amis_audio/vocabulary/did4_35_04.wav", "color": "#66bb6a" },
            "u": { "amis": "aka ka", "chinese": "不要(祈使)", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575344/%E4%B8%8D%E8%A1%8C_x6sugw.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532101/amis_audio/vocabulary/did4_35_05.wav", "color": "#ba68c8" },
            "v": { "amis": "hayken", "chinese": "不知道", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575247/%E4%B8%8D%E7%9F%A5%E9%81%93_qa6uhg.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532104/amis_audio/vocabulary/did4_35_06.wav", "color": "#fdd835" },
            "w": { "amis": "ni", "chinese": "這裡", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575091/%E9%80%99%E8%A3%A1_zjahuo.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532106/amis_audio/vocabulary/did4_02_18.wav", "color": "#4db6ac" },
            "x": { "amis": "ra", "chinese": "那裡", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575141/%E9%82%A3%E8%A3%A1_nnazlo.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532108/amis_audio/vocabulary/did4_02_19.wav", "color": "#ff8a65" }
          },
          "恆春阿美語": {
            "a": { "amis": "kohecalay", "chinese": "白色的", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779573998/%E7%99%BD%E8%89%B2_gcsfaf.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532110/amis_audio/vocabulary/did5_22_01.wav", "color": "#bae6fd" },
            "b": { "amis": "kohetingay", "chinese": "黑色的", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779574004/%E9%BB%91%E8%89%B2_q18ewk.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532113/amis_audio/vocabulary/did5_22_02.wav", "color": "#ffe8b3" },
            "c": { "amis": "kahengangay", "chinese": "紅色的", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779574081/%E7%B4%85%E8%89%B2_ezcgez.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532115/amis_audio/vocabulary/did5_22_03.wav", "color": "#fb8c00" },
            "d": { "amis": "kangdaway", "chinese": "綠色的", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779574225/%E7%B6%A0%E8%89%B2_wt1c6d.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532119/amis_audio/vocabulary/did5_22_08.wav", "color": "#e63946" },
            "e": { "amis": "cengel", "chinese": "顏色", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779574443/%E9%A1%8F%E8%89%B2_zkc65x.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532121/amis_audio/vocabulary/did5_22_09.wav", "color": "#f48fb1" },
            "f": { "amis": "dadaya", "chinese": "晚上", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778940175/unnamed_16_qesivg.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532124/amis_audio/vocabulary/did5_13_02.wav", "color": "#66bb6a" },
            "g": { "amis": "nacila", "chinese": "昨天", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575782/%E6%98%A8%E5%A4%A9_nmutvj.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532126/amis_audio/vocabulary/did5_13_03.wav", "color": "#ba68c8" },
            "h": { "amis": "anocila", "chinese": "明天", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779576026/%E6%98%8E%E5%A4%A9_rghput.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532128/amis_audio/vocabulary/did5_13_04.wav", "color": "#fdd835" },
            "i": { "amis": "anini", "chinese": "今天", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575726/%E4%BB%8A%E5%A4%A9_qplqjs.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532131/amis_audio/vocabulary/did5_13_05.wav", "color": "#4db6ac" },
            "j": { "amis": "papacem", "chinese": "早上", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779574698/%E6%97%A9%E4%B8%8A_wbr1af.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532133/amis_audio/vocabulary/did5_13_06.wav", "color": "#ff8a65" },
            "o": { "amis": "herek no lahok", "chinese": "下午", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779574783/%E4%B8%8B%E5%8D%88_dfyxvy.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532136/amis_audio/vocabulary/did5_13_25.wav", "color": "#bae6fd" },
            "p": { "amis": "nohatini/hatini", "chinese": "現在", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575907/%E7%8F%BE%E5%9C%A8_wvirb9.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532139/amis_audio/vocabulary/did5_13_30.wav", "color": "#ffe8b3" },
            "q": { "amis": "aka", "chinese": "不要", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575485/%E4%B8%8D%E8%A6%81_hjulv8.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532142/amis_audio/vocabulary/did5_35_01.wav", "color": "#fb8c00" },
            "r": { "amis": "aka a", "chinese": "不可以", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575344/%E4%B8%8D%E8%A1%8C_x6sugw.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532144/amis_audio/vocabulary/did5_35_02.wav", "color": "#e63946" },
            "s": { "amis": "cowa", "chinese": "不是", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575599/%E4%B8%8D%E6%98%AF_zxvpnl.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532147/amis_audio/vocabulary/did5_35_03.wav", "color": "#f48fb1" },
            "t": { "amis": "awaay", "chinese": "沒有", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779576070/%E6%B2%A1%E6%9C%89_o6bptz.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532149/amis_audio/vocabulary/did5_35_04.wav", "color": "#66bb6a" },
            "u": { "amis": "aka ka", "chinese": "不要(祈使)", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575344/%E4%B8%8D%E8%A1%8C_x6sugw.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532152/amis_audio/vocabulary/did5_35_05.wav", "color": "#ba68c8" },
            "v": { "amis": "hayken", "chinese": "不知道", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575247/%E4%B8%8D%E7%9F%A5%E9%81%93_qa6uhg.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532154/amis_audio/vocabulary/did5_35_06.wav", "color": "#fdd835" },
            "w": { "amis": "tini", "chinese": "這裡", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575091/%E9%80%99%E8%A3%A1_zjahuo.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532157/amis_audio/vocabulary/did5_02_18.wav", "color": "#4db6ac" },
            "x": { "amis": "itira", "chinese": "那裡", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779575141/%E9%82%A3%E8%A3%A1_nnazlo.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779532160/amis_audio/vocabulary/did5_02_19.wav", "color": "#ff8a65" }
          }
        }
    },
    topic11: {
        id: "topic11",
        title: "馬蘭阿美語 配合題 4_1_1",
        sentences: COMMON_SENTENCES,
        sentencesByDialect: COMMON_SENTENCES_BY_DIALECT,
        dicePrompts: ["ira ko...", "ira ko...", "ira ko..."],
        gridData: {
            a: { amis: "cecay", chinese: "1" },
            b: { amis: "tosa", chinese: "2" },
            c: { amis: "tolo", chinese: "3" },
            d: { amis: "sepat", chinese: "4" },
            e: { amis: "lima", chinese: "5" },
            f: { amis: "enem", chinese: "6" },
            g: { amis: "pito", chinese: "7" },
            h: { amis: "falo", chinese: "8" },
            i: { amis: "siwa", chinese: "9" },
            j: { amis: "moetep", chinese: "10" },
            o: { amis: "tosa polo'", chinese: "20" },
            p: { amis: "tolo polo'", chinese: "30" },
            q: { amis: "sepat polo'", chinese: "40" },
            r: { amis: "lima polo'", chinese: "50" },
            s: { amis: "enem polo'", chinese: "60" },
            t: { amis: "pito polo'", chinese: "70" },
            u: { amis: "falo polo'", chinese: "80" },
            v: { amis: "siwa polo'", chinese: "90" },
            w: { amis: "somo'ot", chinese: "100" },
            x: { amis: "cowa kafana' kako", chinese: "我不知道" }
        }
    },
    topic12: {
        id: "topic12",
        title: "馬蘭阿美語 配合題 4_1_2",
        sentences: COMMON_SENTENCES,
        sentencesByDialect: COMMON_SENTENCES_BY_DIALECT,
        dicePrompts: ["ira ko...", "ira ko...", "ira ko..."],
        gridData: {
            a: { amis: "cecay", chinese: "1" },
            b: { amis: "tosa", chinese: "2" },
            c: { amis: "tolo", chinese: "3" },
            d: { amis: "sepat", chinese: "4" },
            e: { amis: "lima", chinese: "5" },
            f: { amis: "enem", chinese: "6" },
            g: { amis: "pito", chinese: "7" },
            h: { amis: "falo", chinese: "8" },
            i: { amis: "siwa", chinese: "9" },
            j: { amis: "moetep", chinese: "10" },
            o: { amis: "tosa polo'", chinese: "20" },
            p: { amis: "tolo polo'", chinese: "30" },
            q: { amis: "sepat polo'", chinese: "40" },
            r: { amis: "lima polo'", chinese: "50" },
            s: { amis: "enem polo'", chinese: "60" },
            t: { amis: "pito polo'", chinese: "70" },
            u: { amis: "falo polo'", chinese: "80" },
            v: { amis: "siwa polo'", chinese: "90" },
            w: { amis: "somo'ot", chinese: "100" },
            x: { amis: "cowa kafana' kako", chinese: "我不知道" }
        }
    }
  


, topic13: {
        id: "topic13",
        title: "全阿美語版-身體部位-有聲版",
        sentences: COMMON_SENTENCES,
        sentencesByDialect: COMMON_SENTENCES_BY_DIALECT,
        dicePrompts: ["ira ko...", "ira ko...", "ira ko..."],
        gridData: {
          "a": { "amis": "mata", "chinese": "眼睛", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769543536/%E7%9C%BC%E7%9D%9B3_jwmp0g.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530006/amis_audio/sp_junior/did1_7_1.mp3", "color": "#bae6fd" },
          "b": { "amis": "tangila", "chinese": "耳朵", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769507351/%E8%80%B3%E6%9C%B5_2026-01-27_174619_ipp97p.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530008/amis_audio/sp_junior/did1_7_2.mp3", "color": "#ffe8b3" },
          "c": { "amis": "ngangusuan", "chinese": "鼻子", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769582147/Gemini_Generated_Image_knqsywknqsywknqs_ged0hp.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530010/amis_audio/sp_junior/did1_7_3.mp3", "color": "#fb8c00" },
          "d": { "amis": "nguyus", "chinese": "嘴巴", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769544408/%E5%98%B4%E5%B7%B4_dr1fnn.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530012/amis_audio/sp_junior/did1_7_4.mp3", "color": "#e63946" },
          "e": { "amis": "wadis", "chinese": "牙齒", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769582155/Gemini_Generated_Image_via007via007via0_e3xbbm.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530015/amis_audio/sp_junior/did1_7_5.mp3", "color": "#f48fb1" },
          "f": { "amis": "tangal", "chinese": "頭", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769553183/%E9%A0%AD_vnafrp.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530017/amis_audio/sp_junior/did1_7_6.mp3", "color": "#66bb6a" },
          "g": { "amis": "vukes", "chinese": "頭髮", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769582203/Gemini_Generated_Image_59ffdy59ffdy59ff_jjtjwa.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530019/amis_audio/sp_junior/did1_7_7.mp3", "color": "#ba68c8" },
          "h": { "amis": "pising", "chinese": "臉", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769553002/%E8%87%89_wq9cbq.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530022/amis_audio/sp_junior/did1_7_8.mp3", "color": "#fdd835" },
          "i": { "amis": "kamay", "chinese": "手", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769582421/Gemini_Generated_Image_xodtecxodtecxodt_gw1ghh.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530024/amis_audio/sp_junior/did1_7_9.mp3", "color": "#4db6ac" },
          "j": { "amis": "kuku'", "chinese": "腳", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769582131/Gemini_Generated_Image_cw7x6ncw7x6ncw7x_duzvny.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530026/amis_audio/sp_junior/did1_7_10.mp3", "color": "#ff8a65" },
          "o": { "amis": "cepi'", "chinese": "大腿", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769543531/%E5%A4%A7%E8%85%BF_gofzbe.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530110/amis_audio/vocabulary/did1_06_02.wav", "color": "#bae6fd" },
          "p": { "amis": "kanus", "chinese": "指甲", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769581531/Gemini_Generated_Image_9wmzub9wmzub9wmz_ndwlh0.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530113/amis_audio/vocabulary/did1_06_07.wav", "color": "#ffe8b3" },
          "q": { "amis": "tireng", "chinese": "身體", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769582120/Gemini_Generated_Image_ct7mmpct7mmpct7m_k4tq6w.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530115/amis_audio/vocabulary/did1_06_09.wav", "color": "#fb8c00" },
          "r": { "amis": "remes", "chinese": "血", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769582508/Gemini_Generated_Image_btged8btged8btge_fafcqs.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530118/amis_audio/vocabulary/did1_06_14.wav", "color": "#e63946" },
          "s": { "amis": "tiyad", "chinese": "肚子", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769582891/Gemini_Generated_Image_75185t75185t7518_ly9lzf.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530120/amis_audio/vocabulary/did1_06_17.wav", "color": "#f48fb1" },
          "t": { "amis": "avala", "chinese": "肩膀", "image": "https://res.cloudinary.com/djidzt4nv/image/upload/v1769582872/Gemini_Generated_Image_4p04mr4p04mr4p04_jqj2jw.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530123/amis_audio/vocabulary/did1_06_20.wav", "color": "#66bb6a" },
          "u": { "amis": "ngaruy", "chinese": "下巴", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779529236/%E4%B8%8B%E5%B7%B4_fe5qfw.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530125/amis_audio/vocabulary/did1_06_21.wav", "color": "#ba68c8" },
          "v": { "amis": "kulul", "chinese": "背部", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779529355/%E8%83%8C%E9%83%A8_wn33vq.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530128/amis_audio/vocabulary/did1_06_22.wav", "color": "#fdd835" },
          "w": { "amis": "tusur", "chinese": "膝蓋", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779529514/%E8%86%9D%E8%93%8B_iscubf.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530130/amis_audio/vocabulary/did1_06_31.wav", "color": "#4db6ac" },
          "x": { "amis": "sema", "chinese": "舌頭", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779529871/1_%E8%88%8C%E9%A0%AD_rbgzkq.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530133/amis_audio/vocabulary/did1_06_42.wav", "color": "#ff8a65" }
        },
        gridDataByDialect: {
          "南勢阿美語": {
            "a": { "amis": "mata", "chinese": "眼睛", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769543536/%E7%9C%BC%E7%9D%9B3_jwmp0g.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530006/amis_audio/sp_junior/did1_7_1.mp3", "color": "#bae6fd" },
            "b": { "amis": "tangila", "chinese": "耳朵", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769507351/%E8%80%B3%E6%9C%B5_2026-01-27_174619_ipp97p.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530008/amis_audio/sp_junior/did1_7_2.mp3", "color": "#ffe8b3" },
            "c": { "amis": "ngangusuan", "chinese": "鼻子", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769582147/Gemini_Generated_Image_knqsywknqsywknqs_ged0hp.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530010/amis_audio/sp_junior/did1_7_3.mp3", "color": "#fb8c00" },
            "d": { "amis": "nguyus", "chinese": "嘴巴", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769544408/%E5%98%B4%E5%B7%B4_dr1fnn.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530012/amis_audio/sp_junior/did1_7_4.mp3", "color": "#e63946" },
            "e": { "amis": "wadis", "chinese": "牙齒", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769582155/Gemini_Generated_Image_via007via007via0_e3xbbm.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530015/amis_audio/sp_junior/did1_7_5.mp3", "color": "#f48fb1" },
            "f": { "amis": "tangal", "chinese": "頭", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769553183/%E9%A0%AD_vnafrp.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530017/amis_audio/sp_junior/did1_7_6.mp3", "color": "#66bb6a" },
            "g": { "amis": "vukes", "chinese": "頭髮", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769582203/Gemini_Generated_Image_59ffdy59ffdy59ff_jjtjwa.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530019/amis_audio/sp_junior/did1_7_7.mp3", "color": "#ba68c8" },
            "h": { "amis": "pising", "chinese": "臉", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769553002/%E8%87%89_wq9cbq.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530022/amis_audio/sp_junior/did1_7_8.mp3", "color": "#fdd835" },
            "i": { "amis": "kamay", "chinese": "手", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769582421/Gemini_Generated_Image_xodtecxodtecxodt_gw1ghh.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530024/amis_audio/sp_junior/did1_7_9.mp3", "color": "#4db6ac" },
            "j": { "amis": "kuku'", "chinese": "腳", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769582131/Gemini_Generated_Image_cw7x6ncw7x6ncw7x_duzvny.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530026/amis_audio/sp_junior/did1_7_10.mp3", "color": "#ff8a65" },
            "o": { "amis": "cepi'", "chinese": "大腿", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769543531/%E5%A4%A7%E8%85%BF_gofzbe.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530110/amis_audio/vocabulary/did1_06_02.wav", "color": "#bae6fd" },
            "p": { "amis": "kanus", "chinese": "指甲", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769581531/Gemini_Generated_Image_9wmzub9wmzub9wmz_ndwlh0.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530113/amis_audio/vocabulary/did1_06_07.wav", "color": "#ffe8b3" },
            "q": { "amis": "tireng", "chinese": "身體", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769582120/Gemini_Generated_Image_ct7mmpct7mmpct7m_k4tq6w.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530115/amis_audio/vocabulary/did1_06_09.wav", "color": "#fb8c00" },
            "r": { "amis": "remes", "chinese": "血", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769582508/Gemini_Generated_Image_btged8btged8btge_fafcqs.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530118/amis_audio/vocabulary/did1_06_14.wav", "color": "#e63946" },
            "s": { "amis": "tiyad", "chinese": "肚子", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769582891/Gemini_Generated_Image_75185t75185t7518_ly9lzf.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530120/amis_audio/vocabulary/did1_06_17.wav", "color": "#f48fb1" },
            "t": { "amis": "avala", "chinese": "肩膀", "image": "https://res.cloudinary.com/djidzt4nv/image/upload/v1769582872/Gemini_Generated_Image_4p04mr4p04mr4p04_jqj2jw.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530123/amis_audio/vocabulary/did1_06_20.wav", "color": "#66bb6a" },
            "u": { "amis": "ngaruy", "chinese": "下巴", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779529236/%E4%B8%8B%E5%B7%B4_fe5qfw.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530125/amis_audio/vocabulary/did1_06_21.wav", "color": "#ba68c8" },
            "v": { "amis": "kulul", "chinese": "背部", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779529355/%E8%83%8C%E9%83%A8_wn33vq.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530128/amis_audio/vocabulary/did1_06_22.wav", "color": "#fdd835" },
            "w": { "amis": "tusur", "chinese": "膝蓋", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779529514/%E8%86%9D%E8%93%8B_iscubf.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530130/amis_audio/vocabulary/did1_06_31.wav", "color": "#4db6ac" },
            "x": { "amis": "sema", "chinese": "舌頭", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779529871/1_%E8%88%8C%E9%A0%AD_rbgzkq.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530133/amis_audio/vocabulary/did1_06_42.wav", "color": "#ff8a65" }
          },
          "秀姑巒阿美語": {
            "a": { "amis": "mata", "chinese": "眼睛", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769543536/%E7%9C%BC%E7%9D%9B3_jwmp0g.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530028/amis_audio/sp_junior/did2_7_1.mp3", "color": "#bae6fd" },
            "b": { "amis": "tangila", "chinese": "耳朵", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769507351/%E8%80%B3%E6%9C%B5_2026-01-27_174619_ipp97p.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530029/amis_audio/sp_junior/did2_7_2.mp3", "color": "#ffe8b3" },
            "c": { "amis": "ngoso'", "chinese": "鼻子", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769582147/Gemini_Generated_Image_knqsywknqsywknqs_ged0hp.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530032/amis_audio/sp_junior/did2_7_3.mp3", "color": "#fb8c00" },
            "d": { "amis": "ngapa", "chinese": "嘴巴", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769544408/%E5%98%B4%E5%B7%B4_dr1fnn.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530034/amis_audio/sp_junior/did2_7_4.mp3", "color": "#e63946" },
            "e": { "amis": "wadis", "chinese": "牙齒", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769582155/Gemini_Generated_Image_via007via007via0_e3xbbm.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530036/amis_audio/sp_junior/did2_7_5.mp3", "color": "#f48fb1" },
            "f": { "amis": "tangal", "chinese": "頭", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769553183/%E9%A0%AD_vnafrp.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530038/amis_audio/sp_junior/did2_7_6.mp3", "color": "#66bb6a" },
            "g": { "amis": "fokes", "chinese": "頭髮", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769582203/Gemini_Generated_Image_59ffdy59ffdy59ff_jjtjwa.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530040/amis_audio/sp_junior/did2_7_7.mp3", "color": "#ba68c8" },
            "h": { "amis": "pising", "chinese": "臉", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769553002/%E8%87%89_wq9cbq.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530042/amis_audio/sp_junior/did2_7_8.mp3", "color": "#fdd835" },
            "i": { "amis": "kamay", "chinese": "手", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769582421/Gemini_Generated_Image_xodtecxodtecxodt_gw1ghh.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530044/amis_audio/sp_junior/did2_7_9.mp3", "color": "#4db6ac" },
            "j": { "amis": "wa'ay", "chinese": "腳", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769582131/Gemini_Generated_Image_cw7x6ncw7x6ncw7x_duzvny.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530046/amis_audio/sp_junior/did2_7_10.mp3", "color": "#ff8a65" },
            "o": { "amis": "cepi'", "chinese": "大腿", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769543531/%E5%A4%A7%E8%85%BF_gofzbe.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530135/amis_audio/vocabulary/did2_06_02.wav", "color": "#bae6fd" },
            "p": { "amis": "kanoos", "chinese": "指甲", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769581531/Gemini_Generated_Image_9wmzub9wmzub9wmz_ndwlh0.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530138/amis_audio/vocabulary/did2_06_07.wav", "color": "#ffe8b3" },
            "q": { "amis": "tireng", "chinese": "身體", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769582120/Gemini_Generated_Image_ct7mmpct7mmpct7m_k4tq6w.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530141/amis_audio/vocabulary/did2_06_09.wav", "color": "#fb8c00" },
            "r": { "amis": "remes", "chinese": "血", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769582508/Gemini_Generated_Image_btged8btged8btge_fafcqs.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530143/amis_audio/vocabulary/did2_06_14.wav", "color": "#e63946" },
            "s": { "amis": "tiyad", "chinese": "肚子", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769582891/Gemini_Generated_Image_75185t75185t7518_ly9lzf.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530147/amis_audio/vocabulary/did2_06_17.wav", "color": "#f48fb1" },
            "t": { "amis": "afala^", "chinese": "肩膀", "image": "https://res.cloudinary.com/djidzt4nv/image/upload/v1769582872/Gemini_Generated_Image_4p04mr4p04mr4p04_jqj2jw.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530149/amis_audio/vocabulary/did2_06_20.wav", "color": "#66bb6a" },
            "u": { "amis": "ngaroy", "chinese": "下巴", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779529236/%E4%B8%8B%E5%B7%B4_fe5qfw.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530151/amis_audio/vocabulary/did2_06_21.wav", "color": "#ba68c8" },
            "v": { "amis": "koror", "chinese": "背部", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779529355/%E8%83%8C%E9%83%A8_wn33vq.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530154/amis_audio/vocabulary/did2_06_22.wav", "color": "#fdd835" },
            "w": { "amis": "tosor", "chinese": "膝蓋", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779529514/%E8%86%9D%E8%93%8B_iscubf.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530156/amis_audio/vocabulary/did2_06_31.wav", "color": "#4db6ac" },
            "x": { "amis": "sema^", "chinese": "舌頭", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779529871/1_%E8%88%8C%E9%A0%AD_rbgzkq.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530159/amis_audio/vocabulary/did2_06_42.wav", "color": "#ff8a65" }
          },
          "海岸阿美語": {
            "a": { "amis": "mata", "chinese": "眼睛", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769543536/%E7%9C%BC%E7%9D%9B3_jwmp0g.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530048/amis_audio/sp_junior/did3_7_1.mp3", "color": "#bae6fd" },
            "b": { "amis": "tanginga", "chinese": "耳朵", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769507351/%E8%80%B3%E6%9C%B5_2026-01-27_174619_ipp97p.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530051/amis_audio/sp_junior/did3_7_2.mp3", "color": "#ffe8b3" },
            "c": { "amis": "ngoso'", "chinese": "鼻子", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769582147/Gemini_Generated_Image_knqsywknqsywknqs_ged0hp.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530053/amis_audio/sp_junior/did3_7_3.mp3", "color": "#fb8c00" },
            "d": { "amis": "ngoyos", "chinese": "嘴巴", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769544408/%E5%98%B4%E5%B7%B4_dr1fnn.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530055/amis_audio/sp_junior/did3_7_4.mp3", "color": "#e63946" },
            "e": { "amis": "wadis", "chinese": "牙齒", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769582155/Gemini_Generated_Image_via007via007via0_e3xbbm.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530057/amis_audio/sp_junior/did3_7_5.mp3", "color": "#f48fb1" },
            "f": { "amis": "fongoh", "chinese": "頭", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769553183/%E9%A0%AD_vnafrp.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530059/amis_audio/sp_junior/did3_7_6.mp3", "color": "#66bb6a" },
            "g": { "amis": "fokes", "chinese": "頭髮", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769582203/Gemini_Generated_Image_59ffdy59ffdy59ff_jjtjwa.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530061/amis_audio/sp_junior/did3_7_7.mp3", "color": "#ba68c8" },
            "h": { "amis": "pising", "chinese": "臉", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769553002/%E8%87%89_wq9cbq.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530063/amis_audio/sp_junior/did3_7_8.mp3", "color": "#fdd835" },
            "i": { "amis": "kamay", "chinese": "手", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769582421/Gemini_Generated_Image_xodtecxodtecxodt_gw1ghh.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530065/amis_audio/sp_junior/did3_7_9.mp3", "color": "#4db6ac" },
            "j": { "amis": "wa'ay", "chinese": "腳", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769582131/Gemini_Generated_Image_cw7x6ncw7x6ncw7x_duzvny.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530067/amis_audio/sp_junior/did3_7_10.mp3", "color": "#ff8a65" },
            "o": { "amis": "cepi'", "chinese": "大腿", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769543531/%E5%A4%A7%E8%85%BF_gofzbe.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530161/amis_audio/vocabulary/did3_06_02.wav", "color": "#bae6fd" },
            "p": { "amis": "kanoos", "chinese": "指甲", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769581531/Gemini_Generated_Image_9wmzub9wmzub9wmz_ndwlh0.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530163/amis_audio/vocabulary/did3_06_07.wav", "color": "#ffe8b3" },
            "q": { "amis": "tatirengan/tireng", "chinese": "身體", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769582120/Gemini_Generated_Image_ct7mmpct7mmpct7m_k4tq6w.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530167/amis_audio/vocabulary/did3_06_09.wav", "color": "#fb8c00" },
            "r": { "amis": "remes", "chinese": "血", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769582508/Gemini_Generated_Image_btged8btged8btge_fafcqs.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530170/amis_audio/vocabulary/did3_06_14.wav", "color": "#e63946" },
            "s": { "amis": "tiyad", "chinese": "肚子", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769582891/Gemini_Generated_Image_75185t75185t7518_ly9lzf.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530172/amis_audio/vocabulary/did3_06_17.wav", "color": "#f48fb1" },
            "t": { "amis": "afalarn", "chinese": "肩膀", "image": "https://res.cloudinary.com/djidzt4nv/image/upload/v1769582872/Gemini_Generated_Image_4p04mr4p04mr4p04_jqj2jw.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530174/amis_audio/vocabulary/did3_06_20.wav", "color": "#66bb6a" },
            "u": { "amis": "ngaroy", "chinese": "下巴", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779529236/%E4%B8%8B%E5%B7%B4_fe5qfw.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530177/amis_audio/vocabulary/did3_06_21.wav", "color": "#ba68c8" },
            "v": { "amis": "koror", "chinese": "背部", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779529355/%E8%83%8C%E9%83%A8_wn33vq.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530179/amis_audio/vocabulary/did3_06_22.wav", "color": "#fdd835" },
            "w": { "amis": "tosor", "chinese": "膝蓋", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779529514/%E8%86%9D%E8%93%8B_iscubf.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530182/amis_audio/vocabulary/did3_06_31.wav", "color": "#4db6ac" },
            "x": { "amis": "sema", "chinese": "舌頭", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779529871/1_%E8%88%8C%E9%A0%AD_rbgzkq.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530184/amis_audio/vocabulary/did3_06_42.wav", "color": "#ff8a65" }
          },
          "馬蘭阿美語": {
            "a": { "amis": "mata", "chinese": "眼睛", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769543536/%E7%9C%BC%E7%9D%9B3_jwmp0g.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530069/amis_audio/sp_junior/did4_7_1.mp3", "color": "#bae6fd" },
            "b": { "amis": "tangila", "chinese": "耳朵", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769507351/%E8%80%B3%E6%9C%B5_2026-01-27_174619_ipp97p.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530072/amis_audio/sp_junior/did4_7_2.mp3", "color": "#ffe8b3" },
            "c": { "amis": "ngoso'", "chinese": "鼻子", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769582147/Gemini_Generated_Image_knqsywknqsywknqs_ged0hp.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530073/amis_audio/sp_junior/did4_7_3.mp3", "color": "#fb8c00" },
            "d": { "amis": "ngoyos", "chinese": "嘴巴", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769544408/%E5%98%B4%E5%B7%B4_dr1fnn.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530075/amis_audio/sp_junior/did4_7_4.mp3", "color": "#e63946" },
            "e": { "amis": "wadis", "chinese": "牙齒", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769582155/Gemini_Generated_Image_via007via007via0_e3xbbm.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530077/amis_audio/sp_junior/did4_7_5.mp3", "color": "#f48fb1" },
            "f": { "amis": "fongoh", "chinese": "頭", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769553183/%E9%A0%AD_vnafrp.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530079/amis_audio/sp_junior/did4_7_6.mp3", "color": "#66bb6a" },
            "g": { "amis": "fokes", "chinese": "頭髮", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769582203/Gemini_Generated_Image_59ffdy59ffdy59ff_jjtjwa.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530081/amis_audio/sp_junior/did4_7_7.mp3", "color": "#ba68c8" },
            "h": { "amis": "laway / pising", "chinese": "臉", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769553002/%E8%87%89_wq9cbq.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530083/amis_audio/sp_junior/did4_7_8.mp3", "color": "#fdd835" },
            "i": { "amis": "kamay", "chinese": "手", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769582421/Gemini_Generated_Image_xodtecxodtecxodt_gw1ghh.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530086/amis_audio/sp_junior/did4_7_9.mp3", "color": "#4db6ac" },
            "j": { "amis": "oo'", "chinese": "腳", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769582131/Gemini_Generated_Image_cw7x6ncw7x6ncw7x_duzvny.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530088/amis_audio/sp_junior/did4_7_10.mp3", "color": "#ff8a65" },
            "o": { "amis": "cepi'", "chinese": "大腿", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769543531/%E5%A4%A7%E8%85%BF_gofzbe.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530186/amis_audio/vocabulary/did4_06_02.wav", "color": "#bae6fd" },
            "p": { "amis": "kinoos", "chinese": "指甲", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769581531/Gemini_Generated_Image_9wmzub9wmzub9wmz_ndwlh0.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530189/amis_audio/vocabulary/did4_06_07.wav", "color": "#ffe8b3" },
            "q": { "amis": "tatirengan/tireng", "chinese": "身體", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769582120/Gemini_Generated_Image_ct7mmpct7mmpct7m_k4tq6w.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530192/amis_audio/vocabulary/did4_06_09.wav", "color": "#fb8c00" },
            "r": { "amis": "irang", "chinese": "血", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769582508/Gemini_Generated_Image_btged8btged8btge_fafcqs.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530194/amis_audio/vocabulary/did4_06_14.wav", "color": "#e63946" },
            "s": { "amis": "tiyad", "chinese": "肚子", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769582891/Gemini_Generated_Image_75185t75185t7518_ly9lzf.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530197/amis_audio/vocabulary/did4_06_17.wav", "color": "#f48fb1" },
            "t": { "amis": "afala", "chinese": "肩膀", "image": "https://res.cloudinary.com/djidzt4nv/image/upload/v1769582872/Gemini_Generated_Image_4p04mr4p04mr4p04_jqj2jw.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530199/amis_audio/vocabulary/did4_06_20.wav", "color": "#66bb6a" },
            "u": { "amis": "ngaroy", "chinese": "下巴", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779529236/%E4%B8%8B%E5%B7%B4_fe5qfw.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530201/amis_audio/vocabulary/did4_06_21.wav", "color": "#ba68c8" },
            "v": { "amis": "koror", "chinese": "背部", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779529355/%E8%83%8C%E9%83%A8_wn33vq.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530204/amis_audio/vocabulary/did4_06_22.wav", "color": "#fdd835" },
            "w": { "amis": "toros", "chinese": "膝蓋", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779529514/%E8%86%9D%E8%93%8B_iscubf.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530206/amis_audio/vocabulary/did4_06_31.wav", "color": "#4db6ac" },
            "x": { "amis": "sema", "chinese": "舌頭", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779529871/1_%E8%88%8C%E9%A0%AD_rbgzkq.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530208/amis_audio/vocabulary/did4_06_42.wav", "color": "#ff8a65" }
          },
          "恆春阿美語": {
            "a": { "amis": "mata", "chinese": "眼睛", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769543536/%E7%9C%BC%E7%9D%9B3_jwmp0g.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530090/amis_audio/sp_junior/did5_7_1.mp3", "color": "#bae6fd" },
            "b": { "amis": "tangila", "chinese": "耳朵", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769507351/%E8%80%B3%E6%9C%B5_2026-01-27_174619_ipp97p.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530092/amis_audio/sp_junior/did5_7_2.mp3", "color": "#ffe8b3" },
            "c": { "amis": "ngoso'", "chinese": "鼻子", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769582147/Gemini_Generated_Image_knqsywknqsywknqs_ged0hp.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530094/amis_audio/sp_junior/did5_7_3.mp3", "color": "#fb8c00" },
            "d": { "amis": "ngoyos", "chinese": "嘴巴", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769544408/%E5%98%B4%E5%B7%B4_dr1fnn.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530096/amis_audio/sp_junior/did5_7_4.mp3", "color": "#e63946" },
            "e": { "amis": "wadis", "chinese": "牙齒", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769582155/Gemini_Generated_Image_via007via007via0_e3xbbm.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530097/amis_audio/sp_junior/did5_7_5.mp3", "color": "#f48fb1" },
            "f": { "amis": "fongoh", "chinese": "頭", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769553183/%E9%A0%AD_vnafrp.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530100/amis_audio/sp_junior/did5_7_6.mp3", "color": "#66bb6a" },
            "g": { "amis": "fokes", "chinese": "頭髮", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769582203/Gemini_Generated_Image_59ffdy59ffdy59ff_jjtjwa.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530102/amis_audio/sp_junior/did5_7_7.mp3", "color": "#ba68c8" },
            "h": { "amis": "laway", "chinese": "臉", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769553002/%E8%87%89_wq9cbq.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530104/amis_audio/sp_junior/did5_7_8.mp3", "color": "#fdd835" },
            "i": { "amis": "kamay", "chinese": "手", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769582421/Gemini_Generated_Image_xodtecxodtecxodt_gw1ghh.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530106/amis_audio/sp_junior/did5_7_9.mp3", "color": "#4db6ac" },
            "j": { "amis": "oo'", "chinese": "腳", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769582131/Gemini_Generated_Image_cw7x6ncw7x6ncw7x_duzvny.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530108/amis_audio/sp_junior/did5_7_10.mp3", "color": "#ff8a65" },
            "o": { "amis": "cepi'", "chinese": "大腿", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769543531/%E5%A4%A7%E8%85%BF_gofzbe.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530210/amis_audio/vocabulary/did5_06_02.wav", "color": "#bae6fd" },
            "p": { "amis": "kanoos", "chinese": "指甲", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769581531/Gemini_Generated_Image_9wmzub9wmzub9wmz_ndwlh0.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530213/amis_audio/vocabulary/did5_06_07.wav", "color": "#ffe8b3" },
            "q": { "amis": "tireng", "chinese": "身體", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769582120/Gemini_Generated_Image_ct7mmpct7mmpct7m_k4tq6w.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530215/amis_audio/vocabulary/did5_06_09.wav", "color": "#fb8c00" },
            "r": { "amis": "ilang", "chinese": "血", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769582508/Gemini_Generated_Image_btged8btged8btge_fafcqs.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530218/amis_audio/vocabulary/did5_06_14.wav", "color": "#e63946" },
            "s": { "amis": "tiyad", "chinese": "肚子", "image": "https://res.cloudinary.com/deljuj25x/image/upload/v1769582891/Gemini_Generated_Image_75185t75185t7518_ly9lzf.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530220/amis_audio/vocabulary/did5_06_17.wav", "color": "#f48fb1" },
            "t": { "amis": "afala", "chinese": "肩膀", "image": "https://res.cloudinary.com/djidzt4nv/image/upload/v1769582872/Gemini_Generated_Image_4p04mr4p04mr4p04_jqj2jw.png", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530223/amis_audio/vocabulary/did5_06_20.wav", "color": "#66bb6a" },
            "u": { "amis": "ngaroy", "chinese": "下巴", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779529236/%E4%B8%8B%E5%B7%B4_fe5qfw.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530225/amis_audio/vocabulary/did5_06_21.wav", "color": "#ba68c8" },
            "v": { "amis": "koror", "chinese": "背部", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779529355/%E8%83%8C%E9%83%A8_wn33vq.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530228/amis_audio/vocabulary/did5_06_22.wav", "color": "#fdd835" },
            "w": { "amis": "toros", "chinese": "膝蓋", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779529514/%E8%86%9D%E8%93%8B_iscubf.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530230/amis_audio/vocabulary/did5_06_31.wav", "color": "#4db6ac" },
            "x": { "amis": "sema", "chinese": "舌頭", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1779529871/1_%E8%88%8C%E9%A0%AD_rbgzkq.jpg", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/v1779530233/amis_audio/vocabulary/did5_06_42.wav", "color": "#ff8a65" }
          }
        }
    }

    , topic14: {
        id: "topic14",
        title: "看圖說識字-存在句1-15句",
        sentences: [
            { "amis": "Ira haw ku ... nu misu?", "chinese": "你有...嗎?", "sound": "" },
            { "amis": "Ira ku ... nu maku.", "chinese": "我有...。", "sound": "" },
            { "amis": "Ira ku ... nu niyam.", "chinese": "我們有...。", "sound": "" },
            { "amis": "Ira ku wacu nu maku.", "chinese": "我有一隻狗。", "sound": "https://klokah.tw/extension/sp_senior/sound/1/3recognize/1_1.mp3" },
            { "amis": "Ira ku nani nu maku.", "chinese": "我有一隻貓。", "sound": "https://klokah.tw/extension/sp_senior/sound/1/3recognize/1_2.mp3" },
            { "amis": "Ira ku tatakula' nu maku.", "chinese": "我有一隻青蛙。", "sound": "https://klokah.tw/extension/sp_senior/sound/1/3recognize/1_3.mp3" },
            { "amis": "Ira ku cudad nu heni.", "chinese": "他們有書。", "sound": "https://klokah.tw/extension/sp_senior/sound/1/3recognize/1_4.mp3" },
            { "amis": "Ira ku savuric nu heni.", "chinese": "他們有橡皮擦。", "sound": "https://klokah.tw/extension/sp_senior/sound/1/3recognize/1_5.mp3" },
            { "amis": "Ira ku tuki nu heni.", "chinese": "他們有鐘。", "sound": "https://klokah.tw/extension/sp_senior/sound/1/3recognize/1_6.mp3" },
            { "amis": "Ira haw ku vunga nu misu?", "chinese": "你有地瓜嗎？", "sound": "https://klokah.tw/extension/sp_senior/sound/1/3recognize/1_7.mp3" },
            { "amis": "Ira haw ku taviras nu misu?", "chinese": "你有玉米嗎？", "sound": "https://klokah.tw/extension/sp_senior/sound/1/3recognize/1_8.mp3" },
            { "amis": "Ira haw ku tali nu misu?", "chinese": "你有芋頭嗎？", "sound": "https://klokah.tw/extension/sp_senior/sound/1/3recognize/1_9.mp3" },
            { "amis": "Ira ku vuduy nu niyam.", "chinese": "我們有衣服。", "sound": "https://klokah.tw/extension/sp_senior/sound/1/3recognize/1_10.mp3" },
            { "amis": "Ira ku cacevaren nu niyam.", "chinese": "我們有雨傘。", "sound": "https://klokah.tw/extension/sp_senior/sound/1/3recognize/1_11.mp3" },
            { "amis": "Ira ku tuper nu niyam.", "chinese": "我們有帽子。", "sound": "https://klokah.tw/extension/sp_senior/sound/1/3recognize/1_12.mp3" },
            { "amis": "Ira ku kaka nu nira tu vavahiyan.", "chinese": "她有姊姊。", "sound": "https://klokah.tw/extension/sp_senior/sound/1/3recognize/1_13.mp3" },
            { "amis": "Ira ku cavay nu nira.", "chinese": "她有朋友。", "sound": "https://klokah.tw/extension/sp_senior/sound/1/3recognize/1_14.mp3" },
            { "amis": "Ira ku vaki nu nira.", "chinese": "她有叔叔。", "sound": "https://klokah.tw/extension/sp_senior/sound/1/3recognize/1_15.mp3" }
          ],
        sentencesByDialect: {
          "南勢阿美語": [
            { "amis": "Ira haw ku ... nu misu?", "chinese": "你有...嗎?", "sound": "" },
            { "amis": "Ira ku ... nu maku.", "chinese": "我有...。", "sound": "" },
            { "amis": "Ira ku ... nu niyam.", "chinese": "我們有...。", "sound": "" },
            { "amis": "Ira ku wacu nu maku.", "chinese": "我有一隻狗。", "sound": "https://klokah.tw/extension/sp_senior/sound/1/3recognize/1_1.mp3" },
            { "amis": "Ira ku nani nu maku.", "chinese": "我有一隻貓。", "sound": "https://klokah.tw/extension/sp_senior/sound/1/3recognize/1_2.mp3" },
            { "amis": "Ira ku tatakula' nu maku.", "chinese": "我有一隻青蛙。", "sound": "https://klokah.tw/extension/sp_senior/sound/1/3recognize/1_3.mp3" },
            { "amis": "Ira ku cudad nu heni.", "chinese": "他們有書。", "sound": "https://klokah.tw/extension/sp_senior/sound/1/3recognize/1_4.mp3" },
            { "amis": "Ira ku savuric nu heni.", "chinese": "他們有橡皮擦。", "sound": "https://klokah.tw/extension/sp_senior/sound/1/3recognize/1_5.mp3" },
            { "amis": "Ira ku tuki nu heni.", "chinese": "他們有鐘。", "sound": "https://klokah.tw/extension/sp_senior/sound/1/3recognize/1_6.mp3" },
            { "amis": "Ira haw ku vunga nu misu?", "chinese": "你有地瓜嗎？", "sound": "https://klokah.tw/extension/sp_senior/sound/1/3recognize/1_7.mp3" },
            { "amis": "Ira haw ku taviras nu misu?", "chinese": "你有玉米嗎？", "sound": "https://klokah.tw/extension/sp_senior/sound/1/3recognize/1_8.mp3" },
            { "amis": "Ira haw ku tali nu misu?", "chinese": "你有芋頭嗎？", "sound": "https://klokah.tw/extension/sp_senior/sound/1/3recognize/1_9.mp3" },
            { "amis": "Ira ku vuduy nu niyam.", "chinese": "我們有衣服。", "sound": "https://klokah.tw/extension/sp_senior/sound/1/3recognize/1_10.mp3" },
            { "amis": "Ira ku cacevaren nu niyam.", "chinese": "我們有雨傘。", "sound": "https://klokah.tw/extension/sp_senior/sound/1/3recognize/1_11.mp3" },
            { "amis": "Ira ku tuper nu niyam.", "chinese": "我們有帽子。", "sound": "https://klokah.tw/extension/sp_senior/sound/1/3recognize/1_12.mp3" },
            { "amis": "Ira ku kaka nu nira tu vavahiyan.", "chinese": "她有姊姊。", "sound": "https://klokah.tw/extension/sp_senior/sound/1/3recognize/1_13.mp3" },
            { "amis": "Ira ku cavay nu nira.", "chinese": "她有朋友。", "sound": "https://klokah.tw/extension/sp_senior/sound/1/3recognize/1_14.mp3" },
            { "amis": "Ira ku vaki nu nira.", "chinese": "她有叔叔。", "sound": "https://klokah.tw/extension/sp_senior/sound/1/3recognize/1_15.mp3" }
          ],
          "秀姑巒阿美語": [
            { "amis": "Ira haw ku ... nu misu?", "chinese": "你有...嗎?", "sound": "" },
            { "amis": "Ira ku ... nu maku.", "chinese": "我有...。", "sound": "" },
            { "amis": "Ira ku ... nu niyam.", "chinese": "我們有...。", "sound": "" },
            { "amis": "Ira ko waco no mako cecay.", "chinese": "我有一隻狗。", "sound": "https://klokah.tw/extension/sp_senior/sound/2/3recognize/1_1.mp3" },
            { "amis": "Ira ko posi no mako cecay.", "chinese": "我有一隻貓。", "sound": "https://klokah.tw/extension/sp_senior/sound/2/3recognize/1_2.mp3" },
            { "amis": "Ira ko takora' no mako cecay.", "chinese": "我有一隻青蛙。", "sound": "https://klokah.tw/extension/sp_senior/sound/2/3recognize/1_3.mp3" },
            { "amis": "Ira ko codad naira.", "chinese": "他們有書。", "sound": "https://klokah.tw/extension/sp_senior/sound/2/3recognize/1_4.mp3" },
            { "amis": "Ira ko sasisit naira.", "chinese": "他們有橡皮擦。", "sound": "https://klokah.tw/extension/sp_senior/sound/2/3recognize/1_5.mp3" },
            { "amis": "Ira ko toki naira.", "chinese": "他們有鐘。", "sound": "https://klokah.tw/extension/sp_senior/sound/2/3recognize/1_6.mp3" },
            { "amis": "Ira ko fonga no miso haw?", "chinese": "你有地瓜嗎？", "sound": "https://klokah.tw/extension/sp_senior/sound/2/3recognize/1_7.mp3" },
            { "amis": "Ira ko 'ariray no miso haw?", "chinese": "你有玉米嗎？", "sound": "https://klokah.tw/extension/sp_senior/sound/2/3recognize/1_8.mp3" },
            { "amis": "Ira ko tali no miso haw?", "chinese": "你有芋頭嗎？", "sound": "https://klokah.tw/extension/sp_senior/sound/2/3recognize/1_9.mp3" },
            { "amis": "Ira ko fodoy niyam.", "chinese": "我們有衣服。", "sound": "https://klokah.tw/extension/sp_senior/sound/2/3recognize/1_10.mp3" },
            { "amis": "Ira ko linay niyam.", "chinese": "我們有雨傘。", "sound": "https://klokah.tw/extension/sp_senior/sound/2/3recognize/1_11.mp3" },
            { "amis": "Ira ko kafong niyam.", "chinese": "我們有帽子。", "sound": "https://klokah.tw/extension/sp_senior/sound/2/3recognize/1_12.mp3" },
            { "amis": "Ira ko fafahiyan a kaka nira.", "chinese": "她有姊姊。", "sound": "https://klokah.tw/extension/sp_senior/sound/2/3recognize/1_13.mp3" },
            { "amis": "Ira ko widang nira.", "chinese": "她有朋友。", "sound": "https://klokah.tw/extension/sp_senior/sound/2/3recognize/1_14.mp3" },
            { "amis": "Ira ko faki nira.", "chinese": "她有叔叔。", "sound": "https://klokah.tw/extension/sp_senior/sound/2/3recognize/1_15.mp3" }
          ],
          "海岸阿美語": [
            { "amis": "Ira haw ku ... nu misu?", "chinese": "你有...嗎?", "sound": "" },
            { "amis": "Ira ku ... nu maku.", "chinese": "我有...。", "sound": "" },
            { "amis": "Ira ku ... nu niyam.", "chinese": "我們有...。", "sound": "" },
            { "amis": "Ira ko cecay a waco ako.", "chinese": "我有一隻狗。", "sound": "https://klokah.tw/extension/sp_senior/sound/3/3recognize/1_1.mp3" },
            { "amis": "Ira ko cecay a posi ako.", "chinese": "我有一隻貓。", "sound": "https://klokah.tw/extension/sp_senior/sound/3/3recognize/1_2.mp3" },
            { "amis": "Ira ko cecay a takola' ako.", "chinese": "我有一隻青蛙。", "sound": "https://klokah.tw/extension/sp_senior/sound/3/3recognize/1_3.mp3" },
            { "amis": "Ira ko codad nangra.", "chinese": "他們有書。", "sound": "https://klokah.tw/extension/sp_senior/sound/3/3recognize/1_4.mp3" },
            { "amis": "Ira ko sararop nangra.", "chinese": "他們有橡皮擦。", "sound": "https://klokah.tw/extension/sp_senior/sound/3/3recognize/1_5.mp3" },
            { "amis": "Ira ko toki nangra.", "chinese": "他們有鐘。", "sound": "https://klokah.tw/extension/sp_senior/sound/3/3recognize/1_6.mp3" },
            { "amis": "Ira ko konga iso?", "chinese": "你有地瓜嗎？", "sound": "https://klokah.tw/extension/sp_senior/sound/3/3recognize/1_7.mp3" },
            { "amis": "Ira ko 'ariray iso?", "chinese": "你有玉米嗎？", "sound": "https://klokah.tw/extension/sp_senior/sound/3/3recognize/1_8.mp3" },
            { "amis": "Ira ko tali iso?", "chinese": "你有芋頭嗎？", "sound": "https://klokah.tw/extension/sp_senior/sound/3/3recognize/1_9.mp3" },
            { "amis": "Ira ko riko' niyam.", "chinese": "我們有衣服。", "sound": "https://klokah.tw/extension/sp_senior/sound/3/3recognize/1_10.mp3" },
            { "amis": "Ira ko linay niyam.", "chinese": "我們有雨傘。", "sound": "https://klokah.tw/extension/sp_senior/sound/3/3recognize/1_11.mp3" },
            { "amis": "Ira ko kafong niyam.", "chinese": "我們有帽子。", "sound": "https://klokah.tw/extension/sp_senior/sound/3/3recognize/1_12.mp3" },
            { "amis": "Ira ko fafahiyan a kaka nira.", "chinese": "她有姊姊。", "sound": "https://klokah.tw/extension/sp_senior/sound/3/3recognize/1_13.mp3" },
            { "amis": "Ira ko widang nira.", "chinese": "她有朋友。", "sound": "https://klokah.tw/extension/sp_senior/sound/3/3recognize/1_14.mp3" },
            { "amis": "Ira ko faki nira.", "chinese": "她有叔叔。", "sound": "https://klokah.tw/extension/sp_senior/sound/3/3recognize/1_15.mp3" }
          ],
          "恆春阿美語": [
            { "amis": "Ira haw ku ... nu misu?", "chinese": "你有...嗎?", "sound": "" },
            { "amis": "Ira ku ... nu maku.", "chinese": "我有...。", "sound": "" },
            { "amis": "Ira ku ... nu niyam.", "chinese": "我們有...。", "sound": "" },
            { "amis": "Ira ko cecay a waco ako", "chinese": "我有一隻狗。", "sound": "https://klokah.tw/extension/sp_senior/sound/5/3recognize/1_1.mp3" },
            { "amis": "Ira ko cecay a ngiyaw ako.", "chinese": "我有一隻貓。", "sound": "https://klokah.tw/extension/sp_senior/sound/5/3recognize/1_2.mp3" },
            { "amis": "Ira ko cecay a takola' ako.", "chinese": "我有一隻青蛙。", "sound": "https://klokah.tw/extension/sp_senior/sound/5/3recognize/1_3.mp3" },
            { "amis": "Iraay ko tilid nangra.", "chinese": "他們有書。", "sound": "https://klokah.tw/extension/sp_senior/sound/5/3recognize/1_4.mp3" },
            { "amis": "Iraay ko sasipasip nangra.", "chinese": "他們有橡皮擦。", "sound": "https://klokah.tw/extension/sp_senior/sound/5/3recognize/1_5.mp3" },
            { "amis": "Iraay ko toki nangra.", "chinese": "他們有鐘。", "sound": "https://klokah.tw/extension/sp_senior/sound/5/3recognize/1_6.mp3" },
            { "amis": "Iraay ko konga no miso.", "chinese": "你有地瓜嗎？", "sound": "https://klokah.tw/extension/sp_senior/sound/5/3recognize/1_7.mp3" },
            { "amis": "Iraay ko 'ariray no miso.", "chinese": "你有玉米嗎？", "sound": "https://klokah.tw/extension/sp_senior/sound/5/3recognize/1_8.mp3" },
            { "amis": "Iraay ko tali no miso.", "chinese": "你有芋頭嗎？", "sound": "https://klokah.tw/extension/sp_senior/sound/5/3recognize/1_9.mp3" },
            { "amis": "Iraay ko riko' niyam.", "chinese": "我們有衣服。", "sound": "https://klokah.tw/extension/sp_senior/sound/5/3recognize/1_10.mp3" },
            { "amis": "Iraay ko dinay niyam.", "chinese": "我們有雨傘。", "sound": "https://klokah.tw/extension/sp_senior/sound/5/3recognize/1_11.mp3" },
            { "amis": "Iraay ko kafong niyam.", "chinese": "我們有帽子。", "sound": "https://klokah.tw/extension/sp_senior/sound/5/3recognize/1_12.mp3" },
            { "amis": "Iraay ko fafahiyan a kaka ningra.", "chinese": "她有姊姊。", "sound": "https://klokah.tw/extension/sp_senior/sound/5/3recognize/1_13.mp3" },
            { "amis": "Iraay ko widang ningra.", "chinese": "她有朋友。", "sound": "https://klokah.tw/extension/sp_senior/sound/5/3recognize/1_14.mp3" },
            { "amis": "Iraay ko faki ningra.", "chinese": "她有叔叔。", "sound": "https://klokah.tw/extension/sp_senior/sound/5/3recognize/1_15.mp3" }
          ]
        },
        dicePrompts: ["ira ko...", "ira ko...", "ira ko..."],
        gridData: {}
    }

    , story1: {
        id: "story1",
        title: "看圖說故事 1-1～1-2 (朗讀全阿美語版)",
        sentences: [
            { "amis": "Aluman ku cavay nu maku,ira ku vavainayan , ira ku vavahiyan . Saremiad sa kami a maruyaruy a micudad , a mihulul.Kapah ku pasevanaay nu niyam, hinasuwal tu nu Pangcah a masasuwal kami.Manay maulah kami i ciraanan.", "chinese": "我有很多朋友，有男生，也有女生。我們天天一起讀書，也一起玩耍。我們的老師很好，她常常和我們一起說族語，也一起唱歌。我們都非常喜歡她(我們的老師)。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/nanshi/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/我們這⼀班_lef8rs.jpg" },
            { "amis": "U micudaday kaku, i ngata nu cacudadan ku luma’ nu maku. Rakaten nu maku a talacacudadan tu remiremiad,rakaten tu a taluma’. Dadahal ku cacudadan nu niyam, aluman aca ku micudaday, atu pasevana’ay. Kapah ku pasevana’ay nu niyam, saremiad sa a pacavay i tamiyanan a micudad, a remadiw. Hinasuwal kami tu nu Pangcah, ururam ku ulah nu maku tu cacudadan nu niyam.", "chinese": "我是學生，我的家在我的學校附近。我天天走路去學校，也走路回家。我們的學校很大，有很多學生，也有很多老師。我們的老師都很好，他們天天和我們一起讀書，也一起唱歌。我們常常說族語。我非常喜歡我的學校。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/nanshi/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/我的學校_lhafmv.jpg" }
          ],
        sentencesByDialect: {
          "南勢阿美語": [
            { "amis": "Aluman ku cavay nu maku,ira ku vavainayan , ira ku vavahiyan . Saremiad sa kami a maruyaruy a micudad , a mihulul.Kapah ku pasevanaay nu niyam, hinasuwal tu nu Pangcah a masasuwal kami.Manay maulah kami i ciraanan.", "chinese": "我有很多朋友，有男生，也有女生。我們天天一起讀書，也一起玩耍。我們的老師很好，她常常和我們一起說族語，也一起唱歌。我們都非常喜歡她(我們的老師)。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/nanshi/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/我們這⼀班_lef8rs.jpg" },
            { "amis": "U micudaday kaku, i ngata nu cacudadan ku luma’ nu maku. Rakaten nu maku a talacacudadan tu remiremiad,rakaten tu a taluma’. Dadahal ku cacudadan nu niyam, aluman aca ku micudaday, atu pasevana’ay. Kapah ku pasevana’ay nu niyam, saremiad sa a pacavay i tamiyanan a micudad, a remadiw. Hinasuwal kami tu nu Pangcah, ururam ku ulah nu maku tu cacudadan nu niyam.", "chinese": "我是學生，我的家在我的學校附近。我天天走路去學校，也走路回家。我們的學校很大，有很多學生，也有很多老師。我們的老師都很好，他們天天和我們一起讀書，也一起唱歌。我們常常說族語。我非常喜歡我的學校。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/nanshi/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/我的學校_lhafmv.jpg" }
          ],
          "秀姑巒阿美語": [
            { "amis": "'Aloman ko widang no mako, ira ko fa'inayan, ira ko fafahiyan. Caay kasasiday kami malacafay a miasip to codad, malahakelong misalama ato mimaamaan. Fangcal ko singsi niyam, mararid a pasifana' i tamiyanan to sowal no Pangcah. Pasifana' aca to radiw, sakero i tamiyanan. Saka maolah kami to singsi niyam.", "chinese": "我有很多朋友，有男生，也有女生。我們天天一起讀書，也一起玩耍。我們的老師很好，她常常和我們一起說族語，也一起唱歌。我們都非常喜歡她(我們的老師)。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/xiuguluan/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/我們這⼀班_lef8rs.jpg" },
            { "amis": "O sito kako, i ngata no picodadan ko loma' niyam. Saka romakat kako a talapicodadan, minokay nani picodadan to romi'ami'ad. Tata'ak ko picodadan niyam, 'aloman ko sito ato singsi. Fangcal ko singsi niyam, maolah a micafay i tamiyanan a miasip to codad, romadiw ato masakero. Mararid aca ko singsi a pasifana' to sowal no Pangcah i tamiyanan. Maolah kami to picodadan niyam.", "chinese": "我是學生。我的家在我的學校附近。我天天走路去學校，也走路回家。我們的學校很大，有很多學生，也有很多老師。我們的老師都很好。他們天天和我們一起讀書，也一起唱歌。我們常常說族語。我非常喜歡我的學校。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/xiuguluan/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/我的學校_lhafmv.jpg" }
          ],
          "海岸阿美語": [
            { "amis": "'Aloman ko widang ako,ira ko fa'inayan, ira ko fafahiyan.Romi'ami'ad malacafay misa'osi to codad kami, malacafay misalama. Fangcal ko singsi niyam,to laday cingra ato kami malacafay caciyaw to no Pangcah, malacafay a romadiw.Tadamaolah kami i cingraan.", "chinese": "我有很多朋友，有男生，也有女生。我們天天一起讀書，也一起玩耍。我們的老師很好，她常常和我們一起說族語，也一起唱歌。我們都非常喜歡她(我們的老師)。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/coast/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/我們這⼀班_lef8rs.jpg" },
            { "amis": "O mitiliday kako, i ngata no pitilidan ko loma' ako.Romi'ami'ad rakat sa kako tayra i pitilidan,minokay romakat to.Tata'ak ko pitilidan niyam, 'aloman ko mitiliday,'aloman ko singsi.Maemin fangcal ko singsi niyam,Romi'ami'ad cangra ato kami malacafay misa'osi to codad,malacafay romadiw.Tadamaolah kako to pitilidan niyam.", "chinese": "我是學生。我的家在我的學校附近。我天天走路去學校，也走路回家。我們的學校很大，有很多學生，也有很多老師。我們的老師都很好。他們天天和我們一起讀書，也一起唱歌。我們常常說族語。我非常喜歡我的學校。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/coast/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/我的學校_lhafmv.jpg" }
          ],
          "馬蘭阿美語": [
            { "amis": "Alomanay ko widang ako. Ila ko fa'inayan, ila ko fafahiyan. Malacafay kami a mitilid to romiamiad, malacafay kami a misalama. O singsi niyam nga'ayay. Malalid ko mira ato tamiyanan a caciyaw to sowal no Amis, malacafay haca a lomadiw.Tadamaolah kami to singsian niyam.", "chinese": "我有很多朋友，有男生，也有女生。我們天天一起讀書，也一起玩耍。我們的老師很好，她常常和我們一起說族語，也一起唱歌。我們都非常喜歡她(我們的老師)。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/malan/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/我們這⼀班_lef8rs.jpg" },
            { "amis": "O mitiliday kako. Mangataay ko loma' niyam to kongkoan ako. Romakat kako talakongkoan to romiamiad, romakat a minokay. Taangayay ko kongkoan niyam, alomanay ko mitiliday, alomanay ko singsi. Nga'ayay maemin ko singsi niyam. Malalid pacafay tamiyanan a mitilid, pacafay haca a lomadiw. Malaliday kami a somowal to sowal no Amis. Tadamaolah kako to kongkoan ako.", "chinese": "我是學生。我的家在我的學校附近。我天天走路去學校，也走路回家。我們的學校很大，有很多學生，也有很多老師。我們的老師都很好。他們天天和我們一起讀書，也一起唱歌。我們常常說族語。我非常喜歡我的學校。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/malan/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/我的學校_lhafmv.jpg" }
          ],
          "恆春阿美語": [
            { "amis": "'Aloman ko widang ako, ira ko fa'inayan, ato fafahiyan. mararid kami to romi'ami'ad mitilid, malacafay haca a misalama. nga'ayay ko singsi niyam, marariday cingra misano 'Amis somowal tamiyanan, malacecay haca kami a miraradiw. tadamaolahay kami to singsi niyam.", "chinese": "我有很多朋友，有男生，也有女生。我們天天一起讀書，也一起玩耍。我們的老師很好，她常常和我們一起說族語，也一起唱歌。我們都非常喜歡她(我們的老師)。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/hengchun/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/我們這⼀班_lef8rs.jpg" },
            { "amis": "O mitiliday ho kako. ingataay no kongkoan ko loma' ako. rakat sanay kako to romi'ami'ad a tayra i kongkoan, romakat haca kako a minokay. ta'angayay ko kongkoan niyam, 'aloman ko kapot, 'aloman haca ko singsi. nga'ayay ko singsi niyam. mikapotay cangra tamiyanan malacecay mitilid, malacecay haca romadiw. mararid kami misano'Amis a somowal. tadamaolahay kami to kongkoan niyam.", "chinese": "我是學生。我的家在我的學校附近。我天天走路去學校，也走路回家。我們的學校很大，有很多學生，也有很多老師。我們的老師都很好。他們天天和我們一起讀書，也一起唱歌。我們常常說族語。我非常喜歡我的學校。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/hengchun/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/我的學校_lhafmv.jpg" }
          ]
        },
        dicePrompts: ["ira ko...", "ira ko..."],
        gridData: {}
    }

    , story1_short: {
        id: "story1_short",
        title: "短句看圖說故事 1-1～1-2 (朗讀版)",
        sentences: [
            { "amis": "Aluman ku cavay nu maku,", "chinese": "我有很多朋友，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/nanshi/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "ira ku vavainayan,", "chinese": "有男生，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/nanshi/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "ira ku vavahiyan.", "chinese": "也有女生。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/nanshi/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "Saremiad sa kami a maruyaruy a micudad,", "chinese": "我們天天一起讀書，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/nanshi/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "a mihulul.", "chinese": "也一起玩耍。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/nanshi/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "Kapah ku pasevanaay nu niyam,", "chinese": "我們的老師很好，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/nanshi/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "hinasuwal tu nu Pangcah a masasuwal kami.", "chinese": "她常常和我們一起說族語，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/nanshi/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "Manay maulah kami i ciraanan.", "chinese": "我們都非常喜歡她。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/nanshi/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "U micudaday kaku,", "chinese": "我是學生，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/nanshi/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "i ngata nu cacudadan ku luma' nu maku.", "chinese": "我的家在我的學校附近。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/nanshi/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "Rakaten nu maku a talacacudadan tu remiremiad,", "chinese": "我天天走路去學校，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/nanshi/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "rakaten tu a taluma'.", "chinese": "也走路回家。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/nanshi/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "Dadahal ku cacudadan nu niyam,", "chinese": "我們的學校很大，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/nanshi/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "aluman aca ku micudaday, atu pasevana'ay.", "chinese": "有很多學生，也有很多老師。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/nanshi/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "Kapah ku pasevana'ay nu niyam,", "chinese": "我們的老師都很好，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/nanshi/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "saremiad sa a pacavay i tamiyanan a micudad, a remadiw.", "chinese": "他們天天和我們一起讀書，也一起唱歌。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/nanshi/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "Hinasuwal kami tu nu Pangcah,", "chinese": "我們常常說族語。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/nanshi/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "ururam ku ulah nu maku tu cacudadan nu niyam.", "chinese": "我非常喜歡我的學校。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/nanshi/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" }
          ],
        sentencesByDialect: {
          "南勢阿美語": [
            { "amis": "Aluman ku cavay nu maku,", "chinese": "我有很多朋友，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/nanshi/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "ira ku vavainayan,", "chinese": "有男生，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/nanshi/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "ira ku vavahiyan.", "chinese": "也有女生。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/nanshi/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "Saremiad sa kami a maruyaruy a micudad,", "chinese": "我們天天一起讀書，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/nanshi/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "a mihulul.", "chinese": "也一起玩耍。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/nanshi/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "Kapah ku pasevanaay nu niyam,", "chinese": "我們的老師很好，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/nanshi/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "hinasuwal tu nu Pangcah a masasuwal kami.", "chinese": "她常常和我們一起說族語，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/nanshi/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "Manay maulah kami i ciraanan.", "chinese": "我們都非常喜歡她。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/nanshi/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "U micudaday kaku,", "chinese": "我是學生，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/nanshi/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "i ngata nu cacudadan ku luma' nu maku.", "chinese": "我的家在我的學校附近。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/nanshi/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "Rakaten nu maku a talacacudadan tu remiremiad,", "chinese": "我天天走路去學校，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/nanshi/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "rakaten tu a taluma'.", "chinese": "也走路回家。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/nanshi/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "Dadahal ku cacudadan nu niyam,", "chinese": "我們的學校很大，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/nanshi/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "aluman aca ku micudaday, atu pasevana'ay.", "chinese": "有很多學生，也有很多老師。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/nanshi/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "Kapah ku pasevana'ay nu niyam,", "chinese": "我們的老師都很好，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/nanshi/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "saremiad sa a pacavay i tamiyanan a micudad, a remadiw.", "chinese": "他們天天和我們一起讀書，也一起唱歌。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/nanshi/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "Hinasuwal kami tu nu Pangcah,", "chinese": "我們常常說族語。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/nanshi/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "ururam ku ulah nu maku tu cacudadan nu niyam.", "chinese": "我非常喜歡我的學校。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/nanshi/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" }
          ],
          "秀姑巒阿美語": [
            { "amis": "Aloman ko widang no mako,", "chinese": "我有很多朋友，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/xiuguluan/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "ira ko fa'inayan,", "chinese": "有男生，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/xiuguluan/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "ira ko fafahiyan.", "chinese": "也有女生。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/xiuguluan/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "Caay kasasiday kami malacafay a miasip to codad,", "chinese": "我們天天一起讀書，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/xiuguluan/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "malahakelong misalama ato mimaamaan.", "chinese": "也一起玩耍。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/xiuguluan/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "Fangcal ko singsi niyam,", "chinese": "我們的老師很好，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/xiuguluan/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "mararid a pasifana' i tamiyanan to sowal no Pangcah.", "chinese": "她常常和我們一起說族語，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/xiuguluan/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "Pasifana' aca to radiw, sakero i tamiyanan.", "chinese": "也一起唱歌。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/xiuguluan/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "Saka maolah kami to singsi niyam.", "chinese": "我們都非常喜歡她。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/xiuguluan/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "O sito kako,", "chinese": "我是學生，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/xiuguluan/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "i ngata no picodadan ko loma' niyam.", "chinese": "我的家在我的學校附近。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/xiuguluan/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "Saka romakat kako a talapicodadan,", "chinese": "我天天走路去學校，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/xiuguluan/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "minokay nani picodadan to romi'ami'ad.", "chinese": "也走路回家。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/xiuguluan/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "Tata'ak ko picodadan niyam,", "chinese": "我們的學校很大，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/xiuguluan/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "aloman ko sito ato singsi.", "chinese": "有很多學生，也有很多老師。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/xiuguluan/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "Fangcal ko singsi niyam,", "chinese": "我們的老師都很好，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/xiuguluan/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "maolah a micafay i tamiyanan a miasip to codad, romadiw ato masakero.", "chinese": "他們天天和我們一起讀書，也一起唱歌。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/xiuguluan/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "Mararid aca ko singsi a pasifana' to sowal no Pangcah i tamiyanan.", "chinese": "我們常常說族語。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/xiuguluan/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "Maolah kami to picodadan niyam.", "chinese": "我非常喜歡我的學校。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/xiuguluan/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" }
          ],
          "海岸阿美語": [
            { "amis": "Aloman ko widang ako,", "chinese": "我有很多朋友，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/coast/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "ira ko fa'inayan,", "chinese": "有男生，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/coast/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "ira ko fafahiyan.", "chinese": "也有女生。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/coast/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "Romi'ami'ad malacafay misa'osi to codad kami,", "chinese": "我們天天一起讀書，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/coast/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "malacafay misalama.", "chinese": "也一起玩耍。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/coast/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "Fangcal ko singsi niyam,", "chinese": "我們的老師很好，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/coast/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "to laday cingra ato kami malacafay caciyaw to no Pangcah,", "chinese": "她常常和我們一起說族語，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/coast/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "malacafay a romadiw.", "chinese": "也一起唱歌。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/coast/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "Tadamaolah kami i cingraan.", "chinese": "我們都非常喜歡她。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/coast/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "O mitiliday kako,", "chinese": "我是學生，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/coast/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "i ngata no pitilidan ko loma' ako.", "chinese": "我的家在我的學校附近。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/coast/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "Romi'ami'ad rakat sa kako tayra i pitilidan,", "chinese": "我天天走路去學校，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/coast/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "minokay romakat to.", "chinese": "也走路回家。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/coast/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "Tata'ak ko pitilidan niyam,", "chinese": "我們的學校很大，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/coast/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "aloman ko mitiliday, 'aloman ko singsi.", "chinese": "有很多學生，也有很多老師。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/coast/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "Maemin fangcal ko singsi niyam,", "chinese": "我們的老師都很好，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/coast/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "romi'ami'ad cangra ato kami malacafay misa'osi to codad, malacafay romadiw.", "chinese": "他們天天和我們一起讀書，也一起唱歌。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/coast/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "Tadamaolah kako to pitilidan niyam.", "chinese": "我非常喜歡我的學校。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/coast/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" }
          ],
          "馬蘭阿美語": [
            { "amis": "Alomanay ko widang ako.", "chinese": "我有很多朋友，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/malan/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "Ila ko fa'inayan,", "chinese": "有男生，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/malan/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "ila ko fafahiyan.", "chinese": "也有女生。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/malan/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "Malacafay kami a mitilid to romiamiad,", "chinese": "我們天天一起讀書，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/malan/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "malacafay kami a misalama.", "chinese": "也一起玩耍。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/malan/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "O singsi niyam nga'ayay.", "chinese": "我們的老師很好，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/malan/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "Malalid ko mira ato tamiyanan a caciyaw to sowal no Amis,", "chinese": "她常常和我們一起說族語，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/malan/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "malacafay haca a lomadiw.", "chinese": "也一起唱歌。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/malan/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "Tadamaolah kami to singsian niyam.", "chinese": "我們都非常喜歡她。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/malan/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "O mitiliday kako.", "chinese": "我是學生，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/malan/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "Mangataay ko loma' niyam to kongkoan ako.", "chinese": "我的家在我的學校附近。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/malan/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "Romakat kako talakongkoan to romiamiad,", "chinese": "我天天走路去學校，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/malan/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "romakat a minokay.", "chinese": "也走路回家。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/malan/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "Taangayay ko kongkoan niyam,", "chinese": "我們的學校很大，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/malan/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "alomanay ko mitiliday, alomanay ko singsi.", "chinese": "有很多學生，也有很多老師。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/malan/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "Nga'ayay maemin ko singsi niyam.", "chinese": "我們的老師都很好，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/malan/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "Malalid pacafay tamiyanan a mitilid, pacafay haca a lomadiw.", "chinese": "他們天天和我們一起讀書，也一起唱歌。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/malan/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "Malaliday kami a somowal to sowal no Amis.", "chinese": "我們常常說族語。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/malan/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "Tadamaolah kako to kongkoan ako.", "chinese": "我非常喜歡我的學校。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/malan/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" }
          ],
          "恆春阿美語": [
            { "amis": "Aloman ko widang ako,", "chinese": "我有很多朋友，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/hengchun/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "ira ko fa'inayan,", "chinese": "有男生，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/hengchun/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "ato fafahiyan.", "chinese": "也有女生。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/hengchun/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "Mararid kami to romi'ami'ad mitilid,", "chinese": "我們天天一起讀書，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/hengchun/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "malacafay haca a misalama.", "chinese": "也一起玩耍。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/hengchun/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "Nga'ayay ko singsi niyam,", "chinese": "我們的老師很好，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/hengchun/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "marariday cingra misano 'Amis somowal tamiyanan,", "chinese": "她常常和我們一起說族語，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/hengchun/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "malacecay haca kami a miraradiw.", "chinese": "也一起唱歌。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/hengchun/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "Tadamaolahay kami to singsi niyam.", "chinese": "我們都非常喜歡她。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/hengchun/story_1_1.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/%E6%88%91%E5%80%91%E9%80%99%E4%B8%80%E7%8F%AD_lef8rs.jpg" },
            { "amis": "O mitiliday ho kako.", "chinese": "我是學生，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/hengchun/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "Ingataay no kongkoan ko loma' ako.", "chinese": "我的家在我的學校附近。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/hengchun/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "Rakat sanay kako to romi'ami'ad a tayra i kongkoan,", "chinese": "我天天走路去學校，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/hengchun/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "romakat haca kako a minokay.", "chinese": "也走路回家。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/hengchun/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "Ta'angayay ko kongkoan niyam,", "chinese": "我們的學校很大，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/hengchun/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "aloman ko kapot, 'aloman haca ko singsi.", "chinese": "有很多學生，也有很多老師。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/hengchun/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "Nga'ayay ko singsi niyam.", "chinese": "我們的老師都很好，", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/hengchun/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "Mikapotay cangra tamiyanan malacecay mitilid, malacecay haca romadiw.", "chinese": "他們天天和我們一起讀書，也一起唱歌。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/hengchun/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "Mararid kami misano'Amis a somowal.", "chinese": "我們常常說族語。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/hengchun/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" },
            { "amis": "Tadamaolahay kami to kongkoan niyam.", "chinese": "我非常喜歡我的學校。", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/hengchun/story_1_2.mp3", "image": "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/%E6%88%91%E7%9A%84%E5%AD%B8%E6%A0%A1_lhafmv.jpg" }
          ]
        },
        dicePrompts: ["ira ko...", "ira ko...", "ira ko..."],
        gridData: {}
    }

    , recognize_info_question: {
        id: "recognize_info_question",
        title: "看圖識字_訊息問句 2-1~2-15 (朗讀全阿美語版)",
        sentences: [
            { "amis": "Icuwa ku rarapa nu maku?", "chinese": "我的牛在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/nanshi/2_1.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_1.png" },
            { "amis": "Icuwa ku siri nu maku?", "chinese": "我的羊在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/nanshi/2_2.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_2.png" },
            { "amis": "Icuwa ku tuul nu maku?", "chinese": "我的貓頭鷹在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/nanshi/2_3.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_3.png" },
            { "amis": "Icuwa ku sapad nu heni?", "chinese": "他們的桌子在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/nanshi/2_4.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_4.png" },
            { "amis": "Icuwa ku elun nu heni?", "chinese": "他們的椅子在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/nanshi/2_5.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_5.png" },
            { "amis": "Icuwa ku tinnaw nu heni?", "chinese": "他們的電腦在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/nanshi/2_6.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_6.png" },
            { "amis": "Icuwa ku vunga nu misu?", "chinese": "你的地瓜在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/nanshi/2_7.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_7.png" },
            { "amis": "Icuwa ku taviras nu misu?", "chinese": "你的玉米在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/nanshi/2_8.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_8.png" },
            { "amis": "Icuwa ku tamurak nu misu?", "chinese": "你的南瓜在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/nanshi/2_9.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_9.png" },
            { "amis": "Icuwa ku pawli nu namu?", "chinese": "你們的香蕉在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/nanshi/2_10.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_10.png" },
            { "amis": "Icuwa ku tevus nu namu?", "chinese": "你們的甘蔗在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/nanshi/2_11.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_11.png" },
            { "amis": "Icuwa ku kiyaves nu namu?", "chinese": "你們的番石榴在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/nanshi/2_12.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_12.png" },
            { "amis": "Icuwa ku luma’ nu nira?", "chinese": "她的家在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/nanshi/2_13.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_13.png" },
            { "amis": "Icuwa ku cacudadan nu nira?", "chinese": "她的學校在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/nanshi/2_14.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_14.png" },
            { "amis": "Icuwa ku niyaru’ nu nira?", "chinese": "她的村莊在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/nanshi/2_15.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_15.png" }
          ],
        sentencesByDialect: {
          "南勢阿美語": [
            { "amis": "Icuwa ku rarapa nu maku?", "chinese": "我的牛在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/nanshi/2_1.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_1.png" },
            { "amis": "Icuwa ku siri nu maku?", "chinese": "我的羊在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/nanshi/2_2.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_2.png" },
            { "amis": "Icuwa ku tuul nu maku?", "chinese": "我的貓頭鷹在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/nanshi/2_3.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_3.png" },
            { "amis": "Icuwa ku sapad nu heni?", "chinese": "他們的桌子在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/nanshi/2_4.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_4.png" },
            { "amis": "Icuwa ku elun nu heni?", "chinese": "他們的椅子在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/nanshi/2_5.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_5.png" },
            { "amis": "Icuwa ku tinnaw nu heni?", "chinese": "他們的電腦在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/nanshi/2_6.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_6.png" },
            { "amis": "Icuwa ku vunga nu misu?", "chinese": "你的地瓜在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/nanshi/2_7.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_7.png" },
            { "amis": "Icuwa ku taviras nu misu?", "chinese": "你的玉米在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/nanshi/2_8.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_8.png" },
            { "amis": "Icuwa ku tamurak nu misu?", "chinese": "你的南瓜在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/nanshi/2_9.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_9.png" },
            { "amis": "Icuwa ku pawli nu namu?", "chinese": "你們的香蕉在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/nanshi/2_10.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_10.png" },
            { "amis": "Icuwa ku tevus nu namu?", "chinese": "你們的甘蔗在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/nanshi/2_11.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_11.png" },
            { "amis": "Icuwa ku kiyaves nu namu?", "chinese": "你們的番石榴在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/nanshi/2_12.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_12.png" },
            { "amis": "Icuwa ku luma’ nu nira?", "chinese": "她的家在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/nanshi/2_13.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_13.png" },
            { "amis": "Icuwa ku cacudadan nu nira?", "chinese": "她的學校在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/nanshi/2_14.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_14.png" },
            { "amis": "Icuwa ku niyaru’ nu nira?", "chinese": "她的村莊在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/nanshi/2_15.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_15.png" }
          ],
          "秀姑巒阿美語": [
            { "amis": "I cowa ko kolong no mako ?", "chinese": "我的牛在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/xiuguluan/2_1.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_1.png" },
            { "amis": "I cowa ko siri no mako ?", "chinese": "我的羊在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/xiuguluan/2_2.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_2.png" },
            { "amis": "I cowa ko ekong no mako ?", "chinese": "我的貓頭鷹在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/xiuguluan/2_3.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_3.png" },
            { "amis": "I cowa ko sapad naira?", "chinese": "他們的桌子在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/xiuguluan/2_4.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_4.png" },
            { "amis": "I cowa ko 'anengang naira ?", "chinese": "他們的椅子在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/xiuguluan/2_5.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_5.png" },
            { "amis": "I cowa ko tingnaw naira ?", "chinese": "他們的電腦在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/xiuguluan/2_6.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_6.png" },
            { "amis": "I cowa ko fonga no miso ?", "chinese": "你的地瓜在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/xiuguluan/2_7.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_7.png" },
            { "amis": "I cowa ko 'ariray no miso ?", "chinese": "你的玉米在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/xiuguluan/2_8.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_8.png" },
            { "amis": "I cowa ko tamorak no miso ?", "chinese": "你的南瓜在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/xiuguluan/2_9.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_9.png" },
            { "amis": "I cowa ko pawli no miso ?", "chinese": "你們的香蕉在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/xiuguluan/2_10.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_10.png" },
            { "amis": "I cowa ko tefos no miso ?", "chinese": "你的甘蔗在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/xiuguluan/2_11.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_11.png" },
            { "amis": "Icowa^ ko kiyafes no miso ?", "chinese": "你的番石榴在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/xiuguluan/2_12.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_12.png" },
            { "amis": "I cowa ko loma' nira ?", "chinese": "她的家在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/xiuguluan/2_13.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_13.png" },
            { "amis": "I cowa ko picodadan nira ?", "chinese": "她的學校在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/xiuguluan/2_14.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_14.png" },
            { "amis": "I cowa ko niyaro' nira ?", "chinese": "她的村莊在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/xiuguluan/2_15.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_15.png" }
          ],
          "海岸阿美語": [
            { "amis": "Icowa ko kolong ako?", "chinese": "我的牛在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/coast/2_1.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_1.png" },
            { "amis": "Icowa ko siri ako?", "chinese": "我的羊在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/coast/2_2.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_2.png" },
            { "amis": "Icowa ko ekong ako?", "chinese": "我的貓頭鷹在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/coast/2_3.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_3.png" },
            { "amis": "Icowa ko parad nangra?", "chinese": "他們的桌子在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/coast/2_4.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_4.png" },
            { "amis": "Icowa ko 'anengan nangra?", "chinese": "他們的椅子在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/coast/2_5.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_5.png" },
            { "amis": "Icowa ko tingnaw nangra?", "chinese": "他們的電腦在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/coast/2_6.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_6.png" },
            { "amis": "Icowa ko konga iso?", "chinese": "你的地瓜在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/coast/2_7.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_7.png" },
            { "amis": "Icowa ko 'ariray iso?", "chinese": "你的玉米在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/coast/2_8.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_8.png" },
            { "amis": "Icowa ko tamorak iso?", "chinese": "你的南瓜在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/coast/2_9.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_9.png" },
            { "amis": "Icowa ko pawli namo?", "chinese": "你們的香蕉在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/coast/2_10.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_10.png" },
            { "amis": "Icowa ko tefos namo?", "chinese": "你們的甘蔗在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/coast/2_11.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_11.png" },
            { "amis": "Icowa ko kiyafes namo?", "chinese": "你們的番石榴在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/coast/2_12.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_12.png" },
            { "amis": "Icowa ko loma' nira?", "chinese": "她的家在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/coast/2_13.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_13.png" },
            { "amis": "Icowa ko pitilidan nira?", "chinese": "她的學校在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/coast/2_14.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_14.png" },
            { "amis": "Icowa ko niyaro' nira?", "chinese": "她的村莊在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/coast/2_15.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_15.png" }
          ],
          "馬蘭阿美語": [
            { "amis": "I cowaay ko kolong no mako?", "chinese": "我的牛在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/malan/2_1.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_1.png" },
            { "amis": "I cowaay ko siri no mako?", "chinese": "我的羊在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/malan/2_2.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_2.png" },
            { "amis": "I cowaay ko ekong no mako?", "chinese": "我的貓頭鷹在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/malan/2_3.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_3.png" },
            { "amis": "I cowaay ko cokowi nangra?", "chinese": "他們的桌子在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/malan/2_4.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_4.png" },
            { "amis": "I cowaay ko hakenag nangra?", "chinese": "他們的椅子在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/malan/2_5.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_5.png" },
            { "amis": "I cowaay ko tingnaw naira?", "chinese": "他們的電腦在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/malan/2_6.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_6.png" },
            { "amis": "I cowaay ko konga no miso?", "chinese": "你的地瓜在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/malan/2_7.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_7.png" },
            { "amis": "I cowaay ko ariray no miso?", "chinese": "你的玉米在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/malan/2_8.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_8.png" },
            { "amis": "I cowaay ko ciyak no miso?", "chinese": "你的南瓜在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/malan/2_9.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_9.png" },
            { "amis": "I cowaay ko pawli namo?", "chinese": "你們的香蕉在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/malan/2_10.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_10.png" },
            { "amis": "I cowaay ko tefos namo?", "chinese": "你們的甘蔗在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/malan/2_11.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_11.png" },
            { "amis": "I cowaay ko kodafes namo?", "chinese": "你們的番石榴在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/malan/2_12.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_12.png" },
            { "amis": "I cowaay ko loma' no mira?", "chinese": "她的家在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/malan/2_13.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_13.png" },
            { "amis": "I cowaay ko kongkoan no mira?", "chinese": "她的學校在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/malan/2_14.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_14.png" },
            { "amis": "I cowaay ko niyaro' no mira?", "chinese": "她的村莊在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/malan/2_15.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_15.png" }
          ],
          "恆春阿美語": [
            { "amis": "Icowaay ko kolong no mako?", "chinese": "我的牛在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/hengchun/2_1.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_1.png" },
            { "amis": "Icowaay ko siri no mako?", "chinese": "我的羊在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/hengchun/2_2.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_2.png" },
            { "amis": "Icowaay ko ^ekong no mako?", "chinese": "我的貓頭鷹在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/hengchun/2_3.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_3.png" },
            { "amis": "Icowaay ko ^eto nangra?", "chinese": "他們的桌子在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/hengchun/2_4.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_4.png" },
            { "amis": "Icowaay ko 'aexnan nangra?", "chinese": "他們的椅子在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/hengchun/2_5.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_5.png" },
            { "amis": "Icowaay ko tinnaw nangra?", "chinese": "他們的電腦在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/hengchun/2_6.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_6.png" },
            { "amis": "Icowaay ko konga no miso?", "chinese": "你的地瓜在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/hengchun/2_7.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_7.png" },
            { "amis": "Icowaay ko 'ariray no miso?", "chinese": "你的玉米在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/hengchun/2_8.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_8.png" },
            { "amis": "Icowaay ko ciyak no miso?", "chinese": "你的南瓜在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/hengchun/2_9.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_9.png" },
            { "amis": "Icowaay ko pawli nangra?", "chinese": "你們的香蕉在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/hengchun/2_10.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_10.png" },
            { "amis": "Icowaay ko tefos nangra?", "chinese": "你們的甘蔗在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/hengchun/2_11.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_11.png" },
            { "amis": "Icowaay ko kidafes namo?", "chinese": "你們的番石榴在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/hengchun/2_12.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_12.png" },
            { "amis": "Icowaay ko loma' ningra?", "chinese": "她的家在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/hengchun/2_13.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_13.png" },
            { "amis": "Icowaay ko kongkoan ningra?", "chinese": "她的學校在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/hengchun/2_14.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_14.png" },
            { "amis": "Icowaay ko niyaro' ningra?", "chinese": "她的村莊在哪裡？", "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/recognize/info_question/hengchun/2_15.mp3", "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/recognize/2_15.png" }
          ]
        },
        dicePrompts: ["icowa ko...", "o maan koya...", "cima koya..."],
        gridData: {}
    }
,

  
  
  "topic15": {
    "id": "topic15",
    "title": "是非問句 4_1~4_16, 5_1~5_16",
    "gridData": {"a":{"label":"...","amis":"A: O sito kiso haw ? B: Hay, o sito kako.","chinese":"A: 你是學生嗎？ B: 是，我是學生。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_1.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_1.png"},"b":{"label":"...","amis":"A: O singsi ciira haw ? B: Caay, o ising ciira.","chinese":"A: 他是老師嗎？ B: 不是，他是醫生。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_2.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_2.png"},"c":{"label":"...","amis":"A: O singsi no miso ciira haw ? B: Hay, o singsi no mako ciira.","chinese":"A: 他是你的老師嗎？ B: 是/對，他是我的老師。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_3.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_3.png"},"d":{"label":"...","amis":"A: O faki no miso ciira haw ? B: Caay, o singsi no mako ciira.","chinese":"A: 他是你的叔叔嗎？ B: 不是，他是我的老師。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_4.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_4.png"},"e":{"label":"...","amis":"A: Cecay ko fafahiyan a safa no miso haw ? B: Caay, tatosa ko fafahiyan a safa no mako.","chinese":"A: 你有一個妹妹嗎？ B: 不，我有二個妹妹。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_5.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_5.png"},"f":{"label":"...","amis":"A: Tatosa ko fa'inayan a safa no miso haw ? B: Caay, cecay ko fa'inayan a kaka ato cecay ko fa'inayan a safas no mako.","chinese":"A: 你有兩個弟弟嗎？ B: 不，我有一個哥哥一個弟弟。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_6.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_6.png"},"g":{"label":"...","amis":"A: Tatosa ko fafahiyan a kaka no miso haw ? B: Caay, cecay ko fafahiyan a kaka ato cecay ko fa'inayan a kaka no mako.","chinese":"A: 你有兩個姊姊嗎？ B: 不，我有一個姊姊一個哥哥。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_7.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_7.png"},"h":{"label":"...","amis":"A: O pida no mako kinian haw ? B: Hay, o pida no miso kinian.","chinese":"A: 這是我的錢嗎？ B: 是的，這是你的錢。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_8.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_8.png"},"i":{"label":"...","amis":"A: O falo no miso kiraan haw ? B: Caay, caayay ko falo no mako kiraan.","chinese":"A: 那些是你的花嗎？ B: 不是，那些不是我的花。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_9.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_9.png"},"j":{"label":"...","amis":"A: Mamaan kiso? B: Adada ko tangal no mako.","chinese":"A: 你怎麼了？ B: 我的頭很痛。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_10.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_10.png"},"o":{"label":"...","amis":"A: Mamaan kiso? B: Adada ko mata no mako.","chinese":"A: 你怎麼了？ B: 我的眼睛很痛。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_11.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_11.png"},"p":{"label":"...","amis":"A: Kareteng kora sapad haw ? B: Hay, kareteng kora sapat.","chinese":"A: 這張桌子很重嗎？ B: 是/對，這張桌子很重。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_12.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_12.png"},"q":{"label":"...","amis":"A: Kareteng kora 'anengang haw ? B: Caay, dahemaw kora 'anengang.","chinese":"A: 那張椅子很重嗎？ B: 不，那張椅子很輕。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_13.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_13.png"},"r":{"label":"...","amis":"A: O kohetingay ko posi no miso haw ? B: Hay, o kohetingay ko posi no mako.","chinese":"A: 你的貓是黑色的嗎？ B: 是/對，我的貓是黑色的。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_14.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_14.png"},"s":{"label":"...","amis":"A: Minengneng caira to tilifi to romi'admi'ad haw ? B: Hay, minengneng caira to tilifi to romi'admi'ad.","chinese":"A: 他們天天看電視嗎？ B: 是/對，他們天天看電視。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_15.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_15.png"},"t":{"label":"...","amis":"A: Fangcal ko romi'ad anini haw ? B: Hay, fangcal ko romi'ad anini.","chinese":"A: 今天天氣好嗎？ B: 是/對，今天天氣很好。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_16.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_16.png"},"u":{"label":"...","amis":"A: Miasipay kiso to codad haw ? B: Hay, o miasipay kako to codad.","chinese":"A: 你在讀書嗎？ B: 是的，我在讀書。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_1.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_1.png"},"v":{"label":"...","amis":"A: Miasipay kiso to codad i matini haw ? B: Caay, o mirenafay kako i matini.","chinese":"A: 你在讀書嗎？ B: 不，我在畫畫。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_2.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_2.png"},"w":{"label":"...","amis":"A: Mafoti'ay ko fafahiyan a safa no miso haw ? B: Hay,mafati'ay ciira i matini.","chinese":"A: 你妹妹在睡覺嗎？ B: 是的，她在睡覺。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_3.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_3.png"},"x":{"label":"...","amis":"A: Mafoti'ay ko fafahiyan a safa no miso i matini haw ? B: Caay,masakeroy ciira i matini.","chinese":"A: 你妹妹在睡覺嗎？ B: 不是，她在跳舞。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_4.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_4.png"}},
    "gridDataByDialect": {"秀姑巒阿美語":{"a":{"label":"...","amis":"A: O sito kiso haw ? B: Hay, o sito kako.","chinese":"A: 你是學生嗎？ B: 是，我是學生。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_1.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_1.png"},"b":{"label":"...","amis":"A: O singsi ciira haw ? B: Caay, o ising ciira.","chinese":"A: 他是老師嗎？ B: 不是，他是醫生。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_2.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_2.png"},"c":{"label":"...","amis":"A: O singsi no miso ciira haw ? B: Hay, o singsi no mako ciira.","chinese":"A: 他是你的老師嗎？ B: 是/對，他是我的老師。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_3.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_3.png"},"d":{"label":"...","amis":"A: O faki no miso ciira haw ? B: Caay, o singsi no mako ciira.","chinese":"A: 他是你的叔叔嗎？ B: 不是，他是我的老師。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_4.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_4.png"},"e":{"label":"...","amis":"A: Cecay ko fafahiyan a safa no miso haw ? B: Caay, tatosa ko fafahiyan a safa no mako.","chinese":"A: 你有一個妹妹嗎？ B: 不，我有二個妹妹。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_5.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_5.png"},"f":{"label":"...","amis":"A: Tatosa ko fa'inayan a safa no miso haw ? B: Caay, cecay ko fa'inayan a kaka ato cecay ko fa'inayan a safas no mako.","chinese":"A: 你有兩個弟弟嗎？ B: 不，我有一個哥哥一個弟弟。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_6.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_6.png"},"g":{"label":"...","amis":"A: Tatosa ko fafahiyan a kaka no miso haw ? B: Caay, cecay ko fafahiyan a kaka ato cecay ko fa'inayan a kaka no mako.","chinese":"A: 你有兩個姊姊嗎？ B: 不，我有一個姊姊一個哥哥。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_7.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_7.png"},"h":{"label":"...","amis":"A: O pida no mako kinian haw ? B: Hay, o pida no miso kinian.","chinese":"A: 這是我的錢嗎？ B: 是的，這是你的錢。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_8.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_8.png"},"i":{"label":"...","amis":"A: O falo no miso kiraan haw ? B: Caay, caayay ko falo no mako kiraan.","chinese":"A: 那些是你的花嗎？ B: 不是，那些不是我的花。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_9.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_9.png"},"j":{"label":"...","amis":"A: Mamaan kiso? B: Adada ko tangal no mako.","chinese":"A: 你怎麼了？ B: 我的頭很痛。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_10.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_10.png"},"o":{"label":"...","amis":"A: Mamaan kiso? B: Adada ko mata no mako.","chinese":"A: 你怎麼了？ B: 我的眼睛很痛。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_11.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_11.png"},"p":{"label":"...","amis":"A: Kareteng kora sapad haw ? B: Hay, kareteng kora sapat.","chinese":"A: 這張桌子很重嗎？ B: 是/對，這張桌子很重。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_12.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_12.png"},"q":{"label":"...","amis":"A: Kareteng kora 'anengang haw ? B: Caay, dahemaw kora 'anengang.","chinese":"A: 那張椅子很重嗎？ B: 不，那張椅子很輕。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_13.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_13.png"},"r":{"label":"...","amis":"A: O kohetingay ko posi no miso haw ? B: Hay, o kohetingay ko posi no mako.","chinese":"A: 你的貓是黑色的嗎？ B: 是/對，我的貓是黑色的。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_14.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_14.png"},"s":{"label":"...","amis":"A: Minengneng caira to tilifi to romi'admi'ad haw ? B: Hay, minengneng caira to tilifi to romi'admi'ad.","chinese":"A: 他們天天看電視嗎？ B: 是/對，他們天天看電視。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_15.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_15.png"},"t":{"label":"...","amis":"A: Fangcal ko romi'ad anini haw ? B: Hay, fangcal ko romi'ad anini.","chinese":"A: 今天天氣好嗎？ B: 是/對，今天天氣很好。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_16.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_16.png"},"u":{"label":"...","amis":"A: Miasipay kiso to codad haw ? B: Hay, o miasipay kako to codad.","chinese":"A: 你在讀書嗎？ B: 是的，我在讀書。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_1.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_1.png"},"v":{"label":"...","amis":"A: Miasipay kiso to codad i matini haw ? B: Caay, o mirenafay kako i matini.","chinese":"A: 你在讀書嗎？ B: 不，我在畫畫。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_2.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_2.png"},"w":{"label":"...","amis":"A: Mafoti'ay ko fafahiyan a safa no miso haw ? B: Hay,mafati'ay ciira i matini.","chinese":"A: 你妹妹在睡覺嗎？ B: 是的，她在睡覺。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_3.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_3.png"},"x":{"label":"...","amis":"A: Mafoti'ay ko fafahiyan a safa no miso i matini haw ? B: Caay,masakeroy ciira i matini.","chinese":"A: 你妹妹在睡覺嗎？ B: 不是，她在跳舞。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_4.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_4.png"}},"南勢阿美語":{"a":{"label":"...","amis":"A: U micudaday haw kisu? B: Hay,u micudaday kaku.","chinese":"A: 你是學生嗎？ B: 是，我是學生。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/4_1.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_1.png"},"b":{"label":"...","amis":"A: U pasevanaay haw cira? B: Caay,u ising cira.","chinese":"A: 他是老師嗎？ B: 不是，他是醫生。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/4_2.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_2.png"},"c":{"label":"...","amis":"A: U pasevanaay haw nu misu cira? B: Hay,u pasevanaay nu maku cira.","chinese":"A: 他是你的老師嗎？ B: 是/對，他是我的老師。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/4_3.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_3.png"},"d":{"label":"...","amis":"A: U vaki haw nu misu cira? B: Caay,u pasevanaay nu maku cira.","chinese":"A: 他是你的叔叔嗎？ B: 不是，他是我的老師。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/4_4.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_4.png"},"e":{"label":"...","amis":"A: Cacay haw ku vavahiyan a sava nu misu? B: Caay,tatusa ku sava nu maku tu vavahiyan.","chinese":"A: 你有一個妹妹嗎？ B: 不，我有二個妹妹。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/4_5.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_5.png"},"f":{"label":"...","amis":"A: Tatusa haw ku vavainayan a sava nu misu? B: Caay,cacay ku kaka tu vavainayan atu cacay ku sava tu vavainayan.","chinese":"A: 你有兩個弟弟嗎？ B: 不，我有一個哥哥一個弟弟。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/4_6.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_6.png"},"g":{"label":"...","amis":"A: Tatusa haw ku kaka nu misu tu vavahiyan? B: Caay,cacay ku kaka tu vavahiyan atu cacay ku kaka tu vavainayan.","chinese":"A: 你有兩個姊姊嗎？ B: 不，我有一個姊姊一個哥哥。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/4_7.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_7.png"},"h":{"label":"...","amis":"A: U pida haw nu maku kiniyan? B: Hay,u pida nu misu kiniyan.","chinese":"A: 這是我的錢嗎？ B: 是的，這是你的錢。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/4_8.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_8.png"},"i":{"label":"...","amis":"A: U varu haw nu misu kiraan? B: Caay,caay kaw nu maku a varu kiraan.","chinese":"A: 那些是你的花嗎？ B: 不是，那些不是我的花。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/4_9.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_9.png"},"j":{"label":"...","amis":"A: Mamaan saw kisu? B: Adada ku tangal nu maku.","chinese":"A: 你怎麼了？ B: 我的頭很痛。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/4_10.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_10.png"},"o":{"label":"...","amis":"A: Mamaan saw kisu? B: Adada ku mata nu maku.","chinese":"A: 你怎麼了？ B: 我的眼睛很痛。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/4_11.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_11.png"},"p":{"label":"...","amis":"A: Vaeket haw kina sapad? B: Hay,vaeket kina sapad.","chinese":"A: 這張桌子很重嗎？ B: 是/對，這張桌子很重。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/4_12.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_12.png"},"q":{"label":"...","amis":"A: Vaeket haw kira elun? B: Caay,ahemaw kira elun.","chinese":"A: 那張椅子很重嗎？ B: 不，那張椅子很輕。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/4_13.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_13.png"},"r":{"label":"...","amis":"A: U muhetingay haw ku nani nu misu? B: Hay,u muhetingay ku nani nu maku.","chinese":"A: 你的貓是黑色的嗎？ B: 是/對，我的貓是黑色的。","sound":"","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_14.png"},"s":{"label":"...","amis":"A: Saremiremiad sa haw a mimelaw tu tilivi ku heni? B: Hay,saremiremiad sa a mimelaw tu tilivi ku heni.","chinese":"A: 他們天天看電視嗎？ B: 是/對，他們天天看電視。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/4_15.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_15.png"},"t":{"label":"...","amis":"A: Kapah haw ku remiad anini? B: Hay,kapah ku remiad anini.","chinese":"A: 今天天氣好嗎？ B: 是/對，今天天氣很好。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/4_16.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_16.png"},"u":{"label":"...","amis":"A: Micudad haw kisu? B: Hay,micudad kaku.","chinese":"A: 你在讀書嗎？ B: 是的，我在讀書。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/5_1.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_1.png"},"v":{"label":"...","amis":"A: Micudad haw kisu? B: Caay,mikulit kaku.","chinese":"A: 你在讀書嗎？ B: 不，我在畫畫���","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/5_2.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_2.png"},"w":{"label":"...","amis":"A: Mavuti’ haw ku sava nu misu tu vavahiyan? B: Hay,mavuti’ cira.","chinese":"A: 你妹妹在睡覺嗎？ B: 是的，她在睡覺。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/5_3.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_3.png"},"x":{"label":"...","amis":"A: Mavuti’ haw ku sava nu misu tu vavahiyan? B: Caay,misakeru cira.","chinese":"A: 你妹妹在睡覺嗎？ B: 不是，她在跳舞。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/5_4.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_4.png"}},"恆春阿美語":{"a":{"label":"...","amis":"A: O mitiliday ho kiso haw? B: Hay, o mitiliday ho kako.","chinese":"A: 你是學生嗎？ B: 是，我是學生。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/4_1.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_1.png"},"b":{"label":"...","amis":"A: O singsi cingra haw? B: Cowa, o ising cingra.","chinese":"A: 他是老師嗎？ B: 不是，他是醫生。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/4_2.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_2.png"},"c":{"label":"...","amis":"A: O singsi iso cingra haw? B: Hay, o singsi ako cingra.","chinese":"A: 他是你的老師嗎？ B: 是/對，他是我的老師。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/4_3.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_3.png"},"d":{"label":"...","amis":"A: O faki iso cingra haw? B: Cowa, o singsi ako cingra.","chinese":"A: 他是你的叔叔嗎？ B: 不是，他是我的老師。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/4_4.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_4.png"},"e":{"label":"...","amis":"A: Iraay ko cecay a fafahiyan a safa iso haw? B: Cowa, tatosaay ko fafahiyan a safa no mako.","chinese":"A: 你有一個妹妹嗎？ B: 不，我有二個妹妹。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/4_5.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_5.png"},"f":{"label":"...","amis":"A: Ira ko tatosa a safa iso to fa'inayan haw? B: Cowa, cecayay ko fa'inayan a kaka no mako.","chinese":"A: 你有兩個弟弟嗎？ B: 不，我有一個哥哥一個弟弟。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/4_6.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_6.png"},"g":{"label":"...","amis":"A: Ira ko tatosa a kaka iso to fafahiyanan haw? B: Cowa, ira ko cecay fafahiyan a kaka ato cecay fa'inayan a kaka ako.","chinese":"A: 你有兩個姊姊嗎？ B: 不，我有一個姊姊一個哥哥。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/4_7.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_7.png"},"h":{"label":"...","amis":"A: O payci ako koninian haw? B: Hay, o payci iso koninian.","chinese":"A: 這是我的錢嗎？ B: 是的，這是你的錢。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/4_8.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_8.png"},"i":{"label":"...","amis":"A: O hana no miso koraan haw? B: Cowa ko mako a hana koraan.","chinese":"A: 那些是你的花嗎？ B: 不是，那些不是我的花。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/4_9.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_9.png"},"j":{"label":"...","amis":"A: Mamaanay kiso? B: Adadaay ko fongoh ako.","chinese":"A: 你怎麼了？ B: 我的頭很痛。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/4_10.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_10.png"},"o":{"label":"...","amis":"A: Mamaanay kiso? B: Adadaay ko mata ako.","chinese":"A: 你怎麼了？ B: 我的眼睛很痛。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/4_11.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_11.png"},"p":{"label":"...","amis":"A: Kaletengay kona ^eto haw? B: Hay, kaletengay kona ^eto.","chinese":"A: 這張桌子很重嗎？ B: 是/對，這張桌子很重。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/4_12.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_12.png"},"q":{"label":"...","amis":"A: Kaletengay kara 'axenan haw? B: Cowa, kahemaway kora 'axenan.","chinese":"A: 那張椅子很重嗎？ B: 不，那張椅子很輕。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/4_13.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_13.png"},"r":{"label":"...","amis":"A: O kohetingay kora ngiyaw iso haw? B: Hay, o kohetingay kora ngiyaw ako.","chinese":"A: 你的貓是黑色的嗎？ B: 是/對，我的貓是黑色的。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/4_14.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_14.png"},"s":{"label":"...","amis":"A: Minengneng to tilifi cangra to romi'ami'ad haw? B: Hay, minengnengay to tilifi cangra to romi'ami'ad.","chinese":"A: 他們天天看電視嗎？ B: 是/對，他們天天看電視。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/4_15.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_15.png"},"t":{"label":"...","amis":"A: Nga'ayay ko romi'ad anini haw? B: Hay,nga'ayay ko romi'ad anini.","chinese":"A: 今天天氣好嗎？ B: 是/對，今天天氣很好。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/4_16.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_16.png"},"u":{"label":"...","amis":"A: Mitiliday kiso haw? B: Hay, mitiliday kako.","chinese":"A: 你在讀書嗎？ B: 是的，我在讀書。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/5_1.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_1.png"},"v":{"label":"...","amis":"A: Mitiliday kiso haw? B: Cowa, micokaay kako.","chinese":"A: 你在讀書嗎？ B: 不，我在畫畫。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/5_2.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_2.png"},"w":{"label":"...","amis":"A: Mafoti'ay ko fafafiyan a safa iso haw? B: Hay, mafoti'ay ho cingra.","chinese":"A: 你妹妹在睡覺嗎？ B: 是的，她在睡覺。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/5_3.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_3.png"},"x":{"label":"...","amis":"A: Mafoti'ay ko fafahiyan a safa iso haw? B: Cowa, makeroay cingra.","chinese":"A: 你妹妹在睡覺嗎？ B: 不是，她在跳舞。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/5_4.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_4.png"}},"海岸阿美語":{"a":{"label":"...","amis":"A: O mitiliday kiso ? B: Hai, o mitiliday kako.","chinese":"A: 你是學生嗎？ B: 是，我是學生。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/4_1.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_1.png"},"b":{"label":"...","amis":"A: O singsi cingra ? B: Caayay, o ising cingra.","chinese":"A: 他是老師嗎？ B: 不是，他是醫生。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/4_2.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_2.png"},"c":{"label":"...","amis":"A: O singsi iso cingra? B: Hai, o singsi ako cingra.","chinese":"A: 他是你的老師嗎？ B: 是/對，他是我的老師。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/4_3.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_3.png"},"d":{"label":"...","amis":"A: O faki iso cingra ? B: Caayay, o singsi ako cingra.","chinese":"A: 他是你的叔叔嗎？ B: 不是，他是我的老師。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/4_4.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_4.png"},"e":{"label":"...","amis":"A: Ira ko cecay fafahiyan a safa iso ? B: Caayay, tatosa ko fafahiyan a safa ako .","chinese":"A: 你有一個妹妹嗎？ B: 不，我有二個妹妹。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/4_5.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_5.png"},"f":{"label":"...","amis":"A: Tatosa ko fa'inayan a safa iso ? B: Caayay, cecay ko fa'inayan a kaka cecay ko fa'inayan a safa.","chinese":"A: 你有兩個弟弟嗎？ B: 不，我有一個哥哥一個弟弟。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/4_6.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_6.png"},"g":{"label":"...","amis":"A: Tatosa ko fafahiyan a kaka iso ? B: Caayay, cecay ko fafahiyan a kaka cecay ko fa'inayan a kaka.","chinese":"A: 你有兩個姊姊嗎？ B: 不，我有一個姊姊一個哥哥。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/4_7.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_7.png"},"h":{"label":"...","amis":"A: O payso ako koni ? B: Hai, o payso iso koni.","chinese":"A: 這是我的錢嗎？ B: 是的，這是你的錢。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/4_8.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_8.png"},"i":{"label":"...","amis":"A: O hana iso kora ? B: Caay, caayay ko hana ako kora.","chinese":"A: 那些是你的花嗎？ B: 不是，那些不是我的花。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/4_9.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_9.png"},"j":{"label":"...","amis":"A: Mamaan kiso ? B: Adada ko fongoh ako.","chinese":"A: 你怎麼了？ B: 我的頭很痛。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/4_10.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_10.png"},"o":{"label":"...","amis":"A: Mamaan kiso ? B: Adada ko mata ako.","chinese":"A: 你怎麼了？ B: 我的眼睛很痛。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/4_11.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_11.png"},"p":{"label":"...","amis":"A: Kareteng koni parad ? B: Hai, kareteng koni parad.","chinese":"A: 這張桌子很重嗎？ B: 是/對，這張桌子很重。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/4_12.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_12.png"},"q":{"label":"...","amis":"A: Kareteng koni 'anengan ? B: Caay, kahemaw koni 'anengan.","chinese":"A: 那張椅子很重嗎？ B: 不，那張椅子很輕。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/4_13.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_13.png"},"r":{"label":"...","amis":"A: O kohetingay ko posi iso? B: Hai,o kohetingay ko posi ako.","chinese":"A: 你的貓是黑色的嗎？ B: 是/對，我的貓是黑色的。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/4_14.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_14.png"},"s":{"label":"...","amis":"A: Romi'ami'ad minengneng to tilifi cangra? B: Hai,romi'ami'ad minengneng to tilifi cangra.","chinese":"A: 他們天天看電視嗎？ B: 是/對，他們天天看電視。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/4_15.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_15.png"},"t":{"label":"...","amis":"A: Fangcal ko romi'ad anini? B: Hai, fangcal ko romi'ad anini.","chinese":"A: 今天天氣好嗎？ B: 是/對，今天天氣很好。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/4_16.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_16.png"},"u":{"label":"...","amis":"A: Misa'osi kiso ? B: Hai, misa'osi kako.","chinese":"A: 你在讀書嗎？ B: 是的，我在讀書。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/5_1.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_1.png"},"v":{"label":"...","amis":"A: Misa'osi kiso ? B: Caay, micoka kako.","chinese":"A: 你在讀書嗎？ B: 不，我在畫畫。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/5_2.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_2.png"},"w":{"label":"...","amis":"A: Mafoti' ko safa iso? B: Hai, mafoti' cingra.","chinese":"A: 你妹妹在睡覺嗎？ B: 是的，她在睡覺。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/5_3.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_3.png"},"x":{"label":"...","amis":"A: Mafoti' ko safa iso? B: Caayay, masakero cingra.","chinese":"A: 你妹妹在睡覺嗎？ B: 不是，她在跳舞。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/5_4.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_4.png"}},"馬蘭阿美語":{"a":{"label":"...","amis":"A: O mitiliday kiso haw? B: Hay, o mitiliday kako.","chinese":"A: 你是學生嗎？ B: 是，我是學生。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/4_1.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_1.png"},"b":{"label":"...","amis":"A: O singsi ko mira haw? B: Cowa, o ising ko mira.","chinese":"A: 他是老師嗎？ B: 不是，他是醫生。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/4_2.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_2.png"},"c":{"label":"...","amis":"A: O singsi iso ko mira haw? B: Hay, o singsi ako ko mira.","chinese":"A: 他是你的老師嗎？ B: 是/對，他是我的老師。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/4_3.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_3.png"},"d":{"label":"...","amis":"A: O faki iso ko mira haw? B: Cowa, o singsi ako ko mira.","chinese":"A: 他是你的叔叔嗎？ B: 不是，他是我的老師。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/4_4.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_4.png"},"e":{"label":"...","amis":"A: Ccayay ko safa iso to fafahiyan haw? B: Cowa, tosaay ko safa ako to fafahiyan.","chinese":"A: 你有一個妹妹嗎？ B: 不，我有二個妹妹。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/4_5.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_5.png"},"f":{"label":"...","amis":"A: Tosaay ko safa iso to fa'inayan haw? B: Cowa, ccayay ko kaka ako to fa'inayan, ccayay ko safa ako to fa'inayan.","chinese":"A: 你有兩個弟弟嗎？ B: 不，我有一個哥哥一個弟弟。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/4_6.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_6.png"},"g":{"label":"...","amis":"A: Tosaay ko kaka iso to fafahiyan haw? B: Cowa, ccayay ko kaka ako to fafahiyan, ccayay ko kaka ako to fa'inayan.","chinese":"A: 你有兩個姊姊嗎？ B: 不，我有一個姊姊一個哥哥。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/4_7.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_7.png"},"h":{"label":"...","amis":"A: O payso ako koni haw? B: Hay, o payso iso koni.","chinese":"A: 這是我的錢嗎？ B: 是的，這是你的錢。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/4_8.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_8.png"},"i":{"label":"...","amis":"A: O falo iso kora haw? B: Cowa, cowa ko falo ako kora.","chinese":"A: 那些是你的花嗎？ B: 不是，那些不是我的花。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/4_9.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_9.png"},"j":{"label":"...","amis":"A: Mamaanay kiso? B: Adadaay ko fongoh no mako.","chinese":"A: 你怎麼了？ B: 我的頭很痛。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/4_10.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_10.png"},"o":{"label":"...","amis":"A: Mamaanay kiso? B: Adadaay ko mata no mako.","chinese":"A: 你怎麼了？ B: 我的眼睛很痛。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/4_11.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_11.png"},"p":{"label":"...","amis":"A: Karetengay koni cokowi haw? B: Hay, karetengay koni cokowi.","chinese":"A: 這張桌子很重嗎？ B: 是/對，這張桌子很重。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/4_12.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_12.png"},"q":{"label":"...","amis":"A: Karetengay kora hakenang haw? B: Cowa, kahemaway kora hakenang.","chinese":"A: 那張椅子很重嗎？ B: 不，那張椅子很輕。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/4_13.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_13.png"},"r":{"label":"...","amis":"A: O kohetingay ko posi iso haw? B: Hay, o kohetingay ko posi ako.","chinese":"A: 你的貓是黑色的嗎？ B: 是/對，我的貓是黑色的。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/4_14.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_14.png"},"s":{"label":"...","amis":"A: Minengnengay camira to tilifi to romiamiad haw? B: Hay, minengnengay camira to tilifi to romiamiad.","chinese":"A: 他們天天看電視嗎？ B: 是/對，他們天天看電視。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/4_15.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_15.png"},"t":{"label":"...","amis":"A: Makapahay ko romiad anini haw? B: Hay, makapahay ko romiad anini.","chinese":"A: 今天天氣好嗎？ B: 是/對，今天天氣很好。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/4_16.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_16.png"},"u":{"label":"...","amis":"A: Mitiliday kiso haw? B: Hay, mitiliday kako.","chinese":"A: 你在讀書嗎？ B: 是的，我在讀書。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/5_1.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_1.png"},"v":{"label":"...","amis":"A: Mitiliday kiso haw? B: Cowa, micongaay kako.","chinese":"A: 你在讀書嗎？ B: 不，我在畫畫。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/5_2.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_2.png"},"w":{"label":"...","amis":"A: Mafoti'ay ko fafahiyan a safa iso haw? B: Hay, mafoti'ay ko mira.","chinese":"A: 你妹妹在睡覺嗎？ B: 是的，她在睡覺。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/5_3.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_3.png"},"x":{"label":"...","amis":"A: Mafoti'ay ko fafahiyan a safa iso haw? B: Cowa, makeroay ko mira.","chinese":"A: 你妹妹在睡覺嗎？ B: 不是，她在跳舞。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/5_4.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_4.png"}},"預設":{"a":{"label":"...","amis":"A: O sito kiso haw ? B: Hay, o sito kako.","chinese":"A: 你是學生嗎？ B: 是，我是學生。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_1.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_1.png"},"b":{"label":"...","amis":"A: O singsi ciira haw ? B: Caay, o ising ciira.","chinese":"A: 他是老師嗎？ B: 不是，他是醫生。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_2.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_2.png"},"c":{"label":"...","amis":"A: O singsi no miso ciira haw ? B: Hay, o singsi no mako ciira.","chinese":"A: 他是你的老師嗎？ B: 是/對，他是我的老師。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_3.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_3.png"},"d":{"label":"...","amis":"A: O faki no miso ciira haw ? B: Caay, o singsi no mako ciira.","chinese":"A: 他是你的叔叔嗎？ B: 不是，他是我的老師。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_4.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_4.png"},"e":{"label":"...","amis":"A: Cecay ko fafahiyan a safa no miso haw ? B: Caay, tatosa ko fafahiyan a safa no mako.","chinese":"A: 你有一個妹妹嗎？ B: 不，我有二個妹妹。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_5.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_5.png"},"f":{"label":"...","amis":"A: Tatosa ko fa'inayan a safa no miso haw ? B: Caay, cecay ko fa'inayan a kaka ato cecay ko fa'inayan a safas no mako.","chinese":"A: 你有兩個弟弟嗎？ B: 不，我有一個哥哥一個弟弟。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_6.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_6.png"},"g":{"label":"...","amis":"A: Tatosa ko fafahiyan a kaka no miso haw ? B: Caay, cecay ko fafahiyan a kaka ato cecay ko fa'inayan a kaka no mako.","chinese":"A: 你有兩個姊姊嗎？ B: 不，我有一個姊姊一個哥哥。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_7.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_7.png"},"h":{"label":"...","amis":"A: O pida no mako kinian haw ? B: Hay, o pida no miso kinian.","chinese":"A: 這是我的錢嗎？ B: 是的，這是你的錢。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_8.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_8.png"},"i":{"label":"...","amis":"A: O falo no miso kiraan haw ? B: Caay, caayay ko falo no mako kiraan.","chinese":"A: 那些是你的花嗎？ B: 不是，那些不是我的花。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_9.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_9.png"},"j":{"label":"...","amis":"A: Mamaan kiso? B: Adada ko tangal no mako.","chinese":"A: 你怎麼了？ B: 我的頭很痛。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_10.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_10.png"},"o":{"label":"...","amis":"A: Mamaan kiso? B: Adada ko mata no mako.","chinese":"A: 你怎麼了？ B: 我的眼睛很痛。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_11.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_11.png"},"p":{"label":"...","amis":"A: Kareteng kora sapad haw ? B: Hay, kareteng kora sapat.","chinese":"A: 這張桌子很重嗎？ B: 是/對，這張桌子很重。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_12.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_12.png"},"q":{"label":"...","amis":"A: Kareteng kora 'anengang haw ? B: Caay, dahemaw kora 'anengang.","chinese":"A: 那張椅子很重嗎？ B: 不，那張椅子很輕。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_13.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_13.png"},"r":{"label":"...","amis":"A: O kohetingay ko posi no miso haw ? B: Hay, o kohetingay ko posi no mako.","chinese":"A: 你的貓是黑色的嗎？ B: 是/對，我的貓是黑色的。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_14.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_14.png"},"s":{"label":"...","amis":"A: Minengneng caira to tilifi to romi'admi'ad haw ? B: Hay, minengneng caira to tilifi to romi'admi'ad.","chinese":"A: 他們天天看電視嗎？ B: 是/對，他們天天看電視。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_15.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_15.png"},"t":{"label":"...","amis":"A: Fangcal ko romi'ad anini haw ? B: Hay, fangcal ko romi'ad anini.","chinese":"A: 今天天氣好嗎？ B: 是/對，今天天氣很好。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_16.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_16.png"},"u":{"label":"...","amis":"A: Miasipay kiso to codad haw ? B: Hay, o miasipay kako to codad.","chinese":"A: 你在讀書嗎？ B: 是的，我在讀書。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_1.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_1.png"},"v":{"label":"...","amis":"A: Miasipay kiso to codad i matini haw ? B: Caay, o mirenafay kako i matini.","chinese":"A: 你在讀書嗎？ B: 不，我在畫畫。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_2.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_2.png"},"w":{"label":"...","amis":"A: Mafoti'ay ko fafahiyan a safa no miso haw ? B: Hay,mafati'ay ciira i matini.","chinese":"A: 你妹妹在睡覺嗎？ B: 是的，她在睡覺。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_3.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_3.png"},"x":{"label":"...","amis":"A: Mafoti'ay ko fafahiyan a safa no miso i matini haw ? B: Caay,masakeroy ciira i matini.","chinese":"A: 你妹妹在睡覺嗎？ B: 不是，她在跳舞。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_4.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_4.png"}}},
    "sentences": [{"amis":"A: O sito kiso haw ? B: Hay, o sito kako.","chinese":"A: 你是學生嗎？ B: 是，我是學生。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_1.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_1.png"},{"amis":"A: O singsi ciira haw ? B: Caay, o ising ciira.","chinese":"A: 他是老師嗎？ B: 不是，他是醫生。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_2.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_2.png"},{"amis":"A: O singsi no miso ciira haw ? B: Hay, o singsi no mako ciira.","chinese":"A: 他是你的老師嗎？ B: 是/對，他是我的老師。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_3.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_3.png"},{"amis":"A: O faki no miso ciira haw ? B: Caay, o singsi no mako ciira.","chinese":"A: 他是你的叔叔嗎？ B: 不是，他是我的老師。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_4.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_4.png"},{"amis":"A: Cecay ko fafahiyan a safa no miso haw ? B: Caay, tatosa ko fafahiyan a safa no mako.","chinese":"A: 你有一個妹妹嗎？ B: 不，我有二個妹妹。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_5.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_5.png"},{"amis":"A: Tatosa ko fa'inayan a safa no miso haw ? B: Caay, cecay ko fa'inayan a kaka ato cecay ko fa'inayan a safas no mako.","chinese":"A: 你有兩個弟弟嗎？ B: 不，我有一個哥哥一個弟弟。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_6.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_6.png"},{"amis":"A: Tatosa ko fafahiyan a kaka no miso haw ? B: Caay, cecay ko fafahiyan a kaka ato cecay ko fa'inayan a kaka no mako.","chinese":"A: 你有兩個姊姊嗎？ B: 不，我有一個姊姊一個哥哥。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_7.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_7.png"},{"amis":"A: O pida no mako kinian haw ? B: Hay, o pida no miso kinian.","chinese":"A: 這是我的錢嗎？ B: 是的，這是你的錢。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_8.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_8.png"},{"amis":"A: O falo no miso kiraan haw ? B: Caay, caayay ko falo no mako kiraan.","chinese":"A: 那些是你的花嗎？ B: 不是，那些不是我的花。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_9.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_9.png"},{"amis":"A: Mamaan kiso? B: Adada ko tangal no mako.","chinese":"A: 你怎麼了？ B: 我的頭很痛。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_10.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_10.png"},{"amis":"A: Mamaan kiso? B: Adada ko mata no mako.","chinese":"A: 你怎麼了？ B: 我的眼睛很痛。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_11.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_11.png"},{"amis":"A: Kareteng kora sapad haw ? B: Hay, kareteng kora sapat.","chinese":"A: 這張桌子很重嗎？ B: 是/對，這張桌子很重。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_12.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_12.png"},{"amis":"A: Kareteng kora 'anengang haw ? B: Caay, dahemaw kora 'anengang.","chinese":"A: 那張椅子很重嗎？ B: 不，那張椅子很輕。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_13.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_13.png"},{"amis":"A: O kohetingay ko posi no miso haw ? B: Hay, o kohetingay ko posi no mako.","chinese":"A: 你的貓是黑色的嗎？ B: 是/對，我的貓是黑色的。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_14.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_14.png"},{"amis":"A: Minengneng caira to tilifi to romi'admi'ad haw ? B: Hay, minengneng caira to tilifi to romi'admi'ad.","chinese":"A: 他們天天看電視嗎？ B: 是/對，他們天天看電視。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_15.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_15.png"},{"amis":"A: Fangcal ko romi'ad anini haw ? B: Hay, fangcal ko romi'ad anini.","chinese":"A: 今天天氣好嗎？ B: 是/對，今天天氣很好。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_16.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_16.png"},{"amis":"A: Miasipay kiso to codad haw ? B: Hay, o miasipay kako to codad.","chinese":"A: 你在讀書嗎？ B: 是的，我在讀書。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_1.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_1.png"},{"amis":"A: Miasipay kiso to codad i matini haw ? B: Caay, o mirenafay kako i matini.","chinese":"A: 你在讀書嗎？ B: 不，我在畫畫。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_2.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_2.png"},{"amis":"A: Mafoti'ay ko fafahiyan a safa no miso haw ? B: Hay,mafati'ay ciira i matini.","chinese":"A: 你妹妹在睡覺嗎？ B: 是的，她在睡覺。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_3.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_3.png"},{"amis":"A: Mafoti'ay ko fafahiyan a safa no miso i matini haw ? B: Caay,masakeroy ciira i matini.","chinese":"A: 你妹妹在睡覺嗎？ B: 不是，她在跳舞。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_4.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_4.png"},{"amis":"A: Misalamaay kora wawawawa haw ? B: Hay, misalamaay kora wawawawa.","chinese":"A: 那些孩子在玩耍嗎？ B: 是/對，那些孩子在玩耍。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_5.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_5.png"},{"amis":"A: Romadiway caira i matini haw ? B: Caay,miasipay to codad caira i matini.","chinese":"A: 他們在唱歌嗎？ B: 不是，他們在讀書。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_6.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_6.png"},{"amis":"A: Ma'oraday haw ? B: Hay, ma'oraday i matini.","chinese":"A: 在下雨嗎？ B: 是/對，正在下雨。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_7.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_7.png"},{"amis":"A: Ma'oraday haw? B: Caay,masadakay to ko cidal.","chinese":"A: 在下雨嗎？ B: 不，太陽出來了！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_8.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_8.png"},{"amis":"A: Mararid kamo a miliso' ci akongan haw ? B: Hay,mararid kami a miliso' ci akongan.","chinese":"A: 你們常常去探望祖父嗎？ B: 對，我們常常去探望祖父。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_9.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_9.png"},{"amis":"A: Mafana' kiso a mifaca' to fodoy haw ? B: Hay,mafana' kako a mifaca' to fodoy.","chinese":"A: 你會洗衣服嗎？ B: 會，我會洗衣服。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_10.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_10.png"},{"amis":"A: Mafana' romadiw kora wawawawa haw ? B: Hay,mafana' romadiw caira.","chinese":"A: 那些孩子會唱歌嗎？ B: 是，他們很會唱歌。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_11.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_11.png"},{"amis":"A: Maolah kiso a miasip to codad haw ? B: Hay,maolah kako a miasip to codad.","chinese":"A: 你喜歡讀書嗎？ B: 是/對，我喜歡讀書。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_12.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_12.png"},{"amis":"A: Maolah a mirenaf kora wawa haw ? B: Hay, maolah mirenaf kora wawa.","chinese":"A: 那個孩子喜歡畫圖嗎？ B: 是/對，他很喜歡畫圖。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_13.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_13.png"},{"amis":"A: Maolah a romadiw kora wawawawa haw ? B: Hay,maolah caira a romadiw .","chinese":"A: 那些孩子喜歡唱歌嗎？ B: 是，他們喜歡唱歌。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_14.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_14.png"},{"amis":"A: Maolah a masakero kora wawawawa haw ? B: Caay,maolah caira a minengneng to tilifi.","chinese":"A: 那些孩子喜歡跳舞嗎？ B: 不，他們喜歡看電視。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_15.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_15.png"},{"amis":"A: Maolah misalama kora wawawawa haw ? B: Caay, maolah caira komaen to kakaenen.","chinese":"A: 那些孩子喜歡玩耍嗎？ B: 不，他們喜歡吃東西。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_16.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_16.png"}],
    "sentencesByDialect": {"秀姑巒阿美語":[{"amis":"A: O sito kiso haw ? B: Hay, o sito kako.","chinese":"A: 你是學生嗎？ B: 是，我是學生。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_1.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_1.png"},{"amis":"A: O singsi ciira haw ? B: Caay, o ising ciira.","chinese":"A: 他是老師嗎？ B: 不是，他是醫生。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_2.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_2.png"},{"amis":"A: O singsi no miso ciira haw ? B: Hay, o singsi no mako ciira.","chinese":"A: 他是你的老師嗎？ B: 是/對，他是我的老師。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_3.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_3.png"},{"amis":"A: O faki no miso ciira haw ? B: Caay, o singsi no mako ciira.","chinese":"A: 他是你的叔叔嗎？ B: 不是，他是我的老師。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_4.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_4.png"},{"amis":"A: Cecay ko fafahiyan a safa no miso haw ? B: Caay, tatosa ko fafahiyan a safa no mako.","chinese":"A: 你有一個妹妹嗎？ B: 不，我有二個妹妹。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_5.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_5.png"},{"amis":"A: Tatosa ko fa'inayan a safa no miso haw ? B: Caay, cecay ko fa'inayan a kaka ato cecay ko fa'inayan a safas no mako.","chinese":"A: 你有兩個弟弟嗎？ B: 不，我有一個哥哥一個弟弟。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_6.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_6.png"},{"amis":"A: Tatosa ko fafahiyan a kaka no miso haw ? B: Caay, cecay ko fafahiyan a kaka ato cecay ko fa'inayan a kaka no mako.","chinese":"A: 你有兩個姊姊嗎？ B: 不，我有一個姊姊一個哥哥。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_7.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_7.png"},{"amis":"A: O pida no mako kinian haw ? B: Hay, o pida no miso kinian.","chinese":"A: 這是我的錢嗎？ B: 是的，這是你的錢。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_8.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_8.png"},{"amis":"A: O falo no miso kiraan haw ? B: Caay, caayay ko falo no mako kiraan.","chinese":"A: 那些是你的花嗎？ B: 不是，那些不是我的花。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_9.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_9.png"},{"amis":"A: Mamaan kiso? B: Adada ko tangal no mako.","chinese":"A: 你怎麼了？ B: 我的頭很痛。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_10.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_10.png"},{"amis":"A: Mamaan kiso? B: Adada ko mata no mako.","chinese":"A: 你怎麼了？ B: 我的眼睛很痛。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_11.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_11.png"},{"amis":"A: Kareteng kora sapad haw ? B: Hay, kareteng kora sapat.","chinese":"A: 這張桌子很重嗎？ B: 是/對，這張桌子很重。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_12.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_12.png"},{"amis":"A: Kareteng kora 'anengang haw ? B: Caay, dahemaw kora 'anengang.","chinese":"A: 那張椅子很重嗎？ B: 不，那張椅子很輕。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_13.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_13.png"},{"amis":"A: O kohetingay ko posi no miso haw ? B: Hay, o kohetingay ko posi no mako.","chinese":"A: 你的貓是黑色的嗎？ B: 是/對，我的貓是黑色的。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_14.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_14.png"},{"amis":"A: Minengneng caira to tilifi to romi'admi'ad haw ? B: Hay, minengneng caira to tilifi to romi'admi'ad.","chinese":"A: 他們天天看電視嗎？ B: 是/對，他們天天看電視。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_15.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_15.png"},{"amis":"A: Fangcal ko romi'ad anini haw ? B: Hay, fangcal ko romi'ad anini.","chinese":"A: 今天天氣好嗎？ B: 是/對，今天天氣很好。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_16.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_16.png"},{"amis":"A: Miasipay kiso to codad haw ? B: Hay, o miasipay kako to codad.","chinese":"A: 你在讀書嗎？ B: 是的，我在讀書。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_1.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_1.png"},{"amis":"A: Miasipay kiso to codad i matini haw ? B: Caay, o mirenafay kako i matini.","chinese":"A: 你在讀書嗎？ B: 不，我在畫畫。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_2.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_2.png"},{"amis":"A: Mafoti'ay ko fafahiyan a safa no miso haw ? B: Hay,mafati'ay ciira i matini.","chinese":"A: 你妹妹在睡覺嗎？ B: 是的，她在睡覺。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_3.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_3.png"},{"amis":"A: Mafoti'ay ko fafahiyan a safa no miso i matini haw ? B: Caay,masakeroy ciira i matini.","chinese":"A: 你妹妹在睡覺嗎？ B: 不是，她在跳舞。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_4.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_4.png"},{"amis":"A: Misalamaay kora wawawawa haw ? B: Hay, misalamaay kora wawawawa.","chinese":"A: 那些孩子在玩耍嗎？ B: 是/對，那些孩子在玩耍。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_5.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_5.png"},{"amis":"A: Romadiway caira i matini haw ? B: Caay,miasipay to codad caira i matini.","chinese":"A: 他們在唱歌嗎？ B: 不是，他們在讀書。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_6.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_6.png"},{"amis":"A: Ma'oraday haw ? B: Hay, ma'oraday i matini.","chinese":"A: 在下雨嗎？ B: 是/對，正在下雨。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_7.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_7.png"},{"amis":"A: Ma'oraday haw? B: Caay,masadakay to ko cidal.","chinese":"A: 在下雨嗎？ B: 不，太陽出來了！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_8.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_8.png"},{"amis":"A: Mararid kamo a miliso' ci akongan haw ? B: Hay,mararid kami a miliso' ci akongan.","chinese":"A: 你們常常去探望祖父嗎？ B: 對，我們常常去探望祖父。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_9.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_9.png"},{"amis":"A: Mafana' kiso a mifaca' to fodoy haw ? B: Hay,mafana' kako a mifaca' to fodoy.","chinese":"A: 你會洗衣服嗎？ B: 會，我會洗衣服。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_10.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_10.png"},{"amis":"A: Mafana' romadiw kora wawawawa haw ? B: Hay,mafana' romadiw caira.","chinese":"A: 那些孩子會唱歌嗎？ B: 是，他們很會唱歌。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_11.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_11.png"},{"amis":"A: Maolah kiso a miasip to codad haw ? B: Hay,maolah kako a miasip to codad.","chinese":"A: 你喜歡讀書嗎？ B: 是/對，我喜歡讀書。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_12.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_12.png"},{"amis":"A: Maolah a mirenaf kora wawa haw ? B: Hay, maolah mirenaf kora wawa.","chinese":"A: 那個孩子喜歡畫圖嗎？ B: 是/對，他很喜歡畫圖。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_13.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_13.png"},{"amis":"A: Maolah a romadiw kora wawawawa haw ? B: Hay,maolah caira a romadiw .","chinese":"A: 那些孩子喜歡唱歌嗎？ B: 是，他們喜歡唱歌。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_14.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_14.png"},{"amis":"A: Maolah a masakero kora wawawawa haw ? B: Caay,maolah caira a minengneng to tilifi.","chinese":"A: 那些孩子喜歡跳舞嗎？ B: 不，他們喜歡看電視。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_15.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_15.png"},{"amis":"A: Maolah misalama kora wawawawa haw ? B: Caay, maolah caira komaen to kakaenen.","chinese":"A: 那些孩子喜歡玩耍嗎？ B: 不，他們喜歡吃東西。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_16.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_16.png"}],"南勢阿美語":[{"amis":"A: U micudaday haw kisu? B: Hay,u micudaday kaku.","chinese":"A: 你是學生嗎？ B: 是，我是學生。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/4_1.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_1.png"},{"amis":"A: U pasevanaay haw cira? B: Caay,u ising cira.","chinese":"A: 他是老師嗎？ B: 不是，他是醫生。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/4_2.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_2.png"},{"amis":"A: U pasevanaay haw nu misu cira? B: Hay,u pasevanaay nu maku cira.","chinese":"A: 他是你的老師嗎？ B: 是/對，他是我的老師。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/4_3.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_3.png"},{"amis":"A: U vaki haw nu misu cira? B: Caay,u pasevanaay nu maku cira.","chinese":"A: 他是你的叔叔嗎？ B: 不是，他是我的老師。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/4_4.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_4.png"},{"amis":"A: Cacay haw ku vavahiyan a sava nu misu? B: Caay,tatusa ku sava nu maku tu vavahiyan.","chinese":"A: 你有一個妹妹嗎？ B: 不，我有二個妹妹。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/4_5.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_5.png"},{"amis":"A: Tatusa haw ku vavainayan a sava nu misu? B: Caay,cacay ku kaka tu vavainayan atu cacay ku sava tu vavainayan.","chinese":"A: 你有兩個弟弟嗎？ B: 不，我有一個哥哥一個弟弟。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/4_6.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_6.png"},{"amis":"A: Tatusa haw ku kaka nu misu tu vavahiyan? B: Caay,cacay ku kaka tu vavahiyan atu cacay ku kaka tu vavainayan.","chinese":"A: 你有兩個姊姊嗎？ B: 不，我有一個姊姊一個哥哥。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/4_7.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_7.png"},{"amis":"A: U pida haw nu maku kiniyan? B: Hay,u pida nu misu kiniyan.","chinese":"A: 這是我的錢嗎？ B: 是的，這是你的錢。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/4_8.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_8.png"},{"amis":"A: U varu haw nu misu kiraan? B: Caay,caay kaw nu maku a varu kiraan.","chinese":"A: 那些是你的花嗎？ B: 不是，那些不是我的花。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/4_9.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_9.png"},{"amis":"A: Mamaan saw kisu? B: Adada ku tangal nu maku.","chinese":"A: 你怎麼了？ B: 我的頭很痛。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/4_10.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_10.png"},{"amis":"A: Mamaan saw kisu? B: Adada ku mata nu maku.","chinese":"A: 你怎麼了？ B: 我的眼睛很痛。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/4_11.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_11.png"},{"amis":"A: Vaeket haw kina sapad? B: Hay,vaeket kina sapad.","chinese":"A: 這張桌子很重嗎？ B: 是/對，這張桌子很重。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/4_12.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_12.png"},{"amis":"A: Vaeket haw kira elun? B: Caay,ahemaw kira elun.","chinese":"A: 那張椅子很重嗎？ B: 不，那張椅子很輕。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/4_13.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_13.png"},{"amis":"A: U muhetingay haw ku nani nu misu? B: Hay,u muhetingay ku nani nu maku.","chinese":"A: 你的貓是黑色的嗎？ B: 是/對，我的貓是黑色的。","sound":"","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_14.png"},{"amis":"A: Saremiremiad sa haw a mimelaw tu tilivi ku heni? B: Hay,saremiremiad sa a mimelaw tu tilivi ku heni.","chinese":"A: 他們天天看電視嗎？ B: 是/對，他們天天看電視。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/4_15.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_15.png"},{"amis":"A: Kapah haw ku remiad anini? B: Hay,kapah ku remiad anini.","chinese":"A: 今天天氣好嗎？ B: 是/對，今天天氣很好。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/4_16.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_16.png"},{"amis":"A: Micudad haw kisu? B: Hay,micudad kaku.","chinese":"A: 你在讀書嗎？ B: 是的，我在讀書。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/5_1.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_1.png"},{"amis":"A: Micudad haw kisu? B: Caay,mikulit kaku.","chinese":"A: 你在讀書嗎？ B: 不，我在畫畫���","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/5_2.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_2.png"},{"amis":"A: Mavuti’ haw ku sava nu misu tu vavahiyan? B: Hay,mavuti’ cira.","chinese":"A: 你妹妹在睡覺嗎？ B: 是的，她在睡覺。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/5_3.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_3.png"},{"amis":"A: Mavuti’ haw ku sava nu misu tu vavahiyan? B: Caay,misakeru cira.","chinese":"A: 你妹妹在睡覺嗎？ B: 不是，她在跳舞。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/5_4.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_4.png"},{"amis":"A: Mihulul haw kira adiwawa? B: Hay,mihulul kira adiwawa.","chinese":"A: 那些孩子在玩耍嗎？ B: 是/對，那些孩子在玩耍。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/5_5.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_5.png"},{"amis":"A: Remadiw haw ku heni? B: Caay,micudad ku heni.","chinese":"A: 他們在唱歌嗎？ B: 不是，他們在讀書。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/5_6.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_6.png"},{"amis":"A: Maurad haw? B: Hay,maurad hen.","chinese":"A: 在下雨嗎？ B: 是/對，正在下雨。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/5_7.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_7.png"},{"amis":"A: Maurad haw? B: Caay,cidalan tu.","chinese":"A: 在下雨嗎？ B: 不，太陽出來了！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/5_8.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_8.png"},{"amis":"A: Hinalisu’ haw kamu i ci vakiyan? B: Hay,hinalisu’ kami i ci vakiyan.","chinese":"A: 你們常常去探望祖父嗎？ B: 對，我們常常去探望祖父。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/5_9.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_9.png"},{"amis":"A: Mavana’ haw kisu a mivaca’ tu vuduy? B: Hay,mavana’ kaku a mivaca’ tu vuduy.","chinese":"A: 你會洗衣服嗎？ B: 會，我會洗衣服。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/5_10.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_10.png"},{"amis":"A: Mavana’ haw a remadiw kira adiwawa? B: Hay,mavana’ ku heni a remadiw.","chinese":"A: 那些孩子會唱歌嗎？ B: 是，他們很會唱歌。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/5_11.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_11.png"},{"amis":"A: Maulah haw a micudad kisu? B: Hay,maulah kaku a micudad.","chinese":"A: 你喜歡讀書嗎？ B: 是/對，我喜歡讀書。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/5_12.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_12.png"},{"amis":"A: Maulah haw kira wawa a mikulit? B: Hay,maulah cira a mikulit.","chinese":"A: 那個孩子喜歡畫圖嗎？ B: 是/對，他很喜歡畫圖。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/5_13.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_13.png"},{"amis":"A: Maulah haw a remadiw kira wawa? B: Hay,maulah ku heni a remadiw.","chinese":"A: 那些孩子喜歡唱歌嗎？ B: 是，他們喜歡唱歌。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/5_14.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_14.png"},{"amis":"A: Maulah haw a misakeru kira adiwawa? B: Caay,maulah a mimelaw tu tilivi ku heni.","chinese":"A: 那些孩子喜歡跳舞嗎？ B: 不，他們喜歡看電視。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/5_15.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_15.png"},{"amis":"A: Maulah haw a mihulul kira adiwawa? B: Caay,maulah ku heni a kemaen tu maamaan.","chinese":"A: 那些孩子喜歡玩耍嗎？ B: 不，他們喜歡吃東西。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/nanshi/5_16.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_16.png"}],"恆春阿美語":[{"amis":"A: O mitiliday ho kiso haw? B: Hay, o mitiliday ho kako.","chinese":"A: 你是學生嗎？ B: 是，我是學生。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/4_1.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_1.png"},{"amis":"A: O singsi cingra haw? B: Cowa, o ising cingra.","chinese":"A: 他是老師嗎？ B: 不是，他是醫生。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/4_2.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_2.png"},{"amis":"A: O singsi iso cingra haw? B: Hay, o singsi ako cingra.","chinese":"A: 他是你的老師嗎？ B: 是/對，他是我的老師。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/4_3.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_3.png"},{"amis":"A: O faki iso cingra haw? B: Cowa, o singsi ako cingra.","chinese":"A: 他是你的叔叔嗎？ B: 不是，他是我的老師。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/4_4.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_4.png"},{"amis":"A: Iraay ko cecay a fafahiyan a safa iso haw? B: Cowa, tatosaay ko fafahiyan a safa no mako.","chinese":"A: 你有一個妹妹嗎？ B: 不，我有二個妹妹。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/4_5.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_5.png"},{"amis":"A: Ira ko tatosa a safa iso to fa'inayan haw? B: Cowa, cecayay ko fa'inayan a kaka no mako.","chinese":"A: 你有兩個弟弟嗎？ B: 不，我有一個哥哥一個弟弟。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/4_6.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_6.png"},{"amis":"A: Ira ko tatosa a kaka iso to fafahiyanan haw? B: Cowa, ira ko cecay fafahiyan a kaka ato cecay fa'inayan a kaka ako.","chinese":"A: 你有兩個姊姊嗎？ B: 不，我有一個姊姊一個哥哥。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/4_7.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_7.png"},{"amis":"A: O payci ako koninian haw? B: Hay, o payci iso koninian.","chinese":"A: 這是我的錢嗎？ B: 是的，這是你的錢。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/4_8.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_8.png"},{"amis":"A: O hana no miso koraan haw? B: Cowa ko mako a hana koraan.","chinese":"A: 那些是你的花嗎？ B: 不是，那些不是我的花。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/4_9.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_9.png"},{"amis":"A: Mamaanay kiso? B: Adadaay ko fongoh ako.","chinese":"A: 你怎麼了？ B: 我的頭很痛。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/4_10.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_10.png"},{"amis":"A: Mamaanay kiso? B: Adadaay ko mata ako.","chinese":"A: 你怎麼了？ B: 我的眼睛很痛。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/4_11.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_11.png"},{"amis":"A: Kaletengay kona ^eto haw? B: Hay, kaletengay kona ^eto.","chinese":"A: 這張桌子很重嗎？ B: 是/對，這張桌子很重。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/4_12.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_12.png"},{"amis":"A: Kaletengay kara 'axenan haw? B: Cowa, kahemaway kora 'axenan.","chinese":"A: 那張椅子很重嗎？ B: 不，那張椅子很輕。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/4_13.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_13.png"},{"amis":"A: O kohetingay kora ngiyaw iso haw? B: Hay, o kohetingay kora ngiyaw ako.","chinese":"A: 你的貓是黑色的嗎？ B: 是/對，我的貓是黑色的。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/4_14.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_14.png"},{"amis":"A: Minengneng to tilifi cangra to romi'ami'ad haw? B: Hay, minengnengay to tilifi cangra to romi'ami'ad.","chinese":"A: 他們天天看電視嗎？ B: 是/對，他們天天看電視。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/4_15.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_15.png"},{"amis":"A: Nga'ayay ko romi'ad anini haw? B: Hay,nga'ayay ko romi'ad anini.","chinese":"A: 今天天氣好嗎？ B: 是/對，今天天氣很好。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/4_16.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_16.png"},{"amis":"A: Mitiliday kiso haw? B: Hay, mitiliday kako.","chinese":"A: 你在讀書嗎？ B: 是的，我在讀書。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/5_1.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_1.png"},{"amis":"A: Mitiliday kiso haw? B: Cowa, micokaay kako.","chinese":"A: 你在讀書嗎？ B: 不，我在畫畫。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/5_2.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_2.png"},{"amis":"A: Mafoti'ay ko fafafiyan a safa iso haw? B: Hay, mafoti'ay ho cingra.","chinese":"A: 你妹妹在睡覺嗎？ B: 是的，她在睡覺。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/5_3.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_3.png"},{"amis":"A: Mafoti'ay ko fafahiyan a safa iso haw? B: Cowa, makeroay cingra.","chinese":"A: 你妹妹在睡覺嗎？ B: 不是，她在跳舞。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/5_4.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_4.png"},{"amis":"A: Mihalamay kora wawa haw? B: Hay, mihalamay kora wawa.","chinese":"A: 那些孩子在玩耍嗎？ B: 是/對，那些孩子在玩耍。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/5_5.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_5.png"},{"amis":"A: Romadiway cangra haw? B: Cowa, mitiliday cangra.","chinese":"A: 他們在唱歌嗎？ B: 不是，他們在讀書。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/5_6.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_6.png"},{"amis":"A: Ma'oraday haw? B: Hay, ma'oraday.","chinese":"A: 在下雨嗎？ B: 是/對，正在下雨。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/5_7.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_7.png"},{"amis":"A: Ma'oraday haw? B: Cowa, mahadakay ko cidal","chinese":"A: 在下雨嗎？ B: 不，太陽出來了！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/5_8.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_8.png"},{"amis":"A: Marariday kamo miliso' ci fofofan haw? B: Hay, Malariday kami miliso' ci fofofan.","chinese":"A: 你們常常去探望祖父嗎？ B: 對，我們常常去探望祖父。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/5_9.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_9.png"},{"amis":"A: Mafana'ay kiso mifaca' to riko' haw? B: Hay, mafana'ay kako mifaca' to riko'.","chinese":"A: 你會洗衣服嗎？ B: 會，我會洗衣服。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/5_10.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_10.png"},{"amis":"A: Mafana'ay kora wawa a romadiw haw? B: Hay, mafana'ay cangra a romadiw.","chinese":"A: 那些孩子會唱歌嗎？ B: 是，他們很會唱歌。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/5_11.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_11.png"},{"amis":"A: Maolahay kiso a mitilid haw? B: Hay, maolahay kako a mitilid.","chinese":"A: 你喜歡讀書嗎？ B: 是/對，我喜歡讀書。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/5_12.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_12.png"},{"amis":"A: Maolahay kora wawa a micoka haw? B: Hay, maolahay cingra a micoka.","chinese":"A: 那個孩子喜歡畫圖嗎？ B: ���/對，他很喜歡畫圖。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/5_13.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_13.png"},{"amis":"A: Maolahay kora wawa a romadiw haw? B: Hay, maolahay cangra a romadiw.","chinese":"A: 那些孩子喜歡唱歌嗎？ B: 是，他們喜歡唱歌。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/5_14.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_14.png"},{"amis":"A: Maolahay kora wawa a makero haw? B: Cawa, maolahay cangra a minengneng to tilifi.","chinese":"A: 那些孩子喜歡跳舞嗎？ B: 不，他們喜歡看電視。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/5_15.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_15.png"},{"amis":"A: Maolahay kora wawa a mihalama haw? B: Cowa, maolahay cangra a komaen.","chinese":"A: 那些孩子喜歡玩耍嗎？ B: 不，他們喜歡吃東西。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/hengchun/5_16.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_16.png"}],"海岸阿美語":[{"amis":"A: O mitiliday kiso ? B: Hai, o mitiliday kako.","chinese":"A: 你是學生嗎？ B: 是，我是學生。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/4_1.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_1.png"},{"amis":"A: O singsi cingra ? B: Caayay, o ising cingra.","chinese":"A: 他是老師嗎？ B: 不是，他是醫生。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/4_2.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_2.png"},{"amis":"A: O singsi iso cingra? B: Hai, o singsi ako cingra.","chinese":"A: 他是你的老師嗎？ B: 是/對，他是我的老師。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/4_3.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_3.png"},{"amis":"A: O faki iso cingra ? B: Caayay, o singsi ako cingra.","chinese":"A: 他是你的叔叔嗎？ B: 不是，他是我的老師。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/4_4.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_4.png"},{"amis":"A: Ira ko cecay fafahiyan a safa iso ? B: Caayay, tatosa ko fafahiyan a safa ako .","chinese":"A: 你有一個妹妹嗎？ B: 不，我有二個妹妹。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/4_5.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_5.png"},{"amis":"A: Tatosa ko fa'inayan a safa iso ? B: Caayay, cecay ko fa'inayan a kaka cecay ko fa'inayan a safa.","chinese":"A: 你有兩個弟弟嗎？ B: 不，我有一個哥哥一個弟弟。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/4_6.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_6.png"},{"amis":"A: Tatosa ko fafahiyan a kaka iso ? B: Caayay, cecay ko fafahiyan a kaka cecay ko fa'inayan a kaka.","chinese":"A: 你有兩個姊姊嗎？ B: 不，我有一個姊姊一個哥哥。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/4_7.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_7.png"},{"amis":"A: O payso ako koni ? B: Hai, o payso iso koni.","chinese":"A: 這是我的錢嗎？ B: 是的，這是你的錢。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/4_8.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_8.png"},{"amis":"A: O hana iso kora ? B: Caay, caayay ko hana ako kora.","chinese":"A: 那些是你的花嗎？ B: 不是，那些不是我的花。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/4_9.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_9.png"},{"amis":"A: Mamaan kiso ? B: Adada ko fongoh ako.","chinese":"A: 你怎麼了？ B: 我的頭很痛。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/4_10.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_10.png"},{"amis":"A: Mamaan kiso ? B: Adada ko mata ako.","chinese":"A: 你怎麼了？ B: 我的眼睛很痛。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/4_11.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_11.png"},{"amis":"A: Kareteng koni parad ? B: Hai, kareteng koni parad.","chinese":"A: 這張桌子很重嗎？ B: 是/對，這張桌子很重。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/4_12.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_12.png"},{"amis":"A: Kareteng koni 'anengan ? B: Caay, kahemaw koni 'anengan.","chinese":"A: 那張椅子很重嗎？ B: 不，那張椅子很輕。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/4_13.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_13.png"},{"amis":"A: O kohetingay ko posi iso? B: Hai,o kohetingay ko posi ako.","chinese":"A: 你的貓是黑色的嗎？ B: 是/對，我的貓是黑色的。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/4_14.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_14.png"},{"amis":"A: Romi'ami'ad minengneng to tilifi cangra? B: Hai,romi'ami'ad minengneng to tilifi cangra.","chinese":"A: 他們天天看電視嗎？ B: 是/對，他們天天看電視。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/4_15.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_15.png"},{"amis":"A: Fangcal ko romi'ad anini? B: Hai, fangcal ko romi'ad anini.","chinese":"A: 今天天氣好嗎？ B: 是/對，今天天氣很好。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/4_16.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_16.png"},{"amis":"A: Misa'osi kiso ? B: Hai, misa'osi kako.","chinese":"A: 你在讀書嗎？ B: 是的，我在讀書。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/5_1.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_1.png"},{"amis":"A: Misa'osi kiso ? B: Caay, micoka kako.","chinese":"A: 你在讀書嗎？ B: 不，我在畫畫。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/5_2.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_2.png"},{"amis":"A: Mafoti' ko safa iso? B: Hai, mafoti' cingra.","chinese":"A: 你妹妹在睡覺嗎？ B: 是的，她在睡覺。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/5_3.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_3.png"},{"amis":"A: Mafoti' ko safa iso? B: Caayay, masakero cingra.","chinese":"A: 你妹妹在睡覺嗎？ B: 不是，她在跳舞。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/5_4.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_4.png"},{"amis":"A: Misalama kora wawawawa? B: Hai, misalama kora wawawawa.","chinese":"A: 那些孩子在玩耍嗎？ B: 是/對，那些孩子在玩耍。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/5_5.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_5.png"},{"amis":"A: Romadiw cangra? B: Caayay,misa'osi cangra.","chinese":"A: 他們在唱歌嗎？ B: 不是，他們在讀書。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/5_6.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_6.png"},{"amis":"A: Ma'orad ? B: Hai, ma'orad i matini.","chinese":"A: 在下雨嗎？ B: 是/對，正在下雨。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/5_7.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_7.png"},{"amis":"A: Ma'orad to ? B: Caayay, masadak to ko cidal!","chinese":"A: 在下雨嗎？ B: 不，太陽出來了！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/5_8.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_8.png"},{"amis":"A: Paraid tayra miliso ci akongan kamo? B: Hai, pararid tayra miliso ci akongan kami.","chinese":"A: 你們常常去探望祖父嗎？ B: 對，我們常常去探望祖父。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/5_9.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_9.png"},{"amis":"A: Mafana' mifaca' to riko' kiso ? B: Hai, mafana' mifaca' kako.","chinese":"A: 你會洗衣服嗎？ B: 會，我會洗衣服。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/5_10.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_10.png"},{"amis":"A: Mafana' romadiw kora wawawawa ? B: Hai, mafana' romadiw cangra.","chinese":"A: 那些孩子會唱歌嗎？ B: 是，他們很會唱歌。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/5_11.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_11.png"},{"amis":"A: Maolah misa'osi kiso ? B: Hai, maolah misa'osi kako.","chinese":"A: 你喜歡讀書嗎？ B: 是/對，我喜歡讀書。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/5_12.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_12.png"},{"amis":"A: Maolah micoka kora wawa ? B: Hai, maolah micoka cingra.","chinese":"A: 那個孩子喜歡畫圖嗎？ B: 是/對，他很喜歡畫圖。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/5_13.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_13.png"},{"amis":"A: Maolah romadiw kora wawawawa ? B: Hai, maolah romadiw cangra.","chinese":"A: 那些孩子喜歡唱歌嗎？ B: 是，他們喜歡唱歌。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/5_14.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_14.png"},{"amis":"A: Maolah masakero kora wawawawa ? B: Caayay, maolah minengneng to tilifi cangra.","chinese":"A: 那些孩子喜歡跳舞嗎？ B: 不，他們喜歡看電視。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/5_15.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_15.png"},{"amis":"A: Maolah misalama kora wawawawa? B: Caayay, maolah komaen cangra.","chinese":"A: 那些孩子喜歡玩耍嗎？ B: 不，他們喜歡吃東西。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/coast/5_16.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_16.png"}],"馬蘭阿美語":[{"amis":"A: O mitiliday kiso haw? B: Hay, o mitiliday kako.","chinese":"A: 你是學生嗎？ B: 是，我是學生。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/4_1.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_1.png"},{"amis":"A: O singsi ko mira haw? B: Cowa, o ising ko mira.","chinese":"A: 他是老師嗎？ B: 不是，他是醫生。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/4_2.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_2.png"},{"amis":"A: O singsi iso ko mira haw? B: Hay, o singsi ako ko mira.","chinese":"A: 他是你的老師嗎？ B: 是/對，他是我的老師。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/4_3.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_3.png"},{"amis":"A: O faki iso ko mira haw? B: Cowa, o singsi ako ko mira.","chinese":"A: 他是你的叔叔嗎？ B: 不是，他是我的老師。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/4_4.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_4.png"},{"amis":"A: Ccayay ko safa iso to fafahiyan haw? B: Cowa, tosaay ko safa ako to fafahiyan.","chinese":"A: 你有一個妹妹嗎？ B: 不，我有二個妹妹。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/4_5.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_5.png"},{"amis":"A: Tosaay ko safa iso to fa'inayan haw? B: Cowa, ccayay ko kaka ako to fa'inayan, ccayay ko safa ako to fa'inayan.","chinese":"A: 你有兩個弟弟嗎？ B: 不，我有一個哥哥一個弟弟。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/4_6.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_6.png"},{"amis":"A: Tosaay ko kaka iso to fafahiyan haw? B: Cowa, ccayay ko kaka ako to fafahiyan, ccayay ko kaka ako to fa'inayan.","chinese":"A: 你有兩個姊姊嗎？ B: 不，我有一個姊姊一個哥哥。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/4_7.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_7.png"},{"amis":"A: O payso ako koni haw? B: Hay, o payso iso koni.","chinese":"A: 這是我的錢嗎？ B: 是的，這是你的錢。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/4_8.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_8.png"},{"amis":"A: O falo iso kora haw? B: Cowa, cowa ko falo ako kora.","chinese":"A: 那些是你的花嗎？ B: 不是，那些不是我的花。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/4_9.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_9.png"},{"amis":"A: Mamaanay kiso? B: Adadaay ko fongoh no mako.","chinese":"A: 你怎麼了？ B: 我的頭很痛。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/4_10.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_10.png"},{"amis":"A: Mamaanay kiso? B: Adadaay ko mata no mako.","chinese":"A: 你怎麼了？ B: 我的眼睛很痛。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/4_11.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_11.png"},{"amis":"A: Karetengay koni cokowi haw? B: Hay, karetengay koni cokowi.","chinese":"A: 這張桌子很重嗎？ B: 是/對，這張桌子很重。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/4_12.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_12.png"},{"amis":"A: Karetengay kora hakenang haw? B: Cowa, kahemaway kora hakenang.","chinese":"A: 那張椅子很重嗎？ B: 不，那張椅子很輕。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/4_13.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_13.png"},{"amis":"A: O kohetingay ko posi iso haw? B: Hay, o kohetingay ko posi ako.","chinese":"A: 你的貓是黑色的嗎？ B: 是/對，我的貓是黑色的。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/4_14.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_14.png"},{"amis":"A: Minengnengay camira to tilifi to romiamiad haw? B: Hay, minengnengay camira to tilifi to romiamiad.","chinese":"A: 他們天天看電視嗎？ B: 是/對，他們天天看電視。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/4_15.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_15.png"},{"amis":"A: Makapahay ko romiad anini haw? B: Hay, makapahay ko romiad anini.","chinese":"A: 今天天氣好嗎？ B: 是/對，今天天氣很好。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/4_16.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_16.png"},{"amis":"A: Mitiliday kiso haw? B: Hay, mitiliday kako.","chinese":"A: 你在讀書嗎？ B: 是的，我在讀書。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/5_1.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_1.png"},{"amis":"A: Mitiliday kiso haw? B: Cowa, micongaay kako.","chinese":"A: 你在讀書嗎？ B: 不，我在畫畫。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/5_2.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_2.png"},{"amis":"A: Mafoti'ay ko fafahiyan a safa iso haw? B: Hay, mafoti'ay ko mira.","chinese":"A: 你妹妹在睡覺嗎？ B: 是的，她在睡覺。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/5_3.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_3.png"},{"amis":"A: Mafoti'ay ko fafahiyan a safa iso haw? B: Cowa, makeroay ko mira.","chinese":"A: 你妹妹在睡覺嗎？ B: 不是，她在跳舞。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/5_4.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_4.png"},{"amis":"A: Misalamaay koranan a wawa haw? B: Hay, misalamaay koranan a wawa.","chinese":"A: 那些孩子在玩耍嗎？ B: 是/對，那些孩子在玩耍。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/5_5.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_5.png"},{"amis":"A: Lomadiway camira haw? B: Cowa, mitiliday camira.","chinese":"A: 他們在唱歌嗎？ B: 不是，他們在讀書。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/5_6.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_6.png"},{"amis":"A: Ma'oraday haw? B: Hay, ma'oraday.","chinese":"A: 在下雨嗎？ B: 是/對，正在下雨。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/5_7.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_7.png"},{"amis":"A: Ma'oraday haw? B: Cowa, masadakayto ko cidal.","chinese":"A: 在下雨嗎？ B: 不，太陽出來了！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/5_8.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_8.png"},{"amis":"A: Malaliday miliso' to fofoan kamo haw? B: Hay, malaliday miliso' to fofo kami.","chinese":"A: 你們常常去探望祖父嗎？ B: 對，我們常常去探望祖父。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/5_9.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_9.png"},{"amis":"A: Mafana'ay mifaca' to riko' kiso haw? B: Hay, mafana'ay mifaca' to riko' kako.","chinese":"A: 你會洗衣服嗎？ B: 會，我會洗衣服。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/5_10.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_10.png"},{"amis":"A: Mafana'ay lomadiw koranan a wawa haw? B: Hay, mafana'ay camira a lomadiw.","chinese":"A: 那些孩子會唱歌嗎？ B: 是，他們很會唱歌。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/5_11.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_11.png"},{"amis":"A: Maolahay a mitilid kiso haw? B: Hay, maolahay kako a mitilid.","chinese":"A: 你喜歡讀書嗎？ B: 是/對，我喜歡讀書。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/5_12.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_12.png"},{"amis":"A: Maolahay miconga kora wawa haw? B: Hay, maolahay miconga ko mira.","chinese":"A: 那個孩子喜歡畫圖嗎？ B: 是/對，他很喜歡畫圖。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/5_13.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_13.png"},{"amis":"A: Maolahay a lomadiw koranan a wawa haw? B: Hay, maolahay camira a lomadiw.","chinese":"A: 那些孩子喜歡唱歌嗎？ B: 是，他們喜歡唱歌。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/5_14.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_14.png"},{"amis":"A: Maolahay makero koranan a wawa haw? B: Cowa, maolahay minengneng to tilifi camira.","chinese":"A: 那些孩子喜歡跳舞嗎？ B: 不，他們喜歡看電視。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/5_15.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_15.png"},{"amis":"A: Maolahay misalama koranan a wawa haw? B: Cowa, maolahay camira a komaen to kakaenen.","chinese":"A: 那些孩子喜歡玩耍嗎？ B: 不，他們喜歡吃東西。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/malan/5_16.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_16.png"}],"預設":[{"amis":"A: O sito kiso haw ? B: Hay, o sito kako.","chinese":"A: 你是學生嗎？ B: 是，我是學生。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_1.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_1.png"},{"amis":"A: O singsi ciira haw ? B: Caay, o ising ciira.","chinese":"A: 他是老師嗎？ B: 不是，他是醫生。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_2.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_2.png"},{"amis":"A: O singsi no miso ciira haw ? B: Hay, o singsi no mako ciira.","chinese":"A: 他是你的老師嗎？ B: 是/對，他是我的老師。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_3.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_3.png"},{"amis":"A: O faki no miso ciira haw ? B: Caay, o singsi no mako ciira.","chinese":"A: 他是你的叔叔嗎？ B: 不是，他是我的老師。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_4.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_4.png"},{"amis":"A: Cecay ko fafahiyan a safa no miso haw ? B: Caay, tatosa ko fafahiyan a safa no mako.","chinese":"A: 你有一個妹妹嗎？ B: 不，我有二個妹妹。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_5.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_5.png"},{"amis":"A: Tatosa ko fa'inayan a safa no miso haw ? B: Caay, cecay ko fa'inayan a kaka ato cecay ko fa'inayan a safas no mako.","chinese":"A: 你有兩個弟弟嗎？ B: 不，我有一個哥哥一個弟弟。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_6.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_6.png"},{"amis":"A: Tatosa ko fafahiyan a kaka no miso haw ? B: Caay, cecay ko fafahiyan a kaka ato cecay ko fa'inayan a kaka no mako.","chinese":"A: 你有兩個姊姊嗎？ B: 不，我有一個姊姊一個哥哥。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_7.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_7.png"},{"amis":"A: O pida no mako kinian haw ? B: Hay, o pida no miso kinian.","chinese":"A: 這是我的錢嗎？ B: 是的，這是你的錢。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_8.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_8.png"},{"amis":"A: O falo no miso kiraan haw ? B: Caay, caayay ko falo no mako kiraan.","chinese":"A: 那些是你的花嗎？ B: 不是，那些不是我的花。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_9.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_9.png"},{"amis":"A: Mamaan kiso? B: Adada ko tangal no mako.","chinese":"A: 你怎麼了？ B: 我的頭很痛。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_10.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_10.png"},{"amis":"A: Mamaan kiso? B: Adada ko mata no mako.","chinese":"A: 你怎麼了？ B: 我的眼睛很痛。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_11.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_11.png"},{"amis":"A: Kareteng kora sapad haw ? B: Hay, kareteng kora sapat.","chinese":"A: 這張桌子很重嗎？ B: 是/對，這張桌子很重。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_12.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_12.png"},{"amis":"A: Kareteng kora 'anengang haw ? B: Caay, dahemaw kora 'anengang.","chinese":"A: 那張椅子很重嗎？ B: 不，那張椅子很輕。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_13.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_13.png"},{"amis":"A: O kohetingay ko posi no miso haw ? B: Hay, o kohetingay ko posi no mako.","chinese":"A: 你的貓是黑色的嗎？ B: 是/對，我的貓是黑色的。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_14.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_14.png"},{"amis":"A: Minengneng caira to tilifi to romi'admi'ad haw ? B: Hay, minengneng caira to tilifi to romi'admi'ad.","chinese":"A: 他們天天看電視嗎？ B: 是/對，他們天天看電視。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_15.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_15.png"},{"amis":"A: Fangcal ko romi'ad anini haw ? B: Hay, fangcal ko romi'ad anini.","chinese":"A: 今天天氣好嗎？ B: 是/對，今天天氣很好。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/4_16.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/4_16.png"},{"amis":"A: Miasipay kiso to codad haw ? B: Hay, o miasipay kako to codad.","chinese":"A: 你在讀書嗎？ B: 是的，我在讀書。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_1.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_1.png"},{"amis":"A: Miasipay kiso to codad i matini haw ? B: Caay, o mirenafay kako i matini.","chinese":"A: 你在讀書嗎？ B: 不，我在畫畫。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_2.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_2.png"},{"amis":"A: Mafoti'ay ko fafahiyan a safa no miso haw ? B: Hay,mafati'ay ciira i matini.","chinese":"A: 你妹妹在睡覺嗎？ B: 是的，她在睡覺。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_3.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_3.png"},{"amis":"A: Mafoti'ay ko fafahiyan a safa no miso i matini haw ? B: Caay,masakeroy ciira i matini.","chinese":"A: 你妹妹在睡覺嗎？ B: 不是，她在跳舞。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_4.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_4.png"},{"amis":"A: Misalamaay kora wawawawa haw ? B: Hay, misalamaay kora wawawawa.","chinese":"A: 那些孩子在玩耍嗎？ B: 是/對，那些孩子在玩耍。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_5.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_5.png"},{"amis":"A: Romadiway caira i matini haw ? B: Caay,miasipay to codad caira i matini.","chinese":"A: 他們在唱歌嗎？ B: 不是，他們在讀書。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_6.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_6.png"},{"amis":"A: Ma'oraday haw ? B: Hay, ma'oraday i matini.","chinese":"A: 在下雨嗎？ B: 是/對，正在下雨。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_7.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_7.png"},{"amis":"A: Ma'oraday haw? B: Caay,masadakay to ko cidal.","chinese":"A: 在下雨嗎？ B: 不，太陽出來了！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_8.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_8.png"},{"amis":"A: Mararid kamo a miliso' ci akongan haw ? B: Hay,mararid kami a miliso' ci akongan.","chinese":"A: 你們常常去探望祖父嗎？ B: 對，我們常常去探望祖父。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_9.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_9.png"},{"amis":"A: Mafana' kiso a mifaca' to fodoy haw ? B: Hay,mafana' kako a mifaca' to fodoy.","chinese":"A: 你會洗衣服嗎？ B: 會，我會洗衣服。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_10.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_10.png"},{"amis":"A: Mafana' romadiw kora wawawawa haw ? B: Hay,mafana' romadiw caira.","chinese":"A: 那些孩子會唱歌嗎？ B: 是，他們很會唱歌。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_11.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_11.png"},{"amis":"A: Maolah kiso a miasip to codad haw ? B: Hay,maolah kako a miasip to codad.","chinese":"A: 你喜歡讀書嗎？ B: 是/對，我喜歡讀書。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_12.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_12.png"},{"amis":"A: Maolah a mirenaf kora wawa haw ? B: Hay, maolah mirenaf kora wawa.","chinese":"A: 那個孩子喜歡畫圖嗎？ B: 是/對，他很喜歡畫圖。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_13.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_13.png"},{"amis":"A: Maolah a romadiw kora wawawawa haw ? B: Hay,maolah caira a romadiw .","chinese":"A: 那些孩子喜歡唱歌嗎？ B: 是，他們喜歡唱歌。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_14.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_14.png"},{"amis":"A: Maolah a masakero kora wawawawa haw ? B: Caay,maolah caira a minengneng to tilifi.","chinese":"A: 那些孩子喜歡跳舞嗎？ B: 不，他們喜歡看電視。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_15.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_15.png"},{"amis":"A: Maolah misalama kora wawawawa haw ? B: Caay, maolah caira komaen to kakaenen.","chinese":"A: 那些孩子喜歡玩耍嗎？ B: 不，他們喜歡吃東西。","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/yes_no_question/xiuguluan/5_16.mp3","image":"https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/5_16.png"}]},
    "dicePrompts": [
      "請念出句子",
      "請翻譯成中文",
      "閉上眼睛念一遍",
      "用快樂的語氣念",
      "用生氣的語氣念",
      "大聲念三遍"
    ]
  }

,

  "topic16": {
    "id": "topic16",
    "title": "全阿美版-祈使句 4_1~4_11",
    "gridData": {"a":{"label":"...","amis":"A: Katomireng ! mitaong ! B: Nga’ay ho singsi !","chinese":"A: 起立！敬禮！(班長說) B: 老師好！(全班說)","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_1.mp3","image":""},"b":{"label":"...","amis":"A: Nga’ay ho ko namo mapolong ! B: Kamaro’ !","chinese":"A: 同學好 (老師說) B: 坐下！ (班長說)","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_2.mp3","image":""},"c":{"label":"...","amis":"A: Kasomowal !","chinese":"A: 請說(說說看)！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_3.mp3","image":""},"d":{"label":"...","amis":"A: Pitengil !","chinese":"A: 請聽(聽聽看)！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_4.mp3","image":""},"e":{"label":"...","amis":"A: Picodad !","chinese":"A: 去讀書！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_5.mp3","image":""},"f":{"label":"...","amis":"A: Piliso’ ci akongan !","chinese":"A: 去探望祖父！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_6.mp3","image":""},"g":{"label":"...","amis":"A: Aka kacaciyaw !","chinese":"A: 別說話！(安靜！)","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_7.mp3","image":""},"h":{"label":"...","amis":"A: Aka kaapac !","chinese":"A: 別遲到！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_8.mp3","image":""},"i":{"label":"...","amis":"A: Aka pila’om !","chinese":"A: 別浪費！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_9.mp3","image":""},"j":{"label":"...","amis":"A: Fohaten ko sasingaran ! B: Hay !","chinese":"A: 開窗(/把窗戶打開)！ B: 好！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_10.mp3","image":""},"o":{"label":"...","amis":"A: Aama, fohaten ho ko paenan ! B: Hay !","chinese":"A: 祖母，請開門！[較客氣之說法] B: 好！來了！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_11.mp3","image":""},"p":{"label":"...","amis":"","chinese":""},"q":{"label":"...","amis":"","chinese":""},"r":{"label":"...","amis":"","chinese":""},"s":{"label":"...","amis":"","chinese":""},"t":{"label":"...","amis":"","chinese":""},"u":{"label":"...","amis":"","chinese":""},"v":{"label":"...","amis":"","chinese":""},"w":{"label":"...","amis":"","chinese":""},"x":{"label":"...","amis":"","chinese":""}},
    "gridDataByDialect": {"秀姑巒阿美語":{"a":{"label":"...","amis":"A: Katomireng ! mitaong ! B: Nga’ay ho singsi !","chinese":"A: 起立！敬禮！(班長說) B: 老師好！(全班說)","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_1.mp3","image":""},"b":{"label":"...","amis":"A: Nga’ay ho ko namo mapolong ! B: Kamaro’ !","chinese":"A: 同學好 (老師說) B: 坐下！ (班長說)","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_2.mp3","image":""},"c":{"label":"...","amis":"A: Kasomowal !","chinese":"A: 請說(說說看)！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_3.mp3","image":""},"d":{"label":"...","amis":"A: Pitengil !","chinese":"A: 請聽(聽聽看)！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_4.mp3","image":""},"e":{"label":"...","amis":"A: Picodad !","chinese":"A: 去讀書！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_5.mp3","image":""},"f":{"label":"...","amis":"A: Piliso’ ci akongan !","chinese":"A: 去探望祖父！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_6.mp3","image":""},"g":{"label":"...","amis":"A: Aka kacaciyaw !","chinese":"A: 別說話！(安靜！)","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_7.mp3","image":""},"h":{"label":"...","amis":"A: Aka kaapac !","chinese":"A: 別遲到！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_8.mp3","image":""},"i":{"label":"...","amis":"A: Aka pila’om !","chinese":"A: 別浪費！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_9.mp3","image":""},"j":{"label":"...","amis":"A: Fohaten ko sasingaran ! B: Hay !","chinese":"A: 開窗(/把窗戶打開)！ B: 好！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_10.mp3","image":""},"o":{"label":"...","amis":"A: Aama, fohaten ho ko paenan ! B: Hay !","chinese":"A: 祖母，請開門！[較客氣之說法] B: 好！來了！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_11.mp3","image":""},"p":{"label":"...","amis":"","chinese":""},"q":{"label":"...","amis":"","chinese":""},"r":{"label":"...","amis":"","chinese":""},"s":{"label":"...","amis":"","chinese":""},"t":{"label":"...","amis":"","chinese":""},"u":{"label":"...","amis":"","chinese":""},"v":{"label":"...","amis":"","chinese":""},"w":{"label":"...","amis":"","chinese":""},"x":{"label":"...","amis":"","chinese":""}},"南勢阿美語":{"a":{"label":"...","amis":"A: Katemireng ! Micemek! B: Kapah haw kisu,pasevanaay.","chinese":"A: 起立！敬禮！(班長說) B: 老師好！(全班說)","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/nanshi/4_1.mp3","image":""},"b":{"label":"...","amis":"A: Hay,kapah tu haw kamu,micudaday! B: Kamaru’!","chinese":"A: 同學好 (老師說) B: 坐下！ (班長說)","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/nanshi/4_2.mp3","image":""},"c":{"label":"...","amis":"A: Kasemuwal !","chinese":"A: 請說說看！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/nanshi/4_3.mp3","image":""},"d":{"label":"...","amis":"A: Pitengili !","chinese":"A: 請注意聽！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/nanshi/4_4.mp3","image":""},"e":{"label":"...","amis":"A: Picudadi !","chinese":"A: 去讀書！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/nanshi/4_5.mp3","image":""},"f":{"label":"...","amis":"A: Pilisu’i tu vaki!","chinese":"A: 去探望祖父！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/nanshi/4_6.mp3","image":""},"g":{"label":"...","amis":"A: Aka kasemuwal!","chinese":"A: 不要說話！(請安靜！)","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/nanshi/4_7.mp3","image":""},"h":{"label":"...","amis":"A: Aka kautang!","chinese":"A: 不要遲到！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/nanshi/4_8.mp3","image":""},"i":{"label":"...","amis":"A: Aka palasawad !","chinese":"A: 別浪費！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/nanshi/4_9.mp3","image":""},"j":{"label":"...","amis":"A: Vawahen ku sasingaran ! B: Hay!","chinese":"A: 開窗(把窗戶打開)！ B: 好！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/nanshi/4_10.mp3","image":""},"o":{"label":"...","amis":"A: Vayiaw,vawahen ku panan! B: Hay!ini tu!","chinese":"A: 祖母，請開門！(較客氣之說法) B: 好！來了！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/nanshi/4_11.mp3","image":""},"p":{"label":"...","amis":"","chinese":""},"q":{"label":"...","amis":"","chinese":""},"r":{"label":"...","amis":"","chinese":""},"s":{"label":"...","amis":"","chinese":""},"t":{"label":"...","amis":"","chinese":""},"u":{"label":"...","amis":"","chinese":""},"v":{"label":"...","amis":"","chinese":""},"w":{"label":"...","amis":"","chinese":""},"x":{"label":"...","amis":"","chinese":""}},"恆春阿美語":{"a":{"label":"...","amis":"A: Katomireng! Kapita’ong! B: Nga’ay ho singis!","chinese":"A: 起立！敬禮！(班長說) B: 老師好！(全班說)","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/hengchun/4_1.mp3","image":""},"b":{"label":"...","amis":"A: Nga’ay ho ! B: Kamaro’!","chinese":"A: 同學好 (老師說) B: 坐下！ (班長說)","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/hengchun/4_2.mp3","image":""},"c":{"label":"...","amis":"A: Kasomowal!","chinese":"A: 請說(說說看)！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/hengchun/4_3.mp3","image":""},"d":{"label":"...","amis":"A: Satengitengilen ho!","chinese":"A: 請聽(聽聽看)！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/hengchun/4_4.mp3","image":""},"e":{"label":"...","amis":"A: Katayra mitilid!","chinese":"A: 去讀書！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/hengchun/4_5.mp3","image":""},"f":{"label":"...","amis":"A: Katayra miliso’ ci fofoan!","chinese":"A: 去探望祖父！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/hengchun/4_6.mp3","image":""},"g":{"label":"...","amis":"A: Aka kacaciyaw!","chinese":"A: 別說話！(安靜！)","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/hengchun/4_7.mp3","image":""},"h":{"label":"...","amis":"A: Aka kamaapac!","chinese":"A: 別遲到！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/hengchun/4_8.mp3","image":""},"i":{"label":"...","amis":"A: Aka pipalak!","chinese":"A: 別浪費！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/hengchun/4_9.mp3","image":""},"j":{"label":"...","amis":"A: Fohaten kora tanameng! B: Hay!","chinese":"A: 開窗(把窗戶打開)！ B: 好！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/hengchun/4_10.mp3","image":""},"o":{"label":"...","amis":"A: Fofo, fohaten ho ko fawahan! B: Hay !","chinese":"A: 祖母，請開門！(較客氣之說法) B: 好！來了！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/hengchun/4_11.mp3","image":""},"p":{"label":"...","amis":"","chinese":""},"q":{"label":"...","amis":"","chinese":""},"r":{"label":"...","amis":"","chinese":""},"s":{"label":"...","amis":"","chinese":""},"t":{"label":"...","amis":"","chinese":""},"u":{"label":"...","amis":"","chinese":""},"v":{"label":"...","amis":"","chinese":""},"w":{"label":"...","amis":"","chinese":""},"x":{"label":"...","amis":"","chinese":""}},"海岸阿美語":{"a":{"label":"...","amis":"A: Katomireng!Mita’ong！ B: Nga’ay ho singsi!","chinese":"A: 起立！敬禮！(班長說) B: 老師好！(全班說)","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/coast/4_1.mp3","image":""},"b":{"label":"...","amis":"A: Nga’ay ho kamo mitiliday! B: Kamaro’!","chinese":"A: 同學好 (老師說) B: 坐下！ (班長說)","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/coast/4_2.mp3","image":""},"c":{"label":"...","amis":"A: Da kasomowal!","chinese":"A: 請說(說說看)！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/coast/4_3.mp3","image":""},"d":{"label":"...","amis":"A: Tengilen!","chinese":"A: 請聽(聽聽看)！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/coast/4_4.mp3","image":""},"e":{"label":"...","amis":"A: Pisa’osi to!","chinese":"A: 去讀書！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/coast/4_5.mp3","image":""},"f":{"label":"...","amis":"A: Kapiliso’ to ci akongan!","chinese":"A: 去探望祖父！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/coast/4_6.mp3","image":""},"g":{"label":"...","amis":"A: Aka ka caciyaw! / Katomerep!","chinese":"A: 別說話！(安靜！)","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/coast/4_7.mp3","image":""},"h":{"label":"...","amis":"A: Aka ka apac!","chinese":"A: 別遲到！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/coast/4_8.mp3","image":""},"i":{"label":"...","amis":"A: Aka pila’om!","chinese":"A: 別浪費！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/coast/4_9.mp3","image":""},"j":{"label":"...","amis":"A: Fawahan ko sasingaran! B: Hayda!","chinese":"A: 開窗(把窗戶打開)！ B: 好！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/coast/4_10.mp3","image":""},"o":{"label":"...","amis":"A: Ama, fawahen ho! B: Tayni to!","chinese":"A: 祖母，請開門！(較客氣之說法) B: 好！來了！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/coast/4_11.mp3","image":""},"p":{"label":"...","amis":"","chinese":""},"q":{"label":"...","amis":"","chinese":""},"r":{"label":"...","amis":"","chinese":""},"s":{"label":"...","amis":"","chinese":""},"t":{"label":"...","amis":"","chinese":""},"u":{"label":"...","amis":"","chinese":""},"v":{"label":"...","amis":"","chinese":""},"w":{"label":"...","amis":"","chinese":""},"x":{"label":"...","amis":"","chinese":""}},"馬蘭阿美語":{"a":{"label":"...","amis":"A: Katomireng! Mita’ong! B: Nga’ayho singsi!","chinese":"A: 起立！敬禮！(班長說) B: 老師好！(全班說)","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/malan/4_1.mp3","image":""},"b":{"label":"...","amis":"A: Nga’ayho kamo mitiliday! B: Kamaro’!","chinese":"A: 同學好 (老師說) B: 坐下！ (班長說)","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/malan/4_2.mp3","image":""},"c":{"label":"...","amis":"A: Kasomowal! / Pasowal!","chinese":"A: 請說(說說看)！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/malan/4_3.mp3","image":""},"d":{"label":"...","amis":"A: Pitengil!","chinese":"A: 請聽(聽聽看)！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/malan/4_4.mp3","image":""},"e":{"label":"...","amis":"A: Pitilid!","chinese":"A: 去讀書！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/malan/4_5.mp3","image":""},"f":{"label":"...","amis":"A: Piliso’ to fofo!","chinese":"A: 去探望祖父！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/malan/4_6.mp3","image":""},"g":{"label":"...","amis":"A: Aka caciyaw!","chinese":"A: 別說話！(安靜！)","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/malan/4_7.mp3","image":""},"h":{"label":"...","amis":"A: Aka kaapac!","chinese":"A: 別遲到！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/malan/4_8.mp3","image":""},"i":{"label":"...","amis":"A: Aka pisaloya!","chinese":"A: 別浪費！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/malan/4_9.mp3","image":""},"j":{"label":"...","amis":"A: Fawahen ko palatawan! B: Hay!","chinese":"A: 開窗(把窗戶打開)！ B: 好！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/malan/4_10.mp3","image":""},"o":{"label":"...","amis":"A: Fofo, fawahenho ko fawahan! B: Hay! Ila sawni!","chinese":"A: 祖母，請開門！(較客氣之說法) B: 好！來了！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/malan/4_11.mp3","image":""},"p":{"label":"...","amis":"","chinese":""},"q":{"label":"...","amis":"","chinese":""},"r":{"label":"...","amis":"","chinese":""},"s":{"label":"...","amis":"","chinese":""},"t":{"label":"...","amis":"","chinese":""},"u":{"label":"...","amis":"","chinese":""},"v":{"label":"...","amis":"","chinese":""},"w":{"label":"...","amis":"","chinese":""},"x":{"label":"...","amis":"","chinese":""}},"預設":{"a":{"label":"...","amis":"A: Katomireng ! mitaong ! B: Nga’ay ho singsi !","chinese":"A: 起立！敬禮！(班長說) B: 老師好！(全班說)","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_1.mp3","image":""},"b":{"label":"...","amis":"A: Nga’ay ho ko namo mapolong ! B: Kamaro’ !","chinese":"A: 同學好 (老師說) B: 坐下！ (班長說)","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_2.mp3","image":""},"c":{"label":"...","amis":"A: Kasomowal !","chinese":"A: 請說(說說看)！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_3.mp3","image":""},"d":{"label":"...","amis":"A: Pitengil !","chinese":"A: 請聽(聽聽看)！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_4.mp3","image":""},"e":{"label":"...","amis":"A: Picodad !","chinese":"A: 去讀書！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_5.mp3","image":""},"f":{"label":"...","amis":"A: Piliso’ ci akongan !","chinese":"A: 去探望祖父！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_6.mp3","image":""},"g":{"label":"...","amis":"A: Aka kacaciyaw !","chinese":"A: 別說話！(安靜！)","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_7.mp3","image":""},"h":{"label":"...","amis":"A: Aka kaapac !","chinese":"A: 別遲到！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_8.mp3","image":""},"i":{"label":"...","amis":"A: Aka pila’om !","chinese":"A: 別浪費！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_9.mp3","image":""},"j":{"label":"...","amis":"A: Fohaten ko sasingaran ! B: Hay !","chinese":"A: 開窗(/把窗戶打開)！ B: 好！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_10.mp3","image":""},"o":{"label":"...","amis":"A: Aama, fohaten ho ko paenan ! B: Hay !","chinese":"A: 祖母，請開門！[較客氣之說法] B: 好！來了！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_11.mp3","image":""},"p":{"label":"...","amis":"","chinese":""},"q":{"label":"...","amis":"","chinese":""},"r":{"label":"...","amis":"","chinese":""},"s":{"label":"...","amis":"","chinese":""},"t":{"label":"...","amis":"","chinese":""},"u":{"label":"...","amis":"","chinese":""},"v":{"label":"...","amis":"","chinese":""},"w":{"label":"...","amis":"","chinese":""},"x":{"label":"...","amis":"","chinese":""}}},
    "sentences": [{"amis":"A: Katomireng ! mitaong ! B: Nga’ay ho singsi !","chinese":"A: 起立！敬禮！(班長說) B: 老師好！(全班說)","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_1.mp3","image":""},{"amis":"A: Nga’ay ho ko namo mapolong ! B: Kamaro’ !","chinese":"A: 同學好 (老師說) B: 坐下！ (班長說)","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_2.mp3","image":""},{"amis":"A: Kasomowal !","chinese":"A: 請說(說說看)！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_3.mp3","image":""},{"amis":"A: Pitengil !","chinese":"A: 請聽(聽聽看)！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_4.mp3","image":""},{"amis":"A: Picodad !","chinese":"A: 去讀書！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_5.mp3","image":""},{"amis":"A: Piliso’ ci akongan !","chinese":"A: 去探望祖父！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_6.mp3","image":""},{"amis":"A: Aka kacaciyaw !","chinese":"A: 別說話！(安靜！)","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_7.mp3","image":""},{"amis":"A: Aka kaapac !","chinese":"A: 別遲到！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_8.mp3","image":""},{"amis":"A: Aka pila’om !","chinese":"A: 別浪費！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_9.mp3","image":""},{"amis":"A: Fohaten ko sasingaran ! B: Hay !","chinese":"A: 開窗(/把窗戶打開)！ B: 好！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_10.mp3","image":""},{"amis":"A: Aama, fohaten ho ko paenan ! B: Hay !","chinese":"A: 祖母，請開門！[較客氣之說法] B: 好！來了！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_11.mp3","image":""}],
    "sentencesByDialect": {"秀姑巒阿美語":[{"amis":"A: Katomireng ! mitaong ! B: Nga’ay ho singsi !","chinese":"A: 起立！敬禮！(班長說) B: 老師好！(全班說)","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_1.mp3","image":""},{"amis":"A: Nga’ay ho ko namo mapolong ! B: Kamaro’ !","chinese":"A: 同學好 (老師說) B: 坐下！ (班長說)","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_2.mp3","image":""},{"amis":"A: Kasomowal !","chinese":"A: 請說(說說看)！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_3.mp3","image":""},{"amis":"A: Pitengil !","chinese":"A: 請聽(聽聽看)！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_4.mp3","image":""},{"amis":"A: Picodad !","chinese":"A: 去讀書！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_5.mp3","image":""},{"amis":"A: Piliso’ ci akongan !","chinese":"A: 去探望祖父！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_6.mp3","image":""},{"amis":"A: Aka kacaciyaw !","chinese":"A: 別說話！(安靜！)","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_7.mp3","image":""},{"amis":"A: Aka kaapac !","chinese":"A: 別遲到！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_8.mp3","image":""},{"amis":"A: Aka pila’om !","chinese":"A: 別浪費！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_9.mp3","image":""},{"amis":"A: Fohaten ko sasingaran ! B: Hay !","chinese":"A: 開窗(/把窗戶打開)！ B: 好！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_10.mp3","image":""},{"amis":"A: Aama, fohaten ho ko paenan ! B: Hay !","chinese":"A: 祖母，請開門！[較客氣之說法] B: 好！來了！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_11.mp3","image":""}],"南勢阿美語":[{"amis":"A: Katemireng ! Micemek! B: Kapah haw kisu,pasevanaay.","chinese":"A: 起立！敬禮！(班長說) B: 老師好！(全班說)","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/nanshi/4_1.mp3","image":""},{"amis":"A: Hay,kapah tu haw kamu,micudaday! B: Kamaru’!","chinese":"A: 同學好 (老師說) B: 坐下！ (班長說)","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/nanshi/4_2.mp3","image":""},{"amis":"A: Kasemuwal !","chinese":"A: 請說說看！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/nanshi/4_3.mp3","image":""},{"amis":"A: Pitengili !","chinese":"A: 請注意聽！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/nanshi/4_4.mp3","image":""},{"amis":"A: Picudadi !","chinese":"A: 去讀書！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/nanshi/4_5.mp3","image":""},{"amis":"A: Pilisu’i tu vaki!","chinese":"A: 去探望祖父！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/nanshi/4_6.mp3","image":""},{"amis":"A: Aka kasemuwal!","chinese":"A: 不要說話！(請安靜！)","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/nanshi/4_7.mp3","image":""},{"amis":"A: Aka kautang!","chinese":"A: 不要遲到！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/nanshi/4_8.mp3","image":""},{"amis":"A: Aka palasawad !","chinese":"A: 別浪費！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/nanshi/4_9.mp3","image":""},{"amis":"A: Vawahen ku sasingaran ! B: Hay!","chinese":"A: 開窗(把窗戶打開)！ B: 好！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/nanshi/4_10.mp3","image":""},{"amis":"A: Vayiaw,vawahen ku panan! B: Hay!ini tu!","chinese":"A: 祖母，請開門！(較客氣之說法) B: 好！來了！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/nanshi/4_11.mp3","image":""}],"恆春阿美語":[{"amis":"A: Katomireng! Kapita’ong! B: Nga’ay ho singis!","chinese":"A: 起立！敬禮！(班長說) B: 老師好！(全班說)","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/hengchun/4_1.mp3","image":""},{"amis":"A: Nga’ay ho ! B: Kamaro’!","chinese":"A: 同學好 (老師說) B: 坐下！ (班長說)","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/hengchun/4_2.mp3","image":""},{"amis":"A: Kasomowal!","chinese":"A: 請說(說說看)！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/hengchun/4_3.mp3","image":""},{"amis":"A: Satengitengilen ho!","chinese":"A: 請聽(聽聽看)！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/hengchun/4_4.mp3","image":""},{"amis":"A: Katayra mitilid!","chinese":"A: 去讀書！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/hengchun/4_5.mp3","image":""},{"amis":"A: Katayra miliso’ ci fofoan!","chinese":"A: 去探望祖父！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/hengchun/4_6.mp3","image":""},{"amis":"A: Aka kacaciyaw!","chinese":"A: 別說話！(安靜！)","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/hengchun/4_7.mp3","image":""},{"amis":"A: Aka kamaapac!","chinese":"A: 別遲到！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/hengchun/4_8.mp3","image":""},{"amis":"A: Aka pipalak!","chinese":"A: 別浪費！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/hengchun/4_9.mp3","image":""},{"amis":"A: Fohaten kora tanameng! B: Hay!","chinese":"A: 開窗(把窗戶打開)！ B: 好！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/hengchun/4_10.mp3","image":""},{"amis":"A: Fofo, fohaten ho ko fawahan! B: Hay !","chinese":"A: 祖母，請開門！(較客氣之說法) B: 好！來了！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/hengchun/4_11.mp3","image":""}],"海岸阿美語":[{"amis":"A: Katomireng!Mita’ong！ B: Nga’ay ho singsi!","chinese":"A: 起立！敬禮！(班長說) B: 老師好！(全班說)","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/coast/4_1.mp3","image":""},{"amis":"A: Nga’ay ho kamo mitiliday! B: Kamaro’!","chinese":"A: 同學好 (老師說) B: 坐下！ (班長說)","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/coast/4_2.mp3","image":""},{"amis":"A: Da kasomowal!","chinese":"A: 請說(說說看)！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/coast/4_3.mp3","image":""},{"amis":"A: Tengilen!","chinese":"A: 請聽(聽聽看)！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/coast/4_4.mp3","image":""},{"amis":"A: Pisa’osi to!","chinese":"A: 去讀書！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/coast/4_5.mp3","image":""},{"amis":"A: Kapiliso’ to ci akongan!","chinese":"A: 去探望祖父！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/coast/4_6.mp3","image":""},{"amis":"A: Aka ka caciyaw! / Katomerep!","chinese":"A: 別說話！(安靜！)","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/coast/4_7.mp3","image":""},{"amis":"A: Aka ka apac!","chinese":"A: 別遲到！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/coast/4_8.mp3","image":""},{"amis":"A: Aka pila’om!","chinese":"A: 別浪費！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/coast/4_9.mp3","image":""},{"amis":"A: Fawahan ko sasingaran! B: Hayda!","chinese":"A: 開窗(把窗戶打開)！ B: 好！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/coast/4_10.mp3","image":""},{"amis":"A: Ama, fawahen ho! B: Tayni to!","chinese":"A: 祖母，請開門！(較客氣之說法) B: 好！來了！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/coast/4_11.mp3","image":""}],"馬蘭阿美語":[{"amis":"A: Katomireng! Mita’ong! B: Nga’ayho singsi!","chinese":"A: 起立！敬禮！(班長說) B: 老師好！(全班說)","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/malan/4_1.mp3","image":""},{"amis":"A: Nga’ayho kamo mitiliday! B: Kamaro’!","chinese":"A: 同學好 (老師說) B: 坐下！ (班長說)","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/malan/4_2.mp3","image":""},{"amis":"A: Kasomowal! / Pasowal!","chinese":"A: 請說(說說看)！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/malan/4_3.mp3","image":""},{"amis":"A: Pitengil!","chinese":"A: 請聽(聽聽看)！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/malan/4_4.mp3","image":""},{"amis":"A: Pitilid!","chinese":"A: 去讀書！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/malan/4_5.mp3","image":""},{"amis":"A: Piliso’ to fofo!","chinese":"A: 去探望祖父！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/malan/4_6.mp3","image":""},{"amis":"A: Aka caciyaw!","chinese":"A: 別說話！(安靜！)","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/malan/4_7.mp3","image":""},{"amis":"A: Aka kaapac!","chinese":"A: 別遲到！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/malan/4_8.mp3","image":""},{"amis":"A: Aka pisaloya!","chinese":"A: 別浪費！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/malan/4_9.mp3","image":""},{"amis":"A: Fawahen ko palatawan! B: Hay!","chinese":"A: 開窗(把窗戶打開)！ B: 好！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/malan/4_10.mp3","image":""},{"amis":"A: Fofo, fawahenho ko fawahan! B: Hay! Ila sawni!","chinese":"A: 祖母，請開門！(較客氣之說法) B: 好！來了！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/malan/4_11.mp3","image":""}],"預設":[{"amis":"A: Katomireng ! mitaong ! B: Nga’ay ho singsi !","chinese":"A: 起立！敬禮！(班長說) B: 老師好！(全班說)","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_1.mp3","image":""},{"amis":"A: Nga’ay ho ko namo mapolong ! B: Kamaro’ !","chinese":"A: 同學好 (老師說) B: 坐下！ (班長說)","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_2.mp3","image":""},{"amis":"A: Kasomowal !","chinese":"A: 請說(說說看)！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_3.mp3","image":""},{"amis":"A: Pitengil !","chinese":"A: 請聽(聽聽看)！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_4.mp3","image":""},{"amis":"A: Picodad !","chinese":"A: 去讀書！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_5.mp3","image":""},{"amis":"A: Piliso’ ci akongan !","chinese":"A: 去探望祖父！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_6.mp3","image":""},{"amis":"A: Aka kacaciyaw !","chinese":"A: 別說話！(安靜！)","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_7.mp3","image":""},{"amis":"A: Aka kaapac !","chinese":"A: 別遲到！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_8.mp3","image":""},{"amis":"A: Aka pila’om !","chinese":"A: 別浪費！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_9.mp3","image":""},{"amis":"A: Fohaten ko sasingaran ! B: Hay !","chinese":"A: 開窗(/把窗戶打開)！ B: 好！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_10.mp3","image":""},{"amis":"A: Aama, fohaten ho ko paenan ! B: Hay !","chinese":"A: 祖母，請開門！[較客氣之說法] B: 好！來了！","sound":"https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/imperative/xiuguluan/4_11.mp3","image":""}]},
    "dicePrompts": [
      "請念出句子",
      "請翻譯成中文",
      "閉上眼睛念一遍",
      "用快樂的語氣念",
      "用生氣的語氣念",
      "大聲念三遍"
    ]
  }

,

  "topic17": {
  "id": "topic17",
  "title": "全阿美版-訊息問句_問關係動植物物品_1_1到1_15",
  "gridData": {
    "a": {
      "label": "...",
      "amis": "A: Cima kora fa'inayan ? B: O singsi no mako ciira.",
      "chinese": "A: 那個男人是誰？ B: 他是我的老師。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_1.mp3",
      "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_1.png"
    },
    "b": {
      "label": "...",
      "amis": "A: Cima kora fafahiyan ? B: O singsi no mako ciira.",
      "chinese": "A: 那個女人是誰？ B: 她是我的老師。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_2.mp3",
      "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_2.png"
    },
    "c": {
      "label": "...",
      "amis": "A: Cima kora fa'inayan ? B: O kaka no mako ciira.",
      "chinese": "A: 那個男人是誰？ B: 他是我的哥哥。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_3.mp3",
      "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_3.png"
    },
    "d": {
      "label": "...",
      "amis": "A: Cima kora fafahiyan ? B: O kaka no mako ciira.",
      "chinese": "A: 那個女人是誰？ B: 她是我的姊姊。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_4.mp3",
      "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_4.png"
    },
    "e": {
      "label": "...",
      "amis": "A: O maan kinian ? B: O 'edo kinian.",
      "chinese": "A: 這是什麼？ B: 這是老鼠。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_5.mp3",
      "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_5.png"
    },
    "f": {
      "label": "...",
      "amis": "A: O maan kinian ? B: O kolong kinian.",
      "chinese": "A: 這是什麼？ B: 這是牛。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_6.mp3",
      "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_6.png"
    },
    "g": {
      "label": "...",
      "amis": "A: O maan kinian ? B: O takora' kinian.",
      "chinese": "A: 這是什麼？ B: 這是青蛙。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_7.mp3",
      "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_7.png"
    },
    "h": {
      "label": "...",
      "amis": "A: O maan kinian ? B: O ekong kinian.",
      "chinese": "A: 這是什麼？ B: 這是貓頭鷹。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_8.mp3",
      "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_8.png"
    },
    "i": {
      "label": "...",
      "amis": "A: O maan kiraan ? B: O kilang kiraan .",
      "chinese": "A: 那是什麼？ B: 那是樹。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_9.mp3",
      "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_9.png"
    },
    "j": {
      "label": "...",
      "amis": "A: O maan kiraan ? B: O falo kiraan.",
      "chinese": "A: 那是什麼？ B: 那是花。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_10.mp3",
      "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_10.png"
    },
    "o": {
      "label": "...",
      "amis": "A: O maan kiraan ? B: O mami' kiraan.",
      "chinese": "A: 那是什麼？ B: 那是橘子。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_11.mp3",
      "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_11.png"
    },
    "p": {
      "label": "...",
      "amis": "A: O maan kiraan ? B: O 'ariray kiraan.",
      "chinese": "A: 那是什麼？ B: 那是玉米。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_12.mp3",
      "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_12.png"
    },
    "q": {
      "label": "...",
      "amis": "A: O maan kiraan ? B: O sapad kiraan.",
      "chinese": "A: 那是什麼？ B: 那是桌子。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_13.mp3",
      "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_13.png"
    },
    "r": {
      "label": "...",
      "amis": "A: O maan kiraan ? B: O pida kiraan.",
      "chinese": "A: 那是什麼？ B: 那是錢。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_14.mp3",
      "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_14.png"
    },
    "s": {
      "label": "...",
      "amis": "A: O maan kiraan ? B: O kafong kiraan.",
      "chinese": "A: 那是什麼？ B: 那是帽子。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_15.mp3",
      "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_15.png"
    },
    "t": {
      "label": "...",
      "amis": "",
      "chinese": ""
    },
    "u": {
      "label": "...",
      "amis": "",
      "chinese": ""
    },
    "v": {
      "label": "...",
      "amis": "",
      "chinese": ""
    },
    "w": {
      "label": "...",
      "amis": "",
      "chinese": ""
    },
    "x": {
      "label": "...",
      "amis": "",
      "chinese": ""
    }
  },
  "gridDataByDialect": {
    "秀姑巒阿美語": {
      "a": {
        "label": "...",
        "amis": "A: Cima kora fa'inayan ? B: O singsi no mako ciira.",
        "chinese": "A: 那個男人是誰？ B: 他是我的老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_1.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_1.png"
      },
      "b": {
        "label": "...",
        "amis": "A: Cima kora fafahiyan ? B: O singsi no mako ciira.",
        "chinese": "A: 那個女人是誰？ B: 她是我的老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_2.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_2.png"
      },
      "c": {
        "label": "...",
        "amis": "A: Cima kora fa'inayan ? B: O kaka no mako ciira.",
        "chinese": "A: 那個男人是誰？ B: 他是我的哥哥。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_3.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_3.png"
      },
      "d": {
        "label": "...",
        "amis": "A: Cima kora fafahiyan ? B: O kaka no mako ciira.",
        "chinese": "A: 那個女人是誰？ B: 她是我的姊姊。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_4.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_4.png"
      },
      "e": {
        "label": "...",
        "amis": "A: O maan kinian ? B: O 'edo kinian.",
        "chinese": "A: 這是什麼？ B: 這是老鼠。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_5.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_5.png"
      },
      "f": {
        "label": "...",
        "amis": "A: O maan kinian ? B: O kolong kinian.",
        "chinese": "A: 這是什麼？ B: 這是牛。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_6.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_6.png"
      },
      "g": {
        "label": "...",
        "amis": "A: O maan kinian ? B: O takora' kinian.",
        "chinese": "A: 這是什麼？ B: 這是青蛙。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_7.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_7.png"
      },
      "h": {
        "label": "...",
        "amis": "A: O maan kinian ? B: O ekong kinian.",
        "chinese": "A: 這是什麼？ B: 這是貓頭鷹。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_8.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_8.png"
      },
      "i": {
        "label": "...",
        "amis": "A: O maan kiraan ? B: O kilang kiraan .",
        "chinese": "A: 那是什麼？ B: 那是樹。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_9.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_9.png"
      },
      "j": {
        "label": "...",
        "amis": "A: O maan kiraan ? B: O falo kiraan.",
        "chinese": "A: 那是什麼？ B: 那是花。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_10.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_10.png"
      },
      "o": {
        "label": "...",
        "amis": "A: O maan kiraan ? B: O mami' kiraan.",
        "chinese": "A: 那是什麼？ B: 那是橘子。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_11.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_11.png"
      },
      "p": {
        "label": "...",
        "amis": "A: O maan kiraan ? B: O 'ariray kiraan.",
        "chinese": "A: 那是什麼？ B: 那是玉米。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_12.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_12.png"
      },
      "q": {
        "label": "...",
        "amis": "A: O maan kiraan ? B: O sapad kiraan.",
        "chinese": "A: 那是什麼？ B: 那是桌子。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_13.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_13.png"
      },
      "r": {
        "label": "...",
        "amis": "A: O maan kiraan ? B: O pida kiraan.",
        "chinese": "A: 那是什麼？ B: 那是錢。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_14.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_14.png"
      },
      "s": {
        "label": "...",
        "amis": "A: O maan kiraan ? B: O kafong kiraan.",
        "chinese": "A: 那是什麼？ B: 那是帽子。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_15.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_15.png"
      },
      "t": {
        "label": "...",
        "amis": "",
        "chinese": ""
      },
      "u": {
        "label": "...",
        "amis": "",
        "chinese": ""
      },
      "v": {
        "label": "...",
        "amis": "",
        "chinese": ""
      },
      "w": {
        "label": "...",
        "amis": "",
        "chinese": ""
      },
      "x": {
        "label": "...",
        "amis": "",
        "chinese": ""
      }
    },
    "南勢阿美語": {
      "a": {
        "label": "...",
        "amis": "A: Cima kira vavainayan? B: U pasevanaay nu maku cira.",
        "chinese": "A: 那個男人是誰？ B: 他是我的老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/nanshi/1_1.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_1.png"
      },
      "b": {
        "label": "...",
        "amis": "A: Cima kira vavahiyan? B: U pasevanaay nu maku cira.",
        "chinese": "A: 那個女人是誰？ B: 她是我的老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/nanshi/1_2.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_2.png"
      },
      "c": {
        "label": "...",
        "amis": "A: Cima kira vavainayan? B: U kaka nu maku tu vavainayan cira.",
        "chinese": "A: 那個男人是誰？ B: 他是我的哥哥。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/nanshi/1_3.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_3.png"
      },
      "d": {
        "label": "...",
        "amis": "A: Cima kira vavahiyan? B: U kaka nu maku tu vavahiyan cira.",
        "chinese": "A: 那個女人是誰？ B: 她是我的姊姊。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/nanshi/1_4.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_4.png"
      },
      "e": {
        "label": "...",
        "amis": "A: U maan kiniyan? B: U edu’ kiniyan.",
        "chinese": "A: 這是什麼？ B: 這是老鼠。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/nanshi/1_5.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_5.png"
      },
      "f": {
        "label": "...",
        "amis": "A: U maan kiniyan? B: U rarapa kiniyan.",
        "chinese": "A: 這是什麼？ B: 這是牛。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/nanshi/1_6.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_6.png"
      },
      "g": {
        "label": "...",
        "amis": "A: U maan kiniyan? B: U tatakula’ kiniyan.",
        "chinese": "A: 這是什麼？ B: 這是青蛙。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/nanshi/1_7.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_7.png"
      },
      "h": {
        "label": "...",
        "amis": "A: U maan kiniyan? B: U tuul kiniyan.",
        "chinese": "A: 這是什麼？ B: 這是貓頭鷹。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/nanshi/1_8.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_8.png"
      },
      "i": {
        "label": "...",
        "amis": "A: U maan saw kiraan? B: U kilang kiraan.",
        "chinese": "A: 那是什麼呢？ B: 那是樹。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/nanshi/1_9.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_9.png"
      },
      "j": {
        "label": "...",
        "amis": "A: U maan saw kiraan? B: U varu kiraan.",
        "chinese": "A: 那是什麼呢？ B: 那是花。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/nanshi/1_10.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_10.png"
      },
      "o": {
        "label": "...",
        "amis": "A: U maan saw kiraan? B: U kama kiraan.",
        "chinese": "A: 那是什麼呢？ B: 那是橘子。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/nanshi/1_11.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_11.png"
      },
      "p": {
        "label": "...",
        "amis": "A: U maan saw kiraan? B: U taviras kiraan.",
        "chinese": "A: 那是什麼呢？ B: 那是玉米。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/nanshi/1_12.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_12.png"
      },
      "q": {
        "label": "...",
        "amis": "A: U maan saw kiraan? B: U sapad kiraan.",
        "chinese": "A: 那是什麼呢？ B: 那是桌子。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/nanshi/1_13.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_13.png"
      },
      "r": {
        "label": "...",
        "amis": "A: U maan saw kiraan? B: U pida kiraan.",
        "chinese": "A: 那是什麼呢？ B: 那是錢。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/nanshi/1_14.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_14.png"
      },
      "s": {
        "label": "...",
        "amis": "A: U maan saw kiraan? B: U tuper kiraan.",
        "chinese": "A: 那是什麼呢？ B: 那是帽子。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/nanshi/1_15.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_15.png"
      },
      "t": {
        "label": "...",
        "amis": "",
        "chinese": ""
      },
      "u": {
        "label": "...",
        "amis": "",
        "chinese": ""
      },
      "v": {
        "label": "...",
        "amis": "",
        "chinese": ""
      },
      "w": {
        "label": "...",
        "amis": "",
        "chinese": ""
      },
      "x": {
        "label": "...",
        "amis": "",
        "chinese": ""
      }
    },
    "恆春阿美語": {
      "a": {
        "label": "...",
        "amis": "A: Cima kora fa'inayan ? B: O singsi ako cingra.",
        "chinese": "A: 那個男人是誰？ B: 他是我的老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/hengchun/1_1.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_1.png"
      },
      "b": {
        "label": "...",
        "amis": "A: Cima kora fafahiyan ? B: O singsi ako cingra.",
        "chinese": "A: 那個女人是誰？ B: 她是我的老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/hengchun/1_2.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_2.png"
      },
      "c": {
        "label": "...",
        "amis": "A: Cima kora fa'inayan ? B: O fa'inayan a kaka ako cingra.",
        "chinese": "A: 那個男人是誰？ B: 他是我的哥哥。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/hengchun/1_3.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_3.png"
      },
      "d": {
        "label": "...",
        "amis": "A: Cima kora fafahiyan ? B: O fafahiyan a kaka ako cingra.",
        "chinese": "A: 那個女人是誰？ B: 她是我的姊姊。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/hengchun/1_4.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_4.png"
      },
      "e": {
        "label": "...",
        "amis": "A: O maan konian ? B: O ^edo konian.",
        "chinese": "A: 這是什麼？ B: 這是老鼠。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/hengchun/1_5.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_5.png"
      },
      "f": {
        "label": "...",
        "amis": "A: O maan konian? B: O kolong konian.",
        "chinese": "A: 這是什麼？ B: 這是牛。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/hengchun/1_6.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_6.png"
      },
      "g": {
        "label": "...",
        "amis": "A: O maan konian? B: O takora' konian.",
        "chinese": "A: 這是什麼？ B: 這是青蛙。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/hengchun/1_7.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_7.png"
      },
      "h": {
        "label": "...",
        "amis": "A: O maan konian? B: O ^ekong konian.",
        "chinese": "A: 這是什麼？ B: 這是貓頭鷹。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/hengchun/1_8.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_8.png"
      },
      "i": {
        "label": "...",
        "amis": "A: O maan koraan? B: O kilang koraan.",
        "chinese": "A: 那是什麼？ B: 那是樹。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/hengchun/1_9.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_9.png"
      },
      "j": {
        "label": "...",
        "amis": "A: O maan koraan? B: O hana koraan.",
        "chinese": "A: 那是什麼？ B: 那是花。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/hengchun/1_10.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_10.png"
      },
      "o": {
        "label": "...",
        "amis": "A: O maan koraan? B: O 'asilo koraan.",
        "chinese": "A: 那是什麼？ B: 那是橘子。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/hengchun/1_11.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_11.png"
      },
      "p": {
        "label": "...",
        "amis": "A: O maan koraan? B: O 'ariray koraan.",
        "chinese": "A: 那是什麼？ B: 那是玉米。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/hengchun/1_12.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_12.png"
      },
      "q": {
        "label": "...",
        "amis": "A: O maan koraan? B: O ^eto koraan.",
        "chinese": "A: 那是什麼？ B: 那是桌子。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/hengchun/1_13.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_13.png"
      },
      "r": {
        "label": "...",
        "amis": "A: O maan koraan? B: O payci koraan.",
        "chinese": "A: 那是什麼？ B: 那是錢。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/hengchun/1_14.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_14.png"
      },
      "s": {
        "label": "...",
        "amis": "A: O maan koraan? B: O kafong koraan",
        "chinese": "A: 那是什麼？ B: 那是帽子。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/hengchun/1_15.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_15.png"
      },
      "t": {
        "label": "...",
        "amis": "",
        "chinese": ""
      },
      "u": {
        "label": "...",
        "amis": "",
        "chinese": ""
      },
      "v": {
        "label": "...",
        "amis": "",
        "chinese": ""
      },
      "w": {
        "label": "...",
        "amis": "",
        "chinese": ""
      },
      "x": {
        "label": "...",
        "amis": "",
        "chinese": ""
      }
    },
    "海岸阿美語": {
      "a": {
        "label": "...",
        "amis": "A: Cima kora fa'inayan? B: O singsi ako cingra.",
        "chinese": "A: 那個男人是誰？ B: 他是我的老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/coast/1_1.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_1.png"
      },
      "b": {
        "label": "...",
        "amis": "A: Cima kora fafahiyan? B: O singsi ako cingra.",
        "chinese": "A: 那個女人是誰？ B: 她是我的老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/coast/1_2.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_2.png"
      },
      "c": {
        "label": "...",
        "amis": "A: Cima kora fa'inayan? B: O kaka ako cingra.",
        "chinese": "A: 那個男人是誰？ B: 他是我的哥哥。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/coast/1_3.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_3.png"
      },
      "d": {
        "label": "...",
        "amis": "A: Cima kora fafahiyan? B: O fafahiyan a kaka ako cingra.",
        "chinese": "A: 那個女人是誰？ B: 她是我的姊姊。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/coast/1_4.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_4.png"
      },
      "e": {
        "label": "...",
        "amis": "A: O maan koni? B: O 'edo koni.",
        "chinese": "A: 這是什麼？ B: 這是老鼠。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/coast/1_5.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_5.png"
      },
      "f": {
        "label": "...",
        "amis": "A: O maan koni? B: O kolong koni.",
        "chinese": "A: 這是什麼？ B: 這是牛。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/coast/1_6.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_6.png"
      },
      "g": {
        "label": "...",
        "amis": "A: O maan koni? B: O takola' koni.",
        "chinese": "A: 這是什麼？ B: 這是青蛙。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/coast/1_7.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_7.png"
      },
      "h": {
        "label": "...",
        "amis": "A: O maan koni? B: o ekong koni.",
        "chinese": "A: 這是什麼？ B: 這是貓頭鷹。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/coast/1_8.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_8.png"
      },
      "i": {
        "label": "...",
        "amis": "A: O maan kora? B: O kilang kora.",
        "chinese": "A: 那是什麼？ B: 那是樹。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/coast/1_9.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_9.png"
      },
      "j": {
        "label": "...",
        "amis": "A: O maan kora? B: O hana kora.",
        "chinese": "A: 那是什麼？ B: 那是花。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/coast/1_10.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_10.png"
      },
      "o": {
        "label": "...",
        "amis": "A: O maan kora? B: O mami' kora.",
        "chinese": "A: 那是什麼？ B: 那是橘子。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/coast/1_11.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_11.png"
      },
      "p": {
        "label": "...",
        "amis": "A: O maan kora? B: O 'ariray kora.",
        "chinese": "A: 那是什麼？ B: 那是玉米。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/coast/1_12.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_12.png"
      },
      "q": {
        "label": "...",
        "amis": "A: O maan kora? B: O parad kora.",
        "chinese": "A: 那是什麼？ B: 那是桌子。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/coast/1_13.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_13.png"
      },
      "r": {
        "label": "...",
        "amis": "A: O maan kora? B: O payso kora.",
        "chinese": "A: 那是什麼？ B: 那是錢。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/coast/1_14.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_14.png"
      },
      "s": {
        "label": "...",
        "amis": "A: O maan kora? B: O kafong kora.",
        "chinese": "A: 那是什麼？ B: 那是帽子。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/coast/1_15.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_15.png"
      },
      "t": {
        "label": "...",
        "amis": "",
        "chinese": ""
      },
      "u": {
        "label": "...",
        "amis": "",
        "chinese": ""
      },
      "v": {
        "label": "...",
        "amis": "",
        "chinese": ""
      },
      "w": {
        "label": "...",
        "amis": "",
        "chinese": ""
      },
      "x": {
        "label": "...",
        "amis": "",
        "chinese": ""
      }
    },
    "馬蘭阿美語": {
      "a": {
        "label": "...",
        "amis": "A: Cima kora fa'inayan? B: O singsi ako ko mira.",
        "chinese": "A: 那個男人是誰？ B: 他是我的老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/malan/1_1.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_1.png"
      },
      "b": {
        "label": "...",
        "amis": "A: Cima kora fafahiyan? B: O singsi ako ko mira.",
        "chinese": "A: 那個女人是誰？ B: 她是我的老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/malan/1_2.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_2.png"
      },
      "c": {
        "label": "...",
        "amis": "A: Cima kora fa'inayan? B: O fa'inayan a kaka ako ko mira.",
        "chinese": "A: 那個男人是誰？ B: 他是我的哥哥。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/malan/1_3.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_3.png"
      },
      "d": {
        "label": "...",
        "amis": "A: Cima kora fafahiyan? B: O fafahiyan a kaka ako ko mira.",
        "chinese": "A: 那個女人是誰？ B: 她是我的姊姊。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/malan/1_4.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_4.png"
      },
      "e": {
        "label": "...",
        "amis": "A: O maan koninian? B: O kacingcon koninian.",
        "chinese": "A: 這是什麼？ B: 這是老鼠。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/malan/1_5.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_5.png"
      },
      "f": {
        "label": "...",
        "amis": "A: O maan koninian? B: O kolong koninian.",
        "chinese": "A: 這是什麼？ B: 這是牛。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/malan/1_6.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_6.png"
      },
      "g": {
        "label": "...",
        "amis": "A: O maan koninian? B: O takora koninian.",
        "chinese": "A: 這是什麼？ B: 這是青蛙。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/malan/1_7.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_7.png"
      },
      "h": {
        "label": "...",
        "amis": "A: O maan koninian? B: O ekong koninian.",
        "chinese": "A: 這是什麼？ B: 這是貓頭鷹。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/malan/1_8.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_8.png"
      },
      "i": {
        "label": "...",
        "amis": "A: O maan koraan? B: O kilang koraan.",
        "chinese": "A: 那是什麼？ B: 那是樹。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/malan/1_9.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_9.png"
      },
      "j": {
        "label": "...",
        "amis": "A: O maan koraan? B: O falo koraan.",
        "chinese": "A: 那是什麼？ B: 那是花。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/malan/1_10.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_10.png"
      },
      "o": {
        "label": "...",
        "amis": "A: O maan koraan? B: O asiro koraan.",
        "chinese": "A: 那是什麼？ B: 那是橘子。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/malan/1_11.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_11.png"
      },
      "p": {
        "label": "...",
        "amis": "A: O maan koraan? B: O ariray koraan.",
        "chinese": "A: 那是什麼？ B: 那是玉米。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/malan/1_12.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_12.png"
      },
      "q": {
        "label": "...",
        "amis": "A: O maan koraan? B: O cokowi koraan.",
        "chinese": "A: 那是什麼？ B: 那是桌子。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/malan/1_13.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_13.png"
      },
      "r": {
        "label": "...",
        "amis": "A: O maan koraan? B: O payso koraan.",
        "chinese": "A: 那是什麼？ B: 那是錢。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/malan/1_14.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_14.png"
      },
      "s": {
        "label": "...",
        "amis": "A: O maan koraan? B: O kafong koraan.",
        "chinese": "A: 那是什麼？ B: 那是帽子。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/malan/1_15.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_15.png"
      },
      "t": {
        "label": "...",
        "amis": "",
        "chinese": ""
      },
      "u": {
        "label": "...",
        "amis": "",
        "chinese": ""
      },
      "v": {
        "label": "...",
        "amis": "",
        "chinese": ""
      },
      "w": {
        "label": "...",
        "amis": "",
        "chinese": ""
      },
      "x": {
        "label": "...",
        "amis": "",
        "chinese": ""
      }
    },
    "預設": {
      "a": {
        "label": "...",
        "amis": "A: Cima kora fa'inayan ? B: O singsi no mako ciira.",
        "chinese": "A: 那個男人是誰？ B: 他是我的老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_1.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_1.png"
      },
      "b": {
        "label": "...",
        "amis": "A: Cima kora fafahiyan ? B: O singsi no mako ciira.",
        "chinese": "A: 那個女人是誰？ B: 她是我的老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_2.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_2.png"
      },
      "c": {
        "label": "...",
        "amis": "A: Cima kora fa'inayan ? B: O kaka no mako ciira.",
        "chinese": "A: 那個男人是誰？ B: 他是我的哥哥。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_3.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_3.png"
      },
      "d": {
        "label": "...",
        "amis": "A: Cima kora fafahiyan ? B: O kaka no mako ciira.",
        "chinese": "A: 那個女人是誰？ B: 她是我的姊姊。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_4.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_4.png"
      },
      "e": {
        "label": "...",
        "amis": "A: O maan kinian ? B: O 'edo kinian.",
        "chinese": "A: 這是什麼？ B: 這是老鼠。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_5.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_5.png"
      },
      "f": {
        "label": "...",
        "amis": "A: O maan kinian ? B: O kolong kinian.",
        "chinese": "A: 這是什麼？ B: 這是牛。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_6.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_6.png"
      },
      "g": {
        "label": "...",
        "amis": "A: O maan kinian ? B: O takora' kinian.",
        "chinese": "A: 這是什麼？ B: 這是青蛙。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_7.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_7.png"
      },
      "h": {
        "label": "...",
        "amis": "A: O maan kinian ? B: O ekong kinian.",
        "chinese": "A: 這是什麼？ B: 這是貓頭鷹。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_8.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_8.png"
      },
      "i": {
        "label": "...",
        "amis": "A: O maan kiraan ? B: O kilang kiraan .",
        "chinese": "A: 那是什麼？ B: 那是樹。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_9.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_9.png"
      },
      "j": {
        "label": "...",
        "amis": "A: O maan kiraan ? B: O falo kiraan.",
        "chinese": "A: 那是什麼？ B: 那是花。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_10.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_10.png"
      },
      "o": {
        "label": "...",
        "amis": "A: O maan kiraan ? B: O mami' kiraan.",
        "chinese": "A: 那是什麼？ B: 那是橘子。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_11.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_11.png"
      },
      "p": {
        "label": "...",
        "amis": "A: O maan kiraan ? B: O 'ariray kiraan.",
        "chinese": "A: 那是什麼？ B: 那是玉米。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_12.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_12.png"
      },
      "q": {
        "label": "...",
        "amis": "A: O maan kiraan ? B: O sapad kiraan.",
        "chinese": "A: 那是什麼？ B: 那是桌子。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_13.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_13.png"
      },
      "r": {
        "label": "...",
        "amis": "A: O maan kiraan ? B: O pida kiraan.",
        "chinese": "A: 那是什麼？ B: 那是錢。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_14.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_14.png"
      },
      "s": {
        "label": "...",
        "amis": "A: O maan kiraan ? B: O kafong kiraan.",
        "chinese": "A: 那是什麼？ B: 那是帽子。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_15.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_15.png"
      },
      "t": {
        "label": "...",
        "amis": "",
        "chinese": ""
      },
      "u": {
        "label": "...",
        "amis": "",
        "chinese": ""
      },
      "v": {
        "label": "...",
        "amis": "",
        "chinese": ""
      },
      "w": {
        "label": "...",
        "amis": "",
        "chinese": ""
      },
      "x": {
        "label": "...",
        "amis": "",
        "chinese": ""
      }
    }
  },
  "sentences": [
    {
      "amis": "A: Cima kora fa'inayan ? B: O singsi no mako ciira.",
      "chinese": "A: 那個男人是誰？ B: 他是我的老師。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_1.mp3",
      "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_1.png"
    },
    {
      "amis": "A: Cima kora fafahiyan ? B: O singsi no mako ciira.",
      "chinese": "A: 那個女人是誰？ B: 她是我的老師。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_2.mp3",
      "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_2.png"
    },
    {
      "amis": "A: Cima kora fa'inayan ? B: O kaka no mako ciira.",
      "chinese": "A: 那個男人是誰？ B: 他是我的哥哥。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_3.mp3",
      "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_3.png"
    },
    {
      "amis": "A: Cima kora fafahiyan ? B: O kaka no mako ciira.",
      "chinese": "A: 那個女人是誰？ B: 她是我的姊姊。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_4.mp3",
      "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_4.png"
    },
    {
      "amis": "A: O maan kinian ? B: O 'edo kinian.",
      "chinese": "A: 這是什麼？ B: 這是老鼠。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_5.mp3",
      "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_5.png"
    },
    {
      "amis": "A: O maan kinian ? B: O kolong kinian.",
      "chinese": "A: 這是什麼？ B: 這是牛。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_6.mp3",
      "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_6.png"
    },
    {
      "amis": "A: O maan kinian ? B: O takora' kinian.",
      "chinese": "A: 這是什麼？ B: 這是青蛙。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_7.mp3",
      "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_7.png"
    },
    {
      "amis": "A: O maan kinian ? B: O ekong kinian.",
      "chinese": "A: 這是什麼？ B: 這是貓頭鷹。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_8.mp3",
      "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_8.png"
    },
    {
      "amis": "A: O maan kiraan ? B: O kilang kiraan .",
      "chinese": "A: 那是什麼？ B: 那是樹。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_9.mp3",
      "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_9.png"
    },
    {
      "amis": "A: O maan kiraan ? B: O falo kiraan.",
      "chinese": "A: 那是什麼？ B: 那是花。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_10.mp3",
      "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_10.png"
    },
    {
      "amis": "A: O maan kiraan ? B: O mami' kiraan.",
      "chinese": "A: 那是什麼？ B: 那是橘子。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_11.mp3",
      "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_11.png"
    },
    {
      "amis": "A: O maan kiraan ? B: O 'ariray kiraan.",
      "chinese": "A: 那是什麼？ B: 那是玉米。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_12.mp3",
      "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_12.png"
    },
    {
      "amis": "A: O maan kiraan ? B: O sapad kiraan.",
      "chinese": "A: 那是什麼？ B: 那是桌子。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_13.mp3",
      "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_13.png"
    },
    {
      "amis": "A: O maan kiraan ? B: O pida kiraan.",
      "chinese": "A: 那是什麼？ B: 那是錢。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_14.mp3",
      "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_14.png"
    },
    {
      "amis": "A: O maan kiraan ? B: O kafong kiraan.",
      "chinese": "A: 那是什麼？ B: 那是帽子。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_15.mp3",
      "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_15.png"
    }
  ],
  "sentencesByDialect": {
    "秀姑巒阿美語": [
      {
        "amis": "A: Cima kora fa'inayan ? B: O singsi no mako ciira.",
        "chinese": "A: 那個男人是誰？ B: 他是我的老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_1.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_1.png"
      },
      {
        "amis": "A: Cima kora fafahiyan ? B: O singsi no mako ciira.",
        "chinese": "A: 那個女人是誰？ B: 她是我的老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_2.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_2.png"
      },
      {
        "amis": "A: Cima kora fa'inayan ? B: O kaka no mako ciira.",
        "chinese": "A: 那個男人是誰？ B: 他是我的哥哥。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_3.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_3.png"
      },
      {
        "amis": "A: Cima kora fafahiyan ? B: O kaka no mako ciira.",
        "chinese": "A: 那個女人是誰？ B: 她是我的姊姊。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_4.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_4.png"
      },
      {
        "amis": "A: O maan kinian ? B: O 'edo kinian.",
        "chinese": "A: 這是什麼？ B: 這是老鼠。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_5.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_5.png"
      },
      {
        "amis": "A: O maan kinian ? B: O kolong kinian.",
        "chinese": "A: 這是什麼？ B: 這是牛。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_6.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_6.png"
      },
      {
        "amis": "A: O maan kinian ? B: O takora' kinian.",
        "chinese": "A: 這是什麼？ B: 這是青蛙。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_7.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_7.png"
      },
      {
        "amis": "A: O maan kinian ? B: O ekong kinian.",
        "chinese": "A: 這是什麼？ B: 這是貓頭鷹。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_8.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_8.png"
      },
      {
        "amis": "A: O maan kiraan ? B: O kilang kiraan .",
        "chinese": "A: 那是什麼？ B: 那是樹。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_9.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_9.png"
      },
      {
        "amis": "A: O maan kiraan ? B: O falo kiraan.",
        "chinese": "A: 那是什麼？ B: 那是花。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_10.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_10.png"
      },
      {
        "amis": "A: O maan kiraan ? B: O mami' kiraan.",
        "chinese": "A: 那是什麼？ B: 那是橘子。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_11.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_11.png"
      },
      {
        "amis": "A: O maan kiraan ? B: O 'ariray kiraan.",
        "chinese": "A: 那是什麼？ B: 那是玉米。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_12.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_12.png"
      },
      {
        "amis": "A: O maan kiraan ? B: O sapad kiraan.",
        "chinese": "A: 那是什麼？ B: 那是桌子。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_13.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_13.png"
      },
      {
        "amis": "A: O maan kiraan ? B: O pida kiraan.",
        "chinese": "A: 那是什麼？ B: 那是錢。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_14.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_14.png"
      },
      {
        "amis": "A: O maan kiraan ? B: O kafong kiraan.",
        "chinese": "A: 那是什麼？ B: 那是帽子。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_15.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_15.png"
      }
    ],
    "南勢阿美語": [
      {
        "amis": "A: Cima kira vavainayan? B: U pasevanaay nu maku cira.",
        "chinese": "A: 那個男人是誰？ B: 他是我的老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/nanshi/1_1.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_1.png"
      },
      {
        "amis": "A: Cima kira vavahiyan? B: U pasevanaay nu maku cira.",
        "chinese": "A: 那個女人是誰？ B: 她是我的老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/nanshi/1_2.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_2.png"
      },
      {
        "amis": "A: Cima kira vavainayan? B: U kaka nu maku tu vavainayan cira.",
        "chinese": "A: 那個男人是誰？ B: 他是我的哥哥。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/nanshi/1_3.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_3.png"
      },
      {
        "amis": "A: Cima kira vavahiyan? B: U kaka nu maku tu vavahiyan cira.",
        "chinese": "A: 那個女人是誰？ B: 她是我的姊姊。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/nanshi/1_4.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_4.png"
      },
      {
        "amis": "A: U maan kiniyan? B: U edu’ kiniyan.",
        "chinese": "A: 這是什麼？ B: 這是老鼠。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/nanshi/1_5.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_5.png"
      },
      {
        "amis": "A: U maan kiniyan? B: U rarapa kiniyan.",
        "chinese": "A: 這是什麼？ B: 這是牛。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/nanshi/1_6.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_6.png"
      },
      {
        "amis": "A: U maan kiniyan? B: U tatakula’ kiniyan.",
        "chinese": "A: 這是什麼？ B: 這是青蛙。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/nanshi/1_7.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_7.png"
      },
      {
        "amis": "A: U maan kiniyan? B: U tuul kiniyan.",
        "chinese": "A: 這是什麼？ B: 這是貓頭鷹。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/nanshi/1_8.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_8.png"
      },
      {
        "amis": "A: U maan saw kiraan? B: U kilang kiraan.",
        "chinese": "A: 那是什麼呢？ B: 那是樹。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/nanshi/1_9.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_9.png"
      },
      {
        "amis": "A: U maan saw kiraan? B: U varu kiraan.",
        "chinese": "A: 那是什麼呢？ B: 那是花。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/nanshi/1_10.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_10.png"
      },
      {
        "amis": "A: U maan saw kiraan? B: U kama kiraan.",
        "chinese": "A: 那是什麼呢？ B: 那是橘子。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/nanshi/1_11.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_11.png"
      },
      {
        "amis": "A: U maan saw kiraan? B: U taviras kiraan.",
        "chinese": "A: 那是什麼呢？ B: 那是玉米。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/nanshi/1_12.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_12.png"
      },
      {
        "amis": "A: U maan saw kiraan? B: U sapad kiraan.",
        "chinese": "A: 那是什麼呢？ B: 那是桌子。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/nanshi/1_13.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_13.png"
      },
      {
        "amis": "A: U maan saw kiraan? B: U pida kiraan.",
        "chinese": "A: 那是什麼呢？ B: 那是錢。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/nanshi/1_14.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_14.png"
      },
      {
        "amis": "A: U maan saw kiraan? B: U tuper kiraan.",
        "chinese": "A: 那是什麼呢？ B: 那是帽子。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/nanshi/1_15.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_15.png"
      }
    ],
    "恆春阿美語": [
      {
        "amis": "A: Cima kora fa'inayan ? B: O singsi ako cingra.",
        "chinese": "A: 那個男人是誰？ B: 他是我的老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/hengchun/1_1.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_1.png"
      },
      {
        "amis": "A: Cima kora fafahiyan ? B: O singsi ako cingra.",
        "chinese": "A: 那個女人是誰？ B: 她是我的老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/hengchun/1_2.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_2.png"
      },
      {
        "amis": "A: Cima kora fa'inayan ? B: O fa'inayan a kaka ako cingra.",
        "chinese": "A: 那個男人是誰？ B: 他是我的哥哥。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/hengchun/1_3.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_3.png"
      },
      {
        "amis": "A: Cima kora fafahiyan ? B: O fafahiyan a kaka ako cingra.",
        "chinese": "A: 那個女人是誰？ B: 她是我的姊姊。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/hengchun/1_4.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_4.png"
      },
      {
        "amis": "A: O maan konian ? B: O ^edo konian.",
        "chinese": "A: 這是什麼？ B: 這是老鼠。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/hengchun/1_5.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_5.png"
      },
      {
        "amis": "A: O maan konian? B: O kolong konian.",
        "chinese": "A: 這是什麼？ B: 這是牛。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/hengchun/1_6.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_6.png"
      },
      {
        "amis": "A: O maan konian? B: O takora' konian.",
        "chinese": "A: 這是什麼？ B: 這是青蛙。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/hengchun/1_7.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_7.png"
      },
      {
        "amis": "A: O maan konian? B: O ^ekong konian.",
        "chinese": "A: 這是什麼？ B: 這是貓頭鷹。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/hengchun/1_8.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_8.png"
      },
      {
        "amis": "A: O maan koraan? B: O kilang koraan.",
        "chinese": "A: 那是什麼？ B: 那是樹。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/hengchun/1_9.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_9.png"
      },
      {
        "amis": "A: O maan koraan? B: O hana koraan.",
        "chinese": "A: 那是什麼？ B: 那是花。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/hengchun/1_10.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_10.png"
      },
      {
        "amis": "A: O maan koraan? B: O 'asilo koraan.",
        "chinese": "A: 那是什麼？ B: 那是橘子。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/hengchun/1_11.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_11.png"
      },
      {
        "amis": "A: O maan koraan? B: O 'ariray koraan.",
        "chinese": "A: 那是什麼？ B: 那是玉米。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/hengchun/1_12.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_12.png"
      },
      {
        "amis": "A: O maan koraan? B: O ^eto koraan.",
        "chinese": "A: 那是什麼？ B: 那是桌子。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/hengchun/1_13.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_13.png"
      },
      {
        "amis": "A: O maan koraan? B: O payci koraan.",
        "chinese": "A: 那是什麼？ B: 那是錢。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/hengchun/1_14.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_14.png"
      },
      {
        "amis": "A: O maan koraan? B: O kafong koraan",
        "chinese": "A: 那是什麼？ B: 那是帽子。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/hengchun/1_15.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_15.png"
      }
    ],
    "海岸阿美語": [
      {
        "amis": "A: Cima kora fa'inayan? B: O singsi ako cingra.",
        "chinese": "A: 那個男人是誰？ B: 他是我的老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/coast/1_1.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_1.png"
      },
      {
        "amis": "A: Cima kora fafahiyan? B: O singsi ako cingra.",
        "chinese": "A: 那個女人是誰？ B: 她是我的老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/coast/1_2.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_2.png"
      },
      {
        "amis": "A: Cima kora fa'inayan? B: O kaka ako cingra.",
        "chinese": "A: 那個男人是誰？ B: 他是我的哥哥。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/coast/1_3.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_3.png"
      },
      {
        "amis": "A: Cima kora fafahiyan? B: O fafahiyan a kaka ako cingra.",
        "chinese": "A: 那個女人是誰？ B: 她是我的姊姊。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/coast/1_4.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_4.png"
      },
      {
        "amis": "A: O maan koni? B: O 'edo koni.",
        "chinese": "A: 這是什麼？ B: 這是老鼠。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/coast/1_5.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_5.png"
      },
      {
        "amis": "A: O maan koni? B: O kolong koni.",
        "chinese": "A: 這是什麼？ B: 這是牛。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/coast/1_6.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_6.png"
      },
      {
        "amis": "A: O maan koni? B: O takola' koni.",
        "chinese": "A: 這是什麼？ B: 這是青蛙。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/coast/1_7.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_7.png"
      },
      {
        "amis": "A: O maan koni? B: o ekong koni.",
        "chinese": "A: 這是什麼？ B: 這是貓頭鷹。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/coast/1_8.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_8.png"
      },
      {
        "amis": "A: O maan kora? B: O kilang kora.",
        "chinese": "A: 那是什麼？ B: 那是樹。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/coast/1_9.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_9.png"
      },
      {
        "amis": "A: O maan kora? B: O hana kora.",
        "chinese": "A: 那是什麼？ B: 那是花。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/coast/1_10.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_10.png"
      },
      {
        "amis": "A: O maan kora? B: O mami' kora.",
        "chinese": "A: 那是什麼？ B: 那是橘子。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/coast/1_11.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_11.png"
      },
      {
        "amis": "A: O maan kora? B: O 'ariray kora.",
        "chinese": "A: 那是什麼？ B: 那是玉米。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/coast/1_12.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_12.png"
      },
      {
        "amis": "A: O maan kora? B: O parad kora.",
        "chinese": "A: 那是什麼？ B: 那是桌子。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/coast/1_13.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_13.png"
      },
      {
        "amis": "A: O maan kora? B: O payso kora.",
        "chinese": "A: 那是什麼？ B: 那是錢。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/coast/1_14.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_14.png"
      },
      {
        "amis": "A: O maan kora? B: O kafong kora.",
        "chinese": "A: 那是什麼？ B: 那是帽子。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/coast/1_15.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_15.png"
      }
    ],
    "馬蘭阿美語": [
      {
        "amis": "A: Cima kora fa'inayan? B: O singsi ako ko mira.",
        "chinese": "A: 那個男人是誰？ B: 他是我的老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/malan/1_1.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_1.png"
      },
      {
        "amis": "A: Cima kora fafahiyan? B: O singsi ako ko mira.",
        "chinese": "A: 那個女人是誰？ B: 她是我的老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/malan/1_2.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_2.png"
      },
      {
        "amis": "A: Cima kora fa'inayan? B: O fa'inayan a kaka ako ko mira.",
        "chinese": "A: 那個男人是誰？ B: 他是我的哥哥。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/malan/1_3.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_3.png"
      },
      {
        "amis": "A: Cima kora fafahiyan? B: O fafahiyan a kaka ako ko mira.",
        "chinese": "A: 那個女人是誰？ B: 她是我的姊姊。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/malan/1_4.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_4.png"
      },
      {
        "amis": "A: O maan koninian? B: O kacingcon koninian.",
        "chinese": "A: 這是什麼？ B: 這是老鼠。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/malan/1_5.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_5.png"
      },
      {
        "amis": "A: O maan koninian? B: O kolong koninian.",
        "chinese": "A: 這是什麼？ B: 這是牛。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/malan/1_6.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_6.png"
      },
      {
        "amis": "A: O maan koninian? B: O takora koninian.",
        "chinese": "A: 這是什麼？ B: 這是青蛙。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/malan/1_7.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_7.png"
      },
      {
        "amis": "A: O maan koninian? B: O ekong koninian.",
        "chinese": "A: 這是什麼？ B: 這是貓頭鷹。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/malan/1_8.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_8.png"
      },
      {
        "amis": "A: O maan koraan? B: O kilang koraan.",
        "chinese": "A: 那是什麼？ B: 那是樹。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/malan/1_9.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_9.png"
      },
      {
        "amis": "A: O maan koraan? B: O falo koraan.",
        "chinese": "A: 那是什麼？ B: 那是花。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/malan/1_10.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_10.png"
      },
      {
        "amis": "A: O maan koraan? B: O asiro koraan.",
        "chinese": "A: 那是什麼？ B: 那是橘子。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/malan/1_11.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_11.png"
      },
      {
        "amis": "A: O maan koraan? B: O ariray koraan.",
        "chinese": "A: 那是什麼？ B: 那是玉米。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/malan/1_12.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_12.png"
      },
      {
        "amis": "A: O maan koraan? B: O cokowi koraan.",
        "chinese": "A: 那是什麼？ B: 那是桌子。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/malan/1_13.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_13.png"
      },
      {
        "amis": "A: O maan koraan? B: O payso koraan.",
        "chinese": "A: 那是什麼？ B: 那是錢。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/malan/1_14.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_14.png"
      },
      {
        "amis": "A: O maan koraan? B: O kafong koraan.",
        "chinese": "A: 那是什麼？ B: 那是帽子。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/malan/1_15.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_15.png"
      }
    ],
    "預設": [
      {
        "amis": "A: Cima kora fa'inayan ? B: O singsi no mako ciira.",
        "chinese": "A: 那個男人是誰？ B: 他是我的老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_1.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_1.png"
      },
      {
        "amis": "A: Cima kora fafahiyan ? B: O singsi no mako ciira.",
        "chinese": "A: 那個女人是誰？ B: 她是我的老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_2.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_2.png"
      },
      {
        "amis": "A: Cima kora fa'inayan ? B: O kaka no mako ciira.",
        "chinese": "A: 那個男人是誰？ B: 他是我的哥哥。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_3.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_3.png"
      },
      {
        "amis": "A: Cima kora fafahiyan ? B: O kaka no mako ciira.",
        "chinese": "A: 那個女人是誰？ B: 她是我的姊姊。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_4.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_4.png"
      },
      {
        "amis": "A: O maan kinian ? B: O 'edo kinian.",
        "chinese": "A: 這是什麼？ B: 這是老鼠。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_5.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_5.png"
      },
      {
        "amis": "A: O maan kinian ? B: O kolong kinian.",
        "chinese": "A: 這是什麼？ B: 這是牛。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_6.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_6.png"
      },
      {
        "amis": "A: O maan kinian ? B: O takora' kinian.",
        "chinese": "A: 這是什麼？ B: 這是青蛙。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_7.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_7.png"
      },
      {
        "amis": "A: O maan kinian ? B: O ekong kinian.",
        "chinese": "A: 這是什麼？ B: 這是貓頭鷹。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_8.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_8.png"
      },
      {
        "amis": "A: O maan kiraan ? B: O kilang kiraan .",
        "chinese": "A: 那是什麼？ B: 那是樹。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_9.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_9.png"
      },
      {
        "amis": "A: O maan kiraan ? B: O falo kiraan.",
        "chinese": "A: 那是什麼？ B: 那是花。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_10.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_10.png"
      },
      {
        "amis": "A: O maan kiraan ? B: O mami' kiraan.",
        "chinese": "A: 那是什麼？ B: 那是橘子。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_11.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_11.png"
      },
      {
        "amis": "A: O maan kiraan ? B: O 'ariray kiraan.",
        "chinese": "A: 那是什麼？ B: 那是玉米。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_12.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_12.png"
      },
      {
        "amis": "A: O maan kiraan ? B: O sapad kiraan.",
        "chinese": "A: 那是什麼？ B: 那是桌子。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_13.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_13.png"
      },
      {
        "amis": "A: O maan kiraan ? B: O pida kiraan.",
        "chinese": "A: 那是什麼？ B: 那是錢。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_14.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_14.png"
      },
      {
        "amis": "A: O maan kiraan ? B: O kafong kiraan.",
        "chinese": "A: 那是什麼？ B: 那是帽子。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/choice_one/info_relation_animals_objects/xiuguluan/1_15.mp3",
        "image": "https://klokah.tw/extension/sp_senior/graphics_100x100/choiceOne/1_15.png"
      }
    ]
  },
  "dicePrompts": [
    "請念出句子",
    "請翻譯成中文",
    "閉上眼睛念一遍",
    "用快樂的語氣念",
    "用生氣的語氣念",
    "大聲念三遍"
  ]
}
,
"topic18": {
  "id": "topic18",
  "title": "全阿美版-生活百句_否定句_5_1到5_27",
  "gridData": {
    "a": {
      "label": "...",
      "amis": "A: O ekong kiraan haw ? B: Caay, caayay ko ekong kiraan.",
      "chinese": "A: 那是貓頭鷹嗎？ B: 不，那不是貓頭鷹。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_1.mp3",
      "image": ""
    },
    "b": {
      "label": "...",
      "amis": "A: O singsi ciira haw ? B: Caay, caay ko singsi ciira.",
      "chinese": "A: 他是老師嗎？ B: 不，他不是老師。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_2.mp3",
      "image": ""
    },
    "c": {
      "label": "...",
      "amis": "A: O singsi no miso ciira haw ? B: Caay, caay ko singsi no mako ciira.",
      "chinese": "A: 她是你的老師嗎？ B: 不，她不是我的老師。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_3.mp3",
      "image": ""
    },
    "d": {
      "label": "...",
      "amis": "A: O kahengangay ko fodoy nira haw ? B: Caay, caayay ko kahengangay ko fodoy nira.",
      "chinese": "A: 她的衣服是紅色的嗎？ B: 不，她的衣服不是紅色的。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_4.mp3",
      "image": ""
    },
    "e": {
      "label": "...",
      "amis": "A: Kareteng kora a ’anengang haw ? B: Caay, caay ka kareteng kora ’anengang.",
      "chinese": "A: 那張椅子很重嗎？ B: 不，那張椅子不重。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_5.mp3",
      "image": ""
    },
    "f": {
      "label": "...",
      "amis": "A: Takaraw ci ina no miso haw ? B: Caay, caay ka takaraw ciira.",
      "chinese": "A: 你媽媽很高嗎？ B: 不，我媽媽不高。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_6.mp3",
      "image": ""
    },
    "g": {
      "label": "...",
      "amis": "A: Kakaya’ ko fokes no miso haw ? B: Caay, caay ka kakaya’ ko fokes no mako .",
      "chinese": "A: 你的頭髮很長嗎？ B: 不，我的頭髮不長。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_7.mp3",
      "image": ""
    },
    "h": {
      "label": "...",
      "amis": "A: Malalok kora tamdaw haw ? B: Caay, caay kalalok ciira .",
      "chinese": "A: 那個人很勤勞嗎？ B: 不，他不勤勞。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_8.mp3",
      "image": ""
    },
    "i": {
      "label": "...",
      "amis": "A: Ira ko fa’inayan a safa no miso haw ? B: Awaay, awaay ko fa’inayan a safa no mako.",
      "chinese": "A: 你有弟弟嗎？ B: 不，我沒有弟弟。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_9.mp3",
      "image": ""
    },
    "j": {
      "label": "...",
      "amis": "A: Tata’ak kora loma’ haw ? B: Caay, caay ka tata’ak kora loma’.",
      "chinese": "A: 那間房子很大嗎？ B: 不，那間房子不大。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_10.mp3",
      "image": ""
    },
    "o": {
      "label": "...",
      "amis": "A: Faedet ko romi’ad anini haw ? B: Caay, caay ka faedet anini.",
      "chinese": "A: 今天熱嗎？ B: 不，今天不熱。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_11.mp3",
      "image": ""
    },
    "p": {
      "label": "...",
      "amis": "A: Minengneng caira to tilifi to romi’ami’ad haw ? B: Caay, caay pinengneng caira to tilifi to romi’ami’ad .",
      "chinese": "A: 他們天天看電視嗎？ B: 不，他們沒有天天看電視。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_12.mp3",
      "image": ""
    },
    "q": {
      "label": "...",
      "amis": "A: Miasip kiso to codad to romi’ami’ad haw ? B: Caay, caay piasip kako to codad to romi’ami’ad.",
      "chinese": "A: 你天天讀書嗎？ B: 不，我沒有天天讀書。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_13.mp3",
      "image": ""
    },
    "r": {
      "label": "...",
      "amis": "A: Miasipay kiso to codad haw ? B: Caay, caayay piasip kako to codad .",
      "chinese": "A: 你在讀書嗎？ B: 不，我沒有在讀書。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_14.mp3",
      "image": ""
    },
    "s": {
      "label": "...",
      "amis": "A: Ma’oraday to ! cilinay kiso haw ? B: Caay, caay ka cilinay kako .",
      "chinese": "A: 下雨了！你帶著雨傘嗎？ B: 不，我沒帶著雨傘。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_15.mp3",
      "image": ""
    },
    "t": {
      "label": "...",
      "amis": "A: Ma’oraday haw ? B: Caay, caay ka ’orad !",
      "chinese": "A: 在下雨嗎？ B: 不，沒有在下雨！",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_16.mp3",
      "image": ""
    },
    "u": {
      "label": "...",
      "amis": "A: Maolah ciira tora codad haw ? B: Caay, caay kaolah ciira tora codad.",
      "chinese": "A: 她喜歡那本書嗎？ B: 不，她不喜歡那本書。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_17.mp3",
      "image": ""
    },
    "v": {
      "label": "...",
      "amis": "A: Ma’ilol kiso ci amaan haw ? B: Hay, tadama’ilol kako ci amaan.",
      "chinese": "A: 你很想念祖母嗎？ B: 是，我很想念祖母。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_18.mp3",
      "image": ""
    },
    "w": {
      "label": "...",
      "amis": "A: Tayni kamo i tini a malafi to romi’ami’ad haw ? B: Caay, caay katayni kami a malafi to romi’ami’ad.",
      "chinese": "A: 你們天天來這裡吃晚餐嗎？ B: 不，我們沒有天天來這裡吃晚餐。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_19.mp3",
      "image": ""
    },
    "x": {
      "label": "...",
      "amis": "A: Maolah kora wawa mirenaf haw ? B: Caay, caay kaolah ciira mirenaf .",
      "chinese": "A: 那個孩子喜歡畫圖嗎？ B: 不，他不喜歡畫圖。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_20.mp3",
      "image": ""
    }
  },
  "gridDataByDialect": {
    "秀姑巒阿美語": {
      "a": {
        "label": "...",
        "amis": "A: O ekong kiraan haw ? B: Caay, caayay ko ekong kiraan.",
        "chinese": "A: 那是貓頭鷹嗎？ B: 不，那不是貓頭鷹。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_1.mp3",
        "image": ""
      },
      "b": {
        "label": "...",
        "amis": "A: O singsi ciira haw ? B: Caay, caay ko singsi ciira.",
        "chinese": "A: 他是老師嗎？ B: 不，他不是老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_2.mp3",
        "image": ""
      },
      "c": {
        "label": "...",
        "amis": "A: O singsi no miso ciira haw ? B: Caay, caay ko singsi no mako ciira.",
        "chinese": "A: 她是你的老師嗎？ B: 不，她不是我的老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_3.mp3",
        "image": ""
      },
      "d": {
        "label": "...",
        "amis": "A: O kahengangay ko fodoy nira haw ? B: Caay, caayay ko kahengangay ko fodoy nira.",
        "chinese": "A: 她的衣服是紅色的嗎？ B: 不，她的衣服不是紅色的。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_4.mp3",
        "image": ""
      },
      "e": {
        "label": "...",
        "amis": "A: Kareteng kora a ’anengang haw ? B: Caay, caay ka kareteng kora ’anengang.",
        "chinese": "A: 那張椅子很重嗎？ B: 不，那張椅子不重。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_5.mp3",
        "image": ""
      },
      "f": {
        "label": "...",
        "amis": "A: Takaraw ci ina no miso haw ? B: Caay, caay ka takaraw ciira.",
        "chinese": "A: 你媽媽很高嗎？ B: 不，我媽媽不高。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_6.mp3",
        "image": ""
      },
      "g": {
        "label": "...",
        "amis": "A: Kakaya’ ko fokes no miso haw ? B: Caay, caay ka kakaya’ ko fokes no mako .",
        "chinese": "A: 你的頭髮很長嗎？ B: 不，我的頭髮不長。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_7.mp3",
        "image": ""
      },
      "h": {
        "label": "...",
        "amis": "A: Malalok kora tamdaw haw ? B: Caay, caay kalalok ciira .",
        "chinese": "A: 那個人很勤勞嗎？ B: 不，他不勤勞。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_8.mp3",
        "image": ""
      },
      "i": {
        "label": "...",
        "amis": "A: Ira ko fa’inayan a safa no miso haw ? B: Awaay, awaay ko fa’inayan a safa no mako.",
        "chinese": "A: 你有弟弟嗎？ B: 不，我沒有弟弟。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_9.mp3",
        "image": ""
      },
      "j": {
        "label": "...",
        "amis": "A: Tata’ak kora loma’ haw ? B: Caay, caay ka tata’ak kora loma’.",
        "chinese": "A: 那間房子很大嗎？ B: 不，那間房子不大。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_10.mp3",
        "image": ""
      },
      "o": {
        "label": "...",
        "amis": "A: Faedet ko romi’ad anini haw ? B: Caay, caay ka faedet anini.",
        "chinese": "A: 今天熱嗎？ B: 不，今天不熱。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_11.mp3",
        "image": ""
      },
      "p": {
        "label": "...",
        "amis": "A: Minengneng caira to tilifi to romi’ami’ad haw ? B: Caay, caay pinengneng caira to tilifi to romi’ami’ad .",
        "chinese": "A: 他們天天看電視嗎？ B: 不，他們沒有天天看電視。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_12.mp3",
        "image": ""
      },
      "q": {
        "label": "...",
        "amis": "A: Miasip kiso to codad to romi’ami’ad haw ? B: Caay, caay piasip kako to codad to romi’ami’ad.",
        "chinese": "A: 你天天讀書嗎？ B: 不，我沒有天天讀書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_13.mp3",
        "image": ""
      },
      "r": {
        "label": "...",
        "amis": "A: Miasipay kiso to codad haw ? B: Caay, caayay piasip kako to codad .",
        "chinese": "A: 你在讀書嗎？ B: 不，我沒有在讀書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_14.mp3",
        "image": ""
      },
      "s": {
        "label": "...",
        "amis": "A: Ma’oraday to ! cilinay kiso haw ? B: Caay, caay ka cilinay kako .",
        "chinese": "A: 下雨了！你帶著雨傘嗎？ B: 不，我沒帶著雨傘。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_15.mp3",
        "image": ""
      },
      "t": {
        "label": "...",
        "amis": "A: Ma’oraday haw ? B: Caay, caay ka ’orad !",
        "chinese": "A: 在下雨嗎？ B: 不，沒有在下雨！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_16.mp3",
        "image": ""
      },
      "u": {
        "label": "...",
        "amis": "A: Maolah ciira tora codad haw ? B: Caay, caay kaolah ciira tora codad.",
        "chinese": "A: 她喜歡那本書嗎？ B: 不，她不喜歡那本書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_17.mp3",
        "image": ""
      },
      "v": {
        "label": "...",
        "amis": "A: Ma’ilol kiso ci amaan haw ? B: Hay, tadama’ilol kako ci amaan.",
        "chinese": "A: 你很想念祖母嗎？ B: 是，我很想念祖母。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_18.mp3",
        "image": ""
      },
      "w": {
        "label": "...",
        "amis": "A: Tayni kamo i tini a malafi to romi’ami’ad haw ? B: Caay, caay katayni kami a malafi to romi’ami’ad.",
        "chinese": "A: 你們天天來這裡吃晚餐嗎？ B: 不，我們沒有天天來這裡吃晚餐。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_19.mp3",
        "image": ""
      },
      "x": {
        "label": "...",
        "amis": "A: Maolah kora wawa mirenaf haw ? B: Caay, caay kaolah ciira mirenaf .",
        "chinese": "A: 那個孩子喜歡畫圖嗎？ B: 不，他不喜歡畫圖。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_20.mp3",
        "image": ""
      }
    },
    "南勢阿美語": {
      "a": {
        "label": "...",
        "amis": "A: U tuul haw kiraan? B: Caay,caay kaw tuul kiraan.",
        "chinese": "A: 那是貓頭鷹嗎？ B: 不，那不是貓頭鷹。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/nanshi/5_1.mp3",
        "image": ""
      },
      "b": {
        "label": "...",
        "amis": "A: U pasevanaay haw cira? B: Caay,caay kaw pasevanaay cira.",
        "chinese": "A: 他是老師嗎？ B: 不，他不是老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/nanshi/5_2.mp3",
        "image": ""
      },
      "c": {
        "label": "...",
        "amis": "A: U pasevanaay haw nu misu cira? B: Caay,caay kaw pasevanaay nu maku cira.",
        "chinese": "A: 她是你的老師嗎？ B: 不，她不是我的老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/nanshi/5_3.mp3",
        "image": ""
      },
      "d": {
        "label": "...",
        "amis": "A: U lahengangay haw ku vuduy nu nira? B: Caay,caay kaw lahengangay ku vuduy nu nira.",
        "chinese": "A: 她的衣服是紅色的嗎？ B: 不，她的衣服不是紅色的。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/nanshi/5_4.mp3",
        "image": ""
      },
      "e": {
        "label": "...",
        "amis": "A: Vaeket haw kira elun? B: Caay,caay kavaeket kira elun.",
        "chinese": "A: 那張椅子很重嗎？ B: 不，那張椅子不重。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/nanshi/5_5.mp3",
        "image": ""
      },
      "f": {
        "label": "...",
        "amis": "A: Tarakaw haw ku wina nu misu? B: Caay,caay katarakaw ku wina nu maku.",
        "chinese": "A: 你媽媽很高嗎？ B: 不，我媽媽不高。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/nanshi/5_6.mp3",
        "image": ""
      },
      "g": {
        "label": "...",
        "amis": "A: Raraya’ haw ku vukes nu misu? B: Caay,caay kararaya ku vukes nu maku.",
        "chinese": "A: 你的頭髮很長嗎？ B: 不，我的頭髮不長。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/nanshi/5_7.mp3",
        "image": ""
      },
      "h": {
        "label": "...",
        "amis": "A: Malaluk haw kira tamdaw? B: Caay,caay kalaluk cira.",
        "chinese": "A: 那個人很勤勞嗎？ B: 不，他不勤勞。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/nanshi/5_8.mp3",
        "image": ""
      },
      "i": {
        "label": "...",
        "amis": "A: Ira haw ku sava nu misu tu vavainayan? B: Awaay,awaay ku sava nu maku tu vavainayan .",
        "chinese": "A: 你有弟弟嗎？ B: 不，我沒有弟弟。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/nanshi/5_9.mp3",
        "image": ""
      },
      "j": {
        "label": "...",
        "amis": "A: Tataak haw kira luma’? B: Caay,caay katataak kira luma’.",
        "chinese": "A: 那間房子很大嗎？ B: 不，那間房子不大。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/nanshi/5_10.mp3",
        "image": ""
      },
      "o": {
        "label": "...",
        "amis": "A: Caledes haw anini? B: Caay,caay kacaledes anini.",
        "chinese": "A: 今天熱嗎？ B: 不，今天不熱。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/nanshi/5_11.mp3",
        "image": ""
      },
      "p": {
        "label": "...",
        "amis": "A: Saremiremiad sa haw a mimelaw tu tilivi ku heni? B: Caay,caay kasaremiremiad sa a mimelaw tu tilivi ku heni.",
        "chinese": "A: 他們天天看電視嗎？ B: 不，他們沒有天天看電視。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/nanshi/5_12.mp3",
        "image": ""
      },
      "q": {
        "label": "...",
        "amis": "A: Saremiremiad sa haw kisu a micudad? B: Caay,caay kasaremiremiad sa kaku a micudad.",
        "chinese": "A: 你天天讀書嗎？ B: 不，我沒有天天讀書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/nanshi/5_13.mp3",
        "image": ""
      },
      "r": {
        "label": "...",
        "amis": "A: Mimelaw haw kisu tu cudad? B: Caay,caay pimelaw kaku tu cudad.",
        "chinese": "A: 你在讀書嗎？ B: 不，我沒有在讀書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/nanshi/5_14.mp3",
        "image": ""
      },
      "s": {
        "label": "...",
        "amis": "A: Maurad tu！Sicacevaren haw kisu? B: Caay,caay kasicacevaren kaku.",
        "chinese": "A: 下雨了！你帶著雨傘嗎？ B: 不，我沒帶著雨傘。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/nanshi/5_15.mp3",
        "image": ""
      },
      "t": {
        "label": "...",
        "amis": "A: Maurad tu haw? B: Caay,caay tu kaurad!",
        "chinese": "A: 在下雨嗎？ B: 不，沒有在下雨！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/nanshi/5_16.mp3",
        "image": ""
      },
      "u": {
        "label": "...",
        "amis": "A: Maulah haw cira tira cudadan? B: Caay,caay kaulah cira tira cudadan.",
        "chinese": "A: 她喜歡那本書嗎？ B: 不，她不喜歡那本書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/nanshi/5_17.mp3",
        "image": ""
      },
      "v": {
        "label": "...",
        "amis": "A: Maurun haw kisu tu vayi? B: Hay,maurun kaku tu vayi.",
        "chinese": "A: 你很想念祖母嗎？ B: 是，我很想念祖母。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/nanshi/5_18.mp3",
        "image": ""
      },
      "w": {
        "label": "...",
        "amis": "A: Saremiremiad sa haw kamu a malavi’ itini? B: Caay,caay kasaremiremiad sa kami a malavi’ itini.",
        "chinese": "A: 你們天天來這裡吃晚餐嗎？ B: 不，我們沒有天天來這裡吃晚餐。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/nanshi/5_19.mp3",
        "image": ""
      },
      "x": {
        "label": "...",
        "amis": "A: Maulah haw a mikulit kira wawa? B: Caay,caay kaulah a mikulit kira wawa.",
        "chinese": "A: 那個孩子喜歡畫圖嗎？ B: 不，他不喜歡畫圖。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/nanshi/5_20.mp3",
        "image": ""
      }
    },
    "恆春阿美語": {
      "a": {
        "label": "...",
        "amis": "A: O ^ekong koriraan haw? B: Cowa, cowa ko ^ekong kora.",
        "chinese": "A: 那是貓頭鷹嗎？ B: 不，那不是貓頭鷹。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/hengchun/5_1.mp3",
        "image": ""
      },
      "b": {
        "label": "...",
        "amis": "A: O singsi cingra haw? B: Cowa,cowa ko singsi cingra.",
        "chinese": "A: 他是老師嗎？ B: 不，他不是老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/hengchun/5_2.mp3",
        "image": ""
      },
      "c": {
        "label": "...",
        "amis": "A: O singsi iso cingra haw? B: Cowa, cowa ko singsi ako cingra.",
        "chinese": "A: 她是你的老師嗎？ B: 不，她不是我的老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/hengchun/5_3.mp3",
        "image": ""
      },
      "d": {
        "label": "...",
        "amis": "A: O kahengangay ko riko’ ningra haw? B: Cowa, cowa ko kahengangay ko riko’ ningra.",
        "chinese": "A: 她的衣服是紅色的嗎？ B: 不，她的衣服不是紅色的。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/hengchun/5_4.mp3",
        "image": ""
      },
      "e": {
        "label": "...",
        "amis": "A: Kaletengay kora ’axenan haw? B: Cowa, cowa ka kaleteng kora ’axenan.",
        "chinese": "A: 那張椅子很重嗎？ B: 不，那張椅子不重。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/hengchun/5_5.mp3",
        "image": ""
      },
      "f": {
        "label": "...",
        "amis": "A: ’Akawangay ko wina iso haw? B: Cowa, cowa ka ’akawang cingra.",
        "chinese": "A: 你媽媽很高嗎？ B: 不，我媽媽不高。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/hengchun/5_6.mp3",
        "image": ""
      },
      "g": {
        "label": "...",
        "amis": "A: Ki’edaway ko fokes no miso haw? B: Cowa, cowa ka ki’edaw ko fokes ako.",
        "chinese": "A: 你的頭髮很長嗎？ B: 不，我的頭髮不長。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/hengchun/5_7.mp3",
        "image": ""
      },
      "h": {
        "label": "...",
        "amis": "A: Malalokay kora tamdaw haw? B: Cowa,cowa ka lalok cingra.",
        "chinese": "A: 那個人很勤勞嗎？ B: 不，他不勤勞。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/hengchun/5_8.mp3",
        "image": ""
      },
      "i": {
        "label": "...",
        "amis": "A: Iraay ko fa’inayan a safa iso haw? B: Cowa, awaay ko fa’inayan a safa ako.",
        "chinese": "A: 你有弟弟嗎？ B: 不，我沒有弟弟。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/hengchun/5_9.mp3",
        "image": ""
      },
      "j": {
        "label": "...",
        "amis": "A: Ta’angayay kora loma’ haw? B: Cowa, cowa kata’angay kora loma’.",
        "chinese": "A: 那間房子很大嗎？ B: 不，那間房子不大。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/hengchun/5_10.mp3",
        "image": ""
      },
      "o": {
        "label": "...",
        "amis": "A: Fa^edet anini haw? B: Cowa, cowa kafa^edet anini.",
        "chinese": "A: 今天熱嗎？ B: 不，今天不熱。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/hengchun/5_11.mp3",
        "image": ""
      },
      "p": {
        "label": "...",
        "amis": "A: Minengneng to tilifi cangra to romi’ami’ad haw? B: Cowa, cowa pinengneng to tilifi cangra to romi’ami’ad",
        "chinese": "A: 他們天天看電視嗎？ B: 不，他們沒有天天看電視。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/hengchun/5_12.mp3",
        "image": ""
      },
      "q": {
        "label": "...",
        "amis": "A: Mitiliday kiso to romi’ami’ad haw? B: Cowa,cowa pitilid kako to romi’ami’ad.",
        "chinese": "A: 你天天讀書嗎？ B: 不，我沒有天天讀書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/hengchun/5_13.mp3",
        "image": ""
      },
      "r": {
        "label": "...",
        "amis": "A: Mitiliday kiso haw? B: Cowa, cowa pitilid kako.",
        "chinese": "A: 你在讀書嗎？ B: 不，我沒有在讀書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/hengchun/5_14.mp3",
        "image": ""
      },
      "s": {
        "label": "...",
        "amis": "A: Ma’oraday to！ cidinayay kiso haw? B: Cowa, cowa kacidinay kako.",
        "chinese": "A: 下雨了！你帶著雨傘嗎？ B: 不，我沒帶著雨傘。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/hengchun/5_15.mp3",
        "image": ""
      },
      "t": {
        "label": "...",
        "amis": "A: Ma’oraday ho haw? B: Cowa, awaay to ko’orad ano hatini.",
        "chinese": "A: 在下雨嗎？ B: 不，沒有在下雨！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/hengchun/5_16.mp3",
        "image": ""
      },
      "u": {
        "label": "...",
        "amis": "A: Maolahay cingra tora tilid haw? B: Cowa,cowa kaolah cingra tora tilid.",
        "chinese": "A: 她喜歡那本書嗎？ B: 不，她不喜歡那本書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/hengchun/5_17.mp3",
        "image": ""
      },
      "v": {
        "label": "...",
        "amis": "A: Ma’ilolay kiso ci fofoan haw? B: Hay, ma’ilolay kako ci fofoan.",
        "chinese": "A: 你很想念祖母嗎？ B: 是，我很想念祖母。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/hengchun/5_18.mp3",
        "image": ""
      },
      "w": {
        "label": "...",
        "amis": "A: Tayniay kamo to romi’ami’ad a malafi haw? B: Cowa, cowa katayni kami to romo’ami’ad a malafi .",
        "chinese": "A: 你們天天來這裡吃晚餐嗎？ B: 不，我們沒有天天來這裡吃晚餐。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/hengchun/5_19.mp3",
        "image": ""
      },
      "x": {
        "label": "...",
        "amis": "A: Maolahay kora wawa a micoka haw? B: Cowa, cowa kaolah cingra a micoka.",
        "chinese": "A: 那個孩子喜歡畫圖嗎？ B: 不，他不喜歡畫圖。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/hengchun/5_20.mp3",
        "image": ""
      }
    },
    "海岸阿美語": {
      "a": {
        "label": "...",
        "amis": "A: O ekong kora? B: Caay, caayay ko ekong kora.",
        "chinese": "A: 那是貓頭鷹嗎？ B: 不，那不是貓頭鷹。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/coast/5_1.mp3",
        "image": ""
      },
      "b": {
        "label": "...",
        "amis": "A: O singsi cingra? B: Caay, caayay ko singsi cingra.",
        "chinese": "A: 他是老師嗎？ B: 不，他不是老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/coast/5_2.mp3",
        "image": ""
      },
      "c": {
        "label": "...",
        "amis": "A: O singsi iso cingra ? B: Caay, caayay ko singsi ako cingra.",
        "chinese": "A: 她是你的老師嗎？ B: 不，她不是我的老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/coast/5_3.mp3",
        "image": ""
      },
      "d": {
        "label": "...",
        "amis": "A: O kahengangay ko riko’ nira? B: Caay, caayay ko kahengangay ko riko’ nira.",
        "chinese": "A: 她的衣服是紅色的嗎？ B: 不，她的衣服不是紅色的。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/coast/5_4.mp3",
        "image": ""
      },
      "e": {
        "label": "...",
        "amis": "A: Kareteng kora ’anengan? B: Caay, caayay ka kareteng kora ’anengan.",
        "chinese": "A: 那張椅子很重嗎？ B: 不，那張椅子不重。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/coast/5_5.mp3",
        "image": ""
      },
      "f": {
        "label": "...",
        "amis": "A: Takaraw ko ina iso ? B: Caay, caayay ka takaraw ko ina ako.",
        "chinese": "A: 你媽媽很高嗎？ B: 不，我媽媽不高。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/coast/5_6.mp3",
        "image": ""
      },
      "g": {
        "label": "...",
        "amis": "A: Kakaya ko fokes iso ? B: Caay, caayay ka kakaya ko fokes ako.",
        "chinese": "A: 你的頭髮很長嗎？ B: 不，我的頭髮不長。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/coast/5_7.mp3",
        "image": ""
      },
      "h": {
        "label": "...",
        "amis": "A: Malalok kora tamdaw? B: Caay, caayay ka lalok.",
        "chinese": "A: 那個人很勤勞嗎？ B: 不，他不勤勞。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/coast/5_8.mp3",
        "image": ""
      },
      "i": {
        "label": "...",
        "amis": "A: Ira ko fa’inayan a safa iso? B: Awa, awaay ko fa’inayan a safa ako.",
        "chinese": "A: 你有弟弟嗎？ B: 不，我沒有弟弟。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/coast/5_9.mp3",
        "image": ""
      },
      "j": {
        "label": "...",
        "amis": "A: Tata’ak kora loma’ ? B: Caay, caayay ka tata’ak kora loma’.",
        "chinese": "A: 那間房子很大嗎？ B: 不，那間房子不大。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/coast/5_10.mp3",
        "image": ""
      },
      "o": {
        "label": "...",
        "amis": "A: Fa’edet anini a romi’ad? B: Caay, caayay ka fa’edet anini.",
        "chinese": "A: 今天熱嗎？ B: 不，今天不熱。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/coast/5_11.mp3",
        "image": ""
      },
      "p": {
        "label": "...",
        "amis": "A: Romi’ami’ad minengneng to tilifi cangra? B: Caay, caayay ka saromi’ami’ad minengneng to tilifi cangra.",
        "chinese": "A: 他們天天看電視嗎？ B: 不，他們沒有天天看電視。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/coast/5_12.mp3",
        "image": ""
      },
      "q": {
        "label": "...",
        "amis": "A: Romi’ami’ad misa’osi kiso? B: Caay, caayay ka saromi’ami’ad misa’osi kako.",
        "chinese": "A: 你天天讀書嗎？ B: 不，我沒有天天讀書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/coast/5_13.mp3",
        "image": ""
      },
      "r": {
        "label": "...",
        "amis": "A: Misa’osi kiso? B: Caay, caayay pisa’osi kako.",
        "chinese": "A: 你在讀書嗎？ B: 不，我沒有在讀書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/coast/5_14.mp3",
        "image": ""
      },
      "s": {
        "label": "...",
        "amis": "A: Ma’orad to, mihawikid to linay kiso? B: Caay, caayay pihawikid to linay kako.",
        "chinese": "A: 下雨了！你帶著雨傘嗎？ B: 不，我沒帶著雨傘。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/coast/5_15.mp3",
        "image": ""
      },
      "t": {
        "label": "...",
        "amis": "A: Ma’orad to? B: Caay, caayay ka’orad!",
        "chinese": "A: 在下雨嗎？ B: 不，沒有在下雨！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/coast/5_16.mp3",
        "image": ""
      },
      "u": {
        "label": "...",
        "amis": "A: Maolah tora codad cingra? B: Caay, caayay kaolah tora codad cingra.",
        "chinese": "A: 她喜歡那本書嗎？ B: 不，她不喜歡那本書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/coast/5_17.mp3",
        "image": ""
      },
      "v": {
        "label": "...",
        "amis": "A: Ma’ilol ci amaan kiso? B: Hai, ma’ilol ci amaan kako.",
        "chinese": "A: 你很想念祖母嗎？ B: 是，我很想念祖母。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/coast/5_18.mp3",
        "image": ""
      },
      "w": {
        "label": "...",
        "amis": "A: Romi’ami’ad tayni itini a malafi kamo? B: Caay,caayay ka saromi’ami’ad tayni a malafi kami.",
        "chinese": "A: 你們天天來這裡吃晚餐嗎？ B: 不，我們沒有天天來這裡吃晚餐。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/coast/5_19.mp3",
        "image": ""
      },
      "x": {
        "label": "...",
        "amis": "A: Maolah micoka kora wawa? B: Caay, caayay ka olah micoka cingra.",
        "chinese": "A: 那個孩子喜歡畫圖嗎？ B: 不，他不喜歡畫圖。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/coast/5_20.mp3",
        "image": ""
      }
    },
    "馬蘭阿美語": {
      "a": {
        "label": "...",
        "amis": "A: O ekong kora haw? B: Cowa, cowa ko ekong kora.",
        "chinese": "A: 那是貓頭鷹嗎？ B: 不，那不是貓頭鷹。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/malan/5_1.mp3",
        "image": ""
      },
      "b": {
        "label": "...",
        "amis": "A: O singsi ko mira haw? B: Cowa, cowa ko singsi ko mira.",
        "chinese": "A: 他是老師嗎？ B: 不，他不是老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/malan/5_2.mp3",
        "image": ""
      },
      "c": {
        "label": "...",
        "amis": "A: O singsi iso ko mira haw? B: Cowa, cowa ko singsi no mako ko mira.",
        "chinese": "A: 她是你的老師嗎？ B: 不，她不是我的老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/malan/5_3.mp3",
        "image": ""
      },
      "d": {
        "label": "...",
        "amis": "A: O kahengangay ko riko’ no mira haw? B: Cowa, cowa ko kahengangay ko riko’ no mira.",
        "chinese": "A: 她的衣服是紅色的嗎？ B: 不，她的衣服不是紅色的。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/malan/5_4.mp3",
        "image": ""
      },
      "e": {
        "label": "...",
        "amis": "A: Karetengay kora hakenang haw? B: Cowa, ca^ka kareteng kora hakenang.",
        "chinese": "A: 那張椅子很重嗎？ B: 不，那張椅子不重。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/malan/5_5.mp3",
        "image": ""
      },
      "f": {
        "label": "...",
        "amis": "A: Akawangay ko wina iso haw? B: Cowa, ca^ka akawang ko wina ako.",
        "chinese": "A: 你媽媽很高嗎？ B: 不，我媽媽不高。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/malan/5_6.mp3",
        "image": ""
      },
      "g": {
        "label": "...",
        "amis": "A: kiedaway ko fokes iso haw? B: Cowa, ca^ka kiedaw ko fokes ako.",
        "chinese": "A: 你的頭髮很長嗎？ B: 不，我的頭髮不長。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/malan/5_7.mp3",
        "image": ""
      },
      "h": {
        "label": "...",
        "amis": "A: Malalokay kora tamdaw haw? B: Cowa, ca^ka lalok ko mira.",
        "chinese": "A: 那個人很勤勞嗎？ B: 不，他不勤勞。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/malan/5_8.mp3",
        "image": ""
      },
      "i": {
        "label": "...",
        "amis": "A: Ilaay ko fa’inayan a safa iso haw? B: Awa, awaay ko fa’inayan a safa no mako.",
        "chinese": "A: 你有弟弟嗎？ B: 不，我沒有弟弟。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/malan/5_9.mp3",
        "image": ""
      },
      "j": {
        "label": "...",
        "amis": "A: Taangayay kora loma’ haw? B: Cowa, ca^ka taangay kora loma’.",
        "chinese": "A: 那間房子很大嗎？ B: 不，那間房子不大。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/malan/5_10.mp3",
        "image": ""
      },
      "o": {
        "label": "...",
        "amis": "A: Fa^detay ko romiad anini haw? B: Cowa, ca^ka fa^det ko romiad anini.",
        "chinese": "A: 今天熱嗎？ B: 不，今天不熱。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/malan/5_11.mp3",
        "image": ""
      },
      "p": {
        "label": "...",
        "amis": "A: Romiamiad minengnengay to tilifi samira haw? B: Cowa, ca^ka romiamiad minengneng to tilifi samira.",
        "chinese": "A: 他們天天看電視嗎？ B: 不，他們沒有天天看電視。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/malan/5_12.mp3",
        "image": ""
      },
      "q": {
        "label": "...",
        "amis": "A: Romiamiad miosiay to tilid kiso haw? B: Cowa, ca^ka romiamiad a miosi to tilid kako.",
        "chinese": "A: 你天天讀書嗎？ B: 不，我沒有天天讀書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/malan/5_13.mp3",
        "image": ""
      },
      "r": {
        "label": "...",
        "amis": "A: Miosiay to tilid kiso haw? B: Cowa, ca^ka piosi to tilid kako.",
        "chinese": "A: 你在讀書嗎？ B: 不，我沒有在讀書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/malan/5_14.mp3",
        "image": ""
      },
      "s": {
        "label": "...",
        "amis": "A: Ma’oradayto! Sidinayay kiso haw? B: Cowa, cowa kasidinay kako.",
        "chinese": "A: 下雨了！你帶著雨傘嗎？ B: 不，我沒帶著雨傘。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/malan/5_15.mp3",
        "image": ""
      },
      "t": {
        "label": "...",
        "amis": "A: Ma’oraday haw? B: Cowa, cowa ka ’orad!",
        "chinese": "A: 在下雨嗎？ B: 不，沒有在下雨！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/malan/5_16.mp3",
        "image": ""
      },
      "u": {
        "label": "...",
        "amis": "A: Maolahay tora tilid ko mira haw? B: Cowa, cowa kaolah tora tilid ko mira.",
        "chinese": "A: 她喜歡那本書嗎？ B: 不，她不喜歡那本書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/malan/5_17.mp3",
        "image": ""
      },
      "v": {
        "label": "...",
        "amis": "A: Mailolay to fofo kiso haw? B: Hay, mailolay to fofo kako .",
        "chinese": "A: 你很想念祖母嗎？ B: 是，我很想念祖母。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/malan/5_18.mp3",
        "image": ""
      },
      "w": {
        "label": "...",
        "amis": "A: Tayniay itini malafi to romiamiad kamo haw? B: Cowa, cowa katayni itini malafi to romiamiad kami.",
        "chinese": "A: 你們天天來這裡吃晚餐嗎？ B: 不，我們沒有天天來這裡吃晚餐。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/malan/5_19.mp3",
        "image": ""
      },
      "x": {
        "label": "...",
        "amis": "A: Maolahay miconga kora wawa haw? B: Cowa, cowa kaolah miconga ko mira.",
        "chinese": "A: 那個孩子喜歡畫圖嗎？ B: 不，他不喜歡畫圖。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/malan/5_20.mp3",
        "image": ""
      }
    },
    "預設": {
      "a": {
        "label": "...",
        "amis": "A: O ekong kiraan haw ? B: Caay, caayay ko ekong kiraan.",
        "chinese": "A: 那是貓頭鷹嗎？ B: 不，那不是貓頭鷹。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_1.mp3",
        "image": ""
      },
      "b": {
        "label": "...",
        "amis": "A: O singsi ciira haw ? B: Caay, caay ko singsi ciira.",
        "chinese": "A: 他是老師嗎？ B: 不，他不是老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_2.mp3",
        "image": ""
      },
      "c": {
        "label": "...",
        "amis": "A: O singsi no miso ciira haw ? B: Caay, caay ko singsi no mako ciira.",
        "chinese": "A: 她是你的老師嗎？ B: 不，她不是我的老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_3.mp3",
        "image": ""
      },
      "d": {
        "label": "...",
        "amis": "A: O kahengangay ko fodoy nira haw ? B: Caay, caayay ko kahengangay ko fodoy nira.",
        "chinese": "A: 她的衣服是紅色的嗎？ B: 不，她的衣服不是紅色的。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_4.mp3",
        "image": ""
      },
      "e": {
        "label": "...",
        "amis": "A: Kareteng kora a ’anengang haw ? B: Caay, caay ka kareteng kora ’anengang.",
        "chinese": "A: 那張椅子很重嗎？ B: 不，那張椅子不重。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_5.mp3",
        "image": ""
      },
      "f": {
        "label": "...",
        "amis": "A: Takaraw ci ina no miso haw ? B: Caay, caay ka takaraw ciira.",
        "chinese": "A: 你媽媽很高嗎？ B: 不，我媽媽不高。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_6.mp3",
        "image": ""
      },
      "g": {
        "label": "...",
        "amis": "A: Kakaya’ ko fokes no miso haw ? B: Caay, caay ka kakaya’ ko fokes no mako .",
        "chinese": "A: 你的頭髮很長嗎？ B: 不，我的頭髮不長。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_7.mp3",
        "image": ""
      },
      "h": {
        "label": "...",
        "amis": "A: Malalok kora tamdaw haw ? B: Caay, caay kalalok ciira .",
        "chinese": "A: 那個人很勤勞嗎？ B: 不，他不勤勞。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_8.mp3",
        "image": ""
      },
      "i": {
        "label": "...",
        "amis": "A: Ira ko fa’inayan a safa no miso haw ? B: Awaay, awaay ko fa’inayan a safa no mako.",
        "chinese": "A: 你有弟弟嗎？ B: 不，我沒有弟弟。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_9.mp3",
        "image": ""
      },
      "j": {
        "label": "...",
        "amis": "A: Tata’ak kora loma’ haw ? B: Caay, caay ka tata’ak kora loma’.",
        "chinese": "A: 那間房子很大嗎？ B: 不，那間房子不大。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_10.mp3",
        "image": ""
      },
      "o": {
        "label": "...",
        "amis": "A: Faedet ko romi’ad anini haw ? B: Caay, caay ka faedet anini.",
        "chinese": "A: 今天熱嗎？ B: 不，今天不熱。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_11.mp3",
        "image": ""
      },
      "p": {
        "label": "...",
        "amis": "A: Minengneng caira to tilifi to romi’ami’ad haw ? B: Caay, caay pinengneng caira to tilifi to romi’ami’ad .",
        "chinese": "A: 他們天天看電視嗎？ B: 不，他們沒有天天看電視。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_12.mp3",
        "image": ""
      },
      "q": {
        "label": "...",
        "amis": "A: Miasip kiso to codad to romi’ami’ad haw ? B: Caay, caay piasip kako to codad to romi’ami’ad.",
        "chinese": "A: 你天天讀書嗎？ B: 不，我沒有天天讀書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_13.mp3",
        "image": ""
      },
      "r": {
        "label": "...",
        "amis": "A: Miasipay kiso to codad haw ? B: Caay, caayay piasip kako to codad .",
        "chinese": "A: 你在讀書嗎？ B: 不，我沒有在讀書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_14.mp3",
        "image": ""
      },
      "s": {
        "label": "...",
        "amis": "A: Ma’oraday to ! cilinay kiso haw ? B: Caay, caay ka cilinay kako .",
        "chinese": "A: 下雨了！你帶著雨傘嗎？ B: 不，我沒帶著雨傘。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_15.mp3",
        "image": ""
      },
      "t": {
        "label": "...",
        "amis": "A: Ma’oraday haw ? B: Caay, caay ka ’orad !",
        "chinese": "A: 在下雨嗎？ B: 不，沒有在下雨！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_16.mp3",
        "image": ""
      },
      "u": {
        "label": "...",
        "amis": "A: Maolah ciira tora codad haw ? B: Caay, caay kaolah ciira tora codad.",
        "chinese": "A: 她喜歡那本書嗎？ B: 不，她不喜歡那本書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_17.mp3",
        "image": ""
      },
      "v": {
        "label": "...",
        "amis": "A: Ma’ilol kiso ci amaan haw ? B: Hay, tadama’ilol kako ci amaan.",
        "chinese": "A: 你很想念祖母嗎？ B: 是，我很想念祖母。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_18.mp3",
        "image": ""
      },
      "w": {
        "label": "...",
        "amis": "A: Tayni kamo i tini a malafi to romi’ami’ad haw ? B: Caay, caay katayni kami a malafi to romi’ami’ad.",
        "chinese": "A: 你們天天來這裡吃晚餐嗎？ B: 不，我們沒有天天來這裡吃晚餐。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_19.mp3",
        "image": ""
      },
      "x": {
        "label": "...",
        "amis": "A: Maolah kora wawa mirenaf haw ? B: Caay, caay kaolah ciira mirenaf .",
        "chinese": "A: 那個孩子喜歡畫圖嗎？ B: 不，他不喜歡畫圖。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_20.mp3",
        "image": ""
      }
    }
  },
  "sentences": [
    {
      "amis": "A: O ekong kiraan haw ? B: Caay, caayay ko ekong kiraan.",
      "chinese": "A: 那是貓頭鷹嗎？ B: 不，那不是貓頭鷹。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_1.mp3",
      "image": ""
    },
    {
      "amis": "A: O singsi ciira haw ? B: Caay, caay ko singsi ciira.",
      "chinese": "A: 他是老師嗎？ B: 不，他不是老師。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_2.mp3",
      "image": ""
    },
    {
      "amis": "A: O singsi no miso ciira haw ? B: Caay, caay ko singsi no mako ciira.",
      "chinese": "A: 她是你的老師嗎？ B: 不，她不是我的老師。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_3.mp3",
      "image": ""
    },
    {
      "amis": "A: O kahengangay ko fodoy nira haw ? B: Caay, caayay ko kahengangay ko fodoy nira.",
      "chinese": "A: 她的衣服是紅色的嗎？ B: 不，她的衣服不是紅色的。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_4.mp3",
      "image": ""
    },
    {
      "amis": "A: Kareteng kora a ’anengang haw ? B: Caay, caay ka kareteng kora ’anengang.",
      "chinese": "A: 那張椅子很重嗎？ B: 不，那張椅子不重。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_5.mp3",
      "image": ""
    },
    {
      "amis": "A: Takaraw ci ina no miso haw ? B: Caay, caay ka takaraw ciira.",
      "chinese": "A: 你媽媽很高嗎？ B: 不，我媽媽不高。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_6.mp3",
      "image": ""
    },
    {
      "amis": "A: Kakaya’ ko fokes no miso haw ? B: Caay, caay ka kakaya’ ko fokes no mako .",
      "chinese": "A: 你的頭髮很長嗎？ B: 不，我的頭髮不長。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_7.mp3",
      "image": ""
    },
    {
      "amis": "A: Malalok kora tamdaw haw ? B: Caay, caay kalalok ciira .",
      "chinese": "A: 那個人很勤勞嗎？ B: 不，他不勤勞。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_8.mp3",
      "image": ""
    },
    {
      "amis": "A: Ira ko fa’inayan a safa no miso haw ? B: Awaay, awaay ko fa’inayan a safa no mako.",
      "chinese": "A: 你有弟弟嗎？ B: 不，我沒有弟弟。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_9.mp3",
      "image": ""
    },
    {
      "amis": "A: Tata’ak kora loma’ haw ? B: Caay, caay ka tata’ak kora loma’.",
      "chinese": "A: 那間房子很大嗎？ B: 不，那間房子不大。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_10.mp3",
      "image": ""
    },
    {
      "amis": "A: Faedet ko romi’ad anini haw ? B: Caay, caay ka faedet anini.",
      "chinese": "A: 今天熱嗎？ B: 不，今天不熱。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_11.mp3",
      "image": ""
    },
    {
      "amis": "A: Minengneng caira to tilifi to romi’ami’ad haw ? B: Caay, caay pinengneng caira to tilifi to romi’ami’ad .",
      "chinese": "A: 他們天天看電視嗎？ B: 不，他們沒有天天看電視。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_12.mp3",
      "image": ""
    },
    {
      "amis": "A: Miasip kiso to codad to romi’ami’ad haw ? B: Caay, caay piasip kako to codad to romi’ami’ad.",
      "chinese": "A: 你天天讀書嗎？ B: 不，我沒有天天讀書。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_13.mp3",
      "image": ""
    },
    {
      "amis": "A: Miasipay kiso to codad haw ? B: Caay, caayay piasip kako to codad .",
      "chinese": "A: 你在讀書嗎？ B: 不，我沒有在讀書。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_14.mp3",
      "image": ""
    },
    {
      "amis": "A: Ma’oraday to ! cilinay kiso haw ? B: Caay, caay ka cilinay kako .",
      "chinese": "A: 下雨了！你帶著雨傘嗎？ B: 不，我沒帶著雨傘。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_15.mp3",
      "image": ""
    },
    {
      "amis": "A: Ma’oraday haw ? B: Caay, caay ka ’orad !",
      "chinese": "A: 在下雨嗎？ B: 不，沒有在下雨！",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_16.mp3",
      "image": ""
    },
    {
      "amis": "A: Maolah ciira tora codad haw ? B: Caay, caay kaolah ciira tora codad.",
      "chinese": "A: 她喜歡那本書嗎？ B: 不，她不喜歡那本書。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_17.mp3",
      "image": ""
    },
    {
      "amis": "A: Ma’ilol kiso ci amaan haw ? B: Hay, tadama’ilol kako ci amaan.",
      "chinese": "A: 你很想念祖母嗎？ B: 是，我很想念祖母。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_18.mp3",
      "image": ""
    },
    {
      "amis": "A: Tayni kamo i tini a malafi to romi’ami’ad haw ? B: Caay, caay katayni kami a malafi to romi’ami’ad.",
      "chinese": "A: 你們天天來這裡吃晚餐嗎？ B: 不，我們沒有天天來這裡吃晚餐。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_19.mp3",
      "image": ""
    },
    {
      "amis": "A: Maolah kora wawa mirenaf haw ? B: Caay, caay kaolah ciira mirenaf .",
      "chinese": "A: 那個孩子喜歡畫圖嗎？ B: 不，他不喜歡畫圖。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_20.mp3",
      "image": ""
    },
    {
      "amis": "A: Mafana’ kora wawa a romadiw haw ? B: Mafokil, mafokil ciira a romadiw.",
      "chinese": "A: 那個孩子會唱歌嗎？ B: 不，他不會唱歌。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_21.mp3",
      "image": ""
    },
    {
      "amis": "A: O tatayra kamo i picodadan a romadiw haw ? B: Caay, caay katayra kami i picodadan a romadiw.",
      "chinese": "A: 你們正要去學校唱歌嗎？ B: 不，我們不是要去學校唱歌。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_22.mp3",
      "image": ""
    },
    {
      "amis": "A: Manga’ay kako a masadak misalama i herek no lahok haw ? B: Aka a, caay kanga’ay kiso a masadak misalama.",
      "chinese": "A: 下午我可以出去玩嗎？(請求同意) B: 不，你不可以出去玩！",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_23.mp3",
      "image": ""
    },
    {
      "amis": "A: Matomes to maparo ko mami’ i fakad naira haw ? B: Caay, caay katomes maparo ko mami’ i fakad naira.",
      "chinese": "A: 他們的簍子裝滿了橘子嗎？ B: 不，他們的簍子沒有裝滿橘子。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_24.mp3",
      "image": ""
    },
    {
      "amis": "A: Aka kafoti’ ! B: Caay kafoti’ kako.",
      "chinese": "A: 別睡覺！ B: 我沒有在睡覺。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_25.mp3",
      "image": ""
    },
    {
      "amis": "A: Aka pifohat ! B: Mafana’ to !",
      "chinese": "A: 別開門！ B: 我知道了！",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_26.mp3",
      "image": ""
    },
    {
      "amis": "A: Aka kapawan minokay a malafi ! B: Mafana’ to !",
      "chinese": "A: 別忘記回來吃晚飯喔！ B: 我知道了！",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_27.mp3",
      "image": ""
    }
  ],
  "sentencesByDialect": {
    "秀姑巒阿美語": [
      {
        "amis": "A: O ekong kiraan haw ? B: Caay, caayay ko ekong kiraan.",
        "chinese": "A: 那是貓頭鷹嗎？ B: 不，那不是貓頭鷹。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_1.mp3",
        "image": ""
      },
      {
        "amis": "A: O singsi ciira haw ? B: Caay, caay ko singsi ciira.",
        "chinese": "A: 他是老師嗎？ B: 不，他不是老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_2.mp3",
        "image": ""
      },
      {
        "amis": "A: O singsi no miso ciira haw ? B: Caay, caay ko singsi no mako ciira.",
        "chinese": "A: 她是你的老師嗎？ B: 不，她不是我的老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_3.mp3",
        "image": ""
      },
      {
        "amis": "A: O kahengangay ko fodoy nira haw ? B: Caay, caayay ko kahengangay ko fodoy nira.",
        "chinese": "A: 她的衣服是紅色的嗎？ B: 不，她的衣服不是紅色的。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_4.mp3",
        "image": ""
      },
      {
        "amis": "A: Kareteng kora a ’anengang haw ? B: Caay, caay ka kareteng kora ’anengang.",
        "chinese": "A: 那張椅子很重嗎？ B: 不，那張椅子不重。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_5.mp3",
        "image": ""
      },
      {
        "amis": "A: Takaraw ci ina no miso haw ? B: Caay, caay ka takaraw ciira.",
        "chinese": "A: 你媽媽很高嗎？ B: 不，我媽媽不高。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_6.mp3",
        "image": ""
      },
      {
        "amis": "A: Kakaya’ ko fokes no miso haw ? B: Caay, caay ka kakaya’ ko fokes no mako .",
        "chinese": "A: 你的頭髮很長嗎？ B: 不，我的頭髮不長。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_7.mp3",
        "image": ""
      },
      {
        "amis": "A: Malalok kora tamdaw haw ? B: Caay, caay kalalok ciira .",
        "chinese": "A: 那個人很勤勞嗎？ B: 不，他不勤勞。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_8.mp3",
        "image": ""
      },
      {
        "amis": "A: Ira ko fa’inayan a safa no miso haw ? B: Awaay, awaay ko fa’inayan a safa no mako.",
        "chinese": "A: 你有弟弟嗎？ B: 不，我沒有弟弟。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_9.mp3",
        "image": ""
      },
      {
        "amis": "A: Tata’ak kora loma’ haw ? B: Caay, caay ka tata’ak kora loma’.",
        "chinese": "A: 那間房子很大嗎？ B: 不，那間房子不大。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_10.mp3",
        "image": ""
      },
      {
        "amis": "A: Faedet ko romi’ad anini haw ? B: Caay, caay ka faedet anini.",
        "chinese": "A: 今天熱嗎？ B: 不，今天不熱。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_11.mp3",
        "image": ""
      },
      {
        "amis": "A: Minengneng caira to tilifi to romi’ami’ad haw ? B: Caay, caay pinengneng caira to tilifi to romi’ami’ad .",
        "chinese": "A: 他們天天看電視嗎？ B: 不，他們沒有天天看電視。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_12.mp3",
        "image": ""
      },
      {
        "amis": "A: Miasip kiso to codad to romi’ami’ad haw ? B: Caay, caay piasip kako to codad to romi’ami’ad.",
        "chinese": "A: 你天天讀書嗎？ B: 不，我沒有天天讀書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_13.mp3",
        "image": ""
      },
      {
        "amis": "A: Miasipay kiso to codad haw ? B: Caay, caayay piasip kako to codad .",
        "chinese": "A: 你在讀書嗎？ B: 不，我沒有在讀書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_14.mp3",
        "image": ""
      },
      {
        "amis": "A: Ma’oraday to ! cilinay kiso haw ? B: Caay, caay ka cilinay kako .",
        "chinese": "A: 下雨了！你帶著雨傘嗎？ B: 不，我沒帶著雨傘。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_15.mp3",
        "image": ""
      },
      {
        "amis": "A: Ma’oraday haw ? B: Caay, caay ka ’orad !",
        "chinese": "A: 在下雨嗎？ B: 不，沒有在下雨！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_16.mp3",
        "image": ""
      },
      {
        "amis": "A: Maolah ciira tora codad haw ? B: Caay, caay kaolah ciira tora codad.",
        "chinese": "A: 她喜歡那本書嗎？ B: 不，她不喜歡那本書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_17.mp3",
        "image": ""
      },
      {
        "amis": "A: Ma’ilol kiso ci amaan haw ? B: Hay, tadama’ilol kako ci amaan.",
        "chinese": "A: 你很想念祖母嗎？ B: 是，我很想念祖母。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_18.mp3",
        "image": ""
      },
      {
        "amis": "A: Tayni kamo i tini a malafi to romi’ami’ad haw ? B: Caay, caay katayni kami a malafi to romi’ami’ad.",
        "chinese": "A: 你們天天來這裡吃晚餐嗎？ B: 不，我們沒有天天來這裡吃晚餐。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_19.mp3",
        "image": ""
      },
      {
        "amis": "A: Maolah kora wawa mirenaf haw ? B: Caay, caay kaolah ciira mirenaf .",
        "chinese": "A: 那個孩子喜歡畫圖嗎？ B: 不，他不喜歡畫圖。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_20.mp3",
        "image": ""
      },
      {
        "amis": "A: Mafana’ kora wawa a romadiw haw ? B: Mafokil, mafokil ciira a romadiw.",
        "chinese": "A: 那個孩子會唱歌嗎？ B: 不，他不會唱歌。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_21.mp3",
        "image": ""
      },
      {
        "amis": "A: O tatayra kamo i picodadan a romadiw haw ? B: Caay, caay katayra kami i picodadan a romadiw.",
        "chinese": "A: 你們正要去學校唱歌嗎？ B: 不，我們不是要去學校唱歌。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_22.mp3",
        "image": ""
      },
      {
        "amis": "A: Manga’ay kako a masadak misalama i herek no lahok haw ? B: Aka a, caay kanga’ay kiso a masadak misalama.",
        "chinese": "A: 下午我可以出去玩嗎？(請求同意) B: 不，你不可以出去玩！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_23.mp3",
        "image": ""
      },
      {
        "amis": "A: Matomes to maparo ko mami’ i fakad naira haw ? B: Caay, caay katomes maparo ko mami’ i fakad naira.",
        "chinese": "A: 他們的簍子裝滿了橘子嗎？ B: 不，他們的簍子沒有裝滿橘子。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_24.mp3",
        "image": ""
      },
      {
        "amis": "A: Aka kafoti’ ! B: Caay kafoti’ kako.",
        "chinese": "A: 別睡覺！ B: 我沒有在睡覺。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_25.mp3",
        "image": ""
      },
      {
        "amis": "A: Aka pifohat ! B: Mafana’ to !",
        "chinese": "A: 別開門！ B: 我知道了！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_26.mp3",
        "image": ""
      },
      {
        "amis": "A: Aka kapawan minokay a malafi ! B: Mafana’ to !",
        "chinese": "A: 別忘記回來吃晚飯喔！ B: 我知道了！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_27.mp3",
        "image": ""
      }
    ],
    "南勢阿美語": [
      {
        "amis": "A: U tuul haw kiraan? B: Caay,caay kaw tuul kiraan.",
        "chinese": "A: 那是貓頭鷹嗎？ B: 不，那不是貓頭鷹。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/nanshi/5_1.mp3",
        "image": ""
      },
      {
        "amis": "A: U pasevanaay haw cira? B: Caay,caay kaw pasevanaay cira.",
        "chinese": "A: 他是老師嗎？ B: 不，他不是老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/nanshi/5_2.mp3",
        "image": ""
      },
      {
        "amis": "A: U pasevanaay haw nu misu cira? B: Caay,caay kaw pasevanaay nu maku cira.",
        "chinese": "A: 她是你的老師嗎？ B: 不，她不是我的老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/nanshi/5_3.mp3",
        "image": ""
      },
      {
        "amis": "A: U lahengangay haw ku vuduy nu nira? B: Caay,caay kaw lahengangay ku vuduy nu nira.",
        "chinese": "A: 她的衣服是紅色的嗎？ B: 不，她的衣服不是紅色的。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/nanshi/5_4.mp3",
        "image": ""
      },
      {
        "amis": "A: Vaeket haw kira elun? B: Caay,caay kavaeket kira elun.",
        "chinese": "A: 那張椅子很重嗎？ B: 不，那張椅子不重。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/nanshi/5_5.mp3",
        "image": ""
      },
      {
        "amis": "A: Tarakaw haw ku wina nu misu? B: Caay,caay katarakaw ku wina nu maku.",
        "chinese": "A: 你媽媽很高嗎？ B: 不，我媽媽不高。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/nanshi/5_6.mp3",
        "image": ""
      },
      {
        "amis": "A: Raraya’ haw ku vukes nu misu? B: Caay,caay kararaya ku vukes nu maku.",
        "chinese": "A: 你的頭髮很長嗎？ B: 不，我的頭髮不長。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/nanshi/5_7.mp3",
        "image": ""
      },
      {
        "amis": "A: Malaluk haw kira tamdaw? B: Caay,caay kalaluk cira.",
        "chinese": "A: 那個人很勤勞嗎？ B: 不，他不勤勞。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/nanshi/5_8.mp3",
        "image": ""
      },
      {
        "amis": "A: Ira haw ku sava nu misu tu vavainayan? B: Awaay,awaay ku sava nu maku tu vavainayan .",
        "chinese": "A: 你有弟弟嗎？ B: 不，我沒有弟弟。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/nanshi/5_9.mp3",
        "image": ""
      },
      {
        "amis": "A: Tataak haw kira luma’? B: Caay,caay katataak kira luma’.",
        "chinese": "A: 那間房子很大嗎？ B: 不，那間房子不大。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/nanshi/5_10.mp3",
        "image": ""
      },
      {
        "amis": "A: Caledes haw anini? B: Caay,caay kacaledes anini.",
        "chinese": "A: 今天熱嗎？ B: 不，今天不熱。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/nanshi/5_11.mp3",
        "image": ""
      },
      {
        "amis": "A: Saremiremiad sa haw a mimelaw tu tilivi ku heni? B: Caay,caay kasaremiremiad sa a mimelaw tu tilivi ku heni.",
        "chinese": "A: 他們天天看電視嗎？ B: 不，他們沒有天天看電視。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/nanshi/5_12.mp3",
        "image": ""
      },
      {
        "amis": "A: Saremiremiad sa haw kisu a micudad? B: Caay,caay kasaremiremiad sa kaku a micudad.",
        "chinese": "A: 你天天讀書嗎？ B: 不，我沒有天天讀書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/nanshi/5_13.mp3",
        "image": ""
      },
      {
        "amis": "A: Mimelaw haw kisu tu cudad? B: Caay,caay pimelaw kaku tu cudad.",
        "chinese": "A: 你在讀書嗎？ B: 不，我沒有在讀書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/nanshi/5_14.mp3",
        "image": ""
      },
      {
        "amis": "A: Maurad tu！Sicacevaren haw kisu? B: Caay,caay kasicacevaren kaku.",
        "chinese": "A: 下雨了！你帶著雨傘嗎？ B: 不，我沒帶著雨傘。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/nanshi/5_15.mp3",
        "image": ""
      },
      {
        "amis": "A: Maurad tu haw? B: Caay,caay tu kaurad!",
        "chinese": "A: 在下雨嗎？ B: 不，沒有在下雨！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/nanshi/5_16.mp3",
        "image": ""
      },
      {
        "amis": "A: Maulah haw cira tira cudadan? B: Caay,caay kaulah cira tira cudadan.",
        "chinese": "A: 她喜歡那本書嗎？ B: 不，她不喜歡那本書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/nanshi/5_17.mp3",
        "image": ""
      },
      {
        "amis": "A: Maurun haw kisu tu vayi? B: Hay,maurun kaku tu vayi.",
        "chinese": "A: 你很想念祖母嗎？ B: 是，我很想念祖母。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/nanshi/5_18.mp3",
        "image": ""
      },
      {
        "amis": "A: Saremiremiad sa haw kamu a malavi’ itini? B: Caay,caay kasaremiremiad sa kami a malavi’ itini.",
        "chinese": "A: 你們天天來這裡吃晚餐嗎？ B: 不，我們沒有天天來這裡吃晚餐。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/nanshi/5_19.mp3",
        "image": ""
      },
      {
        "amis": "A: Maulah haw a mikulit kira wawa? B: Caay,caay kaulah a mikulit kira wawa.",
        "chinese": "A: 那個孩子喜歡畫圖嗎？ B: 不，他不喜歡畫圖。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/nanshi/5_20.mp3",
        "image": ""
      },
      {
        "amis": "A: Mavana’ haw kira wawa a remadiw? B: Caay,mavukil a remadiw cira.",
        "chinese": "A: 那個孩子會唱歌嗎？ B: 不，他不會唱歌。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/nanshi/5_21.mp3",
        "image": ""
      },
      {
        "amis": "A: A tayra haw kamu i cacudadan a remadiw ? B: Caay,caay katayra kami i cacudadan a remadiw.",
        "chinese": "A: 你們要去學校唱歌嗎？ B: 不，我們不是要去學校唱歌。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/nanshi/5_22.mp3",
        "image": ""
      },
      {
        "amis": "A: I herek nu lahuk mangaay tu haw kaku a mihulul? B: Aka,akakatahekal kisu a mihulul!",
        "chinese": "A: 下午我可以出去玩嗎？(請求同意) B: 不，你不可以出去玩！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/nanshi/5_23.mp3",
        "image": ""
      },
      {
        "amis": "A: Matumes haw nu kama ku varuru nu heni? B: Caay,caay katumes nu kama ku varuru nu heni.",
        "chinese": "A: 他們的簍子裝滿了橘子嗎？ B: 不，他們的簍子沒有裝滿橘子。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/nanshi/5_24.mp3",
        "image": ""
      },
      {
        "amis": "A: Aka kavuti’！ B: Caay kavuti’ kaku.",
        "chinese": "A: 別睡覺！ B: 我沒有在睡覺。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/nanshi/5_25.mp3",
        "image": ""
      },
      {
        "amis": "A: Aka pivawah tu sasaedev! B: Mavana’ tu kaku!",
        "chinese": "A: 別開門！ B: 我知道了！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/nanshi/5_26.mp3",
        "image": ""
      },
      {
        "amis": "A: Aka kapawan a taluma’ a malavi’! B: Mavana’ tu kaku!",
        "chinese": "A: 別忘記回來吃晚飯喔！ B: 我知道了！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/nanshi/5_27.mp3",
        "image": ""
      }
    ],
    "恆春阿美語": [
      {
        "amis": "A: O ^ekong koriraan haw? B: Cowa, cowa ko ^ekong kora.",
        "chinese": "A: 那是貓頭鷹嗎？ B: 不，那不是貓頭鷹。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/hengchun/5_1.mp3",
        "image": ""
      },
      {
        "amis": "A: O singsi cingra haw? B: Cowa,cowa ko singsi cingra.",
        "chinese": "A: 他是老師嗎？ B: 不，他不是老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/hengchun/5_2.mp3",
        "image": ""
      },
      {
        "amis": "A: O singsi iso cingra haw? B: Cowa, cowa ko singsi ako cingra.",
        "chinese": "A: 她是你的老師嗎？ B: 不，她不是我的老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/hengchun/5_3.mp3",
        "image": ""
      },
      {
        "amis": "A: O kahengangay ko riko’ ningra haw? B: Cowa, cowa ko kahengangay ko riko’ ningra.",
        "chinese": "A: 她的衣服是紅色的嗎？ B: 不，她的衣服不是紅色的。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/hengchun/5_4.mp3",
        "image": ""
      },
      {
        "amis": "A: Kaletengay kora ’axenan haw? B: Cowa, cowa ka kaleteng kora ’axenan.",
        "chinese": "A: 那張椅子很重嗎？ B: 不，那張椅子不重。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/hengchun/5_5.mp3",
        "image": ""
      },
      {
        "amis": "A: ’Akawangay ko wina iso haw? B: Cowa, cowa ka ’akawang cingra.",
        "chinese": "A: 你媽媽很高嗎？ B: 不，我媽媽不高。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/hengchun/5_6.mp3",
        "image": ""
      },
      {
        "amis": "A: Ki’edaway ko fokes no miso haw? B: Cowa, cowa ka ki’edaw ko fokes ako.",
        "chinese": "A: 你的頭髮很長嗎？ B: 不，我的頭髮不長。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/hengchun/5_7.mp3",
        "image": ""
      },
      {
        "amis": "A: Malalokay kora tamdaw haw? B: Cowa,cowa ka lalok cingra.",
        "chinese": "A: 那個人很勤勞嗎？ B: 不，他不勤勞。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/hengchun/5_8.mp3",
        "image": ""
      },
      {
        "amis": "A: Iraay ko fa’inayan a safa iso haw? B: Cowa, awaay ko fa’inayan a safa ako.",
        "chinese": "A: 你有弟弟嗎？ B: 不，我沒有弟弟。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/hengchun/5_9.mp3",
        "image": ""
      },
      {
        "amis": "A: Ta’angayay kora loma’ haw? B: Cowa, cowa kata’angay kora loma’.",
        "chinese": "A: 那間房子很大嗎？ B: 不，那間房子不大。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/hengchun/5_10.mp3",
        "image": ""
      },
      {
        "amis": "A: Fa^edet anini haw? B: Cowa, cowa kafa^edet anini.",
        "chinese": "A: 今天熱嗎？ B: 不，今天不熱。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/hengchun/5_11.mp3",
        "image": ""
      },
      {
        "amis": "A: Minengneng to tilifi cangra to romi’ami’ad haw? B: Cowa, cowa pinengneng to tilifi cangra to romi’ami’ad",
        "chinese": "A: 他們天天看電視嗎？ B: 不，他們沒有天天看電視。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/hengchun/5_12.mp3",
        "image": ""
      },
      {
        "amis": "A: Mitiliday kiso to romi’ami’ad haw? B: Cowa,cowa pitilid kako to romi’ami’ad.",
        "chinese": "A: 你天天讀書嗎？ B: 不，我沒有天天讀書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/hengchun/5_13.mp3",
        "image": ""
      },
      {
        "amis": "A: Mitiliday kiso haw? B: Cowa, cowa pitilid kako.",
        "chinese": "A: 你在讀書嗎？ B: 不，我沒有在讀書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/hengchun/5_14.mp3",
        "image": ""
      },
      {
        "amis": "A: Ma’oraday to！ cidinayay kiso haw? B: Cowa, cowa kacidinay kako.",
        "chinese": "A: 下雨了！你帶著雨傘嗎？ B: 不，我沒帶著雨傘。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/hengchun/5_15.mp3",
        "image": ""
      },
      {
        "amis": "A: Ma’oraday ho haw? B: Cowa, awaay to ko’orad ano hatini.",
        "chinese": "A: 在下雨嗎？ B: 不，沒有在下雨！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/hengchun/5_16.mp3",
        "image": ""
      },
      {
        "amis": "A: Maolahay cingra tora tilid haw? B: Cowa,cowa kaolah cingra tora tilid.",
        "chinese": "A: 她喜歡那本書嗎？ B: 不，她不喜歡那本書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/hengchun/5_17.mp3",
        "image": ""
      },
      {
        "amis": "A: Ma’ilolay kiso ci fofoan haw? B: Hay, ma’ilolay kako ci fofoan.",
        "chinese": "A: 你很想念祖母嗎？ B: 是，我很想念祖母。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/hengchun/5_18.mp3",
        "image": ""
      },
      {
        "amis": "A: Tayniay kamo to romi’ami’ad a malafi haw? B: Cowa, cowa katayni kami to romo’ami’ad a malafi .",
        "chinese": "A: 你們天天來這裡吃晚餐嗎？ B: 不，我們沒有天天來這裡吃晚餐。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/hengchun/5_19.mp3",
        "image": ""
      },
      {
        "amis": "A: Maolahay kora wawa a micoka haw? B: Cowa, cowa kaolah cingra a micoka.",
        "chinese": "A: 那個孩子喜歡畫圖嗎？ B: 不，他不喜歡畫圖。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/hengchun/5_20.mp3",
        "image": ""
      },
      {
        "amis": "A: Mafana’ay kora wawa a romadiw haw? B: Cowa,cowa kafana’ a romadiw cingra.",
        "chinese": "A: 那個孩子會唱歌嗎？ B: 不，他不會唱歌。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/hengchun/5_21.mp3",
        "image": ""
      },
      {
        "amis": "A: Tatayray kamo i kongkoan a romadiw haw? B: Cowa, cowa ko tatayra kami i kongkoan a romadiw.",
        "chinese": "A: 你們正要去學校唱歌嗎？ B: 不，我們不是要去學校唱歌。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/hengchun/5_22.mp3",
        "image": ""
      },
      {
        "amis": "A: Helek no lahok nga’ay kako masadak a misalama haw? B: Cowa,cowa kanga’ay kiso masadak a misalama.",
        "chinese": "A: 下午我可以出去玩嗎？(請求同意) B: 不，你不可以出去玩！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/hengchun/5_23.mp3",
        "image": ""
      },
      {
        "amis": "A: Matomesay to ko ’asilo nangra i kakoyodan haw? B: Cowa,cowa katomes ko ’asilo i kakoyodan nangra.",
        "chinese": "A: 他們的簍子裝滿了橘子嗎？ B: 不，他們的簍子沒有裝滿橘子。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/hengchun/5_24.mp3",
        "image": ""
      },
      {
        "amis": "A: Aka kafoti’! B: Cowa kafoti’ kako.",
        "chinese": "A: 別睡覺！ B: 我沒有在睡覺。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/hengchun/5_25.mp3",
        "image": ""
      },
      {
        "amis": "A: Aka pifohat to fawahan! B: Hay, mafana’ay to kako.",
        "chinese": "A: 別開門！ B: 我知道了！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/hengchun/5_26.mp3",
        "image": ""
      },
      {
        "amis": "A: Aka katawal minokay a malafi ! B: Hay, mafana’ay to kako.",
        "chinese": "A: 別忘記回來吃晚飯喔！ B: 我知道了！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/hengchun/5_27.mp3",
        "image": ""
      }
    ],
    "海岸阿美語": [
      {
        "amis": "A: O ekong kora? B: Caay, caayay ko ekong kora.",
        "chinese": "A: 那是貓頭鷹嗎？ B: 不，那不是貓頭鷹。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/coast/5_1.mp3",
        "image": ""
      },
      {
        "amis": "A: O singsi cingra? B: Caay, caayay ko singsi cingra.",
        "chinese": "A: 他是老師嗎？ B: 不，他不是老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/coast/5_2.mp3",
        "image": ""
      },
      {
        "amis": "A: O singsi iso cingra ? B: Caay, caayay ko singsi ako cingra.",
        "chinese": "A: 她是你的老師嗎？ B: 不，她不是我的老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/coast/5_3.mp3",
        "image": ""
      },
      {
        "amis": "A: O kahengangay ko riko’ nira? B: Caay, caayay ko kahengangay ko riko’ nira.",
        "chinese": "A: 她的衣服是紅色的嗎？ B: 不，她的衣服不是紅色的。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/coast/5_4.mp3",
        "image": ""
      },
      {
        "amis": "A: Kareteng kora ’anengan? B: Caay, caayay ka kareteng kora ’anengan.",
        "chinese": "A: 那張椅子很重嗎？ B: 不，那張椅子不重。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/coast/5_5.mp3",
        "image": ""
      },
      {
        "amis": "A: Takaraw ko ina iso ? B: Caay, caayay ka takaraw ko ina ako.",
        "chinese": "A: 你媽媽很高嗎？ B: 不，我媽媽不高。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/coast/5_6.mp3",
        "image": ""
      },
      {
        "amis": "A: Kakaya ko fokes iso ? B: Caay, caayay ka kakaya ko fokes ako.",
        "chinese": "A: 你的頭髮很長嗎？ B: 不，我的頭髮不長。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/coast/5_7.mp3",
        "image": ""
      },
      {
        "amis": "A: Malalok kora tamdaw? B: Caay, caayay ka lalok.",
        "chinese": "A: 那個人很勤勞嗎？ B: 不，他不勤勞。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/coast/5_8.mp3",
        "image": ""
      },
      {
        "amis": "A: Ira ko fa’inayan a safa iso? B: Awa, awaay ko fa’inayan a safa ako.",
        "chinese": "A: 你有弟弟嗎？ B: 不，我沒有弟弟。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/coast/5_9.mp3",
        "image": ""
      },
      {
        "amis": "A: Tata’ak kora loma’ ? B: Caay, caayay ka tata’ak kora loma’.",
        "chinese": "A: 那間房子很大嗎？ B: 不，那間房子不大。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/coast/5_10.mp3",
        "image": ""
      },
      {
        "amis": "A: Fa’edet anini a romi’ad? B: Caay, caayay ka fa’edet anini.",
        "chinese": "A: 今天熱嗎？ B: 不，今天不熱。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/coast/5_11.mp3",
        "image": ""
      },
      {
        "amis": "A: Romi’ami’ad minengneng to tilifi cangra? B: Caay, caayay ka saromi’ami’ad minengneng to tilifi cangra.",
        "chinese": "A: 他們天天看電視嗎？ B: 不，他們沒有天天看電視。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/coast/5_12.mp3",
        "image": ""
      },
      {
        "amis": "A: Romi’ami’ad misa’osi kiso? B: Caay, caayay ka saromi’ami’ad misa’osi kako.",
        "chinese": "A: 你天天讀書嗎？ B: 不，我沒有天天讀書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/coast/5_13.mp3",
        "image": ""
      },
      {
        "amis": "A: Misa’osi kiso? B: Caay, caayay pisa’osi kako.",
        "chinese": "A: 你在讀書嗎？ B: 不，我沒有在讀書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/coast/5_14.mp3",
        "image": ""
      },
      {
        "amis": "A: Ma’orad to, mihawikid to linay kiso? B: Caay, caayay pihawikid to linay kako.",
        "chinese": "A: 下雨了！你帶著雨傘嗎？ B: 不，我沒帶著雨傘。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/coast/5_15.mp3",
        "image": ""
      },
      {
        "amis": "A: Ma’orad to? B: Caay, caayay ka’orad!",
        "chinese": "A: 在下雨嗎？ B: 不，沒有在下雨！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/coast/5_16.mp3",
        "image": ""
      },
      {
        "amis": "A: Maolah tora codad cingra? B: Caay, caayay kaolah tora codad cingra.",
        "chinese": "A: 她喜歡那本書嗎？ B: 不，她不喜歡那本書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/coast/5_17.mp3",
        "image": ""
      },
      {
        "amis": "A: Ma’ilol ci amaan kiso? B: Hai, ma’ilol ci amaan kako.",
        "chinese": "A: 你很想念祖母嗎？ B: 是，我很想念祖母。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/coast/5_18.mp3",
        "image": ""
      },
      {
        "amis": "A: Romi’ami’ad tayni itini a malafi kamo? B: Caay,caayay ka saromi’ami’ad tayni a malafi kami.",
        "chinese": "A: 你們天天來這裡吃晚餐嗎？ B: 不，我們沒有天天來這裡吃晚餐。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/coast/5_19.mp3",
        "image": ""
      },
      {
        "amis": "A: Maolah micoka kora wawa? B: Caay, caayay ka olah micoka cingra.",
        "chinese": "A: 那個孩子喜歡畫圖嗎？ B: 不，他不喜歡畫圖。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/coast/5_20.mp3",
        "image": ""
      },
      {
        "amis": "A: Mafana’ a romadiw kora wawa? B: Mafokil, mafokil a romadiw cingra.",
        "chinese": "A: 那個孩子會唱歌嗎？ B: 不，他不會唱歌。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/coast/5_21.mp3",
        "image": ""
      },
      {
        "amis": "A: O tatayra i pitilidan a romadiw kamo? B: Caay, caayay ko tatayra i pitilidan a romadiw kami.",
        "chinese": "A: 你們正要去學校唱歌嗎？ B: 不，我們不是要去學校唱歌。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/coast/5_22.mp3",
        "image": ""
      },
      {
        "amis": "A: Manga’ay a masadak misalama kako to herek no lahok ? B: Tati’ih, caay kanga’ay masadak a misalama kiso.",
        "chinese": "A: 下午我可以出去玩嗎？(請求同意) B: 不，你不可以出去玩！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/coast/5_23.mp3",
        "image": ""
      },
      {
        "amis": "A: Matomes to maparo ko mami’ i fakar nangra? B: caho,caho katomes a maparo ko mami’ i fakar nangra.",
        "chinese": "A: 他們的簍子裝滿了橘子嗎？ B: 不，他們的簍子沒有裝滿橘子。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/coast/5_24.mp3",
        "image": ""
      },
      {
        "amis": "A: Aka ka foti’! B: Caho ka foti’ kako.",
        "chinese": "A: 別睡覺！ B: 我沒有在睡覺。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/coast/5_25.mp3",
        "image": ""
      },
      {
        "amis": "A: Aka fawahen! B: Mafana’ to!",
        "chinese": "A: 別開門！ B: 我知道了！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/coast/5_26.mp3",
        "image": ""
      },
      {
        "amis": "A: Aka pitawal minokay malafi yo! B: Mafana’ to!",
        "chinese": "A: 別忘記回來吃晚飯喔！ B: 我知道了！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/coast/5_27.mp3",
        "image": ""
      }
    ],
    "馬蘭阿美語": [
      {
        "amis": "A: O ekong kora haw? B: Cowa, cowa ko ekong kora.",
        "chinese": "A: 那是貓頭鷹嗎？ B: 不，那不是貓頭鷹。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/malan/5_1.mp3",
        "image": ""
      },
      {
        "amis": "A: O singsi ko mira haw? B: Cowa, cowa ko singsi ko mira.",
        "chinese": "A: 他是老師嗎？ B: 不，他不是老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/malan/5_2.mp3",
        "image": ""
      },
      {
        "amis": "A: O singsi iso ko mira haw? B: Cowa, cowa ko singsi no mako ko mira.",
        "chinese": "A: 她是你的老師嗎？ B: 不，她不是我的老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/malan/5_3.mp3",
        "image": ""
      },
      {
        "amis": "A: O kahengangay ko riko’ no mira haw? B: Cowa, cowa ko kahengangay ko riko’ no mira.",
        "chinese": "A: 她的衣服是紅色的嗎？ B: 不，她的衣服不是紅色的。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/malan/5_4.mp3",
        "image": ""
      },
      {
        "amis": "A: Karetengay kora hakenang haw? B: Cowa, ca^ka kareteng kora hakenang.",
        "chinese": "A: 那張椅子很重嗎？ B: 不，那張椅子不重。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/malan/5_5.mp3",
        "image": ""
      },
      {
        "amis": "A: Akawangay ko wina iso haw? B: Cowa, ca^ka akawang ko wina ako.",
        "chinese": "A: 你媽媽很高嗎？ B: 不，我媽媽不高。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/malan/5_6.mp3",
        "image": ""
      },
      {
        "amis": "A: kiedaway ko fokes iso haw? B: Cowa, ca^ka kiedaw ko fokes ako.",
        "chinese": "A: 你的頭髮很長嗎？ B: 不，我的頭髮不長。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/malan/5_7.mp3",
        "image": ""
      },
      {
        "amis": "A: Malalokay kora tamdaw haw? B: Cowa, ca^ka lalok ko mira.",
        "chinese": "A: 那個人很勤勞嗎？ B: 不，他不勤勞。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/malan/5_8.mp3",
        "image": ""
      },
      {
        "amis": "A: Ilaay ko fa’inayan a safa iso haw? B: Awa, awaay ko fa’inayan a safa no mako.",
        "chinese": "A: 你有弟弟嗎？ B: 不，我沒有弟弟。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/malan/5_9.mp3",
        "image": ""
      },
      {
        "amis": "A: Taangayay kora loma’ haw? B: Cowa, ca^ka taangay kora loma’.",
        "chinese": "A: 那間房子很大嗎？ B: 不，那間房子不大。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/malan/5_10.mp3",
        "image": ""
      },
      {
        "amis": "A: Fa^detay ko romiad anini haw? B: Cowa, ca^ka fa^det ko romiad anini.",
        "chinese": "A: 今天熱嗎？ B: 不，今天不熱。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/malan/5_11.mp3",
        "image": ""
      },
      {
        "amis": "A: Romiamiad minengnengay to tilifi samira haw? B: Cowa, ca^ka romiamiad minengneng to tilifi samira.",
        "chinese": "A: 他們天天看電視嗎？ B: 不，他們沒有天天看電視。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/malan/5_12.mp3",
        "image": ""
      },
      {
        "amis": "A: Romiamiad miosiay to tilid kiso haw? B: Cowa, ca^ka romiamiad a miosi to tilid kako.",
        "chinese": "A: 你天天讀書嗎？ B: 不，我沒有天天讀書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/malan/5_13.mp3",
        "image": ""
      },
      {
        "amis": "A: Miosiay to tilid kiso haw? B: Cowa, ca^ka piosi to tilid kako.",
        "chinese": "A: 你在讀書嗎？ B: 不，我沒有在讀書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/malan/5_14.mp3",
        "image": ""
      },
      {
        "amis": "A: Ma’oradayto! Sidinayay kiso haw? B: Cowa, cowa kasidinay kako.",
        "chinese": "A: 下雨了！你帶著雨傘嗎？ B: 不，我沒帶著雨傘。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/malan/5_15.mp3",
        "image": ""
      },
      {
        "amis": "A: Ma’oraday haw? B: Cowa, cowa ka ’orad!",
        "chinese": "A: 在下雨嗎？ B: 不，沒有在下雨！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/malan/5_16.mp3",
        "image": ""
      },
      {
        "amis": "A: Maolahay tora tilid ko mira haw? B: Cowa, cowa kaolah tora tilid ko mira.",
        "chinese": "A: 她喜歡那本書嗎？ B: 不，她不喜歡那本書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/malan/5_17.mp3",
        "image": ""
      },
      {
        "amis": "A: Mailolay to fofo kiso haw? B: Hay, mailolay to fofo kako .",
        "chinese": "A: 你很想念祖母嗎？ B: 是，我很想念祖母。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/malan/5_18.mp3",
        "image": ""
      },
      {
        "amis": "A: Tayniay itini malafi to romiamiad kamo haw? B: Cowa, cowa katayni itini malafi to romiamiad kami.",
        "chinese": "A: 你們天天來這裡吃晚餐嗎？ B: 不，我們沒有天天來這裡吃晚餐。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/malan/5_19.mp3",
        "image": ""
      },
      {
        "amis": "A: Maolahay miconga kora wawa haw? B: Cowa, cowa kaolah miconga ko mira.",
        "chinese": "A: 那個孩子喜歡畫圖嗎？ B: 不，他不喜歡畫圖。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/malan/5_20.mp3",
        "image": ""
      },
      {
        "amis": "A: Mafana’ay lomadiw kora wawa haw? B: Cowa, cowa kafana’ lomadiw ko mira.",
        "chinese": "A: 那個孩子會唱歌嗎？ B: 不，他不會唱歌。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/malan/5_21.mp3",
        "image": ""
      },
      {
        "amis": "A: O tatayra i kongkoan a lomadiw kamo haw? B: Cowa, cowa ko tatayra i kongkoan a lomadiw kami.",
        "chinese": "A: 你們正要去學校唱歌嗎？ B: 不，我們不是要去學校唱歌。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/malan/5_22.mp3",
        "image": ""
      },
      {
        "amis": "A: Nga’ay masadak misalama i ikor no lahok kako haw? B: Akaa, ca^ka nga’ay masadak misalama kiso!",
        "chinese": "A: 下午我可以出去玩嗎？(請求同意) B: 不，你不可以出去玩！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/malan/5_23.mp3",
        "image": ""
      },
      {
        "amis": "A: Matomesayto to asiro ko kadango nangra haw? B: Cowa, cowaho katomes to asiro ko kadango nangra.",
        "chinese": "A: 他們的簍子裝滿了橘子嗎？ B: 不，他們的簍子沒有裝滿橘子。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/malan/5_24.mp3",
        "image": ""
      },
      {
        "amis": "A: Aka kafoti’! B: Cowa kafoti’ kako.",
        "chinese": "A: 別睡覺！ B: 我沒有在睡覺。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/malan/5_25.mp3",
        "image": ""
      },
      {
        "amis": "A: Aka kafawahen! B: Hay, mafana’to kako!",
        "chinese": "A: 別開門！ B: 我知道了！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/malan/5_26.mp3",
        "image": ""
      },
      {
        "amis": "A: Aka katawal minokay a malafi yo! B: Hay, mafana’to kako!",
        "chinese": "A: 別忘記回來吃晚飯喔！ B: 我知道了！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/malan/5_27.mp3",
        "image": ""
      }
    ],
    "預設": [
      {
        "amis": "A: O ekong kiraan haw ? B: Caay, caayay ko ekong kiraan.",
        "chinese": "A: 那是貓頭鷹嗎？ B: 不，那不是貓頭鷹。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_1.mp3",
        "image": ""
      },
      {
        "amis": "A: O singsi ciira haw ? B: Caay, caay ko singsi ciira.",
        "chinese": "A: 他是老師嗎？ B: 不，他不是老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_2.mp3",
        "image": ""
      },
      {
        "amis": "A: O singsi no miso ciira haw ? B: Caay, caay ko singsi no mako ciira.",
        "chinese": "A: 她是你的老師嗎？ B: 不，她不是我的老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_3.mp3",
        "image": ""
      },
      {
        "amis": "A: O kahengangay ko fodoy nira haw ? B: Caay, caayay ko kahengangay ko fodoy nira.",
        "chinese": "A: 她的衣服是紅色的嗎？ B: 不，她的衣服不是紅色的。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_4.mp3",
        "image": ""
      },
      {
        "amis": "A: Kareteng kora a ’anengang haw ? B: Caay, caay ka kareteng kora ’anengang.",
        "chinese": "A: 那張椅子很重嗎？ B: 不，那張椅子不重。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_5.mp3",
        "image": ""
      },
      {
        "amis": "A: Takaraw ci ina no miso haw ? B: Caay, caay ka takaraw ciira.",
        "chinese": "A: 你媽媽很高嗎？ B: 不，我媽媽不高。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_6.mp3",
        "image": ""
      },
      {
        "amis": "A: Kakaya’ ko fokes no miso haw ? B: Caay, caay ka kakaya’ ko fokes no mako .",
        "chinese": "A: 你的頭髮很長嗎？ B: 不，我的頭髮不長。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_7.mp3",
        "image": ""
      },
      {
        "amis": "A: Malalok kora tamdaw haw ? B: Caay, caay kalalok ciira .",
        "chinese": "A: 那個人很勤勞嗎？ B: 不，他不勤勞。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_8.mp3",
        "image": ""
      },
      {
        "amis": "A: Ira ko fa’inayan a safa no miso haw ? B: Awaay, awaay ko fa’inayan a safa no mako.",
        "chinese": "A: 你有弟弟嗎？ B: 不，我沒有弟弟。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_9.mp3",
        "image": ""
      },
      {
        "amis": "A: Tata’ak kora loma’ haw ? B: Caay, caay ka tata’ak kora loma’.",
        "chinese": "A: 那間房子很大嗎？ B: 不，那間房子不大。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_10.mp3",
        "image": ""
      },
      {
        "amis": "A: Faedet ko romi’ad anini haw ? B: Caay, caay ka faedet anini.",
        "chinese": "A: 今天熱嗎？ B: 不，今天不熱。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_11.mp3",
        "image": ""
      },
      {
        "amis": "A: Minengneng caira to tilifi to romi’ami’ad haw ? B: Caay, caay pinengneng caira to tilifi to romi’ami’ad .",
        "chinese": "A: 他們天天看電視嗎？ B: 不，他們沒有天天看電視。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_12.mp3",
        "image": ""
      },
      {
        "amis": "A: Miasip kiso to codad to romi’ami’ad haw ? B: Caay, caay piasip kako to codad to romi’ami’ad.",
        "chinese": "A: 你天天讀書嗎？ B: 不，我沒有天天讀書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_13.mp3",
        "image": ""
      },
      {
        "amis": "A: Miasipay kiso to codad haw ? B: Caay, caayay piasip kako to codad .",
        "chinese": "A: 你在讀書嗎？ B: 不，我沒有在讀書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_14.mp3",
        "image": ""
      },
      {
        "amis": "A: Ma’oraday to ! cilinay kiso haw ? B: Caay, caay ka cilinay kako .",
        "chinese": "A: 下雨了！你帶著雨傘嗎？ B: 不，我沒帶著雨傘。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_15.mp3",
        "image": ""
      },
      {
        "amis": "A: Ma’oraday haw ? B: Caay, caay ka ’orad !",
        "chinese": "A: 在下雨嗎？ B: 不，沒有在下雨！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_16.mp3",
        "image": ""
      },
      {
        "amis": "A: Maolah ciira tora codad haw ? B: Caay, caay kaolah ciira tora codad.",
        "chinese": "A: 她喜歡那本書嗎？ B: 不，她不喜歡那本書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_17.mp3",
        "image": ""
      },
      {
        "amis": "A: Ma’ilol kiso ci amaan haw ? B: Hay, tadama’ilol kako ci amaan.",
        "chinese": "A: 你很想念祖母嗎？ B: 是，我很想念祖母。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_18.mp3",
        "image": ""
      },
      {
        "amis": "A: Tayni kamo i tini a malafi to romi’ami’ad haw ? B: Caay, caay katayni kami a malafi to romi’ami’ad.",
        "chinese": "A: 你們天天來這裡吃晚餐嗎？ B: 不，我們沒有天天來這裡吃晚餐。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_19.mp3",
        "image": ""
      },
      {
        "amis": "A: Maolah kora wawa mirenaf haw ? B: Caay, caay kaolah ciira mirenaf .",
        "chinese": "A: 那個孩子喜歡畫圖嗎？ B: 不，他不喜歡畫圖。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_20.mp3",
        "image": ""
      },
      {
        "amis": "A: Mafana’ kora wawa a romadiw haw ? B: Mafokil, mafokil ciira a romadiw.",
        "chinese": "A: 那個孩子會唱歌嗎？ B: 不，他不會唱歌。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_21.mp3",
        "image": ""
      },
      {
        "amis": "A: O tatayra kamo i picodadan a romadiw haw ? B: Caay, caay katayra kami i picodadan a romadiw.",
        "chinese": "A: 你們正要去學校唱歌嗎？ B: 不，我們不是要去學校唱歌。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_22.mp3",
        "image": ""
      },
      {
        "amis": "A: Manga’ay kako a masadak misalama i herek no lahok haw ? B: Aka a, caay kanga’ay kiso a masadak misalama.",
        "chinese": "A: 下午我可以出去玩嗎？(請求同意) B: 不，你不可以出去玩！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_23.mp3",
        "image": ""
      },
      {
        "amis": "A: Matomes to maparo ko mami’ i fakad naira haw ? B: Caay, caay katomes maparo ko mami’ i fakad naira.",
        "chinese": "A: 他們的簍子裝滿了橘子嗎？ B: 不，他們的簍子沒有裝滿橘子。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_24.mp3",
        "image": ""
      },
      {
        "amis": "A: Aka kafoti’ ! B: Caay kafoti’ kako.",
        "chinese": "A: 別睡覺！ B: 我沒有在睡覺。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_25.mp3",
        "image": ""
      },
      {
        "amis": "A: Aka pifohat ! B: Mafana’ to !",
        "chinese": "A: 別開門！ B: 我知道了！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_26.mp3",
        "image": ""
      },
      {
        "amis": "A: Aka kapawan minokay a malafi ! B: Mafana’ to !",
        "chinese": "A: 別忘記回來吃晚飯喔！ B: 我知道了！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/all_senior_practice/sentence/否定句/xiuguluan/5_27.mp3",
        "image": ""
      }
    ]
  },
  "dicePrompts": [
    "請念出句子",
    "請翻譯成中文",
    "閉上眼睛念一遍",
    "用快樂的語氣念",
    "用生氣的語氣念",
    "大聲念三遍"
  ]
}
,
"topic19": {
  "id": "topic19",
  "title": "全阿美版-字卡-生活百句_否定句_5_1到5_27",
  "gridData": {
    "a": {
      "label": "...",
      "amis": "A: O ekong kiraan haw ? B: Caay, caayay ko ekong kiraan.",
      "chinese": "A: 那是貓頭鷹嗎？ B: 不，那不是貓頭鷹。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_1.mp3",
      "image": ""
    },
    "b": {
      "label": "...",
      "amis": "A: O singsi ciira haw ? B: Caay, caay ko singsi ciira.",
      "chinese": "A: 他是老師嗎？ B: 不，他不是老師。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_2.mp3",
      "image": ""
    },
    "c": {
      "label": "...",
      "amis": "A: O singsi no miso ciira haw ? B: Caay, caay ko singsi no mako ciira.",
      "chinese": "A: 她是你的老師嗎？ B: 不，她不是我的老師。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_3.mp3",
      "image": ""
    },
    "d": {
      "label": "...",
      "amis": "A: O kahengangay ko fodoy nira haw ? B: Caay, caayay ko kahengangay ko fodoy nira.",
      "chinese": "A: 她的衣服是紅色的嗎？ B: 不，她的衣服不是紅色的。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_4.mp3",
      "image": ""
    },
    "e": {
      "label": "...",
      "amis": "A: Kareteng kora a ’anengang haw ? B: Caay, caay ka kareteng kora ’anengang.",
      "chinese": "A: 那張椅子很重嗎？ B: 不，那張椅子不重。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_5.mp3",
      "image": ""
    },
    "f": {
      "label": "...",
      "amis": "A: Takaraw ci ina no miso haw ? B: Caay, caay ka takaraw ciira.",
      "chinese": "A: 你媽媽很高嗎？ B: 不，我媽媽不高。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_6.mp3",
      "image": ""
    },
    "g": {
      "label": "...",
      "amis": "A: Kakaya’ ko fokes no miso haw ? B: Caay, caay ka kakaya’ ko fokes no mako .",
      "chinese": "A: 你的頭髮很長嗎？ B: 不，我的頭髮不長。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_7.mp3",
      "image": ""
    },
    "h": {
      "label": "...",
      "amis": "A: Malalok kora tamdaw haw ? B: Caay, caay kalalok ciira .",
      "chinese": "A: 那個人很勤勞嗎？ B: 不，他不勤勞。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_8.mp3",
      "image": ""
    },
    "i": {
      "label": "...",
      "amis": "A: Ira ko fa’inayan a safa no miso haw ? B: Awaay, awaay ko fa’inayan a safa no mako.",
      "chinese": "A: 你有弟弟嗎？ B: 不，我沒有弟弟。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_9.mp3",
      "image": ""
    },
    "j": {
      "label": "...",
      "amis": "A: Tata’ak kora loma’ haw ? B: Caay, caay ka tata’ak kora loma’.",
      "chinese": "A: 那間房子很大嗎？ B: 不，那間房子不大。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_10.mp3",
      "image": ""
    },
    "o": {
      "label": "...",
      "amis": "A: Faedet ko romi’ad anini haw ? B: Caay, caay ka faedet anini.",
      "chinese": "A: 今天熱嗎？ B: 不，今天不熱。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_11.mp3",
      "image": ""
    },
    "p": {
      "label": "...",
      "amis": "A: Minengneng caira to tilifi to romi’ami’ad haw ? B: Caay, caay pinengneng caira to tilifi to romi’ami’ad .",
      "chinese": "A: 他們天天看電視嗎？ B: 不，他們沒有天天看電視。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_12.mp3",
      "image": ""
    },
    "q": {
      "label": "...",
      "amis": "A: Miasip kiso to codad to romi’ami’ad haw ? B: Caay, caay piasip kako to codad to romi’ami’ad.",
      "chinese": "A: 你天天讀書嗎？ B: 不，我沒有天天讀書。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_13.mp3",
      "image": ""
    },
    "r": {
      "label": "...",
      "amis": "A: Miasipay kiso to codad haw ? B: Caay, caayay piasip kako to codad .",
      "chinese": "A: 你在讀書嗎？ B: 不，我沒有在讀書。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_14.mp3",
      "image": ""
    },
    "s": {
      "label": "...",
      "amis": "A: Ma’oraday to ! cilinay kiso haw ? B: Caay, caay ka cilinay kako .",
      "chinese": "A: 下雨了！你帶著雨傘嗎？ B: 不，我沒帶著雨傘。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_15.mp3",
      "image": ""
    },
    "t": {
      "label": "...",
      "amis": "A: Ma’oraday haw ? B: Caay, caay ka ’orad !",
      "chinese": "A: 在下雨嗎？ B: 不，沒有在下雨！",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_16.mp3",
      "image": ""
    },
    "u": {
      "label": "...",
      "amis": "A: Maolah ciira tora codad haw ? B: Caay, caay kaolah ciira tora codad.",
      "chinese": "A: 她喜歡那本書嗎？ B: 不，她不喜歡那本書。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_17.mp3",
      "image": ""
    },
    "v": {
      "label": "...",
      "amis": "A: Ma’ilol kiso ci amaan haw ? B: Hay, tadama’ilol kako ci amaan.",
      "chinese": "A: 你很想念祖母嗎？ B: 是，我很想念祖母。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_18.mp3",
      "image": ""
    },
    "w": {
      "label": "...",
      "amis": "A: Tayni kamo i tini a malafi to romi’ami’ad haw ? B: Caay, caay katayni kami a malafi to romi’ami’ad.",
      "chinese": "A: 你們天天來這裡吃晚餐嗎？ B: 不，我們沒有天天來這裡吃晚餐。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_19.mp3",
      "image": ""
    },
    "x": {
      "label": "...",
      "amis": "A: Maolah kora wawa mirenaf haw ? B: Caay, caay kaolah ciira mirenaf .",
      "chinese": "A: 那個孩子喜歡畫圖嗎？ B: 不，他不喜歡畫圖。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_20.mp3",
      "image": ""
    }
  },
  "gridDataByDialect": {
    "秀姑巒阿美語": {
      "a": {
        "label": "...",
        "amis": "A: O ekong kiraan haw ? B: Caay, caayay ko ekong kiraan.",
        "chinese": "A: 那是貓頭鷹嗎？ B: 不，那不是貓頭鷹。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_1.mp3",
        "image": ""
      },
      "b": {
        "label": "...",
        "amis": "A: O singsi ciira haw ? B: Caay, caay ko singsi ciira.",
        "chinese": "A: 他是老師嗎？ B: 不，他不是老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_2.mp3",
        "image": ""
      },
      "c": {
        "label": "...",
        "amis": "A: O singsi no miso ciira haw ? B: Caay, caay ko singsi no mako ciira.",
        "chinese": "A: 她是你的老師嗎？ B: 不，她不是我的老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_3.mp3",
        "image": ""
      },
      "d": {
        "label": "...",
        "amis": "A: O kahengangay ko fodoy nira haw ? B: Caay, caayay ko kahengangay ko fodoy nira.",
        "chinese": "A: 她的衣服是紅色的嗎？ B: 不，她的衣服不是紅色的。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_4.mp3",
        "image": ""
      },
      "e": {
        "label": "...",
        "amis": "A: Kareteng kora a ’anengang haw ? B: Caay, caay ka kareteng kora ’anengang.",
        "chinese": "A: 那張椅子很重嗎？ B: 不，那張椅子不重。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_5.mp3",
        "image": ""
      },
      "f": {
        "label": "...",
        "amis": "A: Takaraw ci ina no miso haw ? B: Caay, caay ka takaraw ciira.",
        "chinese": "A: 你媽媽很高嗎？ B: 不，我媽媽不高。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_6.mp3",
        "image": ""
      },
      "g": {
        "label": "...",
        "amis": "A: Kakaya’ ko fokes no miso haw ? B: Caay, caay ka kakaya’ ko fokes no mako .",
        "chinese": "A: 你的頭髮很長嗎？ B: 不，我的頭髮不長。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_7.mp3",
        "image": ""
      },
      "h": {
        "label": "...",
        "amis": "A: Malalok kora tamdaw haw ? B: Caay, caay kalalok ciira .",
        "chinese": "A: 那個人很勤勞嗎？ B: 不，他不勤勞。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_8.mp3",
        "image": ""
      },
      "i": {
        "label": "...",
        "amis": "A: Ira ko fa’inayan a safa no miso haw ? B: Awaay, awaay ko fa’inayan a safa no mako.",
        "chinese": "A: 你有弟弟嗎？ B: 不，我沒有弟弟。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_9.mp3",
        "image": ""
      },
      "j": {
        "label": "...",
        "amis": "A: Tata’ak kora loma’ haw ? B: Caay, caay ka tata’ak kora loma’.",
        "chinese": "A: 那間房子很大嗎？ B: 不，那間房子不大。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_10.mp3",
        "image": ""
      },
      "o": {
        "label": "...",
        "amis": "A: Faedet ko romi’ad anini haw ? B: Caay, caay ka faedet anini.",
        "chinese": "A: 今天熱嗎？ B: 不，今天不熱。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_11.mp3",
        "image": ""
      },
      "p": {
        "label": "...",
        "amis": "A: Minengneng caira to tilifi to romi’ami’ad haw ? B: Caay, caay pinengneng caira to tilifi to romi’ami’ad .",
        "chinese": "A: 他們天天看電視嗎？ B: 不，他們沒有天天看電視。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_12.mp3",
        "image": ""
      },
      "q": {
        "label": "...",
        "amis": "A: Miasip kiso to codad to romi’ami’ad haw ? B: Caay, caay piasip kako to codad to romi’ami’ad.",
        "chinese": "A: 你天天讀書嗎？ B: 不，我沒有天天讀書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_13.mp3",
        "image": ""
      },
      "r": {
        "label": "...",
        "amis": "A: Miasipay kiso to codad haw ? B: Caay, caayay piasip kako to codad .",
        "chinese": "A: 你在讀書嗎？ B: 不，我沒有在讀書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_14.mp3",
        "image": ""
      },
      "s": {
        "label": "...",
        "amis": "A: Ma’oraday to ! cilinay kiso haw ? B: Caay, caay ka cilinay kako .",
        "chinese": "A: 下雨了！你帶著雨傘嗎？ B: 不，我沒帶著雨傘。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_15.mp3",
        "image": ""
      },
      "t": {
        "label": "...",
        "amis": "A: Ma’oraday haw ? B: Caay, caay ka ’orad !",
        "chinese": "A: 在下雨嗎？ B: 不，沒有在下雨！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_16.mp3",
        "image": ""
      },
      "u": {
        "label": "...",
        "amis": "A: Maolah ciira tora codad haw ? B: Caay, caay kaolah ciira tora codad.",
        "chinese": "A: 她喜歡那本書嗎？ B: 不，她不喜歡那本書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_17.mp3",
        "image": ""
      },
      "v": {
        "label": "...",
        "amis": "A: Ma’ilol kiso ci amaan haw ? B: Hay, tadama’ilol kako ci amaan.",
        "chinese": "A: 你很想念祖母嗎？ B: 是，我很想念祖母。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_18.mp3",
        "image": ""
      },
      "w": {
        "label": "...",
        "amis": "A: Tayni kamo i tini a malafi to romi’ami’ad haw ? B: Caay, caay katayni kami a malafi to romi’ami’ad.",
        "chinese": "A: 你們天天來這裡吃晚餐嗎？ B: 不，我們沒有天天來這裡吃晚餐。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_19.mp3",
        "image": ""
      },
      "x": {
        "label": "...",
        "amis": "A: Maolah kora wawa mirenaf haw ? B: Caay, caay kaolah ciira mirenaf .",
        "chinese": "A: 那個孩子喜歡畫圖嗎？ B: 不，他不喜歡畫圖。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_20.mp3",
        "image": ""
      }
    },
    "南勢阿美語": {
      "a": {
        "label": "...",
        "amis": "A: U tuul haw kiraan? B: Caay,caay kaw tuul kiraan.",
        "chinese": "A: 那是貓頭鷹嗎？ B: 不，那不是貓頭鷹。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/nanshi/5_1.mp3",
        "image": ""
      },
      "b": {
        "label": "...",
        "amis": "A: U pasevanaay haw cira? B: Caay,caay kaw pasevanaay cira.",
        "chinese": "A: 他是老師嗎？ B: 不，他不是老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/nanshi/5_2.mp3",
        "image": ""
      },
      "c": {
        "label": "...",
        "amis": "A: U pasevanaay haw nu misu cira? B: Caay,caay kaw pasevanaay nu maku cira.",
        "chinese": "A: 她是你的老師嗎？ B: 不，她不是我的老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/nanshi/5_3.mp3",
        "image": ""
      },
      "d": {
        "label": "...",
        "amis": "A: U lahengangay haw ku vuduy nu nira? B: Caay,caay kaw lahengangay ku vuduy nu nira.",
        "chinese": "A: 她的衣服是紅色的嗎？ B: 不，她的衣服不是紅色的。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/nanshi/5_4.mp3",
        "image": ""
      },
      "e": {
        "label": "...",
        "amis": "A: Vaeket haw kira elun? B: Caay,caay kavaeket kira elun.",
        "chinese": "A: 那張椅子很重嗎？ B: 不，那張椅子不重。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/nanshi/5_5.mp3",
        "image": ""
      },
      "f": {
        "label": "...",
        "amis": "A: Tarakaw haw ku wina nu misu? B: Caay,caay katarakaw ku wina nu maku.",
        "chinese": "A: 你媽媽很高嗎？ B: 不，我媽媽不高。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/nanshi/5_6.mp3",
        "image": ""
      },
      "g": {
        "label": "...",
        "amis": "A: Raraya’ haw ku vukes nu misu? B: Caay,caay kararaya ku vukes nu maku.",
        "chinese": "A: 你的頭髮很長嗎？ B: 不，我的頭髮不長。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/nanshi/5_7.mp3",
        "image": ""
      },
      "h": {
        "label": "...",
        "amis": "A: Malaluk haw kira tamdaw? B: Caay,caay kalaluk cira.",
        "chinese": "A: 那個人很勤勞嗎？ B: 不，他不勤勞。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/nanshi/5_8.mp3",
        "image": ""
      },
      "i": {
        "label": "...",
        "amis": "A: Ira haw ku sava nu misu tu vavainayan? B: Awaay,awaay ku sava nu maku tu vavainayan .",
        "chinese": "A: 你有弟弟嗎？ B: 不，我沒有弟弟。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/nanshi/5_9.mp3",
        "image": ""
      },
      "j": {
        "label": "...",
        "amis": "A: Tataak haw kira luma’? B: Caay,caay katataak kira luma’.",
        "chinese": "A: 那間房子很大嗎？ B: 不，那間房子不大。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/nanshi/5_10.mp3",
        "image": ""
      },
      "o": {
        "label": "...",
        "amis": "A: Caledes haw anini? B: Caay,caay kacaledes anini.",
        "chinese": "A: 今天熱嗎？ B: 不，今天不熱。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/nanshi/5_11.mp3",
        "image": ""
      },
      "p": {
        "label": "...",
        "amis": "A: Saremiremiad sa haw a mimelaw tu tilivi ku heni? B: Caay,caay kasaremiremiad sa a mimelaw tu tilivi ku heni.",
        "chinese": "A: 他們天天看電視嗎？ B: 不，他們沒有天天看電視。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/nanshi/5_12.mp3",
        "image": ""
      },
      "q": {
        "label": "...",
        "amis": "A: Saremiremiad sa haw kisu a micudad? B: Caay,caay kasaremiremiad sa kaku a micudad.",
        "chinese": "A: 你天天讀書嗎？ B: 不，我沒有天天讀書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/nanshi/5_13.mp3",
        "image": ""
      },
      "r": {
        "label": "...",
        "amis": "A: Mimelaw haw kisu tu cudad? B: Caay,caay pimelaw kaku tu cudad.",
        "chinese": "A: 你在讀書嗎？ B: 不，我沒有在讀書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/nanshi/5_14.mp3",
        "image": ""
      },
      "s": {
        "label": "...",
        "amis": "A: Maurad tu！Sicacevaren haw kisu? B: Caay,caay kasicacevaren kaku.",
        "chinese": "A: 下雨了！你帶著雨傘嗎？ B: 不，我沒帶著雨傘。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/nanshi/5_15.mp3",
        "image": ""
      },
      "t": {
        "label": "...",
        "amis": "A: Maurad tu haw? B: Caay,caay tu kaurad!",
        "chinese": "A: 在下雨嗎？ B: 不，沒有在下雨！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/nanshi/5_16.mp3",
        "image": ""
      },
      "u": {
        "label": "...",
        "amis": "A: Maulah haw cira tira cudadan? B: Caay,caay kaulah cira tira cudadan.",
        "chinese": "A: 她喜歡那本書嗎？ B: 不，她不喜歡那本書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/nanshi/5_17.mp3",
        "image": ""
      },
      "v": {
        "label": "...",
        "amis": "A: Maurun haw kisu tu vayi? B: Hay,maurun kaku tu vayi.",
        "chinese": "A: 你很想念祖母嗎？ B: 是，我很想念祖母。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/nanshi/5_18.mp3",
        "image": ""
      },
      "w": {
        "label": "...",
        "amis": "A: Saremiremiad sa haw kamu a malavi’ itini? B: Caay,caay kasaremiremiad sa kami a malavi’ itini.",
        "chinese": "A: 你們天天來這裡吃晚餐嗎？ B: 不，我們沒有天天來這裡吃晚餐。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/nanshi/5_19.mp3",
        "image": ""
      },
      "x": {
        "label": "...",
        "amis": "A: Maulah haw a mikulit kira wawa? B: Caay,caay kaulah a mikulit kira wawa.",
        "chinese": "A: 那個孩子喜歡畫圖嗎？ B: 不，他不喜歡畫圖。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/nanshi/5_20.mp3",
        "image": ""
      }
    },
    "恆春阿美語": {
      "a": {
        "label": "...",
        "amis": "A: O ^ekong koriraan haw? B: Cowa, cowa ko ^ekong kora.",
        "chinese": "A: 那是貓頭鷹嗎？ B: 不，那不是貓頭鷹。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/hengchun/5_1.mp3",
        "image": ""
      },
      "b": {
        "label": "...",
        "amis": "A: O singsi cingra haw? B: Cowa,cowa ko singsi cingra.",
        "chinese": "A: 他是老師嗎？ B: 不，他不是老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/hengchun/5_2.mp3",
        "image": ""
      },
      "c": {
        "label": "...",
        "amis": "A: O singsi iso cingra haw? B: Cowa, cowa ko singsi ako cingra.",
        "chinese": "A: 她是你的老師嗎？ B: 不，她不是我的老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/hengchun/5_3.mp3",
        "image": ""
      },
      "d": {
        "label": "...",
        "amis": "A: O kahengangay ko riko’ ningra haw? B: Cowa, cowa ko kahengangay ko riko’ ningra.",
        "chinese": "A: 她的衣服是紅色的嗎？ B: 不，她的衣服不是紅色的。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/hengchun/5_4.mp3",
        "image": ""
      },
      "e": {
        "label": "...",
        "amis": "A: Kaletengay kora ’axenan haw? B: Cowa, cowa ka kaleteng kora ’axenan.",
        "chinese": "A: 那張椅子很重嗎？ B: 不，那張椅子不重。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/hengchun/5_5.mp3",
        "image": ""
      },
      "f": {
        "label": "...",
        "amis": "A: ’Akawangay ko wina iso haw? B: Cowa, cowa ka ’akawang cingra.",
        "chinese": "A: 你媽媽很高嗎？ B: 不，我媽媽不高。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/hengchun/5_6.mp3",
        "image": ""
      },
      "g": {
        "label": "...",
        "amis": "A: Ki’edaway ko fokes no miso haw? B: Cowa, cowa ka ki’edaw ko fokes ako.",
        "chinese": "A: 你的頭髮很長嗎？ B: 不，我的頭髮不長。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/hengchun/5_7.mp3",
        "image": ""
      },
      "h": {
        "label": "...",
        "amis": "A: Malalokay kora tamdaw haw? B: Cowa,cowa ka lalok cingra.",
        "chinese": "A: 那個人很勤勞嗎？ B: 不，他不勤勞。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/hengchun/5_8.mp3",
        "image": ""
      },
      "i": {
        "label": "...",
        "amis": "A: Iraay ko fa’inayan a safa iso haw? B: Cowa, awaay ko fa’inayan a safa ako.",
        "chinese": "A: 你有弟弟嗎？ B: 不，我沒有弟弟。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/hengchun/5_9.mp3",
        "image": ""
      },
      "j": {
        "label": "...",
        "amis": "A: Ta’angayay kora loma’ haw? B: Cowa, cowa kata’angay kora loma’.",
        "chinese": "A: 那間房子很大嗎？ B: 不，那間房子不大。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/hengchun/5_10.mp3",
        "image": ""
      },
      "o": {
        "label": "...",
        "amis": "A: Fa^edet anini haw? B: Cowa, cowa kafa^edet anini.",
        "chinese": "A: 今天熱嗎？ B: 不，今天不熱。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/hengchun/5_11.mp3",
        "image": ""
      },
      "p": {
        "label": "...",
        "amis": "A: Minengneng to tilifi cangra to romi’ami’ad haw? B: Cowa, cowa pinengneng to tilifi cangra to romi’ami’ad",
        "chinese": "A: 他們天天看電視嗎？ B: 不，他們沒有天天看電視。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/hengchun/5_12.mp3",
        "image": ""
      },
      "q": {
        "label": "...",
        "amis": "A: Mitiliday kiso to romi’ami’ad haw? B: Cowa,cowa pitilid kako to romi’ami’ad.",
        "chinese": "A: 你天天讀書嗎？ B: 不，我沒有天天讀書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/hengchun/5_13.mp3",
        "image": ""
      },
      "r": {
        "label": "...",
        "amis": "A: Mitiliday kiso haw? B: Cowa, cowa pitilid kako.",
        "chinese": "A: 你在讀書嗎？ B: 不，我沒有在讀書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/hengchun/5_14.mp3",
        "image": ""
      },
      "s": {
        "label": "...",
        "amis": "A: Ma’oraday to！ cidinayay kiso haw? B: Cowa, cowa kacidinay kako.",
        "chinese": "A: 下雨了！你帶著雨傘嗎？ B: 不，我沒帶著雨傘。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/hengchun/5_15.mp3",
        "image": ""
      },
      "t": {
        "label": "...",
        "amis": "A: Ma’oraday ho haw? B: Cowa, awaay to ko’orad ano hatini.",
        "chinese": "A: 在下雨嗎？ B: 不，沒有在下雨！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/hengchun/5_16.mp3",
        "image": ""
      },
      "u": {
        "label": "...",
        "amis": "A: Maolahay cingra tora tilid haw? B: Cowa,cowa kaolah cingra tora tilid.",
        "chinese": "A: 她喜歡那本書嗎？ B: 不，她不喜歡那本書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/hengchun/5_17.mp3",
        "image": ""
      },
      "v": {
        "label": "...",
        "amis": "A: Ma’ilolay kiso ci fofoan haw? B: Hay, ma’ilolay kako ci fofoan.",
        "chinese": "A: 你很想念祖母嗎？ B: 是，我很想念祖母。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/hengchun/5_18.mp3",
        "image": ""
      },
      "w": {
        "label": "...",
        "amis": "A: Tayniay kamo to romi’ami’ad a malafi haw? B: Cowa, cowa katayni kami to romo’ami’ad a malafi .",
        "chinese": "A: 你們天天來這裡吃晚餐嗎？ B: 不，我們沒有天天來這裡吃晚餐。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/hengchun/5_19.mp3",
        "image": ""
      },
      "x": {
        "label": "...",
        "amis": "A: Maolahay kora wawa a micoka haw? B: Cowa, cowa kaolah cingra a micoka.",
        "chinese": "A: 那個孩子喜歡畫圖嗎？ B: 不，他不喜歡畫圖。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/hengchun/5_20.mp3",
        "image": ""
      }
    },
    "海岸阿美語": {
      "a": {
        "label": "...",
        "amis": "A: O ekong kora? B: Caay, caayay ko ekong kora.",
        "chinese": "A: 那是貓頭鷹嗎？ B: 不，那不是貓頭鷹。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/coast/5_1.mp3",
        "image": ""
      },
      "b": {
        "label": "...",
        "amis": "A: O singsi cingra? B: Caay, caayay ko singsi cingra.",
        "chinese": "A: 他是老師嗎？ B: 不，他不是老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/coast/5_2.mp3",
        "image": ""
      },
      "c": {
        "label": "...",
        "amis": "A: O singsi iso cingra ? B: Caay, caayay ko singsi ako cingra.",
        "chinese": "A: 她是你的老師嗎？ B: 不，她不是我的老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/coast/5_3.mp3",
        "image": ""
      },
      "d": {
        "label": "...",
        "amis": "A: O kahengangay ko riko’ nira? B: Caay, caayay ko kahengangay ko riko’ nira.",
        "chinese": "A: 她的衣服是紅色的嗎？ B: 不，她的衣服不是紅色的。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/coast/5_4.mp3",
        "image": ""
      },
      "e": {
        "label": "...",
        "amis": "A: Kareteng kora ’anengan? B: Caay, caayay ka kareteng kora ’anengan.",
        "chinese": "A: 那張椅子很重嗎？ B: 不，那張椅子不重。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/coast/5_5.mp3",
        "image": ""
      },
      "f": {
        "label": "...",
        "amis": "A: Takaraw ko ina iso ? B: Caay, caayay ka takaraw ko ina ako.",
        "chinese": "A: 你媽媽很高嗎？ B: 不，我媽媽不高。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/coast/5_6.mp3",
        "image": ""
      },
      "g": {
        "label": "...",
        "amis": "A: Kakaya ko fokes iso ? B: Caay, caayay ka kakaya ko fokes ako.",
        "chinese": "A: 你的頭髮很長嗎？ B: 不，我的頭髮不長。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/coast/5_7.mp3",
        "image": ""
      },
      "h": {
        "label": "...",
        "amis": "A: Malalok kora tamdaw? B: Caay, caayay ka lalok.",
        "chinese": "A: 那個人很勤勞嗎？ B: 不，他不勤勞。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/coast/5_8.mp3",
        "image": ""
      },
      "i": {
        "label": "...",
        "amis": "A: Ira ko fa’inayan a safa iso? B: Awa, awaay ko fa’inayan a safa ako.",
        "chinese": "A: 你有弟弟嗎？ B: 不，我沒有弟弟。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/coast/5_9.mp3",
        "image": ""
      },
      "j": {
        "label": "...",
        "amis": "A: Tata’ak kora loma’ ? B: Caay, caayay ka tata’ak kora loma’.",
        "chinese": "A: 那間房子很大嗎？ B: 不，那間房子不大。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/coast/5_10.mp3",
        "image": ""
      },
      "o": {
        "label": "...",
        "amis": "A: Fa’edet anini a romi’ad? B: Caay, caayay ka fa’edet anini.",
        "chinese": "A: 今天熱嗎？ B: 不，今天不熱。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/coast/5_11.mp3",
        "image": ""
      },
      "p": {
        "label": "...",
        "amis": "A: Romi’ami’ad minengneng to tilifi cangra? B: Caay, caayay ka saromi’ami’ad minengneng to tilifi cangra.",
        "chinese": "A: 他們天天看電視嗎？ B: 不，他們沒有天天看電視。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/coast/5_12.mp3",
        "image": ""
      },
      "q": {
        "label": "...",
        "amis": "A: Romi’ami’ad misa’osi kiso? B: Caay, caayay ka saromi’ami’ad misa’osi kako.",
        "chinese": "A: 你天天讀書嗎？ B: 不，我沒有天天讀書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/coast/5_13.mp3",
        "image": ""
      },
      "r": {
        "label": "...",
        "amis": "A: Misa’osi kiso? B: Caay, caayay pisa’osi kako.",
        "chinese": "A: 你在讀書嗎？ B: 不，我沒有在讀書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/coast/5_14.mp3",
        "image": ""
      },
      "s": {
        "label": "...",
        "amis": "A: Ma’orad to, mihawikid to linay kiso? B: Caay, caayay pihawikid to linay kako.",
        "chinese": "A: 下雨了！你帶著雨傘嗎？ B: 不，我沒帶著雨傘。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/coast/5_15.mp3",
        "image": ""
      },
      "t": {
        "label": "...",
        "amis": "A: Ma’orad to? B: Caay, caayay ka’orad!",
        "chinese": "A: 在下雨嗎？ B: 不，沒有在下雨！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/coast/5_16.mp3",
        "image": ""
      },
      "u": {
        "label": "...",
        "amis": "A: Maolah tora codad cingra? B: Caay, caayay kaolah tora codad cingra.",
        "chinese": "A: 她喜歡那本書嗎？ B: 不，她不喜歡那本書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/coast/5_17.mp3",
        "image": ""
      },
      "v": {
        "label": "...",
        "amis": "A: Ma’ilol ci amaan kiso? B: Hai, ma’ilol ci amaan kako.",
        "chinese": "A: 你很想念祖母嗎？ B: 是，我很想念祖母。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/coast/5_18.mp3",
        "image": ""
      },
      "w": {
        "label": "...",
        "amis": "A: Romi’ami’ad tayni itini a malafi kamo? B: Caay,caayay ka saromi’ami’ad tayni a malafi kami.",
        "chinese": "A: 你們天天來這裡吃晚餐嗎？ B: 不，我們沒有天天來這裡吃晚餐。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/coast/5_19.mp3",
        "image": ""
      },
      "x": {
        "label": "...",
        "amis": "A: Maolah micoka kora wawa? B: Caay, caayay ka olah micoka cingra.",
        "chinese": "A: 那個孩子喜歡畫圖嗎？ B: 不，他不喜歡畫圖。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/coast/5_20.mp3",
        "image": ""
      }
    },
    "馬蘭阿美語": {
      "a": {
        "label": "...",
        "amis": "A: O ekong kora haw? B: Cowa, cowa ko ekong kora.",
        "chinese": "A: 那是貓頭鷹嗎？ B: 不，那不是貓頭鷹。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/malan/5_1.mp3",
        "image": ""
      },
      "b": {
        "label": "...",
        "amis": "A: O singsi ko mira haw? B: Cowa, cowa ko singsi ko mira.",
        "chinese": "A: 他是老師嗎？ B: 不，他不是老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/malan/5_2.mp3",
        "image": ""
      },
      "c": {
        "label": "...",
        "amis": "A: O singsi iso ko mira haw? B: Cowa, cowa ko singsi no mako ko mira.",
        "chinese": "A: 她是你的老師嗎？ B: 不，她不是我的老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/malan/5_3.mp3",
        "image": ""
      },
      "d": {
        "label": "...",
        "amis": "A: O kahengangay ko riko’ no mira haw? B: Cowa, cowa ko kahengangay ko riko’ no mira.",
        "chinese": "A: 她的衣服是紅色的嗎？ B: 不，她的衣服不是紅色的。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/malan/5_4.mp3",
        "image": ""
      },
      "e": {
        "label": "...",
        "amis": "A: Karetengay kora hakenang haw? B: Cowa, ca^ka kareteng kora hakenang.",
        "chinese": "A: 那張椅子很重嗎？ B: 不，那張椅子不重。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/malan/5_5.mp3",
        "image": ""
      },
      "f": {
        "label": "...",
        "amis": "A: Akawangay ko wina iso haw? B: Cowa, ca^ka akawang ko wina ako.",
        "chinese": "A: 你媽媽很高嗎？ B: 不，我媽媽不高。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/malan/5_6.mp3",
        "image": ""
      },
      "g": {
        "label": "...",
        "amis": "A: kiedaway ko fokes iso haw? B: Cowa, ca^ka kiedaw ko fokes ako.",
        "chinese": "A: 你的頭髮很長嗎？ B: 不，我的頭髮不長。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/malan/5_7.mp3",
        "image": ""
      },
      "h": {
        "label": "...",
        "amis": "A: Malalokay kora tamdaw haw? B: Cowa, ca^ka lalok ko mira.",
        "chinese": "A: 那個人很勤勞嗎？ B: 不，他不勤勞。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/malan/5_8.mp3",
        "image": ""
      },
      "i": {
        "label": "...",
        "amis": "A: Ilaay ko fa’inayan a safa iso haw? B: Awa, awaay ko fa’inayan a safa no mako.",
        "chinese": "A: 你有弟弟嗎？ B: 不，我沒有弟弟。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/malan/5_9.mp3",
        "image": ""
      },
      "j": {
        "label": "...",
        "amis": "A: Taangayay kora loma’ haw? B: Cowa, ca^ka taangay kora loma’.",
        "chinese": "A: 那間房子很大嗎？ B: 不，那間房子不大。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/malan/5_10.mp3",
        "image": ""
      },
      "o": {
        "label": "...",
        "amis": "A: Fa^detay ko romiad anini haw? B: Cowa, ca^ka fa^det ko romiad anini.",
        "chinese": "A: 今天熱嗎？ B: 不，今天不熱。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/malan/5_11.mp3",
        "image": ""
      },
      "p": {
        "label": "...",
        "amis": "A: Romiamiad minengnengay to tilifi samira haw? B: Cowa, ca^ka romiamiad minengneng to tilifi samira.",
        "chinese": "A: 他們天天看電視嗎？ B: 不，他們沒有天天看電視。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/malan/5_12.mp3",
        "image": ""
      },
      "q": {
        "label": "...",
        "amis": "A: Romiamiad miosiay to tilid kiso haw? B: Cowa, ca^ka romiamiad a miosi to tilid kako.",
        "chinese": "A: 你天天讀書嗎？ B: 不，我沒有天天讀書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/malan/5_13.mp3",
        "image": ""
      },
      "r": {
        "label": "...",
        "amis": "A: Miosiay to tilid kiso haw? B: Cowa, ca^ka piosi to tilid kako.",
        "chinese": "A: 你在讀書嗎？ B: 不，我沒有在讀書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/malan/5_14.mp3",
        "image": ""
      },
      "s": {
        "label": "...",
        "amis": "A: Ma’oradayto! Sidinayay kiso haw? B: Cowa, cowa kasidinay kako.",
        "chinese": "A: 下雨了！你帶著雨傘嗎？ B: 不，我沒帶著雨傘。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/malan/5_15.mp3",
        "image": ""
      },
      "t": {
        "label": "...",
        "amis": "A: Ma’oraday haw? B: Cowa, cowa ka ’orad!",
        "chinese": "A: 在下雨嗎？ B: 不，沒有在下雨！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/malan/5_16.mp3",
        "image": ""
      },
      "u": {
        "label": "...",
        "amis": "A: Maolahay tora tilid ko mira haw? B: Cowa, cowa kaolah tora tilid ko mira.",
        "chinese": "A: 她喜歡那本書嗎？ B: 不，她不喜歡那本書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/malan/5_17.mp3",
        "image": ""
      },
      "v": {
        "label": "...",
        "amis": "A: Mailolay to fofo kiso haw? B: Hay, mailolay to fofo kako .",
        "chinese": "A: 你很想念祖母嗎？ B: 是，我很想念祖母。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/malan/5_18.mp3",
        "image": ""
      },
      "w": {
        "label": "...",
        "amis": "A: Tayniay itini malafi to romiamiad kamo haw? B: Cowa, cowa katayni itini malafi to romiamiad kami.",
        "chinese": "A: 你們天天來這裡吃晚餐嗎？ B: 不，我們沒有天天來這裡吃晚餐。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/malan/5_19.mp3",
        "image": ""
      },
      "x": {
        "label": "...",
        "amis": "A: Maolahay miconga kora wawa haw? B: Cowa, cowa kaolah miconga ko mira.",
        "chinese": "A: 那個孩子喜歡畫圖嗎？ B: 不，他不喜歡畫圖。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/malan/5_20.mp3",
        "image": ""
      }
    },
    "預設": {
      "a": {
        "label": "...",
        "amis": "A: O ekong kiraan haw ? B: Caay, caayay ko ekong kiraan.",
        "chinese": "A: 那是貓頭鷹嗎？ B: 不，那不是貓頭鷹。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_1.mp3",
        "image": ""
      },
      "b": {
        "label": "...",
        "amis": "A: O singsi ciira haw ? B: Caay, caay ko singsi ciira.",
        "chinese": "A: 他是老師嗎？ B: 不，他不是老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_2.mp3",
        "image": ""
      },
      "c": {
        "label": "...",
        "amis": "A: O singsi no miso ciira haw ? B: Caay, caay ko singsi no mako ciira.",
        "chinese": "A: 她是你的老師嗎？ B: 不，她不是我的老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_3.mp3",
        "image": ""
      },
      "d": {
        "label": "...",
        "amis": "A: O kahengangay ko fodoy nira haw ? B: Caay, caayay ko kahengangay ko fodoy nira.",
        "chinese": "A: 她的衣服是紅色的嗎？ B: 不，她的衣服不是紅色的。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_4.mp3",
        "image": ""
      },
      "e": {
        "label": "...",
        "amis": "A: Kareteng kora a ’anengang haw ? B: Caay, caay ka kareteng kora ’anengang.",
        "chinese": "A: 那張椅子很重嗎？ B: 不，那張椅子不重。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_5.mp3",
        "image": ""
      },
      "f": {
        "label": "...",
        "amis": "A: Takaraw ci ina no miso haw ? B: Caay, caay ka takaraw ciira.",
        "chinese": "A: 你媽媽很高嗎？ B: 不，我媽媽不高。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_6.mp3",
        "image": ""
      },
      "g": {
        "label": "...",
        "amis": "A: Kakaya’ ko fokes no miso haw ? B: Caay, caay ka kakaya’ ko fokes no mako .",
        "chinese": "A: 你的頭髮很長嗎？ B: 不，我的頭髮不長。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_7.mp3",
        "image": ""
      },
      "h": {
        "label": "...",
        "amis": "A: Malalok kora tamdaw haw ? B: Caay, caay kalalok ciira .",
        "chinese": "A: 那個人很勤勞嗎？ B: 不，他不勤勞。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_8.mp3",
        "image": ""
      },
      "i": {
        "label": "...",
        "amis": "A: Ira ko fa’inayan a safa no miso haw ? B: Awaay, awaay ko fa’inayan a safa no mako.",
        "chinese": "A: 你有弟弟嗎？ B: 不，我沒有弟弟。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_9.mp3",
        "image": ""
      },
      "j": {
        "label": "...",
        "amis": "A: Tata’ak kora loma’ haw ? B: Caay, caay ka tata’ak kora loma’.",
        "chinese": "A: 那間房子很大嗎？ B: 不，那間房子不大。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_10.mp3",
        "image": ""
      },
      "o": {
        "label": "...",
        "amis": "A: Faedet ko romi’ad anini haw ? B: Caay, caay ka faedet anini.",
        "chinese": "A: 今天熱嗎？ B: 不，今天不熱。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_11.mp3",
        "image": ""
      },
      "p": {
        "label": "...",
        "amis": "A: Minengneng caira to tilifi to romi’ami’ad haw ? B: Caay, caay pinengneng caira to tilifi to romi’ami’ad .",
        "chinese": "A: 他們天天看電視嗎？ B: 不，他們沒有天天看電視。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_12.mp3",
        "image": ""
      },
      "q": {
        "label": "...",
        "amis": "A: Miasip kiso to codad to romi’ami’ad haw ? B: Caay, caay piasip kako to codad to romi’ami’ad.",
        "chinese": "A: 你天天讀書嗎？ B: 不，我沒有天天讀書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_13.mp3",
        "image": ""
      },
      "r": {
        "label": "...",
        "amis": "A: Miasipay kiso to codad haw ? B: Caay, caayay piasip kako to codad .",
        "chinese": "A: 你在讀書嗎？ B: 不，我沒有在讀書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_14.mp3",
        "image": ""
      },
      "s": {
        "label": "...",
        "amis": "A: Ma’oraday to ! cilinay kiso haw ? B: Caay, caay ka cilinay kako .",
        "chinese": "A: 下雨了！你帶著雨傘嗎？ B: 不，我沒帶著雨傘。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_15.mp3",
        "image": ""
      },
      "t": {
        "label": "...",
        "amis": "A: Ma’oraday haw ? B: Caay, caay ka ’orad !",
        "chinese": "A: 在下雨嗎？ B: 不，沒有在下雨！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_16.mp3",
        "image": ""
      },
      "u": {
        "label": "...",
        "amis": "A: Maolah ciira tora codad haw ? B: Caay, caay kaolah ciira tora codad.",
        "chinese": "A: 她喜歡那本書嗎？ B: 不，她不喜歡那本書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_17.mp3",
        "image": ""
      },
      "v": {
        "label": "...",
        "amis": "A: Ma’ilol kiso ci amaan haw ? B: Hay, tadama’ilol kako ci amaan.",
        "chinese": "A: 你很想念祖母嗎？ B: 是，我很想念祖母。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_18.mp3",
        "image": ""
      },
      "w": {
        "label": "...",
        "amis": "A: Tayni kamo i tini a malafi to romi’ami’ad haw ? B: Caay, caay katayni kami a malafi to romi’ami’ad.",
        "chinese": "A: 你們天天來這裡吃晚餐嗎？ B: 不，我們沒有天天來這裡吃晚餐。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_19.mp3",
        "image": ""
      },
      "x": {
        "label": "...",
        "amis": "A: Maolah kora wawa mirenaf haw ? B: Caay, caay kaolah ciira mirenaf .",
        "chinese": "A: 那個孩子喜歡畫圖嗎？ B: 不，他不喜歡畫圖。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_20.mp3",
        "image": ""
      }
    }
  },
  "sentences": [
    {
      "amis": "A: O ekong kiraan haw ? B: Caay, caayay ko ekong kiraan.",
      "chinese": "A: 那是貓頭鷹嗎？ B: 不，那不是貓頭鷹。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_1.mp3",
      "image": ""
    },
    {
      "amis": "A: O singsi ciira haw ? B: Caay, caay ko singsi ciira.",
      "chinese": "A: 他是老師嗎？ B: 不，他不是老師。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_2.mp3",
      "image": ""
    },
    {
      "amis": "A: O singsi no miso ciira haw ? B: Caay, caay ko singsi no mako ciira.",
      "chinese": "A: 她是你的老師嗎？ B: 不，她不是我的老師。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_3.mp3",
      "image": ""
    },
    {
      "amis": "A: O kahengangay ko fodoy nira haw ? B: Caay, caayay ko kahengangay ko fodoy nira.",
      "chinese": "A: 她的衣服是紅色的嗎？ B: 不，她的衣服不是紅色的。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_4.mp3",
      "image": ""
    },
    {
      "amis": "A: Kareteng kora a ’anengang haw ? B: Caay, caay ka kareteng kora ’anengang.",
      "chinese": "A: 那張椅子很重嗎？ B: 不，那張椅子不重。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_5.mp3",
      "image": ""
    },
    {
      "amis": "A: Takaraw ci ina no miso haw ? B: Caay, caay ka takaraw ciira.",
      "chinese": "A: 你媽媽很高嗎？ B: 不，我媽媽不高。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_6.mp3",
      "image": ""
    },
    {
      "amis": "A: Kakaya’ ko fokes no miso haw ? B: Caay, caay ka kakaya’ ko fokes no mako .",
      "chinese": "A: 你的頭髮很長嗎？ B: 不，我的頭髮不長。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_7.mp3",
      "image": ""
    },
    {
      "amis": "A: Malalok kora tamdaw haw ? B: Caay, caay kalalok ciira .",
      "chinese": "A: 那個人很勤勞嗎？ B: 不，他不勤勞。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_8.mp3",
      "image": ""
    },
    {
      "amis": "A: Ira ko fa’inayan a safa no miso haw ? B: Awaay, awaay ko fa’inayan a safa no mako.",
      "chinese": "A: 你有弟弟嗎？ B: 不，我沒有弟弟。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_9.mp3",
      "image": ""
    },
    {
      "amis": "A: Tata’ak kora loma’ haw ? B: Caay, caay ka tata’ak kora loma’.",
      "chinese": "A: 那間房子很大嗎？ B: 不，那間房子不大。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_10.mp3",
      "image": ""
    },
    {
      "amis": "A: Faedet ko romi’ad anini haw ? B: Caay, caay ka faedet anini.",
      "chinese": "A: 今天熱嗎？ B: 不，今天不熱。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_11.mp3",
      "image": ""
    },
    {
      "amis": "A: Minengneng caira to tilifi to romi’ami’ad haw ? B: Caay, caay pinengneng caira to tilifi to romi’ami’ad .",
      "chinese": "A: 他們天天看電視嗎？ B: 不，他們沒有天天看電視。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_12.mp3",
      "image": ""
    },
    {
      "amis": "A: Miasip kiso to codad to romi’ami’ad haw ? B: Caay, caay piasip kako to codad to romi’ami’ad.",
      "chinese": "A: 你天天讀書嗎？ B: 不，我沒有天天讀書。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_13.mp3",
      "image": ""
    },
    {
      "amis": "A: Miasipay kiso to codad haw ? B: Caay, caayay piasip kako to codad .",
      "chinese": "A: 你在讀書嗎？ B: 不，我沒有在讀書。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_14.mp3",
      "image": ""
    },
    {
      "amis": "A: Ma’oraday to ! cilinay kiso haw ? B: Caay, caay ka cilinay kako .",
      "chinese": "A: 下雨了！你帶著雨傘嗎？ B: 不，我沒帶著雨傘。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_15.mp3",
      "image": ""
    },
    {
      "amis": "A: Ma’oraday haw ? B: Caay, caay ka ’orad !",
      "chinese": "A: 在下雨嗎？ B: 不，沒有在下雨！",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_16.mp3",
      "image": ""
    },
    {
      "amis": "A: Maolah ciira tora codad haw ? B: Caay, caay kaolah ciira tora codad.",
      "chinese": "A: 她喜歡那本書嗎？ B: 不，她不喜歡那本書。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_17.mp3",
      "image": ""
    },
    {
      "amis": "A: Ma’ilol kiso ci amaan haw ? B: Hay, tadama’ilol kako ci amaan.",
      "chinese": "A: 你很想念祖母嗎？ B: 是，我很想念祖母。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_18.mp3",
      "image": ""
    },
    {
      "amis": "A: Tayni kamo i tini a malafi to romi’ami’ad haw ? B: Caay, caay katayni kami a malafi to romi’ami’ad.",
      "chinese": "A: 你們天天來這裡吃晚餐嗎？ B: 不，我們沒有天天來這裡吃晚餐。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_19.mp3",
      "image": ""
    },
    {
      "amis": "A: Maolah kora wawa mirenaf haw ? B: Caay, caay kaolah ciira mirenaf .",
      "chinese": "A: 那個孩子喜歡畫圖嗎？ B: 不，他不喜歡畫圖。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_20.mp3",
      "image": ""
    },
    {
      "amis": "A: Mafana’ kora wawa a romadiw haw ? B: Mafokil, mafokil ciira a romadiw.",
      "chinese": "A: 那個孩子會唱歌嗎？ B: 不，他不會唱歌。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_21.mp3",
      "image": ""
    },
    {
      "amis": "A: O tatayra kamo i picodadan a romadiw haw ? B: Caay, caay katayra kami i picodadan a romadiw.",
      "chinese": "A: 你們正要去學校唱歌嗎？ B: 不，我們不是要去學校唱歌。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_22.mp3",
      "image": ""
    },
    {
      "amis": "A: Manga’ay kako a masadak misalama i herek no lahok haw ? B: Aka a, caay kanga’ay kiso a masadak misalama.",
      "chinese": "A: 下午我可以出去玩嗎？(請求同意) B: 不，你不可以出去玩！",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_23.mp3",
      "image": ""
    },
    {
      "amis": "A: Matomes to maparo ko mami’ i fakad naira haw ? B: Caay, caay katomes maparo ko mami’ i fakad naira.",
      "chinese": "A: 他們的簍子裝滿了橘子嗎？ B: 不，他們的簍子沒有裝滿橘子。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_24.mp3",
      "image": ""
    },
    {
      "amis": "A: Aka kafoti’ ! B: Caay kafoti’ kako.",
      "chinese": "A: 別睡覺！ B: 我沒有在睡覺。",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_25.mp3",
      "image": ""
    },
    {
      "amis": "A: Aka pifohat ! B: Mafana’ to !",
      "chinese": "A: 別開門！ B: 我知道了！",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_26.mp3",
      "image": ""
    },
    {
      "amis": "A: Aka kapawan minokay a malafi ! B: Mafana’ to !",
      "chinese": "A: 別忘記回來吃晚飯喔！ B: 我知道了！",
      "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_27.mp3",
      "image": ""
    }
  ],
  "sentencesByDialect": {
    "秀姑巒阿美語": [
      {
        "amis": "A: O ekong kiraan haw ? B: Caay, caayay ko ekong kiraan.",
        "chinese": "A: 那是貓頭鷹嗎？ B: 不，那不是貓頭鷹。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_1.mp3",
        "image": ""
      },
      {
        "amis": "A: O singsi ciira haw ? B: Caay, caay ko singsi ciira.",
        "chinese": "A: 他是老師嗎？ B: 不，他不是老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_2.mp3",
        "image": ""
      },
      {
        "amis": "A: O singsi no miso ciira haw ? B: Caay, caay ko singsi no mako ciira.",
        "chinese": "A: 她是你的老師嗎？ B: 不，她不是我的老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_3.mp3",
        "image": ""
      },
      {
        "amis": "A: O kahengangay ko fodoy nira haw ? B: Caay, caayay ko kahengangay ko fodoy nira.",
        "chinese": "A: 她的衣服是紅色的嗎？ B: 不，她的衣服不是紅色的。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_4.mp3",
        "image": ""
      },
      {
        "amis": "A: Kareteng kora a ’anengang haw ? B: Caay, caay ka kareteng kora ’anengang.",
        "chinese": "A: 那張椅子很重嗎？ B: 不，那張椅子不重。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_5.mp3",
        "image": ""
      },
      {
        "amis": "A: Takaraw ci ina no miso haw ? B: Caay, caay ka takaraw ciira.",
        "chinese": "A: 你媽媽很高嗎？ B: 不，我媽媽不高。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_6.mp3",
        "image": ""
      },
      {
        "amis": "A: Kakaya’ ko fokes no miso haw ? B: Caay, caay ka kakaya’ ko fokes no mako .",
        "chinese": "A: 你的頭髮很長嗎？ B: 不，我的頭髮不長。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_7.mp3",
        "image": ""
      },
      {
        "amis": "A: Malalok kora tamdaw haw ? B: Caay, caay kalalok ciira .",
        "chinese": "A: 那個人很勤勞嗎？ B: 不，他不勤勞。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_8.mp3",
        "image": ""
      },
      {
        "amis": "A: Ira ko fa’inayan a safa no miso haw ? B: Awaay, awaay ko fa’inayan a safa no mako.",
        "chinese": "A: 你有弟弟嗎？ B: 不，我沒有弟弟。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_9.mp3",
        "image": ""
      },
      {
        "amis": "A: Tata’ak kora loma’ haw ? B: Caay, caay ka tata’ak kora loma’.",
        "chinese": "A: 那間房子很大嗎？ B: 不，那間房子不大。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_10.mp3",
        "image": ""
      },
      {
        "amis": "A: Faedet ko romi’ad anini haw ? B: Caay, caay ka faedet anini.",
        "chinese": "A: 今天熱嗎？ B: 不，今天不熱。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_11.mp3",
        "image": ""
      },
      {
        "amis": "A: Minengneng caira to tilifi to romi’ami’ad haw ? B: Caay, caay pinengneng caira to tilifi to romi’ami’ad .",
        "chinese": "A: 他們天天看電視嗎？ B: 不，他們沒有天天看電視。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_12.mp3",
        "image": ""
      },
      {
        "amis": "A: Miasip kiso to codad to romi’ami’ad haw ? B: Caay, caay piasip kako to codad to romi’ami’ad.",
        "chinese": "A: 你天天讀書嗎？ B: 不，我沒有天天讀書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_13.mp3",
        "image": ""
      },
      {
        "amis": "A: Miasipay kiso to codad haw ? B: Caay, caayay piasip kako to codad .",
        "chinese": "A: 你在讀書嗎？ B: 不，我沒有在讀書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_14.mp3",
        "image": ""
      },
      {
        "amis": "A: Ma’oraday to ! cilinay kiso haw ? B: Caay, caay ka cilinay kako .",
        "chinese": "A: 下雨了！你帶著雨傘嗎？ B: 不，我沒帶著雨傘。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_15.mp3",
        "image": ""
      },
      {
        "amis": "A: Ma’oraday haw ? B: Caay, caay ka ’orad !",
        "chinese": "A: 在下雨嗎？ B: 不，沒有在下雨！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_16.mp3",
        "image": ""
      },
      {
        "amis": "A: Maolah ciira tora codad haw ? B: Caay, caay kaolah ciira tora codad.",
        "chinese": "A: 她喜歡那本書嗎？ B: 不，她不喜歡那本書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_17.mp3",
        "image": ""
      },
      {
        "amis": "A: Ma’ilol kiso ci amaan haw ? B: Hay, tadama’ilol kako ci amaan.",
        "chinese": "A: 你很想念祖母嗎？ B: 是，我很想念祖母。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_18.mp3",
        "image": ""
      },
      {
        "amis": "A: Tayni kamo i tini a malafi to romi’ami’ad haw ? B: Caay, caay katayni kami a malafi to romi’ami’ad.",
        "chinese": "A: 你們天天來這裡吃晚餐嗎？ B: 不，我們沒有天天來這裡吃晚餐。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_19.mp3",
        "image": ""
      },
      {
        "amis": "A: Maolah kora wawa mirenaf haw ? B: Caay, caay kaolah ciira mirenaf .",
        "chinese": "A: 那個孩子喜歡畫圖嗎？ B: 不，他不喜歡畫圖。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_20.mp3",
        "image": ""
      },
      {
        "amis": "A: Mafana’ kora wawa a romadiw haw ? B: Mafokil, mafokil ciira a romadiw.",
        "chinese": "A: 那個孩子會唱歌嗎？ B: 不，他不會唱歌。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_21.mp3",
        "image": ""
      },
      {
        "amis": "A: O tatayra kamo i picodadan a romadiw haw ? B: Caay, caay katayra kami i picodadan a romadiw.",
        "chinese": "A: 你們正要去學校唱歌嗎？ B: 不，我們不是要去學校唱歌。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_22.mp3",
        "image": ""
      },
      {
        "amis": "A: Manga’ay kako a masadak misalama i herek no lahok haw ? B: Aka a, caay kanga’ay kiso a masadak misalama.",
        "chinese": "A: 下午我可以出去玩嗎？(請求同意) B: 不，你不可以出去玩！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_23.mp3",
        "image": ""
      },
      {
        "amis": "A: Matomes to maparo ko mami’ i fakad naira haw ? B: Caay, caay katomes maparo ko mami’ i fakad naira.",
        "chinese": "A: 他們的簍子裝滿了橘子嗎？ B: 不，他們的簍子沒有裝滿橘子。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_24.mp3",
        "image": ""
      },
      {
        "amis": "A: Aka kafoti’ ! B: Caay kafoti’ kako.",
        "chinese": "A: 別睡覺！ B: 我沒有在睡覺。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_25.mp3",
        "image": ""
      },
      {
        "amis": "A: Aka pifohat ! B: Mafana’ to !",
        "chinese": "A: 別開門！ B: 我知道了！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_26.mp3",
        "image": ""
      },
      {
        "amis": "A: Aka kapawan minokay a malafi ! B: Mafana’ to !",
        "chinese": "A: 別忘記回來吃晚飯喔！ B: 我知道了！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_27.mp3",
        "image": ""
      }
    ],
    "南勢阿美語": [
      {
        "amis": "A: U tuul haw kiraan? B: Caay,caay kaw tuul kiraan.",
        "chinese": "A: 那是貓頭鷹嗎？ B: 不，那不是貓頭鷹。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/nanshi/5_1.mp3",
        "image": ""
      },
      {
        "amis": "A: U pasevanaay haw cira? B: Caay,caay kaw pasevanaay cira.",
        "chinese": "A: 他是老師嗎？ B: 不，他不是老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/nanshi/5_2.mp3",
        "image": ""
      },
      {
        "amis": "A: U pasevanaay haw nu misu cira? B: Caay,caay kaw pasevanaay nu maku cira.",
        "chinese": "A: 她是你的老師嗎？ B: 不，她不是我的老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/nanshi/5_3.mp3",
        "image": ""
      },
      {
        "amis": "A: U lahengangay haw ku vuduy nu nira? B: Caay,caay kaw lahengangay ku vuduy nu nira.",
        "chinese": "A: 她的衣服是紅色的嗎？ B: 不，她的衣服不是紅色的。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/nanshi/5_4.mp3",
        "image": ""
      },
      {
        "amis": "A: Vaeket haw kira elun? B: Caay,caay kavaeket kira elun.",
        "chinese": "A: 那張椅子很重嗎？ B: 不，那張椅子不重。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/nanshi/5_5.mp3",
        "image": ""
      },
      {
        "amis": "A: Tarakaw haw ku wina nu misu? B: Caay,caay katarakaw ku wina nu maku.",
        "chinese": "A: 你媽媽很高嗎？ B: 不，我媽媽不高。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/nanshi/5_6.mp3",
        "image": ""
      },
      {
        "amis": "A: Raraya’ haw ku vukes nu misu? B: Caay,caay kararaya ku vukes nu maku.",
        "chinese": "A: 你的頭髮很長嗎？ B: 不，我的頭髮不長。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/nanshi/5_7.mp3",
        "image": ""
      },
      {
        "amis": "A: Malaluk haw kira tamdaw? B: Caay,caay kalaluk cira.",
        "chinese": "A: 那個人很勤勞嗎？ B: 不，他不勤勞。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/nanshi/5_8.mp3",
        "image": ""
      },
      {
        "amis": "A: Ira haw ku sava nu misu tu vavainayan? B: Awaay,awaay ku sava nu maku tu vavainayan .",
        "chinese": "A: 你有弟弟嗎？ B: 不，我沒有弟弟。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/nanshi/5_9.mp3",
        "image": ""
      },
      {
        "amis": "A: Tataak haw kira luma’? B: Caay,caay katataak kira luma’.",
        "chinese": "A: 那間房子很大嗎？ B: 不，那間房子不大。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/nanshi/5_10.mp3",
        "image": ""
      },
      {
        "amis": "A: Caledes haw anini? B: Caay,caay kacaledes anini.",
        "chinese": "A: 今天熱嗎？ B: 不，今天不熱。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/nanshi/5_11.mp3",
        "image": ""
      },
      {
        "amis": "A: Saremiremiad sa haw a mimelaw tu tilivi ku heni? B: Caay,caay kasaremiremiad sa a mimelaw tu tilivi ku heni.",
        "chinese": "A: 他們天天看電視嗎？ B: 不，他們沒有天天看電視。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/nanshi/5_12.mp3",
        "image": ""
      },
      {
        "amis": "A: Saremiremiad sa haw kisu a micudad? B: Caay,caay kasaremiremiad sa kaku a micudad.",
        "chinese": "A: 你天天讀書嗎？ B: 不，我沒有天天讀書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/nanshi/5_13.mp3",
        "image": ""
      },
      {
        "amis": "A: Mimelaw haw kisu tu cudad? B: Caay,caay pimelaw kaku tu cudad.",
        "chinese": "A: 你在讀書嗎？ B: 不，我沒有在讀書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/nanshi/5_14.mp3",
        "image": ""
      },
      {
        "amis": "A: Maurad tu！Sicacevaren haw kisu? B: Caay,caay kasicacevaren kaku.",
        "chinese": "A: 下雨了！你帶著雨傘嗎？ B: 不，我沒帶著雨傘。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/nanshi/5_15.mp3",
        "image": ""
      },
      {
        "amis": "A: Maurad tu haw? B: Caay,caay tu kaurad!",
        "chinese": "A: 在下雨嗎？ B: 不，沒有在下雨！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/nanshi/5_16.mp3",
        "image": ""
      },
      {
        "amis": "A: Maulah haw cira tira cudadan? B: Caay,caay kaulah cira tira cudadan.",
        "chinese": "A: 她喜歡那本書嗎？ B: 不，她不喜歡那本書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/nanshi/5_17.mp3",
        "image": ""
      },
      {
        "amis": "A: Maurun haw kisu tu vayi? B: Hay,maurun kaku tu vayi.",
        "chinese": "A: 你很想念祖母嗎？ B: 是，我很想念祖母。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/nanshi/5_18.mp3",
        "image": ""
      },
      {
        "amis": "A: Saremiremiad sa haw kamu a malavi’ itini? B: Caay,caay kasaremiremiad sa kami a malavi’ itini.",
        "chinese": "A: 你們天天來這裡吃晚餐嗎？ B: 不，我們沒有天天來這裡吃晚餐。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/nanshi/5_19.mp3",
        "image": ""
      },
      {
        "amis": "A: Maulah haw a mikulit kira wawa? B: Caay,caay kaulah a mikulit kira wawa.",
        "chinese": "A: 那個孩子喜歡畫圖嗎？ B: 不，他不喜歡畫圖。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/nanshi/5_20.mp3",
        "image": ""
      },
      {
        "amis": "A: Mavana’ haw kira wawa a remadiw? B: Caay,mavukil a remadiw cira.",
        "chinese": "A: 那個孩子會唱歌嗎？ B: 不，他不會唱歌。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/nanshi/5_21.mp3",
        "image": ""
      },
      {
        "amis": "A: A tayra haw kamu i cacudadan a remadiw ? B: Caay,caay katayra kami i cacudadan a remadiw.",
        "chinese": "A: 你們要去學校唱歌嗎？ B: 不，我們不是要去學校唱歌。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/nanshi/5_22.mp3",
        "image": ""
      },
      {
        "amis": "A: I herek nu lahuk mangaay tu haw kaku a mihulul? B: Aka,akakatahekal kisu a mihulul!",
        "chinese": "A: 下午我可以出去玩嗎？(請求同意) B: 不，你不可以出去玩！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/nanshi/5_23.mp3",
        "image": ""
      },
      {
        "amis": "A: Matumes haw nu kama ku varuru nu heni? B: Caay,caay katumes nu kama ku varuru nu heni.",
        "chinese": "A: 他們的簍子裝滿了橘子嗎？ B: 不，他們的簍子沒有裝滿橘子。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/nanshi/5_24.mp3",
        "image": ""
      },
      {
        "amis": "A: Aka kavuti’！ B: Caay kavuti’ kaku.",
        "chinese": "A: 別睡覺！ B: 我沒有在睡覺。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/nanshi/5_25.mp3",
        "image": ""
      },
      {
        "amis": "A: Aka pivawah tu sasaedev! B: Mavana’ tu kaku!",
        "chinese": "A: 別開門！ B: 我知道了！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/nanshi/5_26.mp3",
        "image": ""
      },
      {
        "amis": "A: Aka kapawan a taluma’ a malavi’! B: Mavana’ tu kaku!",
        "chinese": "A: 別忘記回來吃晚飯喔！ B: 我知道了！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/nanshi/5_27.mp3",
        "image": ""
      }
    ],
    "恆春阿美語": [
      {
        "amis": "A: O ^ekong koriraan haw? B: Cowa, cowa ko ^ekong kora.",
        "chinese": "A: 那是貓頭鷹嗎？ B: 不，那不是貓頭鷹。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/hengchun/5_1.mp3",
        "image": ""
      },
      {
        "amis": "A: O singsi cingra haw? B: Cowa,cowa ko singsi cingra.",
        "chinese": "A: 他是老師嗎？ B: 不，他不是老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/hengchun/5_2.mp3",
        "image": ""
      },
      {
        "amis": "A: O singsi iso cingra haw? B: Cowa, cowa ko singsi ako cingra.",
        "chinese": "A: 她是你的老師嗎？ B: 不，她不是我的老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/hengchun/5_3.mp3",
        "image": ""
      },
      {
        "amis": "A: O kahengangay ko riko’ ningra haw? B: Cowa, cowa ko kahengangay ko riko’ ningra.",
        "chinese": "A: 她的衣服是紅色的嗎？ B: 不，她的衣服不是紅色的。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/hengchun/5_4.mp3",
        "image": ""
      },
      {
        "amis": "A: Kaletengay kora ’axenan haw? B: Cowa, cowa ka kaleteng kora ’axenan.",
        "chinese": "A: 那張椅子很重嗎？ B: 不，那張椅子不重。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/hengchun/5_5.mp3",
        "image": ""
      },
      {
        "amis": "A: ’Akawangay ko wina iso haw? B: Cowa, cowa ka ’akawang cingra.",
        "chinese": "A: 你媽媽很高嗎？ B: 不，我媽媽不高。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/hengchun/5_6.mp3",
        "image": ""
      },
      {
        "amis": "A: Ki’edaway ko fokes no miso haw? B: Cowa, cowa ka ki’edaw ko fokes ako.",
        "chinese": "A: 你的頭髮很長嗎？ B: 不，我的頭髮不長。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/hengchun/5_7.mp3",
        "image": ""
      },
      {
        "amis": "A: Malalokay kora tamdaw haw? B: Cowa,cowa ka lalok cingra.",
        "chinese": "A: 那個人很勤勞嗎？ B: 不，他不勤勞。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/hengchun/5_8.mp3",
        "image": ""
      },
      {
        "amis": "A: Iraay ko fa’inayan a safa iso haw? B: Cowa, awaay ko fa’inayan a safa ako.",
        "chinese": "A: 你有弟弟嗎？ B: 不，我沒有弟弟。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/hengchun/5_9.mp3",
        "image": ""
      },
      {
        "amis": "A: Ta’angayay kora loma’ haw? B: Cowa, cowa kata’angay kora loma’.",
        "chinese": "A: 那間房子很大嗎？ B: 不，那間房子不大。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/hengchun/5_10.mp3",
        "image": ""
      },
      {
        "amis": "A: Fa^edet anini haw? B: Cowa, cowa kafa^edet anini.",
        "chinese": "A: 今天熱嗎？ B: 不，今天不熱。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/hengchun/5_11.mp3",
        "image": ""
      },
      {
        "amis": "A: Minengneng to tilifi cangra to romi’ami’ad haw? B: Cowa, cowa pinengneng to tilifi cangra to romi’ami’ad",
        "chinese": "A: 他們天天看電視嗎？ B: 不，他們沒有天天看電視。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/hengchun/5_12.mp3",
        "image": ""
      },
      {
        "amis": "A: Mitiliday kiso to romi’ami’ad haw? B: Cowa,cowa pitilid kako to romi’ami’ad.",
        "chinese": "A: 你天天讀書嗎？ B: 不，我沒有天天讀書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/hengchun/5_13.mp3",
        "image": ""
      },
      {
        "amis": "A: Mitiliday kiso haw? B: Cowa, cowa pitilid kako.",
        "chinese": "A: 你在讀書嗎？ B: 不，我沒有在讀書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/hengchun/5_14.mp3",
        "image": ""
      },
      {
        "amis": "A: Ma’oraday to！ cidinayay kiso haw? B: Cowa, cowa kacidinay kako.",
        "chinese": "A: 下雨了！你帶著雨傘嗎？ B: 不，我沒帶著雨傘。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/hengchun/5_15.mp3",
        "image": ""
      },
      {
        "amis": "A: Ma’oraday ho haw? B: Cowa, awaay to ko’orad ano hatini.",
        "chinese": "A: 在下雨嗎？ B: 不，沒有在下雨！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/hengchun/5_16.mp3",
        "image": ""
      },
      {
        "amis": "A: Maolahay cingra tora tilid haw? B: Cowa,cowa kaolah cingra tora tilid.",
        "chinese": "A: 她喜歡那本書嗎？ B: 不，她不喜歡那本書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/hengchun/5_17.mp3",
        "image": ""
      },
      {
        "amis": "A: Ma’ilolay kiso ci fofoan haw? B: Hay, ma’ilolay kako ci fofoan.",
        "chinese": "A: 你很想念祖母嗎？ B: 是，我很想念祖母。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/hengchun/5_18.mp3",
        "image": ""
      },
      {
        "amis": "A: Tayniay kamo to romi’ami’ad a malafi haw? B: Cowa, cowa katayni kami to romo’ami’ad a malafi .",
        "chinese": "A: 你們天天來這裡吃晚餐嗎？ B: 不，我們沒有天天來這裡吃晚餐。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/hengchun/5_19.mp3",
        "image": ""
      },
      {
        "amis": "A: Maolahay kora wawa a micoka haw? B: Cowa, cowa kaolah cingra a micoka.",
        "chinese": "A: 那個孩子喜歡畫圖嗎？ B: 不，他不喜歡畫圖。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/hengchun/5_20.mp3",
        "image": ""
      },
      {
        "amis": "A: Mafana’ay kora wawa a romadiw haw? B: Cowa,cowa kafana’ a romadiw cingra.",
        "chinese": "A: 那個孩子會唱歌嗎？ B: 不，他不會唱歌。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/hengchun/5_21.mp3",
        "image": ""
      },
      {
        "amis": "A: Tatayray kamo i kongkoan a romadiw haw? B: Cowa, cowa ko tatayra kami i kongkoan a romadiw.",
        "chinese": "A: 你們正要去學校唱歌嗎？ B: 不，我們不是要去學校唱歌。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/hengchun/5_22.mp3",
        "image": ""
      },
      {
        "amis": "A: Helek no lahok nga’ay kako masadak a misalama haw? B: Cowa,cowa kanga’ay kiso masadak a misalama.",
        "chinese": "A: 下午我可以出去玩嗎？(請求同意) B: 不，你不可以出去玩！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/hengchun/5_23.mp3",
        "image": ""
      },
      {
        "amis": "A: Matomesay to ko ’asilo nangra i kakoyodan haw? B: Cowa,cowa katomes ko ’asilo i kakoyodan nangra.",
        "chinese": "A: 他們的簍子裝滿了橘子嗎？ B: 不，他們的簍子沒有裝滿橘子。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/hengchun/5_24.mp3",
        "image": ""
      },
      {
        "amis": "A: Aka kafoti’! B: Cowa kafoti’ kako.",
        "chinese": "A: 別睡覺！ B: 我沒有在睡覺。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/hengchun/5_25.mp3",
        "image": ""
      },
      {
        "amis": "A: Aka pifohat to fawahan! B: Hay, mafana’ay to kako.",
        "chinese": "A: 別開門！ B: 我知道了！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/hengchun/5_26.mp3",
        "image": ""
      },
      {
        "amis": "A: Aka katawal minokay a malafi ! B: Hay, mafana’ay to kako.",
        "chinese": "A: 別忘記回來吃晚飯喔！ B: 我知道了！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/hengchun/5_27.mp3",
        "image": ""
      }
    ],
    "海岸阿美語": [
      {
        "amis": "A: O ekong kora? B: Caay, caayay ko ekong kora.",
        "chinese": "A: 那是貓頭鷹嗎？ B: 不，那不是貓頭鷹。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/coast/5_1.mp3",
        "image": ""
      },
      {
        "amis": "A: O singsi cingra? B: Caay, caayay ko singsi cingra.",
        "chinese": "A: 他是老師嗎？ B: 不，他不是老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/coast/5_2.mp3",
        "image": ""
      },
      {
        "amis": "A: O singsi iso cingra ? B: Caay, caayay ko singsi ako cingra.",
        "chinese": "A: 她是你的老師嗎？ B: 不，她不是我的老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/coast/5_3.mp3",
        "image": ""
      },
      {
        "amis": "A: O kahengangay ko riko’ nira? B: Caay, caayay ko kahengangay ko riko’ nira.",
        "chinese": "A: 她的衣服是紅色的嗎？ B: 不，她的衣服不是紅色的。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/coast/5_4.mp3",
        "image": ""
      },
      {
        "amis": "A: Kareteng kora ’anengan? B: Caay, caayay ka kareteng kora ’anengan.",
        "chinese": "A: 那張椅子很重嗎？ B: 不，那張椅子不重。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/coast/5_5.mp3",
        "image": ""
      },
      {
        "amis": "A: Takaraw ko ina iso ? B: Caay, caayay ka takaraw ko ina ako.",
        "chinese": "A: 你媽媽很高嗎？ B: 不，我媽媽不高。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/coast/5_6.mp3",
        "image": ""
      },
      {
        "amis": "A: Kakaya ko fokes iso ? B: Caay, caayay ka kakaya ko fokes ako.",
        "chinese": "A: 你的頭髮很長嗎？ B: 不，我的頭髮不長。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/coast/5_7.mp3",
        "image": ""
      },
      {
        "amis": "A: Malalok kora tamdaw? B: Caay, caayay ka lalok.",
        "chinese": "A: 那個人很勤勞嗎？ B: 不，他不勤勞。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/coast/5_8.mp3",
        "image": ""
      },
      {
        "amis": "A: Ira ko fa’inayan a safa iso? B: Awa, awaay ko fa’inayan a safa ako.",
        "chinese": "A: 你有弟弟嗎？ B: 不，我沒有弟弟。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/coast/5_9.mp3",
        "image": ""
      },
      {
        "amis": "A: Tata’ak kora loma’ ? B: Caay, caayay ka tata’ak kora loma’.",
        "chinese": "A: 那間房子很大嗎？ B: 不，那間房子不大。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/coast/5_10.mp3",
        "image": ""
      },
      {
        "amis": "A: Fa’edet anini a romi’ad? B: Caay, caayay ka fa’edet anini.",
        "chinese": "A: 今天熱嗎？ B: 不，今天不熱。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/coast/5_11.mp3",
        "image": ""
      },
      {
        "amis": "A: Romi’ami’ad minengneng to tilifi cangra? B: Caay, caayay ka saromi’ami’ad minengneng to tilifi cangra.",
        "chinese": "A: 他們天天看電視嗎？ B: 不，他們沒有天天看電視。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/coast/5_12.mp3",
        "image": ""
      },
      {
        "amis": "A: Romi’ami’ad misa’osi kiso? B: Caay, caayay ka saromi’ami’ad misa’osi kako.",
        "chinese": "A: 你天天讀書嗎？ B: 不，我沒有天天讀書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/coast/5_13.mp3",
        "image": ""
      },
      {
        "amis": "A: Misa’osi kiso? B: Caay, caayay pisa’osi kako.",
        "chinese": "A: 你在讀書嗎？ B: 不，我沒有在讀書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/coast/5_14.mp3",
        "image": ""
      },
      {
        "amis": "A: Ma’orad to, mihawikid to linay kiso? B: Caay, caayay pihawikid to linay kako.",
        "chinese": "A: 下雨了！你帶著雨傘嗎？ B: 不，我沒帶著雨傘。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/coast/5_15.mp3",
        "image": ""
      },
      {
        "amis": "A: Ma’orad to? B: Caay, caayay ka’orad!",
        "chinese": "A: 在下雨嗎？ B: 不，沒有在下雨！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/coast/5_16.mp3",
        "image": ""
      },
      {
        "amis": "A: Maolah tora codad cingra? B: Caay, caayay kaolah tora codad cingra.",
        "chinese": "A: 她喜歡那本書嗎？ B: 不，她不喜歡那本書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/coast/5_17.mp3",
        "image": ""
      },
      {
        "amis": "A: Ma’ilol ci amaan kiso? B: Hai, ma’ilol ci amaan kako.",
        "chinese": "A: 你很想念祖母嗎？ B: 是，我很想念祖母。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/coast/5_18.mp3",
        "image": ""
      },
      {
        "amis": "A: Romi’ami’ad tayni itini a malafi kamo? B: Caay,caayay ka saromi’ami’ad tayni a malafi kami.",
        "chinese": "A: 你們天天來這裡吃晚餐嗎？ B: 不，我們沒有天天來這裡吃晚餐。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/coast/5_19.mp3",
        "image": ""
      },
      {
        "amis": "A: Maolah micoka kora wawa? B: Caay, caayay ka olah micoka cingra.",
        "chinese": "A: 那個孩子喜歡畫圖嗎？ B: 不，他不喜歡畫圖。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/coast/5_20.mp3",
        "image": ""
      },
      {
        "amis": "A: Mafana’ a romadiw kora wawa? B: Mafokil, mafokil a romadiw cingra.",
        "chinese": "A: 那個孩子會唱歌嗎？ B: 不，他不會唱歌。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/coast/5_21.mp3",
        "image": ""
      },
      {
        "amis": "A: O tatayra i pitilidan a romadiw kamo? B: Caay, caayay ko tatayra i pitilidan a romadiw kami.",
        "chinese": "A: 你們正要去學校唱歌嗎？ B: 不，我們不是要去學校唱歌。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/coast/5_22.mp3",
        "image": ""
      },
      {
        "amis": "A: Manga’ay a masadak misalama kako to herek no lahok ? B: Tati’ih, caay kanga’ay masadak a misalama kiso.",
        "chinese": "A: 下午我可以出去玩嗎？(請求同意) B: 不，你不可以出去玩！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/coast/5_23.mp3",
        "image": ""
      },
      {
        "amis": "A: Matomes to maparo ko mami’ i fakar nangra? B: caho,caho katomes a maparo ko mami’ i fakar nangra.",
        "chinese": "A: 他們的簍子裝滿了橘子嗎？ B: 不，他們的簍子沒有裝滿橘子。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/coast/5_24.mp3",
        "image": ""
      },
      {
        "amis": "A: Aka ka foti’! B: Caho ka foti’ kako.",
        "chinese": "A: 別睡覺！ B: 我沒有在睡覺。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/coast/5_25.mp3",
        "image": ""
      },
      {
        "amis": "A: Aka fawahen! B: Mafana’ to!",
        "chinese": "A: 別開門！ B: 我知道了！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/coast/5_26.mp3",
        "image": ""
      },
      {
        "amis": "A: Aka pitawal minokay malafi yo! B: Mafana’ to!",
        "chinese": "A: 別忘記回來吃晚飯喔！ B: 我知道了！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/coast/5_27.mp3",
        "image": ""
      }
    ],
    "馬蘭阿美語": [
      {
        "amis": "A: O ekong kora haw? B: Cowa, cowa ko ekong kora.",
        "chinese": "A: 那是貓頭鷹嗎？ B: 不，那不是貓頭鷹。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/malan/5_1.mp3",
        "image": ""
      },
      {
        "amis": "A: O singsi ko mira haw? B: Cowa, cowa ko singsi ko mira.",
        "chinese": "A: 他是老師嗎？ B: 不，他不是老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/malan/5_2.mp3",
        "image": ""
      },
      {
        "amis": "A: O singsi iso ko mira haw? B: Cowa, cowa ko singsi no mako ko mira.",
        "chinese": "A: 她是你的老師嗎？ B: 不，她不是我的老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/malan/5_3.mp3",
        "image": ""
      },
      {
        "amis": "A: O kahengangay ko riko’ no mira haw? B: Cowa, cowa ko kahengangay ko riko’ no mira.",
        "chinese": "A: 她的衣服是紅色的嗎？ B: 不，她的衣服不是紅色的。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/malan/5_4.mp3",
        "image": ""
      },
      {
        "amis": "A: Karetengay kora hakenang haw? B: Cowa, ca^ka kareteng kora hakenang.",
        "chinese": "A: 那張椅子很重嗎？ B: 不，那張椅子不重。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/malan/5_5.mp3",
        "image": ""
      },
      {
        "amis": "A: Akawangay ko wina iso haw? B: Cowa, ca^ka akawang ko wina ako.",
        "chinese": "A: 你媽媽很高嗎？ B: 不，我媽媽不高。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/malan/5_6.mp3",
        "image": ""
      },
      {
        "amis": "A: kiedaway ko fokes iso haw? B: Cowa, ca^ka kiedaw ko fokes ako.",
        "chinese": "A: 你的頭髮很長嗎？ B: 不，我的頭髮不長。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/malan/5_7.mp3",
        "image": ""
      },
      {
        "amis": "A: Malalokay kora tamdaw haw? B: Cowa, ca^ka lalok ko mira.",
        "chinese": "A: 那個人很勤勞嗎？ B: 不，他不勤勞。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/malan/5_8.mp3",
        "image": ""
      },
      {
        "amis": "A: Ilaay ko fa’inayan a safa iso haw? B: Awa, awaay ko fa’inayan a safa no mako.",
        "chinese": "A: 你有弟弟嗎？ B: 不，我沒有弟弟。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/malan/5_9.mp3",
        "image": ""
      },
      {
        "amis": "A: Taangayay kora loma’ haw? B: Cowa, ca^ka taangay kora loma’.",
        "chinese": "A: 那間房子很大嗎？ B: 不，那間房子不大。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/malan/5_10.mp3",
        "image": ""
      },
      {
        "amis": "A: Fa^detay ko romiad anini haw? B: Cowa, ca^ka fa^det ko romiad anini.",
        "chinese": "A: 今天熱嗎？ B: 不，今天不熱。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/malan/5_11.mp3",
        "image": ""
      },
      {
        "amis": "A: Romiamiad minengnengay to tilifi samira haw? B: Cowa, ca^ka romiamiad minengneng to tilifi samira.",
        "chinese": "A: 他們天天看電視嗎？ B: 不，他們沒有天天看電視。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/malan/5_12.mp3",
        "image": ""
      },
      {
        "amis": "A: Romiamiad miosiay to tilid kiso haw? B: Cowa, ca^ka romiamiad a miosi to tilid kako.",
        "chinese": "A: 你天天讀書嗎？ B: 不，我沒有天天讀書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/malan/5_13.mp3",
        "image": ""
      },
      {
        "amis": "A: Miosiay to tilid kiso haw? B: Cowa, ca^ka piosi to tilid kako.",
        "chinese": "A: 你在讀書嗎？ B: 不，我沒有在讀書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/malan/5_14.mp3",
        "image": ""
      },
      {
        "amis": "A: Ma’oradayto! Sidinayay kiso haw? B: Cowa, cowa kasidinay kako.",
        "chinese": "A: 下雨了！你帶著雨傘嗎？ B: 不，我沒帶著雨傘。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/malan/5_15.mp3",
        "image": ""
      },
      {
        "amis": "A: Ma’oraday haw? B: Cowa, cowa ka ’orad!",
        "chinese": "A: 在下雨嗎？ B: 不，沒有在下雨！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/malan/5_16.mp3",
        "image": ""
      },
      {
        "amis": "A: Maolahay tora tilid ko mira haw? B: Cowa, cowa kaolah tora tilid ko mira.",
        "chinese": "A: 她喜歡那本書嗎？ B: 不，她不喜歡那本書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/malan/5_17.mp3",
        "image": ""
      },
      {
        "amis": "A: Mailolay to fofo kiso haw? B: Hay, mailolay to fofo kako .",
        "chinese": "A: 你很想念祖母嗎？ B: 是，我很想念祖母。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/malan/5_18.mp3",
        "image": ""
      },
      {
        "amis": "A: Tayniay itini malafi to romiamiad kamo haw? B: Cowa, cowa katayni itini malafi to romiamiad kami.",
        "chinese": "A: 你們天天來這裡吃晚餐嗎？ B: 不，我們沒有天天來這裡吃晚餐。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/malan/5_19.mp3",
        "image": ""
      },
      {
        "amis": "A: Maolahay miconga kora wawa haw? B: Cowa, cowa kaolah miconga ko mira.",
        "chinese": "A: 那個孩子喜歡畫圖嗎？ B: 不，他不喜歡畫圖。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/malan/5_20.mp3",
        "image": ""
      },
      {
        "amis": "A: Mafana’ay lomadiw kora wawa haw? B: Cowa, cowa kafana’ lomadiw ko mira.",
        "chinese": "A: 那個孩子會唱歌嗎？ B: 不，他不會唱歌。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/malan/5_21.mp3",
        "image": ""
      },
      {
        "amis": "A: O tatayra i kongkoan a lomadiw kamo haw? B: Cowa, cowa ko tatayra i kongkoan a lomadiw kami.",
        "chinese": "A: 你們正要去學校唱歌嗎？ B: 不，我們不是要去學校唱歌。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/malan/5_22.mp3",
        "image": ""
      },
      {
        "amis": "A: Nga’ay masadak misalama i ikor no lahok kako haw? B: Akaa, ca^ka nga’ay masadak misalama kiso!",
        "chinese": "A: 下午我可以出去玩嗎？(請求同意) B: 不，你不可以出去玩！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/malan/5_23.mp3",
        "image": ""
      },
      {
        "amis": "A: Matomesayto to asiro ko kadango nangra haw? B: Cowa, cowaho katomes to asiro ko kadango nangra.",
        "chinese": "A: 他們的簍子裝滿了橘子嗎？ B: 不，他們的簍子沒有裝滿橘子。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/malan/5_24.mp3",
        "image": ""
      },
      {
        "amis": "A: Aka kafoti’! B: Cowa kafoti’ kako.",
        "chinese": "A: 別睡覺！ B: 我沒有在睡覺。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/malan/5_25.mp3",
        "image": ""
      },
      {
        "amis": "A: Aka kafawahen! B: Hay, mafana’to kako!",
        "chinese": "A: 別開門！ B: 我知道了！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/malan/5_26.mp3",
        "image": ""
      },
      {
        "amis": "A: Aka katawal minokay a malafi yo! B: Hay, mafana’to kako!",
        "chinese": "A: 別忘記回來吃晚飯喔！ B: 我知道了！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/malan/5_27.mp3",
        "image": ""
      }
    ],
    "預設": [
      {
        "amis": "A: O ekong kiraan haw ? B: Caay, caayay ko ekong kiraan.",
        "chinese": "A: 那是貓頭鷹嗎？ B: 不，那不是貓頭鷹。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_1.mp3",
        "image": ""
      },
      {
        "amis": "A: O singsi ciira haw ? B: Caay, caay ko singsi ciira.",
        "chinese": "A: 他是老師嗎？ B: 不，他不是老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_2.mp3",
        "image": ""
      },
      {
        "amis": "A: O singsi no miso ciira haw ? B: Caay, caay ko singsi no mako ciira.",
        "chinese": "A: 她是你的老師嗎？ B: 不，她不是我的老師。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_3.mp3",
        "image": ""
      },
      {
        "amis": "A: O kahengangay ko fodoy nira haw ? B: Caay, caayay ko kahengangay ko fodoy nira.",
        "chinese": "A: 她的衣服是紅色的嗎？ B: 不，她的衣服不是紅色的。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_4.mp3",
        "image": ""
      },
      {
        "amis": "A: Kareteng kora a ’anengang haw ? B: Caay, caay ka kareteng kora ’anengang.",
        "chinese": "A: 那張椅子很重嗎？ B: 不，那張椅子不重。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_5.mp3",
        "image": ""
      },
      {
        "amis": "A: Takaraw ci ina no miso haw ? B: Caay, caay ka takaraw ciira.",
        "chinese": "A: 你媽媽很高嗎？ B: 不，我媽媽不高。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_6.mp3",
        "image": ""
      },
      {
        "amis": "A: Kakaya’ ko fokes no miso haw ? B: Caay, caay ka kakaya’ ko fokes no mako .",
        "chinese": "A: 你的頭髮很長嗎？ B: 不，我的頭髮不長。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_7.mp3",
        "image": ""
      },
      {
        "amis": "A: Malalok kora tamdaw haw ? B: Caay, caay kalalok ciira .",
        "chinese": "A: 那個人很勤勞嗎？ B: 不，他不勤勞。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_8.mp3",
        "image": ""
      },
      {
        "amis": "A: Ira ko fa’inayan a safa no miso haw ? B: Awaay, awaay ko fa’inayan a safa no mako.",
        "chinese": "A: 你有弟弟嗎？ B: 不，我沒有弟弟。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_9.mp3",
        "image": ""
      },
      {
        "amis": "A: Tata’ak kora loma’ haw ? B: Caay, caay ka tata’ak kora loma’.",
        "chinese": "A: 那間房子很大嗎？ B: 不，那間房子不大。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_10.mp3",
        "image": ""
      },
      {
        "amis": "A: Faedet ko romi’ad anini haw ? B: Caay, caay ka faedet anini.",
        "chinese": "A: 今天熱嗎？ B: 不，今天不熱。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_11.mp3",
        "image": ""
      },
      {
        "amis": "A: Minengneng caira to tilifi to romi’ami’ad haw ? B: Caay, caay pinengneng caira to tilifi to romi’ami’ad .",
        "chinese": "A: 他們天天看電視嗎？ B: 不，他們沒有天天看電視。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_12.mp3",
        "image": ""
      },
      {
        "amis": "A: Miasip kiso to codad to romi’ami’ad haw ? B: Caay, caay piasip kako to codad to romi’ami’ad.",
        "chinese": "A: 你天天讀書嗎？ B: 不，我沒有天天讀書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_13.mp3",
        "image": ""
      },
      {
        "amis": "A: Miasipay kiso to codad haw ? B: Caay, caayay piasip kako to codad .",
        "chinese": "A: 你在讀書嗎？ B: 不，我沒有在讀書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_14.mp3",
        "image": ""
      },
      {
        "amis": "A: Ma’oraday to ! cilinay kiso haw ? B: Caay, caay ka cilinay kako .",
        "chinese": "A: 下雨了！你帶著雨傘嗎？ B: 不，我沒帶著雨傘。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_15.mp3",
        "image": ""
      },
      {
        "amis": "A: Ma’oraday haw ? B: Caay, caay ka ’orad !",
        "chinese": "A: 在下雨嗎？ B: 不，沒有在下雨！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_16.mp3",
        "image": ""
      },
      {
        "amis": "A: Maolah ciira tora codad haw ? B: Caay, caay kaolah ciira tora codad.",
        "chinese": "A: 她喜歡那本書嗎？ B: 不，她不喜歡那本書。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_17.mp3",
        "image": ""
      },
      {
        "amis": "A: Ma’ilol kiso ci amaan haw ? B: Hay, tadama’ilol kako ci amaan.",
        "chinese": "A: 你很想念祖母嗎？ B: 是，我很想念祖母。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_18.mp3",
        "image": ""
      },
      {
        "amis": "A: Tayni kamo i tini a malafi to romi’ami’ad haw ? B: Caay, caay katayni kami a malafi to romi’ami’ad.",
        "chinese": "A: 你們天天來這裡吃晚餐嗎？ B: 不，我們沒有天天來這裡吃晚餐。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_19.mp3",
        "image": ""
      },
      {
        "amis": "A: Maolah kora wawa mirenaf haw ? B: Caay, caay kaolah ciira mirenaf .",
        "chinese": "A: 那個孩子喜歡畫圖嗎？ B: 不，他不喜歡畫圖。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_20.mp3",
        "image": ""
      },
      {
        "amis": "A: Mafana’ kora wawa a romadiw haw ? B: Mafokil, mafokil ciira a romadiw.",
        "chinese": "A: 那個孩子會唱歌嗎？ B: 不，他不會唱歌。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_21.mp3",
        "image": ""
      },
      {
        "amis": "A: O tatayra kamo i picodadan a romadiw haw ? B: Caay, caay katayra kami i picodadan a romadiw.",
        "chinese": "A: 你們正要去學校唱歌嗎？ B: 不，我們不是要去學校唱歌。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_22.mp3",
        "image": ""
      },
      {
        "amis": "A: Manga’ay kako a masadak misalama i herek no lahok haw ? B: Aka a, caay kanga’ay kiso a masadak misalama.",
        "chinese": "A: 下午我可以出去玩嗎？(請求同意) B: 不，你不可以出去玩！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_23.mp3",
        "image": ""
      },
      {
        "amis": "A: Matomes to maparo ko mami’ i fakad naira haw ? B: Caay, caay katomes maparo ko mami’ i fakad naira.",
        "chinese": "A: 他們的簍子裝滿了橘子嗎？ B: 不，他們的簍子沒有裝滿橘子。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_24.mp3",
        "image": ""
      },
      {
        "amis": "A: Aka kafoti’ ! B: Caay kafoti’ kako.",
        "chinese": "A: 別睡覺！ B: 我沒有在睡覺。",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_25.mp3",
        "image": ""
      },
      {
        "amis": "A: Aka pifohat ! B: Mafana’ to !",
        "chinese": "A: 別開門！ B: 我知道了！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_26.mp3",
        "image": ""
      },
      {
        "amis": "A: Aka kapawan minokay a malafi ! B: Mafana’ to !",
        "chinese": "A: 別忘記回來吃晚飯喔！ B: 我知道了！",
        "sound": "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/sentence/negative/xiuguluan/5_27.mp3",
        "image": ""
      }
    ]
  },
  "dicePrompts": [
    "請念出句子",
    "請翻譯成中文",
    "閉上眼睛念一遍",
    "用快樂的語氣念",
    "用生氣的語氣念",
    "大聲念三遍"
  ]
}
};
