const words = (text) => text.toLowerCase().match(/\w+/g) || [];
const cleanedText = (text) => text.replace(/[^\w\s]/g, ''); // Remove punctuation

const getWordCount = (text) =>
  cleanedText(text).trim() ? text.trim().split(/\s+/).length : 0;

const getCharacterCount = ({ text, excludeSpaces = false }) =>
  excludeSpaces
    ? cleanedText(text).replace(/\s/g, '').length
    : cleanedText(text).length;

const getSentenceCount = (text) => text.split(/[.!?]/).filter(Boolean).length;

const getParagraphCount = (text) =>
  cleanedText(text).split(/\n+/).filter(Boolean).length;

const getMostFrequentWord = (text) =>
  words(text).reduce(
    (a, b, _, arr) =>
      arr.filter((v) => v === a).length >= arr.filter((v) => v === b).length
        ? a
        : b,
    ''
  );

const getLongestWord = (text) =>
  words(text).reduce((a, b) => (a.length >= b.length ? a : b), '');

export {
  getWordCount,
  getCharacterCount,
  getSentenceCount,
  getParagraphCount,
  getMostFrequentWord,
  getLongestWord,
};
