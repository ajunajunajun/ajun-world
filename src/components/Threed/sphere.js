import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% { transform: rotateX(0deg) rotateY(0deg); }
  100% { transform: rotateX(360deg) rotateY(720deg); }
`;

const SceneDiv = styled.div`
  margin: 100px 100px;
  width: 100px;
  height: 100px;
  transform-style: preserve-3d;
  animation: ${rotate} 20000ms linear infinite;
  position: relative;
`;
const SphereDiv = styled.div`
  height: 100px;
  width: 100px;
  background: black;
  transform: translate3d(0px,0px,50px);
  position: absolute;
`;


export default class Sphere extends React.Component{
  render(){
    return(
      <SceneDiv>
        <SphereDiv/>
      </SceneDiv>
    );
  }
}
