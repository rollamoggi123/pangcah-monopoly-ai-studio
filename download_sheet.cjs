const https = require('https');
const fs = require('fs');

const extractUrl = "https://docs.google.com/spreadsheets/d/1hKXyrniZIqv2N8NCCFMWlaHcVt8hhswkEgIYW-9BBj8/export?format=csv&id=1hKXyrniZIqv2N8NCCFMWlaHcVt8hhswkEgIYW-9BBj8&gid=0";

https.get(extractUrl, (res) => {
    if(res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, (res2) => {
            let data = '';
            res2.on('data', chunk => data += chunk);
            res2.on('end', () => {
                fs.writeFileSync('sheet.csv', data);
                console.log('Saved sheet.csv');
            });
        });
    } else {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
            fs.writeFileSync('sheet.csv', data);
            console.log('Saved sheet.csv');
        });
    }
});
