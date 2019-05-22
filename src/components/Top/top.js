import React from 'react';
import styled, { keyframes } from 'styled-components';

const moveimg = keyframes`
  0%  { left: 90%; }
  100%{ left: -5%; }
`;
const fadein = keyframes`
  0%  { opacity: 0; }
  3%  { opacity: 0; }
  5% { opacity: 1; }
  95% { opacity: 1; }
  97% { opacity: 0; }
  100% {opacity: 0; }
`;

const TopDiv = styled.div`
  border: 1px #884898 solid;
`;
const TopH1Div = styled.div`
`;
const TopMainDiv = styled.div`
`;
const TopImg0 = styled.img`
  width: 15vw;
  border: 1px #fff solid;
  position:absolute
  animation: ${moveimg} 48s linear infinite, ${fadein} 48s linear infinite;
`;
const TopImg1 = styled.img`
  width: 15vw;
  border: 1px #fff solid;
  position:absolute
  animation: ${moveimg} 48s linear infinite -8s, ${fadein} 48s linear infinite -8s;
`;
const TopImg2 = styled.img`
  width: 15vw;
  border: 1px #fff solid;
  position:absolute
  animation: ${moveimg} 48s linear infinite -16s, ${fadein} 48s linear infinite -16s;
`;
const TopImg3 = styled.img`
  width: 15vw;
  border: 1px #fff solid;
  position:absolute
  animation: ${moveimg} 48s linear infinite -24s, ${fadein} 48s linear infinite -24s;
`;
const TopImg4 = styled.img`
  width: 15vw;
  border: 1px #fff solid;
  position:absolute
  animation: ${moveimg} 48s linear infinite -32s, ${fadein} 48s linear infinite -32s;
`;
const TopImg5 = styled.img`
  width: 15vw;
  border: 1px #fff solid;
  position:absolute
  animation: ${moveimg} 48s linear infinite -40s, ${fadein} 48s linear infinite -40s;
`;

class Top extends React.Component{
  render(){
    return(
      <TopDiv>
        <TopH1Div>
          <h1>THIS IS AJUN WORLD</h1>
        </TopH1Div>
        <TopMainDiv>
          <TopImg0 src='./imgs/Top/co2411036.jpg' alt="topimg0" />
          <TopImg1 src='./imgs/Top/6Uxe0IWs.png' alt="topimg1" />
          <TopImg2 src='./imgs/Top/ひよこ.jpg' alt="topimg2" />
          <TopImg3 src='./imgs/Top/s98tzpZW.jpg' alt="topimg3" />
          <TopImg4 src='./imgs/Top/hiyoko.png' alt="topimg4" />
          <TopImg5 src='./imgs/Top/S__7381006.jpg' alt="topimg5" />
        </TopMainDiv>
      </TopDiv>
    )
  }
}

export default Top;
