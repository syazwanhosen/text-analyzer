import styled from 'styled-components';

const ErrorAlert = styled.p`
  font-size: 1rem;
  color: #ff4d4f;
  text-align: center;
  background-color: #ffe5e5;
  padding: 10px;
  border: 1px solid #ff4d4f;
  border-radius: 5px;
  margin: 10px 0;
`;

const ErrorMessage = ({ messages }) => <ErrorAlert>{messages}</ErrorAlert>;

export default ErrorMessage;
