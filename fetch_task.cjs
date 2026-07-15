const fs = require('fs');

const sheets = [
  { dialect: "秀姑巒阿美語", url: "https://docs.google.com/spreadsheets/d/11bHu1WLsg65dJisVUEqy5UfSnwd8E1bWKA2YxDjSyg4/export?format=csv" },
  { dialect: "海岸阿美語", url: "https://docs.google.com/spreadsheets/d/1uq8PVrb5hYpqC2aJlTNmXSeOwQnAyBL9pNexwmKB_8w/export?format=csv" },
  { dialect: "南勢阿美語", url: "https://docs.google.com/spreadsheets/d/1abq6WOdw8fdw3gFhjep0LPKpA2ou5597qY4e2Pc12Mg/export?format=csv" },
  { dialect: "馬蘭阿美語", url: "https://docs.google.com/spreadsheets/d/1WgvEpdeHnfQiz3fdTQE8HpuOYW-W4DYkSi3Hhxmp--Q/export?format=csv" },
  { dialect: "恆春阿美語", url: "https://docs.google.com/spreadsheets/d/155NNKGX4iMZUpZVz3Qh2b_PuEbAq0nTWcsPrZnpj6HE/export?format=csv" },
];

const MASTER_LIST = [
  "山", "家", "學校", "太陽", "月亮", "星星", "雲", "彩虹", "天空", "山林", 
  "小溪", "下雨", "雨", "夏天", "春天", "秋天", "冬天", "日落", "天黑", "刮颱風", "彩雲"
]; // Moved 冬天 after 春天 秋天 so it fits logically, but order strictly doesn't matter as long as it maps to PATH_ORDER

const PATH_ORDER = ['a','b','c','d','e','f','g','h','i','j','o','p','q','r','s','t','u','v','w','x'];

function getLetter(index) {
  return PATH_ORDER[index % PATH_ORDER.length];
}

async function run() {
  const gridDataByDialect = {};
  
  for (const s of sheets) {
    console.log("Fetching " + s.dialect);
    const res = await fetch(s.url);
    const text = await res.text();
    const lines = text.trim().split('\n');
    
    const chineseToData = {};
    
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
               // We don't care about the original ID the user assigned. 
               // We group by Chinese meaning to assure dialects align!
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
           }
       }
    }
    
    // Align to MASTER_LIST using PATH_ORDER
    const alignedData = {};
    let currentIndex = 0;
    
    MASTER_LIST.forEach((ch) => {
        if (currentIndex >= PATH_ORDER.length) return; // grid is full
        
        const letter = getLetter(currentIndex);
        
        if (chineseToData[ch]) {
            alignedData[letter] = chineseToData[ch];
            currentIndex++;
        } else {
            // Find a soft match
            let found = Object.values(chineseToData).find(v => v.chinese.includes(ch) || ch.includes(v.chinese));
            if (found) {
                alignedData[letter] = found;
                currentIndex++;
            }
            // If completely missing, we skip placing it in this dialect so we don't end up with out of sync grids...
            // Wait, if it's missing, we SHOULD insert a blank one so that the board slots remain aligned!
            else {
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
  
  gridDataByDialect['預設'] = gridDataByDialect['秀姑巒阿美語'];

  const content = `
    topic8: {
        id: "topic8",
        title: "5語版 -阿美語山川地理_自然景觀_基本詞彙版",
        sentences: [
            "O maan konini? (這是什麼?)",
            "Mafana' kiso to nini? (你知道這個嗎?)"
        ],
        dicePrompts: ["ira ko...", "ira ko...", "ira ko..."],
        gridData: ${JSON.stringify(gridDataByDialect["秀姑巒阿美語"], null, 12)},
        gridDataByDialect: ${JSON.stringify(gridDataByDialect, null, 12)}
    }
  `;
  fs.writeFileSync('topic8_out.txt', content);
  console.log("Written topic8_out.txt");
}
run();
