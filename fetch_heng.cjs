const fs = require('fs');
const https = require('https');

const fetchSheet = (url) => {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                https.get(res.headers.location, (res2) => {
                    let data = '';
                    res2.on('data', chunk => data += chunk);
                    res2.on('end', () => resolve(data));
                }).on('error', reject);
            } else {
                let data = '';
                res.on('data', chunk => data += chunk);
                res.on('end', () => resolve(data));
            }
        }).on('error', reject);
    });
};

fetchSheet('https://docs.google.com/spreadsheets/d/1KDoK3hT7zFVroVimy_n7GMkPdlcdoHh9TuiaFbtQyWw/export?format=csv').then(data => {
    fs.writeFileSync('heng_animal.csv', data);
    console.log('Saved heng_animal.csv');
});
