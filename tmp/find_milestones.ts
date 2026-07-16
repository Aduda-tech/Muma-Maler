import * as fs from 'fs';

function analyze(filePath: string, name: string) {
    const raw = fs.readFileSync(filePath, 'utf-8');
    console.log(`=== ANALYZING ${name} ===`);
    console.log(`Length: ${raw.length} chars`);
    
    // Find all occurrences of digits
    const matches = Array.from(raw.matchAll(/(?:\s+|^)(\d+)(?:\s+|[a-zA-Z’']|$)/g));
    console.log(`Found ${matches.length} numeric markers.`);
    if (matches.length > 0) {
        console.log("First 10 markers:");
        for (let i = 0; i < Math.min(10, matches.length); i++) {
            const m = matches[i];
            const start = Math.max(0, m.index! - 30);
            const end = Math.min(raw.length, m.index! + m[0].length + 40);
            console.log(`  Marker "${m[1]}" at index ${m.index}: ...${raw.substring(start, end).replace(/\n/g, ' ')}...`);
        }
    }
}

try {
    analyze('/tmp/mathayo_p1.txt', 'Mathayo Part 1');
    analyze('/tmp/mathayo_p2.txt', 'Mathayo Part 2');
    analyze('/tmp/mathayo_p3.txt', 'Mathayo Part 3');
    analyze('/tmp/mariko_p1.txt', 'Mariko Part 1');
    analyze('/tmp/mariko_p2.txt', 'Mariko Part 2');
} catch (e: any) {
    console.error(e);
}
