import React from 'react';
import styled,{ css } from 'styled-components';

const TopDiv = styled.div`
  border: 1px #000 solid;
`;

class Top extends React.Component{
  render(){
    return(
      <TopDiv>
        <h1>THIS IS AJUN WORLD</h1>
        <img src='hiyoko.png' />
      </TopDiv>
    )
  }
}

export default Top;
