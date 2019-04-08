import React from 'react';
import styled from 'styled-components';

import Pakapaka from '../../components/Threed/pakapaka.js';
import Dice from '../../components/Threed/dice.js';
import Sphere from '../../components/Threed/sphere.js';

const ThreedDiv = styled.div`
`;
const SceneDiv = styled.div`
  display: inline-block;
  height: 298px;
  width: 298px;
  border: 1px #000 solid;
`;

class Threed extends React.Component{
  render(){
    return(
      <ThreedDiv>
        <SceneDiv>
          <Pakapaka />
        </SceneDiv>
        <SceneDiv>
          <Dice />
        </SceneDiv>
        <SceneDiv>
          <Sphere />
        </SceneDiv>
      </ThreedDiv>
    );
  }
}

export default Threed;
