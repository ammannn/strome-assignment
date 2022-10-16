import styled from 'styled-components';

export default function Button({ content, onClickFunction }) {
  return <StyledButton onClick={onClickFunction}>{content}</StyledButton>;
}

const StyledButton = styled.button`
  background: linear-gradient(to right, #3c3b3b00 0%, #fff 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 3rem;
  border: none;
  color: black;
  border-radius: 0.4rem;
  cursor: pointer;
  margin-top: 20px;
`;
