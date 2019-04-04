import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const HeaderDiv = styled.div`
  border: 1px #000 solid;
  height: 20px;
`;

class Select extends React.Component{
  render(){
    return(
      <HeaderDiv>
        <Link to='/'>Top</Link>
        <Link to='/google'>Google</Link>
      </HeaderDiv>
    );
  }
}

export default Select;
