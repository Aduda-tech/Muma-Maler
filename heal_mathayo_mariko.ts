import * as fs from 'fs';
import * as path from 'path';

// Clean functions
function cleanSpacing(text: string): string {
    // 1. Remove page header/footer artifacts
    // e.g. "3 MATHAYO 3:15", "MATHAYO 3:16 4"
    text = text.replace(/\d*\s*(MATHAYO|MARIKO|LUKA|FWENY)\s+\d+:\d+\s*\d*/gi, '');

    // 2. Merge digits separated by spaces (e.g. "1 0" -> "10")
    text = text.replace(/(\d)\s+(\d)/g, '$1$2');

    // 3. Fix characters with spaces between them (e.g., "I b r a h i m" -> "Ibrahim", "Ja k o b o" -> "Jakobo")
    // We look for patterns of 3 or more letters separated by single spaces.
    text = text.replace(/([a-zA-Z])\s([a-zA-Z])\s([a-zA-Z])(\s[a-zA-Z])*/g, (match) => {
        return match.replace(/\s/g, '');
    });

    // 4. Specific replacements for common Luo words/names with leftover spaces
    const replacements: [RegExp, string][] = [
        [/Jo s e f/gi, 'Josef'],
        [/I b r a h i m/gi, 'Ibrahim'],
        [/Ja k o b o/gi, 'Jakobo'],
        [/Pe r e z/gi, 'Perez'],
        [/Ta m a r/gi, 'Tamar'],
        [/H e z r o n/gi, 'Hezron'],
        [/A m i n a d a b/gi, 'Aminadab'],
        [/Re h o b o a m/gi, 'Rehoboam'],
        [/Ab i j a/gi, 'Abija'],
        [/Je h o s h a f a t/gi, 'Jehoshafat'],
        [/Je h o r a m/gi, 'Jehoram'],
        [/U z i a/gi, 'Uzia'],
        [/Jo t h a m/gi, 'Jotham'],
        [/H e z e k i a/gi, 'Hezekia'],
        [/Ma n a s e/gi, 'Manase'],
        [/Je k o n i a/gi, 'Jekonia'],
        [/Z e r u b a b e l/gi, 'Zerubabel'],
        [/Ka p e r n a u m/gi, 'Kapernaum'],
        [/Je r u s a l e m/gi, 'Jerusalem'],
        [/Be t h l e h e m/gi, 'Bethlehem'],
        [/He r o d i a/gi, 'Herodia'],
        [/He r o d e/gi, 'Herode'],
        [/Jo h a n a/gi, 'Johana'],
        [/Ba t i s o/gi, 'Batiso'],
        [/Ba t i s/gi, 'Batis'],
        [/Is a y a/gi, 'Isaya'],
        [/Lu o n g/gi, 'Luong'],
        [/Je s u/gi, 'Yesu'],
        [/Ye s u/gi, 'Yesu'],
        [/Ma r i a/gi, 'Maria'],
        [/Na z a r e t h/gi, 'Nazareth'],
        [/owet e n e/gi, 'owetene'],
        [/owet e n e/gi, 'owetene'],
        [/mabe r/gi, 'maber'],
        [/machiegn i/gi, 'machiegni'],
        [/k a wo/gi, 'kawo'],
        [/ny athi/gi, 'nyathi'],
        [/ri e k o/gi, 'rieko'],
        [/nyawa d g i/gi, 'nyawadgi'],
        [/yawu o wi/gi, 'yawuowi'],
        [/owat e n e/gi, 'owatene'],
        [/owet e n e/gi, 'owetene'],
        [/om i y o/gi, 'omiyo'],
        [/Om i y o/gi, 'Omiyo'],
        [/c h a k o/gi, 'chako'],
        [/n y al/gi, 'nyal'],
        [/k a n y o/gi, 'kanyo'],
        [/swasano/gi, 'wasano'],
        [/wasit_wasit/gi, 'wasit wasit'],
        [/m_o_here/gi, 'mohere'],
        [/m_ose_ner/gi, 'mosener'],
        [/m_ose_chan/gi, 'mosechan'],
        [/m_adwoke/gi, 'madwoke'],
        [/p_is_git/gi, 'pisgit'],
        [/ch_k_oliel/gi, 'chkoliel'],
        [/m_omit_m_o_here/gi, 'momit mohere'],
        [/ose_nene/gi, 'osenene'],
        [/ose_we_yo/gi, 'oseweyo'],
        [/ose_siemogi/gi, 'osesiemogi'],
        [/gisedhi/gi, 'gisedhi'],
        [/gise_winjo/gi, 'gisewinjo'],
        [/gise_donjo/gi, 'gisedonjo'],
        [/gise_weyo/gi, 'giseweyo'],
        [/gisedhi/gi, 'gisedhi'],
        [/gise_winjo/gi, 'gisewinjo'],
        [/gise_donjo/gi, 'gisedonjo'],
        [/gise_weyo/gi, 'giseweyo'],
        [/bicho_gwasano/gi, 'bichowasano'],
        [/parruok/gi, 'paro'],
        [/m_use_medo/gi, 'musemedo'],
        [/o_kechi/gi, 'okechi'],
        [/ko_mbe/gi, 'kombe'],
        [/ko_ko/gi, 'koko'],
        [/gase_nyogi/gi, 'gasenyogi'],
        [/maborer/gi, 'mabor'],
        [/maborer_no/gi, 'maborno'],
        [/ooro_gi/gi, 'oorogi'],
        [/girwak_ni/gi, 'girwakne'],
        [/pat_pat/gi, 'patpat'],
        [/gipopuponjo/gi, 'gipuonjo'],
        [/yamo_yenga/gi, 'yamoyenga'],
        [/yewe_yo/gi, 'yeweyo'],
        [/uneseedho/gi, 'uneedho'],
        [/uwindho/gi, 'uwinjo'],
        [/nyadiri_yo/gi, 'nyadi ariyo'],
        [/swasano/gi, 'wasano'],
        [/anyany/gi, 'ayany'],
        [/gopopuponjo/gi, 'gipuonjo'],
        [/dany/gi, 'diiny'],
        [/m_omit_m_o_here/gi, 'momit mohere'],
        [/kidinoni/gi, 'kidini'],
        [/tetni/gi, 'tetni'],
        [/gwe gweng’/gi, 'e gweng’'],
        [/bente/gi, 'bende']
    ];

    replacements.forEach(([regex, rep]) => {
        text = text.replace(regex, rep);
    });

    return text;
}

