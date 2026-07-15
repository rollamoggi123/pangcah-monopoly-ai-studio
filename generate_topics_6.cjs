const fs = require('fs');

const files = [
  { name: '南勢阿美語', file: 'nanshi_6.csv' },
  { name: '秀姑巒阿美語', file: 'xiuguluan_6.csv' },
  { name: '海岸阿美語', file: 'haian_6.csv' },
  { name: '馬蘭阿美語', file: 'malan_6.csv' }
];

let output = '        gridDataByDialect: {\n';

files.forEach(({ name, file }) => {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    output += `            "${name}": {\n`;
    lines.forEach(line => {
      let parsed = [];
      let inQuote = false;
      let current = '';
      for (let i = 0; i < line.length; i++) {
          if (line[i] === '"') {
              inQuote = !inQuote;
          } else if (line[i] === ',' && !inQuote) {
              parsed.push(current);
              current = '';
          } else {
              current += line[i];
          }
      }
      parsed.push(current);

      if (parsed.length >= 5) {
        const id = parsed[0].trim();
        if (id.match(/^[a-z]$/)) {
          const amis = parsed[1].trim().replace(/"/g, '').replace(/\n/g, ' ');
          const chinese = parsed[2].trim().replace(/"/g, '').replace(/\n/g, ' ');
          const image = parsed[3].trim();
          const sound = parsed[4].trim();
          output += `                ${id}: { amis: "${amis}", chinese: "${chinese}", image: "${image}", sound: "${sound}" },\n`;
        }
      }
    });
    output += `            },\n`;
  }
});

output += '        }\n';
fs.writeFileSync('generated_topics_6.txt', output);
console.log('Generated generated_topics_6.txt');
