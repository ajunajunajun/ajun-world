import React from 'react';
import styled from 'styled-components';

import Intro from '../../components/Maboroshi/Home/intro.js';
import News from '../../components/Maboroshi/Home/news.js';

const MaboroshiDiv = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #f5f5f5;
`;

class Maboroshi extends React.Component{
  render() {
    return (
      <MaboroshiDiv className="Maboroshi">
        <article>
          <Intro/>
          <News/>
        </article>
      </MaboroshiDiv>
    )
  }
}

export default Maboroshi;
