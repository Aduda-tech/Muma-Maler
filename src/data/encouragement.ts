// Encouragement chat: emotion detection -> empathetic reply + matching verse.
// Works fully offline; every input maps to a verse (fallback if no emotion).

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
    keywords: ["mor", "ilo", "mamor", "awinjo maber", "ber ahinya", "amedo mor"],
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
    keywords: ["kuyo", "lit", "ywak", "ochando", "chandruok", "kuye", "aywak"],
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
    keywords: ["luor", "aluor", "luoro", "bwok", "abwok", "alwo", "aluora"],
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
    keywords: ["chandruok", "parruok", "chand", "parruok", "pek", "ok anyal", "achandore"],
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
    keywords: ["ol", "aol", "olo", "riyo", "ojony", "oteka", "ok an gi teko"],
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
    keywords: ["richo", "ketho", "keth", "bal", "asetimo marach", "asetho ketho"],
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
    keywords: ["mirima", "nyiego", "sin", "kecho", "awang", "ich wang", "sin kod"],
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
    keywords: ["tuo", "athany", "chang", "rem", "two", "atuo", "chand tuoche"],
    reply: "Nyasaye e jachang; en ema weyo richoni kendo ochano tuocheni.",
    verses: [
      { book: "Zaburi", chapter: 103, verse: 3 },
      { book: "Jakobo", chapter: 5, verse: 14 },
    ],
  },
  {
    id: "osiel",
    label: "Aol gi bedo kenda! (Lonely)",
    emoji: "🥺",
    keywords: ["kenda", "jwang", "kende", "oweya", "osiel", "onge ng'at", "ajwang'", "aol gi bedo kenda"],
    reply: "Nyasaye osingore ni ok nowei kata jwang'i.",
    verses: [
      { book: "Jo-Hibrania", chapter: 13, verse: 5 },
      { book: "Mathayo", chapter: 28, verse: 20 },
    ],
  },
  {
    id: "geno",
    label: "An gi geno (Hopeful)",
    emoji: "🌟",
    keywords: ["geno", "ageno", "erokamano", "goyo erokamano", "awinjo maber", "agen kuom"],
    reply: "Geno ma in-go kuom Nyasaye ok wichkuot.",
    verses: [
      { book: "Jeremia", chapter: 29, verse: 11 },
      { book: "Jo-Rumi", chapter: 15, verse: 13 },
    ],
  },
];

export const FALLBACK_REPLY =
  "Adwoki gi wach mokonyo chuny, nimar Nyasaye en jakwadha maber.";
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
