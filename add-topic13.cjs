const fs = require('fs');

const generateData = () => {
  const data = {
    "南勢阿美語": {
      a: { amis: "vunga", chinese: "地瓜", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777153909/%E5%9C%B0%E7%93%9C_fnjii7.png", sound: "https://web.klokah.tw/vocabulary/audio/word/1/08_56.wav", color: "#66bb6a" },
      b: { amis: "pawli", chinese: "香蕉", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769552419/%E9%A6%99%E8%95%89_skemlo.png", sound: "https://web.klokah.tw/vocabulary/audio/word/1/08_01.wav", color: "#4db6ac" },
      c: { amis: "papah", chinese: "葉子", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777153825/papah_zaxyps.png", sound: "https://web.klokah.tw/vocabulary/audio/word/1/08_06.wav", color: "#bae6fd" },
      d: { amis: "tevus", chinese: "甘蔗", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778952491/Gemini_Generated_Image_9dzcqy9dzcqy9dzc_tm01xb.png", sound: "https://web.klokah.tw/vocabulary/audio/word/1/08_05.wav", color: "#ffe8b3" },
      e: { amis: "tali", chinese: "芋頭", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778952586/Gemini_Generated_Image_evnpcnevnpcnevnp_iq5iz7.png", sound: "https://web.klokah.tw/vocabulary/audio/word/1/08_04.wav", color: "#fb8c00" },
      f: { amis: "taviras", chinese: "玉米", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777153955/%E7%8E%89%E7%B1%B3_oyyfa9.png", sound: "https://web.klokah.tw/vocabulary/audio/word/1/08_12.wav", color: "#e63946" },
      g: { amis: "savak", chinese: "稻穀", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777154570/%E7%A8%BB%E5%AD%90_nblr8d.png", sound: "https://web.klokah.tw/vocabulary/audio/word/1/08_02.wav", color: "#f48fb1" },
      h: { amis: "kama", chinese: "柑橘", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777154953/mami_i_ocivep.png", sound: "https://web.klokah.tw/vocabulary/audio/word/1/08_08.wav", color: "#ba68c8" },
      i: { amis: "kilang", chinese: "樹", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777155615/kilang_ox9hma.png", sound: "https://web.klokah.tw/vocabulary/audio/word/1/08_03.wav", color: "#fdd835" },
      j: { amis: "varu", chinese: "花", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777152680/%E8%8A%B1_0_gpvoq2.png", sound: "https://web.klokah.tw/vocabulary/audio/word/1/08_09.wav", color: "#ff8a65" },
      k: { amis: "cudad", chinese: "書", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777155060/tilid_ew1rtz.png", sound: "https://web.klokah.tw/vocabulary/audio/word/1/09_01.wav", color: "#bae6fd" },
      l: { amis: "pida", chinese: "錢", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156600/payso_cqkezl.png", sound: "https://web.klokah.tw/vocabulary/audio/word/1/09_02.wav", color: "#ffe8b3" },
      m: { amis: "mali", chinese: "球", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777157447/Gemini_Generated_Image_3aflyv3aflyv3afl_fol4mn.png", sound: "https://web.klokah.tw/vocabulary/audio/word/1/09_03.wav", color: "#fb8c00" },
      n: { amis: "sapad", chinese: "桌子", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156371/%E6%A1%8C%E5%AD%90_fcjkgu.png", sound: "https://web.klokah.tw/vocabulary/audio/word/1/09_04.wav", color: "#e63946" },
      o: { amis: "telay/dingwa", chinese: "電話", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777157306/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-04-26_064756_vpkhto.png", sound: "https://web.klokah.tw/vocabulary/audio/word/1/09_05.wav", color: "#f48fb1" },
      p: { amis: "sapisurit", chinese: "筆", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777155464/Gemini_Generated_Image_sccsjosccsjosccs_hzjlvc.png", sound: "https://web.klokah.tw/vocabulary/audio/word/1/09_06.wav", color: "#66bb6a" },
      q: { amis: "elun", chinese: "椅子", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156867/Gemini_Generated_Image_q46gggq46gggq46g_gwiz9l.png", sound: "https://web.klokah.tw/vocabulary/audio/word/1/09_07.wav", color: "#ba68c8" },
      r: { amis: "sapaiyu", chinese: "藥物", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778952649/Gemini_Generated_Image_zboiwszboiwszboi_d0ueaj.png", sound: "https://web.klokah.tw/vocabulary/audio/word/1/09_08.wav", color: "#fdd835" },
      s: { amis: "cacevaren", chinese: "雨傘", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777157104/dinay_qeg0rx.png", sound: "https://web.klokah.tw/vocabulary/audio/word/1/09_10.wav", color: "#4db6ac" },
      t: { amis: "savuric", chinese: "橡皮擦", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156728/sasipasip_qhetcn.png", sound: "https://web.klokah.tw/vocabulary/audio/word/1/09_70.wav", color: "#ff8a65" }
    },
    "秀姑巒阿美語": {
      a: { amis: "fonga / konga", chinese: "地瓜", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777153909/%E5%9C%B0%E7%93%9C_fnjii7.png", sound: "https://web.klokah.tw/vocabulary/audio/word/2/08_56.wav", color: "#66bb6a" },
      b: { amis: "pawli^", chinese: "香蕉", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769552419/%E9%A6%99%E8%95%89_skemlo.png", sound: "https://web.klokah.tw/vocabulary/audio/word/2/08_01.wav", color: "#4db6ac" },
      c: { amis: "papah", chinese: "葉子", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777153825/papah_zaxyps.png", sound: "https://web.klokah.tw/vocabulary/audio/word/2/08_06.wav", color: "#bae6fd" },
      d: { amis: "tefos", chinese: "甘蔗", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778952491/Gemini_Generated_Image_9dzcqy9dzcqy9dzc_tm01xb.png", sound: "https://web.klokah.tw/vocabulary/audio/word/2/08_05.wav", color: "#ffe8b3" },
      e: { amis: "tali^", chinese: "芋頭", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778952586/Gemini_Generated_Image_evnpcnevnpcnevnp_iq5iz7.png", sound: "https://web.klokah.tw/vocabulary/audio/word/2/08_04.wav", color: "#fb8c00" },
      f: { amis: "ariray", chinese: "玉米", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777153955/%E7%8E%89%E7%B1%B3_oyyfa9.png", sound: "https://web.klokah.tw/vocabulary/audio/word/2/08_12.wav", color: "#e63946" },
      g: { amis: "safak", chinese: "稻穀", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777154570/%E7%A8%BB%E5%AD%90_nblr8d.png", sound: "https://web.klokah.tw/vocabulary/audio/word/2/08_02.wav", color: "#f48fb1" },
      h: { amis: "mami^ / mami'", chinese: "柑橘", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777154953/mami_i_ocivep.png", sound: "https://web.klokah.tw/vocabulary/audio/word/2/08_08.wav", color: "#ba68c8" },
      i: { amis: "kilang", chinese: "樹", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777155615/kilang_ox9hma.png", sound: "https://web.klokah.tw/vocabulary/audio/word/2/08_03.wav", color: "#fdd835" },
      j: { amis: "rohayan", chinese: "花", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777152680/%E8%8A%B1_0_gpvoq2.png", sound: "https://web.klokah.tw/vocabulary/audio/word/2/08_09.wav", color: "#ff8a65" },
      k: { amis: "codad", chinese: "書", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777155060/tilid_ew1rtz.png", sound: "https://web.klokah.tw/vocabulary/audio/word/2/09_01.wav", color: "#bae6fd" },
      l: { amis: "pida^", chinese: "錢", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156600/payso_cqkezl.png", sound: "https://web.klokah.tw/vocabulary/audio/word/2/09_02.wav", color: "#ffe8b3" },
      m: { amis: "mali^", chinese: "球", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777157447/Gemini_Generated_Image_3aflyv3aflyv3afl_fol4mn.png", sound: "https://web.klokah.tw/vocabulary/audio/word/2/09_03.wav", color: "#fb8c00" },
      n: { amis: "sapad / cokowi / parar", chinese: "桌子", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156371/%E6%A1%8C%E5%AD%90_fcjkgu.png", sound: "https://web.klokah.tw/vocabulary/audio/word/2/09_04.wav", color: "#e63946" },
      o: { amis: "dingwa^", chinese: "電話", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777157306/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-04-26_064756_vpkhto.png", sound: "https://web.klokah.tw/vocabulary/audio/word/2/09_05.wav", color: "#f48fb1" },
      p: { amis: "impic", chinese: "筆", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777155464/Gemini_Generated_Image_sccsjosccsjosccs_hzjlvc.png", sound: "https://web.klokah.tw/vocabulary/audio/word/2/09_06.wav", color: "#66bb6a" },
      q: { amis: "anengan", chinese: "椅子", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156867/Gemini_Generated_Image_q46gggq46gggq46g_gwiz9l.png", sound: "https://web.klokah.tw/vocabulary/audio/word/2/09_07.wav", color: "#ba68c8" },
      r: { amis: "sapaiyo^", chinese: "藥物", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778952649/Gemini_Generated_Image_zboiwszboiwszboi_d0ueaj.png", sound: "https://web.klokah.tw/vocabulary/audio/word/2/09_08.wav", color: "#fdd835" },
      s: { amis: "cacilakan/linay/sawong", chinese: "雨傘", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777157104/dinay_qeg0rx.png", sound: "https://web.klokah.tw/vocabulary/audio/word/2/09_10.wav", color: "#4db6ac" },
      t: { amis: "sasisit", chinese: "橡皮擦", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156728/sasipasip_qhetcn.png", sound: "https://web.klokah.tw/vocabulary/audio/word/2/09_70.wav", color: "#ff8a65" }
    },
    "海岸阿美語": {
      a: { amis: "konga", chinese: "地瓜", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777153909/%E5%9C%B0%E7%93%9C_fnjii7.png", sound: "https://web.klokah.tw/vocabulary/audio/word/3/08_56.wav", color: "#66bb6a" },
      b: { amis: "pawli", chinese: "香蕉", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769552419/%E9%A6%99%E8%95%89_skemlo.png", sound: "https://web.klokah.tw/vocabulary/audio/word/3/08_01.wav", color: "#4db6ac" },
      c: { amis: "papah", chinese: "葉子", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777153825/papah_zaxyps.png", sound: "https://web.klokah.tw/vocabulary/audio/word/3/08_06.wav", color: "#bae6fd" },
      d: { amis: "tefos", chinese: "甘蔗", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778952491/Gemini_Generated_Image_9dzcqy9dzcqy9dzc_tm01xb.png", sound: "https://web.klokah.tw/vocabulary/audio/word/3/08_05.wav", color: "#ffe8b3" },
      e: { amis: "tali", chinese: "芋頭", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778952586/Gemini_Generated_Image_evnpcnevnpcnevnp_iq5iz7.png", sound: "https://web.klokah.tw/vocabulary/audio/word/3/08_04.wav", color: "#fb8c00" },
      f: { amis: "ariray", chinese: "玉米", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777153955/%E7%8E%89%E7%B1%B3_oyyfa9.png", sound: "https://web.klokah.tw/vocabulary/audio/word/3/08_12.wav", color: "#e63946" },
      g: { amis: "panay", chinese: "稻穀", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777154570/%E7%A8%BB%E5%AD%90_nblr8d.png", sound: "https://web.klokah.tw/vocabulary/audio/word/3/08_02.wav", color: "#f48fb1" },
      h: { amis: "mami'", chinese: "柑橘", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777154953/mami_i_ocivep.png", sound: "https://web.klokah.tw/vocabulary/audio/word/3/08_08.wav", color: "#ba68c8" },
      i: { amis: "kilang", chinese: "樹", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777155615/kilang_ox9hma.png", sound: "https://web.klokah.tw/vocabulary/audio/word/3/08_03.wav", color: "#fdd835" },
      j: { amis: "hana", chinese: "花", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777152680/%E8%8A%B1_0_gpvoq2.png", sound: "https://web.klokah.tw/vocabulary/audio/word/3/08_09.wav", color: "#ff8a65" },
      k: { amis: "codad", chinese: "書", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777155060/tilid_ew1rtz.png", sound: "https://web.klokah.tw/vocabulary/audio/word/3/09_01.wav", color: "#bae6fd" },
      l: { amis: "payso", chinese: "錢", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156600/payso_cqkezl.png", sound: "https://web.klokah.tw/vocabulary/audio/word/3/09_02.wav", color: "#ffe8b3" },
      m: { amis: "mali", chinese: "球", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777157447/Gemini_Generated_Image_3aflyv3aflyv3afl_fol4mn.png", sound: "https://web.klokah.tw/vocabulary/audio/word/3/09_03.wav", color: "#fb8c00" },
      n: { amis: "parad", chinese: "桌子", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156371/%E6%A1%8C%E5%AD%90_fcjkgu.png", sound: "https://web.klokah.tw/vocabulary/audio/word/3/09_04.wav", color: "#e63946" },
      o: { amis: "tingwa", chinese: "電話", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777157306/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-04-26_064756_vpkhto.png", sound: "https://web.klokah.tw/vocabulary/audio/word/3/09_05.wav", color: "#f48fb1" },
      p: { amis: "impic", chinese: "筆", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777155464/Gemini_Generated_Image_sccsjosccsjosccs_hzjlvc.png", sound: "https://web.klokah.tw/vocabulary/audio/word/3/09_06.wav", color: "#66bb6a" },
      q: { amis: "anengan", chinese: "椅子", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156867/Gemini_Generated_Image_q46gggq46gggq46g_gwiz9l.png", sound: "https://web.klokah.tw/vocabulary/audio/word/3/09_07.wav", color: "#ba68c8" },
      r: { amis: "sapaiyo", chinese: "藥物", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778952649/Gemini_Generated_Image_zboiwszboiwszboi_d0ueaj.png", sound: "https://web.klokah.tw/vocabulary/audio/word/3/09_08.wav", color: "#fdd835" },
      s: { amis: "linay", chinese: "雨傘", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777157104/dinay_qeg0rx.png", sound: "https://web.klokah.tw/vocabulary/audio/word/3/09_10.wav", color: "#4db6ac" },
      t: { amis: "sararop", chinese: "橡皮擦", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156728/sasipasip_qhetcn.png", sound: "https://web.klokah.tw/vocabulary/audio/word/3/09_70.wav", color: "#ff8a65" }
    },
    "馬蘭阿美語": {
      a: { amis: "konga", chinese: "地瓜", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777153909/%E5%9C%B0%E7%93%9C_fnjii7.png", sound: "https://web.klokah.tw/vocabulary/audio/word/4/08_56.wav", color: "#66bb6a" },
      b: { amis: "pawli", chinese: "香蕉", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769552419/%E9%A6%99%E8%95%89_skemlo.png", sound: "https://web.klokah.tw/vocabulary/audio/word/4/08_01.wav", color: "#4db6ac" },
      c: { amis: "papah", chinese: "葉子", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777153825/papah_zaxyps.png", sound: "https://web.klokah.tw/vocabulary/audio/word/4/08_06.wav", color: "#bae6fd" },
      d: { amis: "tefos", chinese: "甘蔗", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778952491/Gemini_Generated_Image_9dzcqy9dzcqy9dzc_tm01xb.png", sound: "https://web.klokah.tw/vocabulary/audio/word/4/08_05.wav", color: "#ffe8b3" },
      e: { amis: "tali", chinese: "芋頭", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778952586/Gemini_Generated_Image_evnpcnevnpcnevnp_iq5iz7.png", sound: "https://web.klokah.tw/vocabulary/audio/word/4/08_04.wav", color: "#fb8c00" },
      f: { amis: "ariray", chinese: "玉米", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777153955/%E7%8E%89%E7%B1%B3_oyyfa9.png", sound: "https://web.klokah.tw/vocabulary/audio/word/4/08_12.wav", color: "#e63946" },
      g: { amis: "adas", chinese: "稻穀", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777154570/%E7%A8%BB%E5%AD%90_nblr8d.png", sound: "https://web.klokah.tw/vocabulary/audio/word/4/08_02.wav", color: "#f48fb1" },
      h: { amis: "asilo", chinese: "柑橘", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777154953/mami_i_ocivep.png", sound: "https://web.klokah.tw/vocabulary/audio/word/4/08_08.wav", color: "#ba68c8" },
      i: { amis: "kilang", chinese: "樹", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777155615/kilang_ox9hma.png", sound: "https://web.klokah.tw/vocabulary/audio/word/4/08_03.wav", color: "#fdd835" },
      j: { amis: "falo", chinese: "花", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777152680/%E8%8A%B1_0_gpvoq2.png", sound: "https://web.klokah.tw/vocabulary/audio/word/4/08_09.wav", color: "#ff8a65" },
      k: { amis: "tilid", chinese: "書", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777155060/tilid_ew1rtz.png", sound: "https://web.klokah.tw/vocabulary/audio/word/4/09_01.wav", color: "#bae6fd" },
      l: { amis: "payci", chinese: "錢", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156600/payso_cqkezl.png", sound: "https://web.klokah.tw/vocabulary/audio/word/4/09_02.wav", color: "#ffe8b3" },
      m: { amis: "mali", chinese: "球", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777157447/Gemini_Generated_Image_3aflyv3aflyv3afl_fol4mn.png", sound: "https://web.klokah.tw/vocabulary/audio/word/4/09_03.wav", color: "#fb8c00" },
      n: { amis: "cokowi", chinese: "桌子", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156371/%E6%A1%8C%E5%AD%90_fcjkgu.png", sound: "https://web.klokah.tw/vocabulary/audio/word/4/09_04.wav", color: "#e63946" },
      o: { amis: "tingwa", chinese: "電話", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777157306/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-04-26_064756_vpkhto.png", sound: "https://web.klokah.tw/vocabulary/audio/word/4/09_05.wav", color: "#f48fb1" },
      p: { amis: "impic", chinese: "筆", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777155464/Gemini_Generated_Image_sccsjosccsjosccs_hzjlvc.png", sound: "https://web.klokah.tw/vocabulary/audio/word/4/09_06.wav", color: "#66bb6a" },
      q: { amis: "hakenang", chinese: "椅子", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156867/Gemini_Generated_Image_q46gggq46gggq46g_gwiz9l.png", sound: "https://web.klokah.tw/vocabulary/audio/word/4/09_07.wav", color: "#ba68c8" },
      r: { amis: "sapaiyo", chinese: "藥物", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778952649/Gemini_Generated_Image_zboiwszboiwszboi_d0ueaj.png", sound: "https://web.klokah.tw/vocabulary/audio/word/4/09_08.wav", color: "#fdd835" },
      s: { amis: "dinay", chinese: "雨傘", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777157104/dinay_qeg0rx.png", sound: "https://web.klokah.tw/vocabulary/audio/word/4/09_10.wav", color: "#4db6ac" },
      t: { amis: "sasipasip", chinese: "橡皮擦", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156728/sasipasip_qhetcn.png", sound: "https://web.klokah.tw/vocabulary/audio/word/4/09_70.wav", color: "#ff8a65" }
    },
    "恆春阿美語": {
      a: {amis: "konga", chinese: "地瓜", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777153909/%E5%9C%B0%E7%93%9C_fnjii7.png", sound: "https://web.klokah.tw/vocabulary/audio/word/5/08_56.wav", color: "#66bb6a"},
      b: {amis: "pawli", chinese: "香蕉", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1769552419/%E9%A6%99%E8%95%89_skemlo.png", sound: "https://web.klokah.tw/vocabulary/audio/word/5/08_01.wav", color: "#4db6ac"},
      c: {amis: "papah", chinese: "葉子", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777153825/papah_zaxyps.png", sound: "https://web.klokah.tw/vocabulary/audio/word/5/08_06.wav", color: "#bae6fd"},
      d: {amis: "tefos", chinese: "甘蔗", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778952491/Gemini_Generated_Image_9dzcqy9dzcqy9dzc_tm01xb.png", sound: "https://web.klokah.tw/vocabulary/audio/word/5/08_05.wav", color: "#ffe8b3"},
      e: {amis: "tali", chinese: "芋頭", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778952586/Gemini_Generated_Image_evnpcnevnpcnevnp_iq5iz7.png", sound: "https://web.klokah.tw/vocabulary/audio/word/5/08_04.wav", color: "#fb8c00"},
      f: {amis: "ariray", chinese: "玉米", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777153955/%E7%8E%89%E7%B1%B3_oyyfa9.png", sound: "https://web.klokah.tw/vocabulary/audio/word/5/08_12.wav", color: "#e63946"},
      g: {amis: "asad", chinese: "稻穀", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777154570/%E7%A8%BB%E5%AD%90_nblr8d.png", sound: "https://web.klokah.tw/vocabulary/audio/word/5/08_02.wav", color: "#f48fb1"},
      h: {amis: "asilo", chinese: "柑橘", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777154953/mami_i_ocivep.png", sound: "https://web.klokah.tw/vocabulary/audio/word/5/08_08.wav", color: "#ba68c8"},
      i: {amis: "kilang", chinese: "樹", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777155615/kilang_ox9hma.png", sound: "https://web.klokah.tw/vocabulary/audio/word/5/08_03.wav", color: "#fdd835"},
      j: {amis: "hana", chinese: "花", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777152680/%E8%8A%B1_0_gpvoq2.png", sound: "https://web.klokah.tw/vocabulary/audio/word/5/08_09.wav", color: "#ff8a65"},
      k: {amis: "tilid", chinese: "書", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777155060/tilid_ew1rtz.png", sound: "https://web.klokah.tw/vocabulary/audio/word/5/09_01.wav", color: "#bae6fd"},
      l: {amis: "payci", chinese: "錢", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156600/payso_cqkezl.png", sound: "https://web.klokah.tw/vocabulary/audio/word/5/09_02.wav", color: "#ffe8b3"},
      m: {amis: "mali", chinese: "球", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777157447/Gemini_Generated_Image_3aflyv3aflyv3afl_fol4mn.png", sound: "https://web.klokah.tw/vocabulary/audio/word/5/09_03.wav", color: "#fb8c00"},
      n: {amis: "^eto", chinese: "桌子", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156371/%E6%A1%8C%E5%AD%90_fcjkgu.png", sound: "https://web.klokah.tw/vocabulary/audio/word/5/09_04.wav", color: "#e63946"},
      o: {amis: "tingwa", chinese: "電話", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777157306/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-04-26_064756_vpkhto.png", sound: "https://web.klokah.tw/vocabulary/audio/word/5/09_05.wav", color: "#f48fb1"},
      p: {amis: "impic", chinese: "筆", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777155464/Gemini_Generated_Image_sccsjosccsjosccs_hzjlvc.png", sound: "https://web.klokah.tw/vocabulary/audio/word/5/09_06.wav", color: "#66bb6a"},
      q: {amis: "axnan", chinese: "椅子", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156867/Gemini_Generated_Image_q46gggq46gggq46g_gwiz9l.png", sound: "https://web.klokah.tw/vocabulary/audio/word/5/09_07.wav", color: "#ba68c8"},
      r: {amis: "cemel", chinese: "藥物", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1778952649/Gemini_Generated_Image_zboiwszboiwszboi_d0ueaj.png", sound: "https://web.klokah.tw/vocabulary/audio/word/5/09_08.wav", color: "#fdd835"},
      s: {amis: "dinay", chinese: "雨傘", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777157104/dinay_qeg0rx.png", sound: "https://web.klokah.tw/vocabulary/audio/word/5/09_10.wav", color: "#4db6ac"},
      t: {amis: "sasipasip", chinese: "橡皮擦", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1777156728/sasipasip_qhetcn.png", sound: "https://web.klokah.tw/vocabulary/audio/word/5/09_70.wav", color: "#ff8a65"}
    }
  };

  data["預設"] = data["馬蘭阿美語"];

  const topic13 = {
    id: "topic13",
    title: "5語版-植物物品篇",
    sentences: "COMMON_SENTENCES",
    sentencesByDialect: "COMMON_SENTENCES_BY_DIALECT",
    dicePrompts: ["ira ko...", "ira ko...", "ira ko..."],
    gridData: data["預設"],
    gridDataByDialect: data
  };

  let str = JSON.stringify(topic13, null, 4);
  str = str.replace('"COMMON_SENTENCES"', 'COMMON_SENTENCES');
  str = str.replace('"COMMON_SENTENCES_BY_DIALECT"', 'COMMON_SENTENCES_BY_DIALECT');

  let content = fs.readFileSync('topics.ts', 'utf8');

  // Insert before the last closing brace
  const lastBraceIndex = content.lastIndexOf('}');
  content = content.slice(0, lastBraceIndex) + `, topic13: ${str}\n` + content.slice(lastBraceIndex);
  
  fs.writeFileSync('topics.ts', content);
  console.log("Added topic13");
};

generateData();
