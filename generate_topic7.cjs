const fs = require('fs');

const csvs = [
  { name: '南勢阿美語', file: `id,amis,chinese,image,sound,color
TITLE,Google Sheets 自訂主題範例,,,,
SENTENCES,O maan konini? (這是什麼?)|Mafana' kiso to nini? (你知道這個嗎?)|Samanen ko ngiha' nonini? (這個怎麼叫?),,,,
DICE,ira ko...|ira ko...|ira ko...,,,,
a,varu,花,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777152680/%E8%8A%B1_0_gpvoq2.png,https://web.klokah.tw/vocabulary/audio/word/1/08_09.wav,#bae6fd
b,rengus,草,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777153053/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-04-26_053648_qlkdju.png,https://web.klokah.tw/vocabulary/audio/word/1/08_20.wav,#ffe8b3
c,kilang,樹,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777155615/kilang_ox9hma.png,https://web.klokah.tw/vocabulary/audio/word/1/08_03.wav,#fb8c00
d,papah,葉子,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777153825/papah_zaxyps.png,https://web.klokah.tw/vocabulary/audio/word/1/08_06.wav,#bae6fd
e,vunga,地瓜,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777153909/%E5%9C%B0%E7%93%9C_fnjii7.png,https://web.klokah.tw/vocabulary/audio/word/1/08_56.wav,#ffe8b3
f,taviras,玉米,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777153955/%E7%8E%89%E7%B1%B3_oyyfa9.png,https://web.klokah.tw/vocabulary/audio/word/1/08_12.wav,#e63946
g,savak,稻子,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777154570/%E7%A8%BB%E5%AD%90_nblr8d.png,https://web.klokah.tw/vocabulary/audio/word/1/08_02.wav,#f48fb1
h,pawli,香蕉,https://res.cloudinary.com/dm1ksvptk/image/upload/v1769552419/%E9%A6%99%E8%95%89_skemlo.png,https://web.klokah.tw/vocabulary/audio/word/1/08_01.wav,#bae6fd
i,kama,橘子,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777154953/mami_i_ocivep.png,https://web.klokah.tw/vocabulary/audio/word/1/08_08.wav,#f48fb1
j,cudad,書,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777155060/tilid_ew1rtz.png,https://web.klokah.tw/vocabulary/audio/word/1/09_01.wav,#66bb6a
o,sapisurit,筆,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777155464/Gemini_Generated_Image_sccsjosccsjosccs_hzjlvc.png,https://web.klokah.tw/vocabulary/audio/word/1/09_06.wav,#ba68c8
p,savuric,橡皮擦,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156728/sasipasip_qhetcn.png,https://web.klokah.tw/vocabulary/audio/word/1/09_70.wav,#e63946
q,sapad,桌子,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156371/%E6%A1%8C%E5%AD%90_fcjkgu.png,https://web.klokah.tw/vocabulary/audio/word/1/09_04.wav,#ba68c8
r,elun,椅子,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156867/Gemini_Generated_Image_q46gggq46gggq46g_gwiz9l.png,https://web.klokah.tw/vocabulary/audio/word/1/09_07.wav,#ffe8b3
s,pida,錢,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156600/payso_cqkezl.png,https://web.klokah.tw/vocabulary/audio/word/1/09_02.wav,#ba68c8
t,vuduy,衣服,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156556/riko_wjbvww.png,https://web.klokah.tw/vocabulary/audio/word/1/18_02.wav,#e63946
u,cacevaren,雨傘,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777157104/dinay_qeg0rx.png,https://web.klokah.tw/vocabulary/audio/word/1/09_10.wav,#ffe8b3
v,telay/dingwa,電話,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777157306/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-04-26_064756_vpkhto.png,https://web.klokah.tw/vocabulary/audio/word/1/09_05.wav,#fdd835
w,mali,球,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777157447/Gemini_Generated_Image_3aflyv3aflyv3afl_fol4mn.png,https://web.klokah.tw/vocabulary/audio/word/1/09_03.wav,#e63946
x,tuper,帽子,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777157561/hate_lioojn.png,https://web.klokah.tw/vocabulary/audio/word/1/18_01.wav,#ffe8b3`},
  { name: '海岸阿美語', file: `id,amis,chinese,image,sound,color
TITLE,Google Sheets 自訂主題範例,,,,
SENTENCES,O maan konini? (這是什麼?)|Mafana' kiso to nini? (你知道這個嗎?)|Samanen ko ngiha' nonini? (這個怎麼叫?),,,,
DICE,ira ko...|ira ko...|ira ko...,,,,
a,hana,花,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777152680/%E8%8A%B1_0_gpvoq2.png,https://web.klokah.tw/vocabulary/audio/word/3/08_09.wav,#bae6fd
b,rengos,草,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777153053/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-04-26_053648_qlkdju.png,https://web.klokah.tw/vocabulary/audio/word/3/08_20.wav,#ffe8b3
c,kilang,樹,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777155615/kilang_ox9hma.png,https://web.klokah.tw/vocabulary/audio/word/3/08_03.wav,#fb8c00
d,papah,葉子,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777153825/papah_zaxyps.png,https://web.klokah.tw/vocabulary/audio/word/3/08_06.wav,#bae6fd
e,konga,地瓜,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777153909/%E5%9C%B0%E7%93%9C_fnjii7.png,https://web.klokah.tw/vocabulary/audio/word/3/08_56.wav,#ffe8b3
f,'ariray,玉米,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777153955/%E7%8E%89%E7%B1%B3_oyyfa9.png,https://web.klokah.tw/vocabulary/audio/word/3/08_12.wav,#e63946
g,panay,稻子,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777154570/%E7%A8%BB%E5%AD%90_nblr8d.png,https://web.klokah.tw/vocabulary/audio/word/3/08_02.wav,#f48fb1
h,pawli,香蕉,https://res.cloudinary.com/dm1ksvptk/image/upload/v1769552419/%E9%A6%99%E8%95%89_skemlo.png,https://web.klokah.tw/vocabulary/audio/word/3/08_01.wav,#bae6fd
i,mami',橘子,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777154953/mami_i_ocivep.png,https://web.klokah.tw/vocabulary/audio/word/3/08_08.wav,#f48fb1
j,codad,書,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777155060/tilid_ew1rtz.png,https://web.klokah.tw/vocabulary/audio/word/3/09_01.wav,#66bb6a
o,impic,筆,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777155464/Gemini_Generated_Image_sccsjosccsjosccs_hzjlvc.png,https://web.klokah.tw/vocabulary/audio/word/3/09_06.wav,#ba68c8
p,sararop,橡皮擦,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156728/sasipasip_qhetcn.png,https://web.klokah.tw/vocabulary/audio/word/3/09_70.wav,#e63946
q,parad,桌子,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156371/%E6%A1%8C%E5%AD%90_fcjkgu.png,https://web.klokah.tw/vocabulary/audio/word/3/09_04.wav,#ba68c8
r,'anengan,椅子,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156867/Gemini_Generated_Image_q46gggq46gggq46g_gwiz9l.png,https://web.klokah.tw/vocabulary/audio/word/3/09_07.wav,#ffe8b3
s,payso,錢,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156600/payso_cqkezl.png,https://web.klokah.tw/vocabulary/audio/word/3/09_02.wav,#ba68c8
t,riko',衣服,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156556/riko_wjbvww.png,https://web.klokah.tw/vocabulary/audio/word/3/18_02.wav,#e63946
u,linay,雨傘,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777157104/dinay_qeg0rx.png,https://web.klokah.tw/vocabulary/audio/word/3/09_10.wav,#ffe8b3
v,tingwa,電話,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777157306/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-04-26_064756_vpkhto.png,https://web.klokah.tw/vocabulary/audio/word/3/09_05.wav,#fdd835
w,mali,球,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777157447/Gemini_Generated_Image_3aflyv3aflyv3afl_fol4mn.png,https://web.klokah.tw/vocabulary/audio/word/3/09_03.wav,#e63946
x,kafong,帽子,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777157561/hate_lioojn.png,https://web.klokah.tw/vocabulary/audio/word/3/18_01.wav,#ffe8b3`},
  { name: '馬蘭阿美語', file: `id,amis,chinese,image,sound,color
TITLE,Google Sheets 自訂主題範例,,,,
SENTENCES,O maan konini? (這是什麼?)|Mafana' kiso to nini? (你知道這個嗎?)|Samanen ko ngiha' nonini? (這個怎麼叫?),,,,
DICE,ira ko...|ira ko...|ira ko...,,,,
a,falo,花,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777152680/%E8%8A%B1_0_gpvoq2.png,https://web.klokah.tw/vocabulary/audio/word/4/08_09.wav,#bae6fd
b,rengos,草,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777153053/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-04-26_053648_qlkdju.png,https://web.klokah.tw/vocabulary/audio/word/4/08_20.wav,#ffe8b3
c,kilang,樹,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777155615/kilang_ox9hma.png,https://web.klokah.tw/vocabulary/audio/word/4/08_03.wav,#fb8c00
d,papah,葉子,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777153825/papah_zaxyps.png,https://web.klokah.tw/vocabulary/audio/word/4/08_06.wav,#bae6fd
e,konga,地瓜,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777153909/%E5%9C%B0%E7%93%9C_fnjii7.png,https://web.klokah.tw/vocabulary/audio/word/4/08_56.wav,#ffe8b3
f,ariray,玉米,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777153955/%E7%8E%89%E7%B1%B3_oyyfa9.png,https://web.klokah.tw/vocabulary/audio/word/4/08_12.wav,#e63946
g,adas,稻子,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777154570/%E7%A8%BB%E5%AD%90_nblr8d.png,https://web.klokah.tw/vocabulary/audio/word/4/08_02.wav,#f48fb1
h,pawli,香蕉,https://res.cloudinary.com/dm1ksvptk/image/upload/v1769552419/%E9%A6%99%E8%95%89_skemlo.png,https://web.klokah.tw/vocabulary/audio/word/4/08_01.wav,#bae6fd
i,asilo,橘子,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777154953/mami_i_ocivep.png,https://web.klokah.tw/vocabulary/audio/word/4/08_08.wav,#f48fb1
j,tilid,書,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777155060/tilid_ew1rtz.png,https://web.klokah.tw/vocabulary/audio/word/4/09_01.wav,#66bb6a
o,impic,筆,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777155464/Gemini_Generated_Image_sccsjosccsjosccs_hzjlvc.png,https://web.klokah.tw/vocabulary/audio/word/4/09_06.wav,#ba68c8
p,sasipasip,橡皮擦,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156728/sasipasip_qhetcn.png,https://web.klokah.tw/vocabulary/audio/word/4/09_70.wav,#e63946
q,cokowi,桌子,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156371/%E6%A1%8C%E5%AD%90_fcjkgu.png,https://web.klokah.tw/vocabulary/audio/word/4/09_04.wav,#ba68c8
r,hakenang,椅子,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156867/Gemini_Generated_Image_q46gggq46gggq46g_gwiz9l.png,https://web.klokah.tw/vocabulary/audio/word/4/09_07.wav,#ffe8b3
s,payci,錢,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156600/payso_cqkezl.png,https://web.klokah.tw/vocabulary/audio/word/4/09_02.wav,#ba68c8
t,riko',衣服,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156556/riko_wjbvww.png,https://web.klokah.tw/vocabulary/audio/word/4/18_02.wav,#e63946
u,dinay,雨傘,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777157104/dinay_qeg0rx.png,https://web.klokah.tw/vocabulary/audio/word/4/09_10.wav,#ffe8b3
v,tingwa,電話,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777157306/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-04-26_064756_vpkhto.png,https://web.klokah.tw/vocabulary/audio/word/4/09_05.wav,#fdd835
w,mali,球,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777157447/Gemini_Generated_Image_3aflyv3aflyv3afl_fol4mn.png,https://web.klokah.tw/vocabulary/audio/word/4/09_03.wav,#e63946
x,kafong,帽子,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777157561/hate_lioojn.png,https://web.klokah.tw/vocabulary/audio/word/4/18_01.wav,#ffe8b3`},
  { name: '秀姑巒阿美語', file: `id,amis,chinese,image,sound,color
TITLE,Google Sheets 自訂主題範例,,,,
SENTENCES,O maan konini? (這是什麼?)|Mafana' kiso to nini? (你知道這個嗎?)|Samanen ko ngiha' nonini? (這個怎麼叫?),,,,
DICE,ira ko...|ira ko...|ira ko...,,,,
a,falo / hana,花,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777152680/%E8%8A%B1_0_gpvoq2.png,https://web.klokah.tw/vocabulary/audio/word/2/08_09.wav,#bae6fd
b,semot,草,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777153053/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-04-26_053648_qlkdju.png,https://web.klokah.tw/vocabulary/audio/word/2/08_20.wav,#ffe8b3
c,kilang ,樹,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777155615/kilang_ox9hma.png,https://web.klokah.tw/vocabulary/audio/word/2/08_03.wav,#fb8c00
d,papah ,葉子,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777153825/papah_zaxyps.png,https://web.klokah.tw/vocabulary/audio/word/2/08_06.wav,#bae6fd
e,fonga ,地瓜,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777153909/%E5%9C%B0%E7%93%9C_fnjii7.png,https://web.klokah.tw/vocabulary/audio/word/2/08_56.wav,#ffe8b3
f, 'ariray ,玉米 ,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777153955/%E7%8E%89%E7%B1%B3_oyyfa9.png,https://web.klokah.tw/vocabulary/audio/word/2/08_12.wav,#e63946
g,panay ,稻子,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777154570/%E7%A8%BB%E5%AD%90_nblr8d.png,https://web.klokah.tw/vocabulary/audio/word/2/08_02.wav,#f48fb1
h,pawli ,香蕉,https://res.cloudinary.com/dm1ksvptk/image/upload/v1769552419/%E9%A6%99%E8%95%89_skemlo.png,https://web.klokah.tw/vocabulary/audio/word/2/08_01.wav,#bae6fd
i,mami' ,橘子,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777154953/mami_i_ocivep.png,https://web.klokah.tw/vocabulary/audio/word/2/08_08.wav,#f48fb1
j,codad ,書,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777155060/tilid_ew1rtz.png,https://web.klokah.tw/vocabulary/audio/word/2/09_01.wav,#66bb6a
o,impic, 筆,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777155464/Gemini_Generated_Image_sccsjosccsjosccs_hzjlvc.png,https://web.klokah.tw/vocabulary/audio/word/2/09_06.wav,#ba68c8
p,sasisit ,橡皮擦,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156728/sasipasip_qhetcn.png,https://web.klokah.tw/vocabulary/audio/word/2/09_70.wav,#e63946
q,sapad ,桌子,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156371/%E6%A1%8C%E5%AD%90_fcjkgu.png,https://web.klokah.tw/vocabulary/audio/word/2/09_04.wav,#ba68c8
r,anengang ,椅子 ,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156867/Gemini_Generated_Image_q46gggq46gggq46g_gwiz9l.png,https://web.klokah.tw/vocabulary/audio/word/2/09_07.wav,#ffe8b3
s,pida / payso ,錢,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156600/payso_cqkezl.png,https://web.klokah.tw/vocabulary/audio/word/2/09_02.wav,#ba68c8
t, fodoy ,衣服,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156556/riko_wjbvww.png,https://web.klokah.tw/vocabulary/audio/word/2/18_02.wav,#e63946
u, linay / cacelakan ,雨傘,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777157104/dinay_qeg0rx.png,https://web.klokah.tw/vocabulary/audio/word/2/09_10.wav,#ffe8b3
v, tingwa ,電話,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777157306/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-04-26_064756_vpkhto.png,https://web.klokah.tw/vocabulary/audio/word/2/09_05.wav,#fdd835
w,mali ,球,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777157447/Gemini_Generated_Image_3aflyv3aflyv3afl_fol4mn.png,https://web.klokah.tw/vocabulary/audio/word/2/09_03.wav,#e63946
x,kafong,帽子,https://res.cloudinary.com/dm1ksvptk/image/upload/v1777157561/hate_lioojn.png,https://web.klokah.tw/vocabulary/audio/word/2/18_01.wav,#ffe8b3`}
];

