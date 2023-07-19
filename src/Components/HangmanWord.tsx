import {
  HangmanWordStyled,
  LetterStyled
} from '../styles/Hangman.styled.js';

type HangmanWordProps = {
  guessedLetters: string[]
  wordToGuess: string
}

export function HangmanWord({ guessedLetters, wordToGuess}: HangmanWordProps){
  return (
    <HangmanWordStyled>
      {wordToGuess.split('').map((letter, index) => (
        <LetterStyled key={index}>
          <span style={{visibility: guessedLetters.includes(letter)
            ? 'visible'
            : 'hidden'}}
          >
            {letter}
          </span>
        </LetterStyled>
      ))}
    </HangmanWordStyled>
  )
}