import React from 'react';
import styled from 'styled-components';

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
const TitleImg = styled.div`
  width: 100%;
  height: 100%;
  background-color: #a9a9a9;
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
`;
export default class Intro extends React.Component{
  render(){
    return(
      <IntroDiv className="Intro">
        <TitleDiv>
          <TitleImgDiv>
            <TitleImg/>
          </TitleImgDiv>
        </TitleDiv>
        <DataCarouselDiv>
          <CarouselItemDiv>
            <CarouselItem/>
            <CarouselItem/>
            <CarouselItem/>
          </CarouselItemDiv>
        </DataCarouselDiv>
      </IntroDiv>
    );
  }
}
