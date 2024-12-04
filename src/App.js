import { useState } from 'react';
import styled from 'styled-components';

// Components
import TextInput from './components/TextInput';
import AnalysisResults from './components/AnalysisResults';
import SentimentAnalysis from './components/SentimentAnalysis';
import ExportReport from './components/ExportReport';

// Helpers
import {
  getWordCount,
  getCharacterCount,
  getSentenceCount,
  getParagraphCount,
  getMostFrequentWord,
  getLongestWord,
} from './helpers';

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
`;

const Header = styled.h1`
  text-align: center;
`;

const AnalyzeButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #5a6268;
  }
`;

const App = () => {
  const [text, setText] = useState('');
  const [results, setResults] = useState([]);

  const analyzeText = () => {
    const wordCount = getWordCount(text);
    const charCount = getCharacterCount({ text });
    const charCountNoSpaces = getCharacterCount({ text, excludeSpaces: true });
    const sentenceCount = getSentenceCount(text);
    const paragraphCount = getParagraphCount(text);
    const mostFrequentWord = getMostFrequentWord(text);
    const longestWord = getLongestWord(text);

    setResults([
      { label: 'Word Count', value: wordCount },
      { label: 'Character Count (with spaces)', value: charCount },
      { label: 'Character Count (without spaces)', value: charCountNoSpaces },
      { label: 'Sentence Count', value: sentenceCount },
      { label: 'Paragraph Count', value: paragraphCount },
      { label: 'Most Frequent Word', value: mostFrequentWord },
      { label: 'Longest Word', value: longestWord },
    ]);
  };

  return (
    <AppContainer>
      <Header>Text Analyzer Tool</Header>
      <TextInput text={text} setText={setText} />
      <AnalyzeButton onClick={analyzeText}>Analyze</AnalyzeButton>
      {results.length > 0 && <AnalysisResults results={results} />}
      {results.length > 0 && (
        <SentimentAnalysis
          analyzeSentiment={() => Promise.resolve('Positive')} // TODO: Get result from API response
        />
      )}
      {results.length > 0 && <ExportReport data={results} />}
    </AppContainer>
  );
};

export default App;
