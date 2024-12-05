import {
  getWordCount,
  getCharacterCount,
  getSentenceCount,
  getParagraphCount,
  getMostFrequentWord,
  getLongestWord,
} from '../helpers';

describe('Text Analysis Functions', () => {
  const sampleText = `Hello world! React is great. React is powerful.

React helps build UI.`;

  test('getWordCount returns the correct word count', () => {
    expect(getWordCount(sampleText)).toBe(12); // Count words in the text
    expect(getWordCount('')).toBe(0); // Empty input
    expect(getWordCount('   ')).toBe(0); // Whitespace-only input
  });

  test('getCharacterCount returns the correct character count', () => {
    expect(getCharacterCount({ text: sampleText })).toBe(70); // With spaces
    expect(getCharacterCount({ text: sampleText, excludeSpaces: true })).toBe(
      58
    ); // Without spaces
    expect(getCharacterCount({ text: '' })).toBe(0); // Empty input
  });

  test('getSentenceCount returns the correct sentence count', () => {
    expect(getSentenceCount(sampleText)).toBe(4); // Count sentences
    expect(getSentenceCount('')).toBe(0); // Empty input
    expect(getSentenceCount('Hello world. React!')).toBe(2); // Multiple punctuation
  });

  test('getParagraphCount returns the correct paragraph count', () => {
    expect(getParagraphCount(sampleText)).toBe(2); // Count paragraphs
    expect(getParagraphCount('')).toBe(0); // Empty input
    expect(getParagraphCount('Single paragraph.\n')).toBe(1); // Single paragraph
  });

  test('getMostFrequentWord returns the most frequent word', () => {
    expect(getMostFrequentWord(sampleText)).toBe('react'); // "React" is most frequent
    expect(getMostFrequentWord('')).toBe(''); // Empty input
    expect(getMostFrequentWord('Hello world hello')).toBe('hello'); // Case insensitive
  });

  test('getLongestWord returns the longest word', () => {
    expect(getLongestWord(sampleText)).toBe('powerful'); // Longest word in sampleText
    expect(getLongestWord('')).toBe(''); // Empty input
    expect(getLongestWord('smallest longestword')).toBe('longestword'); // Longest word
  });
});
