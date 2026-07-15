import fs from 'fs';

async function fetchCSV(url) {
    const response = await fetch(url);
    const text = await response.text();
    return text;
}

function parseCSV(csvText) {
    const lines = csvText.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    const data = {};
    for (const line of lines) {
        if (line.startsWith('TITLE') || line.startsWith('SENTENCES') || line.startsWith('DICE') || line.startsWith('id,')) continue;
        const parts = line.split(',');
        if (parts.length >= 5 && parts[0].length === 1) {
            const id = parts[0];
            const amis = parts[1].replace(/"/g, '').trim();
            const chinese = parts[2].replace(/"/g, '').trim();
            const image = parts[3].replace(/"/g, '').trim();
            const sound = parts[4].replace(/"/g, '').trim();
            data[id] = { amis, chinese, image, sound };
        }
    }
    return data;
}

function formatDialectData(data) {
    let result = '';
    for (const id of Object.keys(data).sort()) {
        const item = data[id];
        result += `                ${id}: { amis: "${item.amis}", chinese: "${item.chinese}", image: "${item.image}", sound: "${item.sound}" },\n`;
    }
    return result;
}

async function main() {
    const urls = {
        "南勢阿美語": "https://docs.google.com/spreadsheets/d/1hKXyrniZIqv2N8NCCFMWlaHcVt8hhswkEgIYW-9BBj8/export?format=csv&gid=1781675041",
        "秀姑巒阿美語": "https://docs.google.com/spreadsheets/d/1utNrUV4ZUEUiQ_pxpeXEMvwLzAzytVsvks6MxZuVPKE/export?format=csv&gid=1781675041",
        "海岸阿美語": "https://docs.google.com/spreadsheets/d/1k2ER9sbVCFQ7CBbzH_b9koedZDdnPf-5YhNJuIcx-Nw/export?format=csv&gid=1781675041",
        "馬蘭阿美語": "https://docs.google.com/spreadsheets/d/1fU8gY13_oyF-22TwxbE0c5u53xBp9DnLf_6ZLw97cVU/export?format=csv&gid=1781675041"
    };

    let content = fs.readFileSync('./topics.ts', 'utf8');

    for (const [dialect, url] of Object.entries(urls)) {
        console.log(`Fetching ${dialect}...`);
        const csvText = await fetchCSV(url);
        const data = parseCSV(csvText);
        const formatted = formatDialectData(data);
        
        // Replace in topics.ts
        const regex = new RegExp(`("${dialect}": \\{\\n)([\\s\\S]*?)(\\n\\s*\\},?\\n)`, 'm');
        
        // We only want to replace inside topic6.
        // Let's split content by topic6
        const topic6Index = content.indexOf('topic6: {');
        if (topic6Index !== -1) {
            const beforeTopic6 = content.substring(0, topic6Index);
            let afterTopic6 = content.substring(topic6Index);
            
            afterTopic6 = afterTopic6.replace(regex, (match, p1, p2, p3) => {
                return p1 + formatted.trimEnd() + p3;
            });
            
            content = beforeTopic6 + afterTopic6;
        }
    }

    fs.writeFileSync('./topics.ts', content);
    console.log("Updated topics.ts with new CSV data");
}

main().catch(console.error);
