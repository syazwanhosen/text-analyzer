import styled from 'styled-components';

// Components
import ErrorMessage from './ErrorMessage';

const SentimentContainer = styled.div`
  margin: 20px;
  text-align: center;
`;

const AnalyzeButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const SentimentResult = styled.div`
  margin-top: 10px;
  font-size: 18px;
`;

const LoadingMessage = styled.p`
  font-size: 1.2rem;
  color: #007bff;
  text-align: center;
  animation: blink 1.5s infinite;

  @keyframes blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;

const SentimentAnalysis = ({ onAnalyze, loading, error, sentiment }) => (
  <SentimentContainer>
    <AnalyzeButton onClick={onAnalyze}>Analyze Sentiment</AnalyzeButton>
    {loading && <LoadingMessage>Loading...</LoadingMessage>}
    {error && <ErrorMessage messages={error} />}
    {!loading && sentiment && (
      <SentimentResult>
        <strong>Sentiment:</strong> {sentiment}
      </SentimentResult>
    )}
  </SentimentContainer>
);

export default SentimentAnalysis;
