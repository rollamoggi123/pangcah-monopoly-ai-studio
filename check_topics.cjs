const fs = require('fs');
let s = fs.readFileSync('topics.ts', 'utf8');
let matches = s.match(/topic\d+/g);
let unique = [...new Set(matches)];
console.log(unique);
