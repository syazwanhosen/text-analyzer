import { useState } from "react";
import styled from "styled-components";

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

const SentimentAnalysis = ({ analyzeSentiment }) => {
  const [sentiment, setSentiment] = useState("");

  const handleAnalyze = async () => {
    const result = await analyzeSentiment();
    setSentiment(result);
  };

  return (
    <SentimentContainer>
      <AnalyzeButton onClick={handleAnalyze}>Analyze Sentiment</AnalyzeButton>
      {sentiment && (
        <SentimentResult>
          <strong>Sentiment:</strong> {sentiment}
        </SentimentResult>
      )}
    </SentimentContainer>
  );
};

export default SentimentAnalysis;
