const https = require('https');
const fs = require('fs');

const url = "https://docs.google.com/spreadsheets/d/1hKXyrniZIqv2N8NCCFMWlaHcVt8hhswkEgIYW-9BBj8/htmlview";

https.get(url, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('sheet.html', data);
    console.log('Saved sheet.html');
  });
});
