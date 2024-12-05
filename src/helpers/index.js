const words = (text) => text.toLowerCase().match(/\w+/g) || [];

const getWordCount = (text) =>
  text.trim() ? text.trim().split(/\s+/).length : 0;

const getCharacterCount = ({ text, excludeSpaces = false }) =>
  excludeSpaces ? text.replace(/\s/g, '').length : text.length;

const getSentenceCount = (text) => text.split(/[.!?]/).filter(Boolean).length;

const getParagraphCount = (text) => text.split(/\n+/).filter(Boolean).length;

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
