import * as fs from 'fs';

const filePath = './src/data/books/luka.ts';
const content = fs.readFileSync(filePath, 'utf-8');

// Match the entire LUKA_DATA object
const match = content.match(/export const LUKA_DATA = (\{[\s\S]*?\});/);
if (!match) {
    console.error('LUKA_DATA not found');
    process.exit(1);
}

const dataStr = match[1];

// We can't easily parse this with JSON.parse because it's valid TS but not strictly JSON (keys might not be quoted or are numbers)
// But in this file they are numbers like 1: [ ... ]

// I'll use a more surgical approach. I'll find all arrays and process them.
const processedContent = content.replace(/(\d+): \[\s*([\s\S]*?)\s*\]/g, (match, chapter, versesStr) => {
    // versesStr is "verse1", "verse2", ...
    // First, split into individual strings
    const verses: string[] = [];
    const verseRegex = /"([\s\S]*?)"/g;
    let verseMatch;
    while ((verseMatch = verseRegex.exec(versesStr)) !== null) {
        let verse = verseMatch[1];
        
        // Now split verse if it contains internal numbers e.g. "Verse 1. 2Verse 2"
        // Pattern: look for space followed by one or more digits followed by a capital letter or fancy quote
        // Actually, sometimes there is no space? "Pilato. 2Mi ne"
        // Let's use a regex that finds digits that look like verse starts.
        
        // Split by the pattern: (digit(s)) followed by something that looks like the start of a verse
        // and preceded by at least some text (so we don't split the very start of the string)
        
        const subVerses = verse.split(/(?<=\.|\?|!|”|")\s*(?=[0-9]+[A-Z“])/);
        // Sometimes the number is right after the dot: "Pilato.2Mi" or "Pilato. 2Mi"
        // The regex above handles space optionally with \s*
        
        verses.push(...subVerses.map(s => s.trim()));
    }
    
    const formattedVerses = verses.map(v => `    "${v}"`).join(',\n');
    return `${chapter}: [\n${formattedVerses}\n  ]`;
});

fs.writeFileSync(filePath, processedContent);
console.log('Processed luka.ts successfully');
