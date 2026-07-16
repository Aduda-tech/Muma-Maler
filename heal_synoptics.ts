import * as fs from 'fs';
import * as path from 'path';

const books = ['mathayo', 'mariko', 'luka'];

books.forEach(book => {
    const filePath = path.join(process.cwd(), 'src', 'data', 'books', `${book}.ts`);
    if (!fs.existsSync(filePath)) {
        console.error(`File not found: ${filePath}`);
        return;
    }

    const content = fs.readFileSync(filePath, 'utf-8');
    const varName = book.toUpperCase() + '_DATA';
    
    // Extract the object content
    // Find "export const NAME = { ... };"
    const match = content.match(new RegExp(`export const ${varName}(?:\\s*|:\\s*Record<number,\\s*string\\[\\]>)\\s*=\\s*(\\{[\\s\\S]*?\\});?`));
    
    if (!match) {
        console.error(`Could not find ${varName} in ${book}.ts`);
        return;
    }

    const objectStr = match[1];
    const chapters: Record<number, string[]> = {};
    
    // We'll iterate through the string and find chapter keys and their arrays
    // Keys can be 1: [ or "1": [
    const chapterRegex = /(?:"?(\d+)"?)\s*:\s*\[([\s\S]*?)\]\s*(?:,|$)/g;
    let chMatch;
    
    while ((chMatch = chapterRegex.exec(objectStr)) !== null) {
        const chapterNum = parseInt(chMatch[1]);
        const versesListStr = chMatch[2];
        
        // Extract individual strings from the array
        const rawVerses: string[] = [];
        const verseStringRegex = /"(.*?[^\\])"/g;
        let vMatch;
        while ((vMatch = verseStringRegex.exec(versesListStr)) !== null) {
            rawVerses.push(vMatch[1].replace(/\\"/g, '"'));
        }
        
        // Join them all to re-split correctly
        const combined = rawVerses.join(' ');
        
        // Split by number
        // We look for sequences of digits that act as verse markers.
        // We use a lookahead for a non-digit character to avoid consuming it.
        const parts = combined.split(/(?:\s+|^)(\d+)(?=\D|$)/);
        
        const finalVerses: string[] = [];
        if (parts.length > 0) {
            let i = 0;
            // The split result with capturing group: [text_before_1st_num, num, text_after_1st_num, ...]
            
            // If the first part is NOT empty, it's verse 1 text (if there was no leading "1 ")
            let firstPart = parts[0].trim();
            if (firstPart) {
                finalVerses.push(firstPart);
                i = 1; 
            } else {
                i = 1;
            }
            
            for (; i < parts.length; i++) {
                const part = parts[i];
                if (part === undefined) continue;
                const trimmed = part.trim();
                
                if (/^\d+$/.test(trimmed)) {
                    // This is a number
                    // We check the next part
                    const nextPart = parts[i+1] || "";
                    finalVerses.push(nextPart.trim());
                    i++; // skip nextPart
                } else if (trimmed) {
                    // This is orphan text, should probably be appended to last verse 
                    // or treats as a verse if it happened between numbers
                    if (finalVerses.length > 0) {
                        finalVerses[finalVerses.length - 1] += " " + trimmed;
                    } else {
                        finalVerses.push(trimmed);
                    }
                }
            }
        }
        
        // Remove empty verses and cleaning
        chapters[chapterNum] = finalVerses.filter(v => v.length > 0);
    }

    // Reconstruction
    const sortedChapters = Object.keys(chapters).map(Number).sort((a, b) => a - b);
    let output = `export const ${varName}${book === 'mathayo' ? ': Record<number, string[]>' : ''} = {\n`;
    
    sortedChapters.forEach(ch => {
        output += `  ${ch}: [\n`;
        chapters[ch].forEach((v, idx) => {
            const comma = idx === chapters[ch].length - 1 ? "" : ",";
            output += `    "${v.replace(/"/g, '\\"')}"${comma}\n`;
        });
        output += `  ],\n`;
    });
    output += `};\n`;

    fs.writeFileSync(filePath, output);
    console.log(`Healed ${book}.ts`);
});