// Subheadings that commonly appear in our Mathayo and Mariko raw text
const subheadings = [
    "Nonro Mar Anywola Mar Yesu",
    "Nywol Mar Yesu Kristo",
    "Limbe Mar Joma Riek",
    "Tony Dhi Misiri",
    "Dok Nazareth",
    "Johana Ja-Batiso Oloso Yo",
    "Batiso Mar Yesu Kod Temne",
    "Luong Mar Jopuonjre Mokwongo",
    "Yesu Oriembo Jachien Marach",
    "Yesu Ochango Ji Mang’eny",
    "Yesu Yalo Galili",
    "Ng’at Man-gi Dhoho Ichango",
    "Yesu Ochango Ng’ama Nigi Athany",
    "Luong Mar Levi (Mathayo)",
    "Openj Yesu wach kuom Tweyo Chiemo",
    "Yesu En Ruodh Sabato",
    "Yesu Ochango Lwet Ng’ato Motwo Chieng’ Sabato",
    "Oganda Maduong’ Luwo Yesu",
    "Yesu Yiero Jopuonjre Apar Gariyo",
    "Yesu Kod Beelzebub",
    "Min Yesu Gi Owetene",
    "Ngech Jakomo",
    "Taya Ewi Yiende",
    "Ngech Kodhi Madongo",
    "Ngech Koth Karadali",
    "Yesu Okweyo Ahiti",
    "Chang Mar Ng’at Manigi Jochiende",
    "Nyako Motho Gi Dhako Matuo",
    "Yesu Igaw e Taon Dalagi",
    "Yesu Ooro Jopuonjre Apar Gariyo",
    "Tho Mar Johana Ja-Batiso",
    "Yesu Opidho Ji Alufu Abich",
    "Yesu Wuotho Ewi Pi",
    "Yesu Ochango Joma Tuo Genesaret",
    "Gik Maler Kod Gik Mogak",
    "Yie Mar Chi Kanaan",
    "Yesu Ochango Ng’ama Itgi Odino Kendo Momo",
    "Yesu Opidho Ji Alufu Ang’wen",
    "Kwayo Mar Ranyisi",
    "Thowi Mar Jo Farisai Gi Herode",
    "Yesu Ochango Muofu Betsaida",
    "Petro Ohulo Ni Yesu En Ng’a",
    "Yesu Okoro Thone mar Adek",
    "Yesu Okoro Thone mar Ariyo",
    "Yesu Okoro Thone",
    "Petro Okwer Yesu",
    "Baraba Koso Yesu",
    "Askeche Charo Yesu",
    "Yesu Iguro E Msalaba",
    "Tho Mar Yesu",
    "Yesu Iyiko",
    "Chier Mar Ruoth Yesu",
    "Chiw mar Dhako ma Liel matio",
    "Ute Hekalu Kaka Noreny",
    "Chenro Mar Nego Yesu",
    "Yesu M’wewye Mo Betania",
    "Chenro Mar Juda Mar Ndhogo Yesu",
    "Nyasi Pasaka",
    "Chiemo Maler",
    "Yesu Okoro Wach Petro Mar Kwer",
    "Lamo Mar Getsemane",
    "Yesu Imako Sanhedrin",
    "Yesu Imako",
    "Yesu Gi Johana Jabatiso",
    "Ochang Wuowi Mane Nigi Jachien",
    "Ng’at Maduong’ Moloyo E",
    "Ng’at Ma ok Kwedwa Ni Koda",
    "Gik Makelo Richo",
    "Yesu Opuonjo Wach Ketho Keny",
    "Nyithindo Matindo Kod Yesu",
    "Wuowi Ma Jamoko",
    "Kwayo Mar Jakobo Gi Johana",
    "Yesu Ochango Muofu Bartimeo",
    "Yesu Odonjo Jerusalem Gi Rwak Maduong’",
    "Got M’zabibu M’ner",
    "Yesu Yweyo Hekalu",
    "Wach Osuru Ne Kaisar",
    "Penj Kuom Chier",
    "Chik Maduong’ Moloyo",
    "K r i s t o En Wuod Ng’a?",
    "Siem Kuom Jopuonj Chik",
    "Ranyisi giko Mar Piny",
    "Kinde Ma Ok Ong’ere",
    "Penj Kuom Teko Mar Yesu",
    "Got mzabibu"
];

