const https = require('https');
const fs = require('fs');

function downloadCSV(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadCSV(res.headers.location).then(resolve).catch(reject);
      }
      
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        resolve(data);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function main() {
  const urls = {
    '南勢阿美語': 'https://docs.google.com/spreadsheets/d/1yiYTtk9PEHvpj4LxnWuWQobvF_ZYvM5b7SCPSMePiDU/export?format=csv&gid=1781675041',
    '秀姑巒阿美語': 'https://docs.google.com/spreadsheets/d/1R3UUciWsGmDoPA8ErPmtMO5LwYJRauPdYDF770Meiao/export?format=csv&gid=1781675041',
    '海岸阿美語': 'https://docs.google.com/spreadsheets/d/1whme98PH4_SIienxLIIBcHm0TPlwq2HwsZ6ajiAxOxk/export?format=csv&gid=1781675041',
    '馬蘭阿美語': 'https://docs.google.com/spreadsheets/d/13JhbzsTSqzUQdEUYRkAV4KmuQVDYqdMC0UNr3vNkjgw/export?format=csv&gid=1781675041'
  };

  let output = '        gridDataByDialect: {\n';

  for (const [name, url] of Object.entries(urls)) {
    output += `            "${name}": {\n`;
    try {
      const csv = await downloadCSV(url);
      const lines = csv.split('\n');
      for (let line of lines) {
        line = line.trim();
        if (!line || line.startsWith('id') || line.startsWith('TITLE') || line.startsWith('SENTENCES') || line.startsWith('DICE')) continue;
        
        // Simple CSV parsing (assuming no commas inside quotes for now, or we can handle it)
        // Actually, some fields might have commas. Let's use a simple regex for CSV parsing
        const row = [];
        let inQuotes = false;
        let currentVal = '';
        for (let i = 0; i < line.length; i++) {
          const char = line[i];
          if (char === '"') {
            inQuotes = !inQuotes;
          } else if (char === ',' && !inQuotes) {
            row.push(currentVal);
            currentVal = '';
          } else {
            currentVal += char;
          }
        }
        row.push(currentVal);

        if (row.length >= 5) {
          const id = row[0];
          const amis = row[1];
          const chinese = row[2];
          const image = row[3];
          const sound = row[4];
          if (id && id.length === 1) { // a, b, c, etc.
            output += `                ${id}: { amis: "${amis}", chinese: "${chinese}", image: "${image}", sound: "${sound}" },\n`;
          }
        }
      }
    } catch (e) {
      console.error(e);
    }
    output += `            },\n`;
  }
  output += '        }';
  fs.writeFileSync('generated_topics.txt', output);
  console.log("Done!");
}

main();
