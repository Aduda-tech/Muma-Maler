import { GoogleGenAI } from "@google/genai";
import * as fs from "fs";
import * as path from "path";

// Initialize Gemini client as specified in gemini-api skill
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("Error: GEMINI_API_KEY environment variable is missing.");
  process.exit(1);
}

const ai = new GoogleGenAI({
  apiKey,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

const checkpointPath = "tmp/repaired_luka.json";

function loadCheckpoint(): Record<number, string[]> {
  if (fs.existsSync(checkpointPath)) {
    try {
      return JSON.parse(fs.readFileSync(checkpointPath, "utf-8"));
    } catch {
      console.warn("Checkpoint file was corrupt. Starting fresh.");
    }
  }
  return {};
}

function saveCheckpoint(data: Record<number, string[]>) {
  fs.writeFileSync(checkpointPath, JSON.stringify(data, null, 2), "utf-8");
}

async function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  console.log("Starting Luke parsing and repair...");

  // Load raw files
  const p1 = fs.readFileSync('tmp/luka_p1.txt', 'utf-8');
  const p2 = fs.readFileSync('tmp/luka_p2.txt', 'utf-8');
  const p3 = fs.readFileSync('tmp/luka_p3.txt', 'utf-8');

  // Concatenate them
  const fullText = p1 + '\n' + p2 + '\n' + p3;

  // Chapter markers to extract chapter texts
  const markers = [
    { ch: 1, start: 'Wach Motelo 1Ji' },
    { ch: 2, start: 'Nyuol Mar Yesu 2E ndalogo' },
    { ch: 3, start: 'Johana Jabatiso Loso Yo 3E higa' },
    { ch: 4, start: 'Tem Mar Yesu 4Yesu' },
    { ch: 5, start: 'Luong Mar Jopuonjre Mokwongo. 5Chieng’' },
    { ch: 6, start: 'Ruodh Sabato 6Chieng’' },
    { ch: 7, start: 'Yie Mar Jaduong’ Lweny 7Kane' },
    { ch: 8, start: 'Ngech Ja Chuoyo 8Bang’' },
    { ch: 9, start: 'Yesu Ooro Jopuonjre Apar Gariyo 9Kane' },
    { ch: 10, start: 'Yesu Ooro Ji Piero Abiriyo Gariyo 10Bang’' },
    { ch: 11, start: 'Puonj Mar Yesu Kuom Lamo 11 Chieng’' },
    { ch: 12, start: 'Siem Kod Jip 12 E kindeno' },
    { ch: 13, start: 'Lokreuru Kata Ulal 13 Koro ne' },
    { ch: 14, start: 'Yesu E Od Jafarisai. 14Chieng’' },
    { ch: 15, start: 'Ngero Mar Rombo Molal 15Koro' },
    { ch: 16, start: 'Ngero Mar Wuon Tich Mariek 16' },
    { ch: 17, start: 'Gik Makelo Chochny 17Yesu' },
    { ch: 18, start: 'Saye Maonge Diol 18' },
    { ch: 19, start: '19 N o y_' },
    { ch: 20, start: 'Loch Mar Yesu. 20Chieng’' },
    { ch: 21, start: '21Kanyono,' },
    { ch: 22, start: 'Lop Judas 22 E' },
    { ch: 23, start: 'Pilato Okwedo Yesu 23Gi' },
    { ch: 24, start: 'Chier Mar Yesu 24' }
  ];

  const chaptersRaw: Record<number, string> = {};

  for (let i = 0; i < markers.length; i++) {
    const current = markers[i];
    let startIndex = fullText.indexOf(current.start);
    if (startIndex === -1 && current.ch === 21) {
      startIndex = fullText.indexOf('_ LUKA 21:1');
    }
    if (startIndex === -1) {
      console.error(`Error: Could not locate boundary for Chapter ${current.ch}`);
      process.exit(1);
    }

    let endIndex = fullText.length;
    if (i < markers.length - 1) {
      const next = markers[i + 1];
      let nextIndex = fullText.indexOf(next.start);
      if (nextIndex === -1 && next.ch === 21) {
        nextIndex = fullText.indexOf('_ LUKA 21:1');
      }
      if (nextIndex !== -1) {
        endIndex = nextIndex;
      }
    }

    chaptersRaw[current.ch] = fullText.substring(startIndex, endIndex).trim();
  }

  // Load checkpoint
  const repairedChapters = loadCheckpoint();

  let newChaptersProcessed = 0;
  let allProcessed = true;

  for (let ch = 1; ch <= 24; ch++) {
    if (repairedChapters[ch]) {
      console.log(`[Checkpoint] Chapter ${ch} already repaired. Skipping. Got ${repairedChapters[ch].length} verses.`);
      continue;
    }

    if (newChaptersProcessed >= 4) {
      allProcessed = false;
      break;
    }

    console.log(`Processing Chapter ${ch} with Gemini API...`);
    const rawText = chaptersRaw[ch];

    const prompt = `You are an expert biblical translator and native speaker of the Luo language (Dholuo) of Kenya and Tanzania, specializing in the Luo Bible (Biblia Maler).

The following content is the raw, unformatted, scrambled Dholuo text for Luke (Luka) Chapter ${ch} extracted from a raw OCR scan.
It contains typos, section headings, misplaced spaces (like "Nya s aye", "H a run", "r i n gruok"), and printing artifacts, particularly in later chapters.

Original Scrambled Text for Chapter ${ch}:
"""
${rawText}
"""

Please carefully perform the following tasks:
1. Repair and format the entire text of Luke Chapter ${ch} into natural, elegant, standard Dholuo (Luo language).
2. Clean all space-mangled words (e.g. resolve "Nya s aye" to "Nyasaye", "G a b i l i" to "Galili", "H a r u n" to "Harun", "j o d o l o" to "jodolo", "r i n gruok" to "ringruok").
3. Fix truncations and spelling errors (e.g., ensure the start of the verses is fully spelled and correct according to the Biblia Maler).
4. Do NOT include verse numbers e.g. "1" or "2" inside the text of the verses.
5. Restore any missing verses to ensure this chapter has its full, accurate biblical set of verses as standard in the Biblia Maler.
6. Return your response ONLY as a JSON array of strings, where each element is a single verse. Array index 0 is Verse 1, index 1 is Verse 2, etc.

JSON Array of strings:`;

    let success = false;
    let attempts = 0;
    const maxAttempts = 5;
    while (!success && attempts < maxAttempts) {
      attempts++;
      try {
        const response = await ai.models.generateContent({
          model: "gemini-3.1-flash-lite",
          contents: prompt,
          config: {
            responseMimeType: "application/json",
            responseSchema: {
              type: "ARRAY",
              items: { type: "STRING" }
            }
          }
        });

        const textOutput = response.text;
        if (!textOutput) {
          throw new Error("Empty response from model");
        }

        const parsed: string[] = JSON.parse(textOutput.trim());
        if (!Array.isArray(parsed) || parsed.length === 0) {
          throw new Error("Response was not a non-empty JSON array");
        }

        repairedChapters[ch] = parsed.map(v => v.trim());
        saveCheckpoint(repairedChapters);
        console.log(`Successfully repaired Chapter ${ch}: got ${parsed.length} verses.`);
        success = true;
        newChaptersProcessed++;
      } catch (err: any) {
        const errMsg = String(err.message || err);
        console.error(`Attempt ${attempts} failed for Chapter ${ch}: ${errMsg}`);
        
        const isRateLimit = errMsg.includes("429") || errMsg.includes("RESOURCE_EXHAUSTED") || errMsg.includes("quota") || errMsg.includes("Quota");
        
        if (attempts < maxAttempts) {
          if (isRateLimit) {
            console.log("Rate limit encountered. Waiting 5 seconds before retrying...");
            await sleep(5000);
          } else {
            console.log("Waiting 2 seconds before retry...");
            await sleep(2000);
          }
        } else {
          console.error(`Error: Chapter ${ch} could not be processed after ${attempts} attempts.`);
          process.exit(1);
        }
      }
    }

    // Gentle pacing pause
    await sleep(500);
  }

  if (!allProcessed) {
    console.log(`\nBatch limit (Processed ${newChaptersProcessed} new chapters) reached. Exiting cleanly to avoid environment timeout.`);
    console.log("Please execute the script again to resume and process the next batch of chapters.");
    process.exit(0);
  }

  // Once all chapters are repaired, build the final src/data/books/luka.ts file
  console.log("All 24 chapters repaired. Reconstructing luka.ts file...");

  let fileContent = "export const LUKA_DATA: Record<number, string[]> = {\n";
  for (let ch = 1; ch <= 24; ch++) {
    fileContent += `  ${ch}: [\n`;
    const verses = repairedChapters[ch];
    verses.forEach((v, idx) => {
      const escaped = v.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
      const comma = idx === verses.length - 1 ? "" : ",";
      fileContent += `    "${escaped}"${comma}\n`;
    });
    fileContent += `  ]${ch === 24 ? "" : ","}\n`;
  }
  fileContent += "};\n";

  const outputPath = "src/data/books/luka.ts";
  fs.writeFileSync(outputPath, fileContent, "utf-8");
  console.log(`Successfully wrote fully cleaned and repaired Luke data to: ${outputPath}`);

  // Delete checkpoint
  try {
    fs.unlinkSync(checkpointPath);
    console.log("Cleaned up checkpoint file.");
  } catch {}

  console.log("Luke text repair is complete!");
}

main().catch(err => {
  console.error("Unhandled error in main execution:", err);
  process.exit(1);
});