function removeSubheadings(text: string): string {
    let cleaned = text;
    subheadings.forEach(sub => {
        // Build regex to match subheading with optional surrounding spaces
        const escaped = sub.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        const regex = new RegExp(`\\s*${escaped}\\s*`, 'gi');
        cleaned = cleaned.replace(regex, ' ');
    });
    return cleaned;
}

function processBook(bookName: string, partFiles: string[], totalChapters: number): Record<number, string[]> {
    console.log(`Processing ${bookName}...`);
    // Combine parts
    let rawText = '';
    partFiles.forEach(file => {
        rawText += fs.readFileSync(file, 'utf-8') + ' ';
    });

    // Clean it up
    let cleanText = cleanSpacing(rawText);
    cleanText = removeSubheadings(cleanText);

    // Let's do a regex split to find all numeric verse/chapter markers
    // That means digits optionally followed by letters (due to merged text, e.g. "1Ma")
    // We split by digits that look like standalone or prefix verse numbers
    const parts = cleanText.split(/(?:^|\s+)(\d+)(?=[a-zA-Z’'“"”‘(]|$)/);

    const chapters: Record<number, string[]> = {};
    let currentChapter = 0;
    let currentVerse = 0;

    let i = 0;
    // Parts can be: [text_before_first_marker, marker_1, text_between_1_and_2, marker_2, text_between_2_and_3, ...]
    let textSegment = parts[0] ? parts[0].trim() : '';

    for (i = 1; i < parts.length; i += 2) {
        const markerStr = parts[i];
        const nextText = parts[i + 1] ? parts[i + 1].trim() : '';
        const num = parseInt(markerStr, 10);

        // Decide if this marker represents a new chapter or a verse
        const isChapterStart = 
            (currentChapter === 0 && num === 1) || 
            (num === currentChapter + 1 && currentVerse > 3);

        const headingPart = cleanText.substring(Math.max(0, parts.slice(0, i).join(' ').length - 80), parts.slice(0, i).join(' ').length);
        if (num <= currentChapter + 5 && num > currentChapter - 2) {
            console.log(`Candidate Marker "${num}" (str: "${markerStr}") at part index ${i}. IsChapterStart: ${isChapterStart}. CurrentChapter: ${currentChapter}, CurrentVerse: ${currentVerse}. Context before: ...${headingPart.substring(headingPart.length - 60)}...`);
        }

        if (isChapterStart) {
            currentChapter = num;
            chapters[currentChapter] = [];
            currentVerse = 1;

            // Wait, does the text belong to verse 1?
            // The text following a chapter marker "C" is verse 1 text
            let verseText = nextText;
            chapters[currentChapter].push(verseText);
        } else {
            // It's a verse inside currentChapter
            if (currentChapter > 0) {
                currentVerse = num;
                let verseText = nextText;
                
                // If there are duplicate verse numbers, handle gracefully
                chapters[currentChapter].push(verseText);
            }
        }
    }

    // Post-cleaning of verses
    for (const ch in chapters) {
        chapters[ch] = chapters[ch]
            .map(v => v.trim())
            .filter(v => v.length > 0);
    }

    return chapters;
}

try {
    const mathayoChapters = processBook('mathayo', ['tmp/mathayo_p1.txt', 'tmp/mathayo_p2.txt', 'tmp/mathayo_p3.txt'], 28);
    console.log(`Mathayo chapters successfully parsed: ${Object.keys(mathayoChapters).length}`);
    
    // Save to mathayo_test.json to check first
    fs.writeFileSync('mathayo_test.json', JSON.stringify(mathayoChapters, null, 2));
    
    const marikoChapters = processBook('mariko', ['tmp/mariko_p1.txt', 'tmp/mariko_p2.txt'], 16);
    console.log(`Mariko chapters successfully parsed: ${Object.keys(marikoChapters).length}`);
    fs.writeFileSync('mariko_test.json', JSON.stringify(marikoChapters, null, 2));

} catch (e: any) {
    console.error(e);
}
