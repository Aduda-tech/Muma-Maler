import * as fs from 'fs';

const filePath = './src/data/books/luka.ts';
const content = fs.readFileSync(filePath, 'utf-8');

// Match the entire LUKA_DATA object
const match = content.match(/export const LUKA_DATA = (\{[\s\S]*?\});/);
if (!match) {
  console.error("Could not find LUKA_DATA");
  process.exit(1);
}

const dataStr = match[1];
// We need to parse it. Since it's not strictly JSON (it's JS object literal), 
// we'll be careful.
// Actually, let's just use eval since it's a known format? No, safer to regex.

const chapters: Record<number, string[]> = {};
const chapterRegex = /(\d+): \[([\s\S]*?)\]/g;
let chapterMatch;

while ((chapterMatch = chapterRegex.exec(dataStr)) !== null) {
  const chapterId = parseInt(chapterMatch[1]);
  const versesStr = chapterMatch[2];
  
  // Extract strings
  const strings: string[] = [];
  const stringRegex = /"([\s\S]*?)"/g;
  let sMatch;
  while ((sMatch = stringRegex.exec(versesStr)) !== null) {
    strings.push(sMatch[1]);
  }
  
  // Heal: Join all and re-split by likely verse markers
  let fullText = strings.join(' ').replace(/\\"/g, '"'); // Unescape
  
  // Some parts were already joined or had numbers.
  // We want to split by pattern " 2 " or "2 " at the start of a logical verse.
  // Actually, many verses in this bible translation are already prefixed with numbers.
  
  const verses: string[] = [];
  // Split by finding " 2", " 3", etc.
  // But be careful not to split "10:30".
  // The pattern in this text seems to be "NumberWord" or "Number Quote".
  // regex: \s+(\d+)(?=[A-Z“‘])
  const parts = fullText.split(/\s+(\d+)(?=[A-Z“‘“])/);
  
  if (parts.length > 0) {
    let current = parts[0].trim();
    if (current.startsWith('1')) current = current.substring(1).trim(); // Remove leading '1' if present
    verses.push(current);
    
    for (let i = 1; i < parts.length; i += 2) {
      const num = parts[i];
      const text = parts[i+1] || "";
      verses.push(`${num}${text.trim()}`);
    }
  }
  
  // Filter out empty verses
  chapters[chapterId] = verses.filter(v => v.length > 0);
}

// Now, for 19-24 and others I have, I'll MANUALLY override if needed?
// No, I'll just write the healed ones and then verify.

const sortedIds = Object.keys(chapters).map(Number).sort((a,b) => a-b);
let output = "export const LUKA_DATA = {\n";
for (const id of sortedIds) {
  output += `  ${id}: [\n`;
  output += chapters[id].map(v => `    "${v.replace(/"/g, '\\"')}"`).join(',\n');
  output += "\n  ],\n";
}
output += "};\n";

fs.writeFileSync(filePath, output);
console.log("Healed Luka data.");
