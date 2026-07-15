const fs = require('fs');
const content = fs.readFileSync('秀姑巒阿美語_q16.csv', 'utf8');
console.log(content.split('\n').slice(0, 10).join('\n'));
