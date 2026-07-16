import { GoogleGenerativeAI } from "@google/generative-ai";
import * as fs from "fs";
import * as path from "path";

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
    console.error("ERROR: GEMINI_API_KEY is not set correctly.");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function repairChapter(bookName: string, chapterNum: number, originalText: string) {
    console.log(`Repairing ${bookName} Chapter ${chapterNum}...`);
    
    const prompt = `You are an expert in the Luo language (Dholuo) and the Luo Bible (Biblia Maler).
The following is the Luo text for ${bookName} Chapter ${chapterNum}. 
It might have missing characters at the start of verses or words broken by extra spaces.

Original (HINT):
${originalText}

Please provide the FULL and CORRECT Luo (Dholuo) text for ${bookName} Chapter ${chapterNum} from the Biblia Maler.
Fix any missing characters and formatting issues.
Split the text into its individual verses.
Return the result ONLY as a JSON array of strings, where each string is ONE verse. 
Do NOT include the verse numbers in the strings themselves.
The array index will determine the verse number.

JSON:`;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        let text = response.text();
        
        // Sometimes Gemini wraps JSON in markdown blocks
        if (text.includes("```json")) {
            text = text.split("```json")[1].split("```")[0];
        } else if (text.includes("```")) {
            text = text.split("```")[1].split("```")[0];
        }
        
        return JSON.parse(text.trim());
    } catch (e) {
        console.error(`Failed to repair ${bookName} Ch ${chapterNum}`, e);
        return null;
    }
}

async function processBook(bookKey: string, bookName: string, chaptersCount: number) {
    const filePath = path.join(process.cwd(), "src/data/books", `${bookKey.toLowerCase()}.ts`);
    let existingData: Record<number, string[]> = {};
    
    if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, "utf-8");
        const match = content.match(new RegExp(`export const ${bookKey.toUpperCase()}_DATA(?:\\s*|:[^=]*)=\\s*(\\{[\\s\\S]*?\\});?`));
        if (match) {
            // Very loose "parse" - just to get some text for each chapter
            const chRegex = /(\d+)\s*:\s*\[([\s\S]*?)\]/g;
            let chm;
            while ((chm = chRegex.exec(match[1])) !== null) {
                const ch = parseInt(chm[1]);
                const rawVerses = chm[2].split(",\n").map(v => v.trim().replace(/^"/, "").replace(/"$/, ""));
                existingData[ch] = rawVerses;
            }
        }
    }

    const newData: Record<number, string[]> = {};
    for (let i = 1; i <= chaptersCount; i++) {
        const hint = (existingData[i] || []).join(" ");
        const repaired = await repairChapter(bookName, i, hint);
        if (repaired) {
            newData[i] = repaired;
        } else if (existingData[i]) {
            newData[i] = existingData[i];
        }
    }

    let output = `export const ${bookKey.toUpperCase()}_DATA: Record<number, string[]> = {\n`;
    for (let i = 1; i <= chaptersCount; i++) {
        if (!newData[i]) continue;
        output += `  ${i}: [\n`;
        newData[i].forEach((v, idx) => {
            const comma = idx === newData[i].length - 1 ? "" : ",";
            output += `    "${v.replace(/"/g, '\\"')}"${comma}\n`;
        });
        output += `  ],\n`;
    }
    output += `};\n`;

    fs.writeFileSync(filePath, output);
    console.log(`Saved ${bookKey}.ts`);
}

async function main() {
    const booksToProcess = [
        { key: "MATHAYO", name: "Mathayo", chapters: 28 },
        { key: "MARIKO", name: "Mariko", chapters: 16 },
        { key: "LUKA", name: "Luka", chapters: 24 },
    ];

    for (const book of booksToProcess) {
        await processBook(book.key, book.name, book.chapters);
    }
}

main();
