import { MATHAYO_DATA } from './src/data/books/mathayo';

for (let i = 1; i <= 28; i++) {
  const chapter = MATHAYO_DATA[i];
  if (!chapter) {
    console.log(`Chapter ${i} is missing!`);
  } else if (chapter.length === 0) {
    console.log(`Chapter ${i} is empty!`);
  } else {
    console.log(`Chapter ${i} has ${chapter.length} verses (grouped or not).`);
  }
}
