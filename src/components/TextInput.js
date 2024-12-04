import styled from 'styled-components';

const TextInputContainer = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
`;

const TextArea = styled.textarea`
  width: 80%;
  height: 200px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
`;

const TextInput = ({ text, setText }) => (
  <TextInputContainer>
    <TextArea
      placeholder="Paste or type your text here..."
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  </TextInputContainer>
);

export default TextInput;
