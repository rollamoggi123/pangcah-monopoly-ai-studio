const fs = require('fs');

const topicsPath = 'topics.ts';
const generatedPath = 'generated_topics_6.txt';

let topicsContent = fs.readFileSync(topicsPath, 'utf8');
const generatedContent = fs.readFileSync(generatedPath, 'utf8');

// We need to add topic6
const newTopic = `
    topic6: {
        id: "topic6",
        title: "阿美語數字篇",
        description: "學習阿美語數字",
        sentences: [
            "O maan konini? (這是什麼?)",
            "Mafana' kiso to nini? (你知道這個嗎?)",
            "Samanen ko ngiha' nonini? (這個怎麼叫?)"
        ],
        diceOptions: ["ira ko...", "ira ko...", "ira ko..."],
        gridData: {
            a: { label: "1", amis: "cacay", chinese: "1", color: "#bae6fd", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1766833615/1_cecay_pwaqo9.jpg" },
            b: { label: "2", amis: "tusa", chinese: "2", color: "#ffe8b3", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1766835102/2_d4uspg.png" },
            c: { label: "3", amis: "tulu", chinese: "3", color: "#fb8c00", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1766835199/3_v9nmob.png" },
            d: { label: "4", amis: "sepat", chinese: "4", color: "#bae6fd", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1766835214/4_rcu9ld.png" },
            e: { label: "5", amis: "lima", chinese: "5", color: "#ffe8b3", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1766835308/5_slpohd.png" },
            f: { label: "6", amis: "enem", chinese: "6", color: "#e63946", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1766835838/6_u3xlq9.png" },
            g: { label: "7", amis: "pitu", chinese: "7", color: "#f48fb1", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1766835806/7_jgkd0a.png" },
            h: { label: "8", amis: "walu", chinese: "8", color: "#bae6fd", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1766836039/8_ksomjx.png" },
            i: { label: "9", amis: "siwa", chinese: "9", color: "#f48fb1", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1766836115/9_ptywp8.png" },
            j: { label: "10", amis: "muketep", chinese: "10", color: "#66bb6a", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1766836190/10_ewv3y8.png" },
            o: { label: "11", amis: "savaw tu cacay", chinese: "11", color: "#ba68c8", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774713940/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_000440_kdccsu.png" },
            p: { label: "20", amis: "tusa a pulu’", chinese: "20", color: "#e63946", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1766835944/20_mw8wi5.png" },
            q: { label: "30", amis: "tulu a pulu’", chinese: "30", color: "#ba68c8", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1766835950/30_ji8e3t.png" },
            r: { label: "40", amis: "sepat a pulu’", chinese: "40", color: "#ffe8b3", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1766835956/40_j2oced.png" },
            s: { label: "50", amis: "lima a pulu’", chinese: "50", color: "#ba68c8", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1766835961/50_qbagxh.png" },
            t: { label: "60", amis: "enem a pulu’", chinese: "60", color: "#e63946", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1766835966/60_mm96su.png" },
            u: { label: "70", amis: "pitu a pulu’", chinese: "70", color: "#ffe8b3", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1766835971/70_u3hrkj.png" },
            v: { label: "80", amis: "walu a pulu’", chinese: "80", color: "#fdd835", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1766835976/80_ddnwmp.png" },
            w: { label: "90", amis: "siwa a pulu’", chinese: "90", color: "#e63946", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774714791/90_j05imq.jpg" },
            x: { label: "百", amis: "patekenan", chinese: "百", color: "#ffe8b3", image: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1774715020/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-29_002305_dvgr1t.png" },
        },
${generatedContent}
    }
};
`;

const endIndex = topicsContent.lastIndexOf('};');

if (endIndex !== -1) {
  const before = topicsContent.substring(0, endIndex - 1); // remove the last newline and };
  
  // Actually, let's replace the end of the file
  const newContent = topicsContent.replace(/    }\n};\n?$/, `    },\n${newTopic}`);
  fs.writeFileSync(topicsPath, newContent);
  console.log('Added topic6 successfully');
} else {
  console.log('Could not find block');
}
