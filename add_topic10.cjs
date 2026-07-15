const fs = require('fs');

let topicsTs = fs.readFileSync('topics.ts', 'utf-8');
const topic10 = fs.readFileSync('topic10_out.txt', 'utf-8');

// The file topics.ts ends with:
//         }
//     }
// };

// We want to insert ', topic10' before that final '};' or replace the last '}' of the last topic with '}, topic10'
// Let's strip the trailing '};\n' or similar
let lines = topicsTs.split('\n');
let lastBracketIndex = -1;
for(let i = lines.length - 1; i >= 0; i--) {
    if (lines[i].trim() === '};') {
        lastBracketIndex = i;
        break;
    }
}

if (lastBracketIndex > -1) {
    // Also we need to add a comma to the last topic before inserting.
    // The previous token is probably '}' or similar at lines[lastBracketIndex - 1]
    lines.splice(lastBracketIndex, 0, ',', topic10);
    fs.writeFileSync('topics.ts', lines.join('\n'));
    console.log('Appended to topics.ts');
} else {
    console.error('Could not find };');
}
