import styled from 'styled-components';

export default function Icon({ color, children, onClickFuntion }) {
  return (
    <StyledIcon onClick={onClickFuntion} background={color}>
      {children}
    </StyledIcon>
  );
}

const StyledIcon = styled.div`
  height: 2rem;
  width: 2rem;
  background: ${(props) => props.background};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4rem;
  color: white;
  cursor: pointer;
  margin-right: 20px;
  svg {
    width: 1rem;
    height: 1rem;
  }
`;
