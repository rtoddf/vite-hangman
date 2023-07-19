import styled from 'styled-components';

export const WrapperStyled = styled.div`
  position: relative;
`;

export const RopeStyled = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 50px;
  width: 10px;
  background: black;
`;

export const BottomBarStyled = styled.div`
  height: 10px;
  width: 250px;
  background: black;
`;

export const TopBarStyled = styled.div`
  height: 10px;
  width: 200px;
  background: black;
  margin-left: 120px;
`;

export const VerticalBarStyled = styled.div`
  height: 400px;
  width: 10px;
  margin-left: 120px;
  background: black;
`;

export const HangmanWordStyled = styled.div`
  display: flex;
  gap: 0.25em;
  font-size: 6rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family: monospace;
`;

export const LetterStyled = styled.div`
  border-bottom: 0.375rem solid black;
`;

export const KeyboardHolderStyled = styled.div`
  align-self: stretch;
`;

export const KeyboardStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
  gap: 0.5rem;
`;

export const KeyboardButtonStyled = styled.button`
  aspect-ratio: 1/1;
  width: 100%;
  padding: 0.5rem;
  background: none;
  color: black;
  border: 3px solid black;

  font-size: 2.5rem;
  text-transform: uppercase;

  font-weight: bold;
  cursor: pointer;

  &.active {
    background-color: hsl(200, 100%, 50%);
    color: white;
  }

  &.inactive {
    opacity: 0.3;
  }

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    background-color: hsl(200, 100%, 75%);
  }
`;
