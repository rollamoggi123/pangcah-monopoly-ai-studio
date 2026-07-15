const fs = require('fs');
let s = fs.readFileSync('topics.ts', 'utf8');

// find topic15 block
let idx = s.indexOf('"topic15"');
let block = s.substring(idx, idx + 2000);
console.log(block.substring(0, 500));
