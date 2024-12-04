import styled from "styled-components";

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

const ExportReport = ({ data }) => {
  const handleExport = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "text-analysis-report.json";
    link.click();
  };

  return (
    <ExportContainer>
      <ExportButton onClick={handleExport}>Export Report</ExportButton>
    </ExportContainer>
  );
};

export default ExportReport;
