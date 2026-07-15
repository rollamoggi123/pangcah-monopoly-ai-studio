const fs = require('fs');

const sheets = [
  { dialect: "南勢阿美語", url: "https://docs.google.com/spreadsheets/d/1hug3u1E1n_fuoSciD48Tv0iuJNwK3KI0yjtOeRguE_4/export?format=csv" },
  { dialect: "秀姑巒阿美語", url: "https://docs.google.com/spreadsheets/d/1sB_w2jVmgcCPDOiz-qvKwvSdRMDNQan2kWBfMcMXckk/export?format=csv" },
  { dialect: "海岸阿美語", url: "https://docs.google.com/spreadsheets/d/1JPNUJJHxcEO_2OEME59p_MN4ILKnfgeak25Eqz-HwqQ/export?format=csv" },
  { dialect: "馬蘭阿美語", url: "https://docs.google.com/spreadsheets/d/16sS8wFP-12NOcFkZ31sCxXe78PrY_CADMjw0tKMDU6o/export?format=csv" },
  { dialect: "恆春阿美語", url: "https://docs.google.com/spreadsheets/d/1dM0RArQZMj9tmCtF1rSyDC9diARDMyzh7-xJZ14-E18/export?format=csv" },
];

const PATH_ORDER = ['a','b','c','d','e','f','g','h','i','j','o','p','q','r','s','t','u','v','w','x'];

function getLetter(index) {
  return PATH_ORDER[index % PATH_ORDER.length];
}

async function run() {
  const gridDataByDialect = {};
  let masterList = [];
  
  for (const s of sheets) {
    console.log("Fetching " + s.dialect);
    const res = await fetch(s.url);
    const text = await res.text();
    const lines = text.trim().split('\n');
    
    const chineseToData = {};
    const localOrder = [];
    
    for(let i=0; i<lines.length; i++) {
       let line = lines[i].trim();
       if(!line) continue;
       const parts = [];
       let inQuotes = false;
       let curr = '';
       for(let j=0; j<line.length; j++) {
           if(line[j] === '"') inQuotes = !inQuotes;
           else if(line[j] === ',' && !inQuotes) {
               parts.push(curr);
               curr = '';
           } else {
               curr += line[j];
           }
       }
       parts.push(curr);
       
       if (parts.length >= 5) {
           const id = parts[0].trim();
           if(id.length === 1 && id >= 'a' && id <= 'z') {
               const rawChinese = parts[2].replace(/^"|"$/g, '').trim();
               const dataObj = {
                   amis: parts[1].replace(/^"|"$/g, '').trim(),
                   chinese: rawChinese,
                   image: parts[3].replace(/^"|"$/g, '').trim(),
                   sound: parts[4].replace(/^"|"$/g, '').trim()
               };
               if (parts.length > 5 && parts[5]) {
                   const c = parts[5].replace(/^"|"$/g, '').trim();
                   if (c.startsWith('#') || c.startsWith('bg-')) {
                       dataObj.color = c;
                   }
               }
               chineseToData[rawChinese] = dataObj;
               localOrder.push(rawChinese);
           }
       }
    }
    
    // First dialect defines the master list order to align everyone
    if (masterList.length === 0) {
        masterList = localOrder;
    }
    
    // Align to MASTER_LIST
    const alignedData = {};
    let currentIndex = 0;
    
    masterList.forEach((ch) => {
        if (currentIndex >= PATH_ORDER.length) return;
        
        const letter = getLetter(currentIndex);
        
        if (chineseToData[ch]) {
            alignedData[letter] = chineseToData[ch];
            currentIndex++;
        } else {
            let found = Object.values(chineseToData).find(v => v.chinese.includes(ch) || ch.includes(v.chinese));
            if (found) {
                alignedData[letter] = found;
                currentIndex++;
            } else {
                 alignedData[letter] = {
                     amis: "",
                     chinese: ch,
                     image: "",
                     sound: "",
                     color: "#bae6fd"
                 };
                 currentIndex++;
            }
        }
    });

    gridDataByDialect[s.dialect] = alignedData;
  }
  
  gridDataByDialect['預設'] = gridDataByDialect['南勢阿美語'];

  const content = `
    topic10: {
        id: "topic10",
        title: "5語版-顏色時間否定指示",
        sentences: [
            "O maan konini? (這是什麼?)",
            "Mafana' kiso to nini? (你知道這個嗎?)"
        ],
        dicePrompts: ["ira ko...", "ira ko...", "ira ko..."],
        gridData: ${JSON.stringify(gridDataByDialect["南勢阿美語"], null, 12)},
        gridDataByDialect: ${JSON.stringify(gridDataByDialect, null, 12)}
    }
  `;
  fs.writeFileSync('topic10_out.txt', content);
  console.log("Written topic10_out.txt");
  console.log("Master list length:", masterList.length);
}
run();
