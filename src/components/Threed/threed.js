import React from 'react';
import styled, { keyframes } from 'styled-components';

const parentAnimation = keyframes`
  0% { transform: rotateY(45deg); }
  100% { transform: rotateY(-45deg); }
`;
const childAnimation = keyframes`
  0% { transform: rotateX(0deg); }
  100% { transform: rotateX(180deg); }
`;

const ThreedDiv = styled.div`
`;
const SceneDiv = styled.div`
  height: 298px;
  width: 298px;
  border: 1px #000 solid;
`;
const ParentDiv = styled.div`
  margin: 50px 50px;
  width: 200px;
  height: 200px;
  background: black;
  transform-style: preserve-3d;
  animation: ${parentAnimation} 3000ms ease-in-out infinite alternate;
`;
const ChildDiv = styled.div`
  width: 200px;
  height: 200px;
  background: orange;
  animation: ${childAnimation} 1000ms ease-in-out infinite alternate;
`;

class Threed extends React.Component{
  render(){
    return(
      <ThreedDiv>
        <SceneDiv>
          <ParentDiv>
            <ChildDiv/>
          </ParentDiv>
        </SceneDiv>
      </ThreedDiv>
    );
  }
}

export default Threed;
