const fs = require('fs');

const topicsPath = './topics.ts';
let topicsContent = fs.readFileSync(topicsPath, 'utf8');

const topic8Data = fs.readFileSync('topic8_out.txt', 'utf8');

// Find the last closing brace of the `export const allTopics: Record<string, TopicData> = {` block
// We can just replace \n};\n at the end with the new topic.

if (topicsContent.endsWith('};\n')) {
  topicsContent = topicsContent.replace(/};\n$/, `,${topic8Data}\n};\n`);
} else {
  // If it doesn't end with }; just append it before the last }
  const lastBraceIndex = topicsContent.lastIndexOf('}');
  topicsContent = topicsContent.substring(0, lastBraceIndex) + `,${topic8Data}\n` + topicsContent.substring(lastBraceIndex);
}

fs.writeFileSync(topicsPath, topicsContent);
console.log('Appended topic8 to topics.ts');
