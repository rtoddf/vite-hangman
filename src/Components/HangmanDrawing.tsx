import {
  Head,
  Body,
  RightArm,
  LeftArm,
  RightLeg,
  LeftLeg
} from './bodyParts.js';

import {
  WrapperStyled,
  TopBarStyled,
  BottomBarStyled,
  VerticalBarStyled,
  RopeStyled
} from '../styles/Hangman.styled.js';

const BodyParts = [
  Head,
  Body,
  RightArm,
  LeftArm,
  RightLeg,
  LeftLeg
]

type HangmanDrawaingProps = {
  numberOfGuesses: number
}

export function HangmanDrawing(
  {numberOfGuesses}: HangmanDrawaingProps
  ){
  return (
    <WrapperStyled>
      { BodyParts.slice(0, numberOfGuesses) }
      <RopeStyled />
      <TopBarStyled />
      <VerticalBarStyled />
      <BottomBarStyled />
    </WrapperStyled>
  )
}