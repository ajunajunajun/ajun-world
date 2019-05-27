import React from 'react';
import styled from 'styled-components';

import title from './imgs/title.png'
import ramen1 from './imgs/ramen1.jpg'
import ramen2 from './imgs/ramen2.jpg'
import ramen3 from './imgs/ramen3.jpg'

const IntroDiv = styled.div`
  padding-top: calc(50vh - 63px);
  overflow: hidden;
`;
const TitleDiv = styled.div`
  margin: 0;
  padding: 0;
`;
const TitleImgDiv = styled.div`
  margin: auto;
  width: 336px;
  height: 116px;
`;
const TitleImg = styled.img`
  width: 100%;
  height: 100%;
`;
const DataCarouselDiv = styled.div`
  margin-top: 144px;
`;
const CarouselItemDiv = styled.div`
  width:2400px;
  display:table;
`;
const CarouselItem = styled.div`
  width:800px;
  height:800px;
  background-color: #a9a9a9
  display:table-cell;
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
`;
const CarouselImg = styled.img`
  width:100%;
  height:100%;
  border-radius: 50%;
`;
export default class Intro extends React.Component{
  render(){
    return(
      <IntroDiv className="Intro">
        <TitleDiv>
          <TitleImgDiv>
            <TitleImg src={title}/>
          </TitleImgDiv>
        </TitleDiv>
        <DataCarouselDiv>
          <CarouselItemDiv>
            <CarouselItem>
              <CarouselImg src={ramen1}/>
            </CarouselItem>
            <CarouselItem>
              <CarouselImg src={ramen2}/>
            </CarouselItem>
            <CarouselItem>
              <CarouselImg src={ramen3}/>
            </CarouselItem>
          </CarouselItemDiv>
        </DataCarouselDiv>
      </IntroDiv>
    );
  }
}