const parseCsv = (csv) => {
  const lines = csv.trim().split('\n');
  const data = {};
  for (const line of lines) {
    const parts = line.split(',');
    if (parts.length < 5) continue;
    
    // a,varu,花,https...,https...
    const id = parts[0].trim();
    if (id.length === 1 && id >= 'a' && id <= 'x') {
      const amis = parts[1].trim();
      const chinese = parts[2].trim();
      const image = parts[3].trim();
      const sound = parts[4].trim();
      data[id] = { amis, chinese, image, sound };
    }
  }
  return data;
};

const result = {
  gridDataByDialect: {}
};

for (const p of csvs) {
  result.gridDataByDialect[p.name] = parseCsv(p.file);
}

const fileOutput = `
    topic7: {
        id: "topic7",
        title: "植物、物品篇",
        sentences: [
            "O maan konini? (這是什麼?)",
            "Mafana' kiso to nini? (你知道這個嗎?)",
            "Samanen ko ngiha' nonini? (這個怎麼叫?)"
        ],
        dicePrompts: ["ira ko...", "ira ko...", "ira ko..."],
        gridData: ${JSON.stringify(result.gridDataByDialect["南勢阿美語"], null, 12)},
        gridDataByDialect: ${JSON.stringify(result.gridDataByDialect, null, 12)}
    }
`;

fs.writeFileSync('topic7_output.txt', fileOutput);
