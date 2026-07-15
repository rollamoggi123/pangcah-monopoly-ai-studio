const fs = require('fs');
const https = require('https');

const urls = [
  'https://docs.google.com/spreadsheets/d/1hug3u1E1n_fuoSciD48Tv0iuJNwK3KI0yjtOeRguE_4/export?format=csv',
  'https://docs.google.com/spreadsheets/d/1sB_w2jVmgcCPDOiz-qvKwvSdRMDNQan2kWBfMcMXckk/export?format=csv',
  'https://docs.google.com/spreadsheets/d/1JPNUJJHxcEO_2OEME59p_MN4ILKnfgeak25Eqz-HwqQ/export?format=csv',
  'https://docs.google.com/spreadsheets/d/16sS8wFP-12NOcFkZ31sCxXe78PrY_CADMjw0tKMDU6o/export?format=csv',
  'https://docs.google.com/spreadsheets/d/1dM0RArQZMj9tmCtF1rSyDC9diARDMyzh7-xJZ14-E18/export?format=csv'
];

const files = ['nanshi.csv', 'xiuguluan.csv', 'coast.csv', 'malan.csv', 'hengchun.csv'];

urls.forEach((url, index) => {
  https.get(url, (res) => {
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      https.get(res.headers.location, (res2) => {
        let data = '';
        res2.on('data', chunk => data += chunk);
        res2.on('end', () => fs.writeFileSync(files[index], data));
      });
    } else {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => fs.writeFileSync(files[index], data));
    }
  });
});
