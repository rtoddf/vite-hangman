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

export function HangmanDrawing(){
  return (
    <WrapperStyled>
      { Head }
      { Body }
      { RightArm }
      { LeftArm }
      { RightLeg }
      { LeftLeg }
      <RopeStyled />
      <TopBarStyled />
      <VerticalBarStyled />
      <BottomBarStyled />
    </WrapperStyled>
  )
}