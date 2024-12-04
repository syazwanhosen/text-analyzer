import styled from 'styled-components';

const ResultsContainer = styled.div`
  margin: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background: #f9f9f9;
`;

const ResultsTitle = styled.h2`
  text-align: center;
`;

const ResultsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ResultItem = styled.li`
  margin: 5px 0;
`;

const AnalysisResults = ({ results }) => (
  <ResultsContainer>
    <ResultsTitle>Analysis Results</ResultsTitle>
    <ResultsList>
      {results.map(({ label, value }, index) => (
        <ResultItem key={index}>
          <strong>{label}:</strong> {value}
        </ResultItem>
      ))}
    </ResultsList>
  </ResultsContainer>
);

export default AnalysisResults;
