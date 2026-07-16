import * as fs from 'fs';
import * as path from 'path';

function main() {
  const p1 = fs.readFileSync('tmp/luka_p1.txt', 'utf-8');
  const p2 = fs.readFileSync('tmp/luka_p2.txt', 'utf-8');
  const p3 = fs.readFileSync('tmp/luka_p3.txt', 'utf-8');

  // Let's combine them of interest, discarding the intro part
  const fullText = p1 + '\n' + p2 + '\n' + p3;

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
    { ch: 21, start: '21Kanyono,' }, // wait, could use '21Kanyono,' or '_ LUKA 21:1'
    { ch: 22, start: 'Lop Judas 22 E' },
    { ch: 23, start: 'Pilato Okwedo Yesu 23Gi' },
    { ch: 24, start: 'Chier Mar Yesu 24' }
  ];

  const chapters: Record<number, string> = {};

  for (let i = 0; i < markers.length; i++) {
    const current = markers[i];
    let startIndex = fullText.indexOf(current.start);
    if (startIndex === -1 && current.ch === 21) {
      // try other patterns if 21 fails
      startIndex = fullText.indexOf('_ LUKA 21:1');
    }
    if (startIndex === -1) {
      console.error(`Could not find start marker for Chapter ${current.ch}: "${current.start}"`);
      continue;
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

    const chapterText = fullText.substring(startIndex, endIndex).trim();
    chapters[current.ch] = chapterText;
    console.log(`Chapter ${current.ch}: successfully extracted. Length: ${chapterText.length} characters.`);
    console.log(`  Starts with: "${chapterText.substring(0, 80).replace(/\n/g, ' ')}..."`);
    console.log(`  Ends with: "...${chapterText.substring(chapterText.length - 80).replace(/\n/g, ' ')}"`);
  }

  console.log(`Total chapters extracted: ${Object.keys(chapters).length}`);
}

main();
