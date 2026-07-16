import fs from 'fs';
import path from 'path';

const filePath = '/src/data/books/mathayo.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Regex to find grouped verses: e.g. "6Jodolo... 7Bang'..."
// This is tricky because some verses start with numbers like "2Sa nogono" (which is actually verse 2)
// Actually, in the Luo text, it seems verses are often started with a number immediately followed by a capital letter.

function splitGroupedVerses(text: string): string[] {
  // Find all verse starts: a number followed by a Capital Letter
  // But wait, some verses might not start with a number if they are the first in the string.
  // And some might have a number inside like "11 jomar..."
  
  // Let's use a simpler approach: splitting by looking for patterns like " \d+[A-Z]"
  const parts = text.split(/(?<=\S)\s+(\d+)(?=[A-Z])/);
  // Wait, positive lookbehind is not supported in all environments? No, node is fine.
  // Actually, many lines start with the verse number already.
  
  const results: string[] = [];
  let currentVerse = text;
  
  // This is too complex to get right without seeing all cases.
  // I'll do it manually for the obvious ones or just for Ch 27.
  return [text]; 
}

// I'll just do it for Ch 27 and Ch 28 (already did 28) and others I see.
// Actually, I'll use multi_edit_file with search and replace.
