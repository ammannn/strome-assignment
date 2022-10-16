import styled from 'styled-components';
export default function Input({ type, placeholder, email, setEmail }) {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  );
}

const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.15);
  // box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 0.3rem;
  width: 100%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 20px;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #fff;
    backdrop-filter: blur(12rem);
    border-radius: 0.3rem;
  }
  &::placeholder {
    color: #fff;
    font-weight: 100;
    font-size: 1rem;
  }
`;
