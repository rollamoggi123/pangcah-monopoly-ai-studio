const fs = require('fs');
let content = fs.readFileSync('./topics.ts', 'utf8');

// For topic5:
const topic5Match = content.match(/topic5: \{[\s\S]*?gridData: \{([\s\S]*?)\},\n\s*gridDataByDialect: \{\n\s*"南勢阿美語": \{([\s\S]*?)\},\n\s*"秀姑巒阿美語"/);
if (topic5Match) {
    let newTopic5GridData = topic5Match[1];
    const topic5Nanshi = topic5Match[2];
    const lines5 = topic5Nanshi.split('\n').filter(l => l.trim().length > 0);
    lines5.forEach(line => {
        const match = line.match(/^\s*([a-z]): \{.*sound: "(.*?)".*\}/);
        if (match) {
            const id = match[1];
            const sound = match[2];
            const regex = new RegExp(`^\\s*${id}: \\{([^}]*)\\}`, 'm');
            newTopic5GridData = newTopic5GridData.replace(regex, (m, inner) => {
                if (!inner.includes('sound:')) {
                    return m.replace(' }', `, sound: "${sound}" }`);
                }
                return m;
            });
        }
    });
    content = content.replace(topic5Match[1], newTopic5GridData);
}

// For topic6:
const topic6Match = content.match(/topic6: \{[\s\S]*?gridData: \{([\s\S]*?)\},\n\s*gridDataByDialect: \{\n\s*"南勢阿美語": \{([\s\S]*?)\},\n\s*"秀姑巒阿美語"/);
if (topic6Match) {
    let newTopic6GridData = topic6Match[1];
    const topic6Nanshi = topic6Match[2];
    const lines6 = topic6Nanshi.split('\n').filter(l => l.trim().length > 0);
    lines6.forEach(line => {
        const match = line.match(/^\s*([a-z]): \{.*sound: "(.*?)".*\}/);
        if (match) {
            const id = match[1];
            const sound = match[2];
            const regex = new RegExp(`^\\s*${id}: \\{([^}]*)\\}`, 'm');
            newTopic6GridData = newTopic6GridData.replace(regex, (m, inner) => {
                if (!inner.includes('sound:')) {
                    return m.replace(' }', `, sound: "${sound}" }`);
                }
                return m;
            });
        }
    });
    content = content.replace(topic6Match[1], newTopic6GridData);
}

fs.writeFileSync('./topics.ts', content);
console.log("Patched topics.ts");
