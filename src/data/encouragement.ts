// Encouragement chat: emotion detection -> empathetic reply + matching verse.
// Works fully offline. Understands a mix of Luo, English, Kiswahili and Sheng
// (keywords per language). If no emotion is detected, the app asks the user to
// rephrase in English (dho ngere) or Kiswahili (oswayo).

export interface EmotionVerse {
  book: string;
  chapter: number;
  verse: number;
}

export interface Emotion {
  id: string;
  label: string;
  emoji: string;
  keywords: string[];
  reply: string;
  verses: EmotionVerse[];
}

export const GREETING = "Arwaki! Iwinjo nade kawuono?";

export const EMOTIONS: Emotion[] = [
  {
    id: "mor",
    label: "Amor (Happy)",
    emoji: "😊",
    keywords: [
      // Luo
      "mor", "ilo", "mamor", "awinjo maber", "ber ahinya", "amedo mor",
      // English
      "happy", "glad", "joy", "joyful", "excited", "blessed", "feeling good", "feeling great",
      // Kiswahili
      "furaha", "nafurahi", "nimefurahi", "raha", "mzuri", "safi",
      // Sheng
      "niko poa", "niko fit", "fiti", "noma", "niko safi",
    ],
    reply: "Maber ahinya! We wapak Nyasaye kodi kuom morno.",
    verses: [
      { book: "Zaburi", chapter: 118, verse: 24 },
      { book: "Ngeche", chapter: 17, verse: 22 },
    ],
  },
  {
    id: "kuyo",
    label: "Akuyo (Sad)",
    emoji: "😢",
    keywords: [
      // Luo
      "kuyo", "lit", "ywak", "kuye", "aywak",
      // English
      "sad", "sorrow", "unhappy", "depressed", "crying", "miserable", "feel down", "feel low", "feeling down", "feeling low",
      // Kiswahili
      "huzuni", "nina huzuni", "nasikitika", "nalia",
      // Sheng
      "niko chini", "niko low", "niko down",
    ],
    reply: "Ayie ni kuyoni maduong'. To ng'wono mar Nyasaye osiko nikech in.",
    verses: [
      { book: "Zaburi", chapter: 34, verse: 18 },
      { book: "Ywagruok", chapter: 3, verse: 22 },
    ],
  },
  {
    id: "luoro",
    label: "An gi luoro (Afraid)",
    emoji: "😨",
    keywords: [
      // Luo
      "luor", "aluor", "luoro", "bwok", "abwok", "alwo", "aluora",
      // English
      "afraid", "scared", "fear", "terrified", "frightened", "panic",
      // Kiswahili
      "naogopa", "hofu", "nina hofu", "ogopa",
      // Sheng
      "niko scared", "niko fear",
    ],
    reply: "Kik iluor — Nyasaye ni kodi kendo ok nowei.",
    verses: [
      { book: "Isaya", chapter: 41, verse: 10 },
      { book: "Joshua", chapter: 1, verse: 9 },
    ],
  },
  {
    id: "chandruok",
    label: "Achandora (Worried)",
    emoji: "😟",
    keywords: [
      // Luo
      "chandruok", "parruok", "chand", "ok anyal", "achandore", "achandora",
      // English
      "worried", "worry", "anxious", "anxiety", "stressed", "stress", "overwhelmed", "concerned",
      // Kiswahili
      "wasiwasi", "nina wasiwasi", "shida", "nina shida",
      // Sheng
      "niko stress", "niko stressed", "niko wasi",
    ],
    reply: "Ket dwachu duto kuom Nyasaye, nimar oheroi.",
    verses: [
      { book: "1 Petro", chapter: 5, verse: 7 },
      { book: "Jo-Filipi", chapter: 4, verse: 6 },
    ],
  },
  {
    id: "olo",
    label: "Aol (Tired)",
    emoji: "😩",
    keywords: [
      // Luo
      "aol", "riyo", "ojony", "oteka", "ok an gi teko",
      // English
      "tired", "exhausted", "weary", "fatigued", "drained", "sleepy",
      // Kiswahili
      "nimechoka", "uchovu", "mchovu", "amechoka",
      // Sheng
      "niko tired", "niko dead", "niko drained",
    ],
    reply: "Bi ir Yesu, obiro miyi yweyo.",
    verses: [
      { book: "Mathayo", chapter: 11, verse: 28 },
      { book: "Isaya", chapter: 40, verse: 31 },
    ],
  },
  {
    id: "richo",
    label: "Richo Oloya (Guilty)",
    emoji: "😔",
    keywords: [
      // Luo
      "richo", "ketho", "keth", "bal", "asetimo marach", "asetho ketho",
      // English
      "guilty", "sin", "sinned", "shame", "ashamed", "regret", "fault",
      // Kiswahili
      "dhambi", "hatia", "nina hatia", "nimetenda dhambi", "aibu", "nimekosea",
      // Sheng
      "niko guilty",
    ],
    reply: "Ka wahulo richowa, Nyasaye en jaadiera kendo obiro weyonwagi.",
    verses: [
      { book: "1 Johana", chapter: 1, verse: 9 },
      { book: "Isaya", chapter: 1, verse: 18 },
    ],
  },
  {
    id: "mirima",
    label: "Iya Owang’ (Angry)",
    emoji: "😠",
    keywords: [
      // Luo
      "mirima", "nyiego", "kecho", "awang", "owang", "iya owang", "ich wang",
      // English
      "angry", "furious", "upset", "annoyed", "irritated", "frustrated",
      // Kiswahili
      "hasira", "nina hasira", "nimekasirika", "kasirika", "ghadhabu",
      // Sheng
      "niko mad", "niko angry", "niko upset",
    ],
    reply: "Dwoko wach mamuol kweyo mirima.",
    verses: [
      { book: "Jakobo", chapter: 1, verse: 19 },
      { book: "Ngeche", chapter: 15, verse: 1 },
    ],
  },
  {
    id: "tuo",
    label: "Atuo (Sick)",
    emoji: "🤒",
    keywords: [
      // Luo
      "tuo", "athany", "chang", "two", "atuo", "chand tuoche",
      // English
      "sick", "illness", "am ill", "feel ill", "feeling ill", "pain", "hurting", "unwell", "disease",
      // Kiswahili
      "mgonjwa", "naumwa", "ugonjwa", "maumivu", "ninaumwa",
      // Sheng
      "niko sick",
    ],
    reply: "Nyasaye e jachang; en ema weyo richoni kendo ochano tuocheni.",
    verses: [
      { book: "Zaburi", chapter: 103, verse: 3 },
      { book: "Jakobo", chapter: 5, verse: 14 },
    ],
  },
  {
    id: "kenda",
    label: "Aol gi bedo kenda! (Lonely)",
    emoji: "🥺",
    keywords: [
      // Luo
      "kenda", "kende", "oweya", "an kenda", "ojwang'a", "aonge ng'ato", "jwang", "aol gi bedo kenda",
      // English
      "lonely", "alone", "abandoned", "isolated", "forsaken", "no one",
      // Kiswahili
      "upweke", "niko peke yangu", "nina upweke", "pekee", "nimeachwa",
      // Sheng
      "niko solo", "niko lonely",
    ],
    reply: "Nyasaye osingore ni ok nowei kata jwang'i.",
    verses: [
      { book: "Jo-Hibrania", chapter: 13, verse: 5 },
      { book: "Mathayo", chapter: 28, verse: 20 },
    ],
  },
  {
    id: "watna_otho",
    label: "Watna otho (Grief)",
    emoji: "💔",
    keywords: [
      // Luo
      "watna otho", "otho", "ne otho", "loso", "tho mar", "ywak ne", "awinjo lit ne",
      // English
      "died", "death", "grief", "mourning", "bereavement", "passed away", "lost a loved one", "lost someone", "heartbroken",
      // Kiswahili
      "kifo", "amekufa", "nimefiwa", "kufiwa", "msiba", "amefariki",
      // Sheng
      "alidedi", "ameomoka",
    ],
    reply: "Ayie ni chunyi opogore. Nyasaye chiegni kodi kendo obiro weyo pi wengegi.",
    verses: [
      { book: "Fweny", chapter: 21, verse: 4 },
      { book: "Mathayo", chapter: 5, verse: 4 },
    ],
  },
  {
    id: "geno",
    label: "An gi geno (Hopeful)",
    emoji: "🌟",
    keywords: [
      // Luo
      "geno", "ageno", "erokamano", "goyo erokamano", "awinjo maber", "agen kuom",
      // English
      "hopeful", "hope", "grateful", "thankful", "blessed",
      // Kiswahili
      "matumaini", "nina matumaini", "nina tumaini", "nashukuru", "asante", "shukrani",
      // Sheng
      "niko na hope",
    ],
    reply: "Geno ma in-go kuom Nyasaye ok wichkuot.",
    verses: [
      { book: "Jeremia", chapter: 29, verse: 11 },
      { book: "Jo-Rumi", chapter: 15, verse: 13 },
    ],
  },
];

// When no emotion is detected, ask the user to rephrase in English or Kiswahili.
export const FALLBACK_REPLY =
  "Mano en ang'o gi dho ngere kata oswayo?";

// If the clarification is still not understood, reply politely and offer a
// general encouragement verse.
export const POLITE_REPLY =
  "Atimo mos — ok awinjo gima iwacho. To we awachni wach ma nyalo jiwo chunyi matin.";
export const FALLBACK_VERSE: EmotionVerse = { book: "Zaburi", chapter: 23, verse: 1 };

// Detect emotion from free text; returns null if none matched.
export function detectEmotion(text: string): Emotion | null {
  const low = " " + text.toLowerCase() + " ";
  let best: Emotion | null = null;
  let bestScore = 0;
  for (const e of EMOTIONS) {
    let score = 0;
    for (const kw of e.keywords) {
      if (low.includes(kw)) score++;
    }
    if (score > bestScore) {
      bestScore = score;
      best = e;
    }
  }
  return best;
}
