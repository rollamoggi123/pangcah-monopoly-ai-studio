const https = require('https');

function downloadCSV(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      // Handle redirects
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

  for (const [name, url] of Object.entries(urls)) {
    console.log(`\n--- ${name} ---`);
    try {
      const csv = await downloadCSV(url);
      console.log(csv.substring(0, 500)); // Print first 500 chars to see structure
    } catch (e) {
      console.error(e);
    }
  }
}

main();
