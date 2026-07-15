const fs = require('fs');

const storyData = {
    南勢阿美語: [
        {
            amis: "Aluman ku cavay nu maku,ira ku vavainayan , ira ku vavahiyan . Saremiad sa kami a maruyaruy a micudad , a mihulul.Kapah ku pasevanaay nu niyam, hinasuwal tu nu Pangcah a masasuwal kami.Manay maulah kami i ciraanan.",
            chinese: "我有很多朋友，有男生，也有女生。我們天天一起讀書，也一起玩耍。我們的老師很好，她常常和我們一起說族語，也一起唱歌。我們都非常喜歡她(我們的老師)。",
            sound: "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/nanshi/story_1_1.mp3",
            image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/我們這⼀班_lef8rs.jpg"
        },
        {
            amis: "U micudaday kaku, i ngata nu cacudadan ku luma’ nu maku. Rakaten nu maku a talacacudadan tu remiremiad,rakaten tu a taluma’. Dadahal ku cacudadan nu niyam, aluman aca ku micudaday, atu pasevana’ay. Kapah ku pasevana’ay nu niyam, saremiad sa a pacavay i tamiyanan a micudad, a remadiw. Hinasuwal kami tu nu Pangcah, ururam ku ulah nu maku tu cacudadan nu niyam.",
            chinese: "我是學生，我的家在我的學校附近。我天天走路去學校，也走路回家。我們的學校很大，有很多學生，也有很多老師。我們的老師都很好，他們天天和我們一起讀書，也一起唱歌。我們常常說族語。我非常喜歡我的學校。",
            sound: "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/nanshi/story_1_2.mp3",
            image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/我的學校_lhafmv.jpg"
        }
    ],
    秀姑巒阿美語: [
        {
            amis: "'Aloman ko widang no mako, ira ko fa'inayan, ira ko fafahiyan. Caay kasasiday kami malacafay a miasip to codad, malahakelong misalama ato mimaamaan. Fangcal ko singsi niyam, mararid a pasifana' i tamiyanan to sowal no Pangcah. Pasifana' aca to radiw, sakero i tamiyanan. Saka maolah kami to singsi niyam.",
            chinese: "我有很多朋友，有男生，也有女生。我們天天一起讀書，也一起玩耍。我們的老師很好，她常常和我們一起說族語，也一起唱歌。我們都非常喜歡她(我們的老師)。",
            sound: "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/xiuguluan/story_1_1.mp3",
            image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/我們這⼀班_lef8rs.jpg"
        },
        {
            amis: "O sito kako, i ngata no picodadan ko loma' niyam. Saka romakat kako a talapicodadan, minokay nani picodadan to romi'ami'ad. Tata'ak ko picodadan niyam, 'aloman ko sito ato singsi. Fangcal ko singsi niyam, maolah a micafay i tamiyanan a miasip to codad, romadiw ato masakero. Mararid aca ko singsi a pasifana' to sowal no Pangcah i tamiyanan. Maolah kami to picodadan niyam.",
            chinese: "我是學生。我的家在我的學校附近。我天天走路去學校，也走路回家。我們的學校很大，有很多學生，也有很多老師。我們的老師都很好。他們天天和我們一起讀書，也一起唱歌。我們常常說族語。我非常喜歡我的學校。",
            sound: "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/xiuguluan/story_1_2.mp3",
            image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/我的學校_lhafmv.jpg"
        }
    ],
    海岸阿美語: [
        {
            amis: "'Aloman ko widang ako,ira ko fa'inayan, ira ko fafahiyan.Romi'ami'ad malacafay misa'osi to codad kami, malacafay misalama. Fangcal ko singsi niyam,to laday cingra ato kami malacafay caciyaw to no Pangcah, malacafay a romadiw.Tadamaolah kami i cingraan.",
            chinese: "我有很多朋友，有男生，也有女生。我們天天一起讀書，也一起玩耍。我們的老師很好，她常常和我們一起說族語，也一起唱歌。我們都非常喜歡她(我們的老師)。",
            sound: "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/coast/story_1_1.mp3",
            image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/我們這⼀班_lef8rs.jpg"
        },
        {
            amis: "O mitiliday kako, i ngata no pitilidan ko loma' ako.Romi'ami'ad rakat sa kako tayra i pitilidan,minokay romakat to.Tata'ak ko pitilidan niyam, 'aloman ko mitiliday,'aloman ko singsi.Maemin fangcal ko singsi niyam,Romi'ami'ad cangra ato kami malacafay misa'osi to codad,malacafay romadiw.Tadamaolah kako to pitilidan niyam.",
            chinese: "我是學生。我的家在我的學校附近。我天天走路去學校，也走路回家。我們的學校很大，有很多學生，也有很多老師。我們的老師都很好。他們天天和我們一起讀書，也一起唱歌。我們常常說族語。我非常喜歡我的學校。",
            sound: "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/coast/story_1_2.mp3",
            image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/我的學校_lhafmv.jpg"
        }
    ],
    馬蘭阿美語: [
        {
            amis: "Alomanay ko widang ako. Ila ko fa'inayan, ila ko fafahiyan. Malacafay kami a mitilid to romiamiad, malacafay kami a misalama. O singsi niyam nga'ayay. Malalid ko mira ato tamiyanan a caciyaw to sowal no Amis, malacafay haca a lomadiw.Tadamaolah kami to singsian niyam.",
            chinese: "我有很多朋友，有男生，也有女生。我們天天一起讀書，也一起玩耍。我們的老師很好，她常常和我們一起說族語，也一起唱歌。我們都非常喜歡她(我們的老師)。",
            sound: "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/malan/story_1_1.mp3",
            image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/我們這⼀班_lef8rs.jpg"
        },
        {
            amis: "O mitiliday kako. Mangataay ko loma' niyam to kongkoan ako. Romakat kako talakongkoan to romiamiad, romakat a minokay. Taangayay ko kongkoan niyam, alomanay ko mitiliday, alomanay ko singsi. Nga'ayay maemin ko singsi niyam. Malalid pacafay tamiyanan a mitilid, pacafay haca a lomadiw. Malaliday kami a somowal to sowal no Amis. Tadamaolah kako to kongkoan ako.",
            chinese: "我是學生。我的家在我的學校附近。我天天走路去學校，也走路回家。我們的學校很大，有很多學生，也有很多老師。我們的老師都很好。他們天天和我們一起讀書，也一起唱歌。我們常常說族語。我非常喜歡我的學校。",
            sound: "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/malan/story_1_2.mp3",
            image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/我的學校_lhafmv.jpg"
        }
    ],
    恆春阿美語: [
        {
            amis: "'Aloman ko widang ako, ira ko fa'inayan, ato fafahiyan. mararid kami to romi'ami'ad mitilid, malacafay haca a misalama. nga'ayay ko singsi niyam, marariday cingra misano 'Amis somowal tamiyanan, malacecay haca kami a miraradiw. tadamaolahay kami to singsi niyam.",
            chinese: "我有很多朋友，有男生，也有女生。我們天天一起讀書，也一起玩耍。我們的老師很好，她常常和我們一起說族語，也一起唱歌。我們都非常喜歡她(我們的老師)。",
            sound: "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/hengchun/story_1_1.mp3",
            image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780782883/我們這⼀班_lef8rs.jpg"
        },
        {
            amis: "O mitiliday ho kako. ingataay no kongkoan ko loma' ako. rakat sanay kako to romi'ami'ad a tayra i kongkoan, romakat haca kako a minokay. ta'angayay ko kongkoan niyam, 'aloman ko kapot, 'aloman haca ko singsi. nga'ayay ko singsi niyam. mikapotay cangra tamiyanan malacecay mitilid, malacecay haca romadiw. mararid kami misano'Amis a somowal. tadamaolahay kami to kongkoan niyam.",
            chinese: "我是學生。我的家在我的學校附近。我天天走路去學校，也走路回家。我們的學校很大，有很多學生，也有很多老師。我們的老師都很好。他們天天和我們一起讀書，也一起唱歌。我們常常說族語。我非常喜歡我的學校。",
            sound: "https://res.cloudinary.com/dm1ksvptk/video/upload/amis/picture_talk/hengchun/story_1_2.mp3",
            image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1780783040/我的學校_lhafmv.jpg"
        }
    ]
};

