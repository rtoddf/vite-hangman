import {
  KeyboardHolderStyled,
  KeyboardStyled,
  KeyboardButtonStyled
} from '../styles/Hangman.styled.js';

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]

export function Keyboard(){
  return <KeyboardHolderStyled>
    <KeyboardStyled>
      {KEYS.map(key => {
        return (
          <KeyboardButtonStyled
            key={key}
            // className={`inactive`}
          >
            {key}
          </KeyboardButtonStyled>
        )
      })}
    </KeyboardStyled>
  </KeyboardHolderStyled>
  
}