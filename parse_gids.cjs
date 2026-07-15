const fs = require('fs');
const html = fs.readFileSync('sheet.html', 'utf8');
const matches = [...html.matchAll(/gid=(\d+)/g)];
const gids = [...new Set(matches.map(m => m[1]))];
console.log(gids);
