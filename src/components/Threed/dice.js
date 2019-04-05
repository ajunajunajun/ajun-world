import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% { transform: rotateX(0deg) rotateY(0deg); }
  100% { transform: rotateX(360deg) rotateY(720deg); }
`;

const DiceDiv = styled.div`
  margin: 100px 100px;
  width: 100px;
  height: 100px;
  transform-style: preserve-3d;
  animation: ${rotate} 20000ms linear infinite;
  position: relative;
`;
const Dice1Div = styled.div`
  height: 100px;
  width: 100px;
  background: black;
  transform: translate3d(0px,0px,-50px);
  position: absolute;
`;
const Dice2Div = styled.div`
height: 100px;
width: 100px;
background: aqua;
transform: translate3d(0px,50px,0px) rotateX(90deg);
position: absolute;
`;
const Dice3Div = styled.div`
height: 100px;
width: 100px;
background: pink;
transform: translate3d(50px,0px,0px) rotateY(90deg);
position: absolute;
`;
const Dice4Div = styled.div`
height: 100px;
width: 100px;
background: pink;
transform: translate3d(-50px,0px,0px) rotateY(270deg);
position: absolute;
`;
const Dice5Div = styled.div`
  height: 100px;
  width: 100px;
  background: aqua;
  transform: translate3d(0px,-50px,0px) rotateX(270deg);
  position: absolute;
`;
const Dice6Div = styled.div`
  height: 100px;
  width: 100px;
  background: black;
  transform: translate3d(0px,0px,50px);
  position: absolute;
`;

export default class Dice extends React.Component{
  render(){
    return(
      <DiceDiv>
        <Dice1Div/>
        <Dice2Div/>
        <Dice3Div/>
        <Dice4Div/>
        <Dice5Div/>
        <Dice6Div/>
      </DiceDiv>
    );
  }
}
