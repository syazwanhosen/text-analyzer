import styled from 'styled-components';

const ExportContainer = styled.div`
  margin: 20px;
  text-align: center;
`;

const ExportButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

const ExportReport = ({ onExport }) => (
  <ExportContainer>
    <ExportButton onClick={onExport}>Export Report</ExportButton>
  </ExportContainer>
);

export default ExportReport;