function formatSentences(arr) {
    return '[\n            ' + arr.map(a => `{ "amis": "${a.amis}", "chinese": "${a.chinese}", "sound": "${a.sound}", "image": "${a.image}" }`).join(',\n            ') + '\n          ]';
}

let topicStr = `
    , story1: {
        id: "story1",
        title: "看圖說故事 1-1～1-2",
        sentences: ${formatSentences(storyData['南勢阿美語'])},
        sentencesByDialect: {
          "南勢阿美語": ${formatSentences(storyData['南勢阿美語'])},
          "秀姑巒阿美語": ${formatSentences(storyData['秀姑巒阿美語'])},
          "海岸阿美語": ${formatSentences(storyData['海岸阿美語'])},
          "馬蘭阿美語": ${formatSentences(storyData['馬蘭阿美語'])},
          "恆春阿美語": ${formatSentences(storyData['恆春阿美語'])}
        },
        dicePrompts: ["ira ko...", "ira ko..."],
        gridData: {}
    }
`;

let content = fs.readFileSync('topics.ts', 'utf8');

const endIdx = content.lastIndexOf('};');
if (endIdx !== -1) {
    content = content.substring(0, endIdx) + topicStr + '};\n';
    fs.writeFileSync('topics.ts', content);
    console.log('Appended story1 successfully!');
} else {
    console.log('Could not find the end of the TOPIC_TEMPLATES object.');
}
