import React from 'react';
import styled from 'styled-components';

import Intro from '../../components/Maboroshi/Home/intro.js';
import News from '../../components/Maboroshi/Home/news.js';

const MaboroshiDiv = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;
const MaboroshiBackDiv = styled.div`
  width:100vw;
  height:100vh;
  background: radial-gradient(#6F6F6F, #FFF);
  position: fixed;
  z-index: -1;
`;

class Maboroshi extends React.Component{
  render() {
    return (
      <div>
        <MaboroshiBackDiv/>
        <MaboroshiDiv className="Maboroshi">
          <article>
            <Intro/>
            <News/>
          </article>
        </MaboroshiDiv>
      </div>
    )
  }
}

export default Maboroshi;
