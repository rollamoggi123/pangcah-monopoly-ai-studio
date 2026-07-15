const fs = require('fs');
const data = JSON.parse(fs.readFileSync('topic14_data.json', 'utf8'));
console.log(JSON.stringify(data.sentencesByDialect['秀姑巒阿美語'].slice(0, 3), null, 2));
