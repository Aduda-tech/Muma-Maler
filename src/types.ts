export interface Verse {
  number: number;
  text: string;
}

export interface Chapter {
  number: number;
  verses: Verse[];
}

export interface Book {
  key: string;
  name: string;
  chapters: number;
  color: string;
  group: string;
}

export type BibleData = Record<string, Record<number, string[]>>;
