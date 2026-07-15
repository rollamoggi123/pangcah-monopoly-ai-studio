const fs = require('fs');
let s = fs.readFileSync('topics.ts', 'utf8');
let idx = s.indexOf('"topic14"');
let block = s.substring(idx, idx + 500);
console.log(block);
