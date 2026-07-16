import * as fs from 'fs';

const filePath = './src/data/books/tich_joote.ts';
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Clean up characters with spaces between them (e.g., "Y a h u d i" -> "Yahudi")
// We look for patterns of 3 or more letters separated by single spaces.
// We avoid matching single letters like "a" or "e" if they are alone.
content = content.replace(/([a-zA-Z])\s([a-zA-Z])\s([a-zA-Z])(\s[a-zA-Z])*/g, (match) => {
    return match.replace(/\s/g, '');
});

// 2. Remove known garbage patterns
const garbage = [
    /m r i m a/g,
    /r i r i m a/g,
    /s i s i/g,
    /d r a m a/g,
    /k k t i/g,
    /l l l l/g,
    /l l l/g,
    /r i t i o/g,
    /r i t i r o/g,
    /f u l s i/g,
    /m r i r i m a/g,
    /s i s i s i/g,
    /d r a m a/g,
    /ratiro ratiro/g, // sometimes duplicated
];

// Wait, let's be more surgical instead of just deleting them if they might be parts of words.
// But mostly they look like noise.

// 3. Fix specific common garbled words found in the grep
content = content.replace(/Yah u d i/g, 'Yahudi');
content = content.replace(/oc h o k o/g, 'ochoko');
content = content.replace(/w a c h o n e/g, 'wachone');
content = content.replace(/n y akla/g, 'nyakla');
content = content.replace(/Fi l i p o/g, 'Filipo');
content = content.replace(/Prokor o/g, 'Prokoro');
content = content.replace(/Par me n a s/g, 'Parmenas');
content = content.replace(/Om i y o/g, 'Omiyo');
content = content.replace(/Mogon y/g, 'Mogony');
content = content.replace(/c h a k o/g, 'chako');
content = content.replace(/n y al/g, 'nyal');
content = content.replace(/k a n y o/g, 'kanyo');
content = content.replace(/wawi n j o/g, 'wawinjo');
content = content.replace(/Hekaluni/g, 'Hekalu'); // Check if this is intended Luo
content = content.replace(/mi r i a m b o/g, 'miriambo');
content = content.replace(/ti n/g, 'tin');
content = content.replace(/f w en y ore/g, 'fwenyore');
content = content.replace(/wu o n e ga/g, 'wuonega');
content = content.replace(/nyon o/g, 'nyono');
content = content.replace(/r k eni/g, 'rikeni');
content = content.replace(/wen d o/g, 'wendo');
content = content.replace(/nyol e/g, 'nywole');
content = content.replace(/k on y e/g, 'konye');
content = content.replace(/mabe r/g, 'maber');
content = content.replace(/k ete/g, 'kete');
content = content.replace(/owet e n e/g, 'owetene');
content = content.replace(/nyak a/g, 'nyaka');
content = content.replace(/machiegn i/g, 'machiegni');
content = content.replace(/k a wo/g, 'kawo');
content = content.replace(/ny athi/g, 'nyathi');
content = content.replace(/ri e k o/g, 'rieko');
content = content.replace(/okon y e/g, 'okonye');
content = content.replace(/ja Misri mo r o/g, 'ja Misri moro');
content = content.replace(/nyawa d g i/g, 'nyawadgi');
content = content.replace(/Id wa/g, 'Idwa');
content = content.replace(/yawu o wi/g, 'yawuowi');
content = content.replace(/bun g u/g, 'bungu');
content = content.replace(/kwer e n i/g, 'kwereni');
content = content.replace(/patp a t/g, 'patpat');
content = content.replace(/nyadi r i y o/g, 'nyadi ariyo');
content = content.replace(/b a tisgi/g, 'batisgi');
content = content.replace(/mayor e y ore/g, 'mayore yore');
content = content.replace(/o k ow a/g, 'okowa');
content = content.replace(/p e m o n e g i/g, 'pemonegi');
content = content.replace(/l i e h a/g, 'lieha');
content = content.replace(/o-m r i t r e/g, 'omitre');
content = content.replace(/o n g’ e/g, 'ong’eyo');

fs.writeFileSync(filePath, content);
console.log('Cleaned up tich_joote.ts');
