const fs = require('fs');

const topicsPath = 'topics.ts';
const generatedPath = 'generated_topics.txt';

let topicsContent = fs.readFileSync(topicsPath, 'utf8');
const generatedContent = fs.readFileSync(generatedPath, 'utf8');

// Find the start and end of gridDataByDialect in topics.ts
const startIndex = topicsContent.indexOf('        gridDataByDialect: {');
const endIndex = topicsContent.indexOf('    }\n};', startIndex);

if (startIndex !== -1 && endIndex !== -1) {
  // Replace the block
  // We need to make sure we replace up to the closing brace of gridDataByDialect
  // The generatedContent has the closing brace `        }`
  
  // Let's find the exact end of gridDataByDialect
  const before = topicsContent.substring(0, startIndex);
  const after = topicsContent.substring(endIndex - 9); // '        }\n    }\n};'
  
  // Actually, let's just use string replacement with a regex or exact match
  // The block ends with:
  //             }
  //         }
  //     }
  // };
  
  const newContent = before + generatedContent + '\n    }\n};\n';
  fs.writeFileSync(topicsPath, newContent);
  console.log('Replaced successfully');
} else {
  console.log('Could not find block');
}
