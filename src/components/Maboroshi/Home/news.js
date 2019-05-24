import React from 'react';
import styled, { keyframes } from 'styled-components';

const NewsDiv = styled.div`
  margin-top: 144px;
`;
const TitleDiv = styled.div`

`;
const TitleImg = styled.div`
  margin: auto;
  width: 130px;
  height: 147px;
  background-color: #a9a9a9;
`;
const ItemsDiv = styled.div`
  margin-top: 108px;
  width: 640px;
  margin: 72px auto 0;
`;
const ItemsList = styled.div`
  text-align: left;
  list-style-type: none;
`;
const Items = styled.li`
  margin-top: 36px;
  padding-right: 60px;
`;
const MoreDiv = styled.div`
  margin-top: 160px;
  text-align: center;
`;
const MoreP = styled.p`
  width: 150px;
  height: 50px;
  margin: auto;
  background-color: #a9a9a9;
  line-height:50px;
`;

export default class News extends React.Component{
  render(){
    return(
      <NewsDiv className="News">
        <section display="block">
          <TitleDiv>
            <TitleImg/>
          </TitleDiv>
          <ItemsDiv>
            <ItemsList>
              <Items>ああああああああああああああああ<br/>aaaaaaaaaaaaaaaaa</Items>
              <Items>いいいいいいいいいいいいいいいいいい<br/>aaaaaaaaaaaaaaaaa</Items>
              <Items>ううううううううううううううううううううううう<br/>aaaaaaaaaaaaaaaaa</Items>
            </ItemsList>
            <MoreDiv>
              <MoreP>More</MoreP>
            </MoreDiv>
          </ItemsDiv>
        </section>
      </NewsDiv>
    );
  }
}
