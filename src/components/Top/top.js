import React from 'react';
import styled from 'styled-components';

const TopDiv = styled.div`
  border: 1px #884898 solid;
`;
const TopH1Div = styled.div`
`;
const TopMainDiv = styled.div`
`;
const TopImg = styled.img`
  height: 200px;
  width: 200px;
  border: 1px #fff solid;
`;

class Top extends React.Component{
  render(){
    return(
      <TopDiv>
        <TopH1Div>
          <h1>THIS IS AJUN WORLD</h1>
        </TopH1Div>
        <TopMainDiv>
          <TopImg src='./imgs/Top/co2411036.jpg' alt="topimg0" />
          <TopImg src='./imgs/Top/6Uxe0IWs.png' alt="topimg1" />
          <TopImg src='./imgs/Top/ひよこ.jpg' alt="topimg2" />
          <TopImg src='./imgs/Top/s98tzpZW.jpg' alt="topimg3" />
          <TopImg src='./imgs/Top/hiyoko.png' alt="topimg4" />
          <TopImg src='./imgs/Top/S__7381006.jpg' alt="topimg5" />
        </TopMainDiv>
      </TopDiv>
    )
  }
}

export default Top;
