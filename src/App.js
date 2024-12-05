import { useState } from 'react';
import styled from 'styled-components';
import { jsPDF } from 'jspdf';

// Components
import TextInput from './components/TextInput';
import AnalysisResults from './components/AnalysisResults';
import SentimentAnalysis from './components/SentimentAnalysis';
import ExportReport from './components/ExportReport';
import ErrorMessage from './components/ErrorMessage';

// Helpers
import {
  getWordCount,
  getCharacterCount,
  getSentenceCount,
  getParagraphCount,
  getMostFrequentWord,
  getLongestWord,
} from './helpers';

// API
import { analyzeSentiment } from './services/api';

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
  const doc = new jsPDF();

  const [text, setText] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [sentiment, setSentiment] = useState('');

  const analyzeText = () => {
    if (!text.trim()) {
      setError('Please enter some text to analyze.');
      setResults([]);
      return;
    }

    setError('');
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

  const handleAnalyze = async () => {
    setLoading(true);
    setError('');
    try {
      const result = await analyzeSentiment(text);
      setSentiment(result);
    } catch (err) {
      setError(err.message || 'Failed to fetch sentiment.');
    } finally {
      setLoading(false);
    }
  };

  const handleExport = () => {
    doc.text('Analysis Result', 90, 10);
    results.forEach(({ label, value }, index) =>
      doc.text(`${label}: ${value}`, 10, `${index + 2}0`)
    );
    if (sentiment) {
      doc.text('Analysis Sentiment', 90, 100);
      doc.text(sentiment, 10, 110, { maxWidth: 185 });
    }

    doc.save('text-analysis-report.pdf');
  };

  return (
    <AppContainer>
      <Header>Text Analyzer Tool</Header>
      <TextInput text={text} setText={setText} />
      <AnalyzeButton onClick={analyzeText}>Analyze</AnalyzeButton>
      {error && !text.trim() && <ErrorMessage messages={error} />}
      {results.length > 0 && <AnalysisResults results={results} />}
      {results.length > 0 && (
        <SentimentAnalysis
          onAnalyze={handleAnalyze}
          loading={loading}
          error={error}
          sentiment={sentiment}
        />
      )}
      {results.length > 0 && <ExportReport onExport={handleExport} />}
    </AppContainer>
  );
};

export default App;
