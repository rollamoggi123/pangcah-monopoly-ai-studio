import https from 'https';

https.get('https://docs.google.com/spreadsheets/d/1R3UUciWsGmDoPA8ErPmtMO5LwYJRauPdYDF770Meiao/export?format=csv&gid=1781675041', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log(data);
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
