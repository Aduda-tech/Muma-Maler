import { GoogleGenAI, Type } from "@google/genai";
import * as fs from "fs";
import * as path from "path";

async function fixLukaText() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("GEMINI_API_KEY is not set");
    return;
  }

  const ai = new GoogleGenAI({ apiKey });
  const model = "gemini-3.1-pro-preview"; // Using Pro for better accuracy with Dholuo

  const filePath = path.join(process.cwd(), "src/data/books/luka.ts");
  const fileContent = fs.readFileSync(filePath, "utf-8");

  // Extract the object from the file content
  // This is a bit brittle but should work for this specific file
  const match = fileContent.match(/export const LUKA_DATA = (\{[\s\S]*\});/);
  if (!match) {
    console.error("Could not find LUKA_DATA in file");
    return;
  }

  // We can't easily JSON.parse a JS object string, so we'll use a safer way or just regex the chapters
  // Actually, for this specific task, it might be better to process the file chapter by chapter using regex
  
  const lukaDataStr = match[1];
  
  // Let's manually parse the chapters we want to fix
  const repairedData: Record<number, string[]> = {};
  
  // We'll fix chapters 3 to 24
  for (let ch = 3; ch <= 24; ch++) {
    console.log(`Processing Chapter ${ch}...`);
    
    // Extract verses for this chapter
    const chMatch = lukaDataStr.match(new RegExp(`${ch}: \\[([\\s\\S]*?)\\],`));
    if (!chMatch) {
      console.log(`Chapter ${ch} not found, skipping.`);
      continue;
    }
    
    const versesStr = chMatch[1];
    const verses = versesStr.split("\n")
      .map(v => v.trim())
      .filter(v => v.length > 0)
      .map(v => v.replace(/^"/, "").replace(/",$/, "").replace(/"$/, ""));
    
    const prompt = `The following is an array of verses from the Gospel of Luke (Luka) in Dholuo (Luo language of Kenya/Tanzania). 
Some words have been mangled with extra spaces (e.g., "G a b i l i" instead of "Galili", "ruo d h" instead of "ruodh"). 
Some verses might be merged or contain placeholder symbols like \".

Please:
1. Remove all unnecessary spaces within words.
2. Fix word breaks.
3. Ensure the text flows naturally in Dholuo.
4. If you recognize the Bible passage, ensure no verses are missing according to the standard Dholuo Biblia Maler.
5. Return ONLY a JSON array of strings, where each string is one verse.

Original verses for Chapter ${ch}:
${JSON.stringify(verses, null, 2)}`;

    try {
      const response = await ai.models.generateContent({
        model,
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          }
        }
      });

      const cleanedVerses = JSON.parse(response.text);
      repairedData[ch] = cleanedVerses;
      console.log(`Chapter ${ch} repaired. Got ${cleanedVerses.length} verses.`);
    } catch (error) {
      console.error(`Error repairing chapter ${ch}:`, error);
    }
  }

  // Now reconstruct the file
  let newFileContent = fileContent;
  
  for (const [ch, verses] of Object.entries(repairedData)) {
    const chNum = parseInt(ch);
    const versesContent = verses.map(v => `    "${v.replace(/"/g, '\\"')}",`).join("\n");
    const replacement = `  ${chNum}: [\n${versesContent}\n  ],`;
    
    // Replace the specific chapter block
    const chRegex = new RegExp(`  ${chNum}: \\[([\\s\\S]*?)\\],`);
    newFileContent = newFileContent.replace(chRegex, replacement);
  }

  fs.writeFileSync(filePath, newFileContent);
  console.log("Luka text repairs complete!");
}

fixLukaText();
