import React from 'react';
import styled from 'styled-components';

const GoogleDiv = styled.div`
  min-width: 980px;
`;
const GoogleHeaderDiv = styled.div`
  text-align: right;
  height: 50px;
`;
const GoogleHeaderP = styled.p`
  display: inline;
  margin: 0px 8px 0px 8px;
  vertical-align: middle;
  line-height: 60px;
  font-size: small;
  height: 100%;
`;
const GoogleHeaderImg1 = styled.img`
  margin: 0px 10px 0px 10px;
  vertical-align: middle;
  height: 25px;
`;
const GoogleHeaderImg2 = styled.img`
  margin: 0px 32px 0px 10px;
  vertical-align: middle;
  height: 25px;
`;
const GoogleMainDiv = styled.div`
  height: 398px;
`;
const GoogleLogoDiv = styled.div`
  height: 233px;
  margin-top: 39px;
`;
const GoogleLogoImg = styled.img`
  padding-top: 109px;
`;
const GoogleSearchDiv = styled.div`
  height: 118px;
`;
const GoogleSearchformDiv = styled.div`
  height: 46px;
`;
const GoogleFormDiv = styled.div`
  height: 44px;
  width: 484px;
  margin: auto;
  padding-left: 12px;
`;
const GoogleForm = styled.form`
  border: 1px #dcdcdc solid;
  border-radius: 100px;
  height: 100%;
`;
const GoogleMarkDiv = styled.div`
  height: 44px;
  width: 64px;
`;
const GoogleMarkImg = styled.img`
  margin: auto;
  padding-top: 10px;
`;
const GoogleButtonDiv = styled.div`
  height: 100%;
  width: 484px;
  margin: auto;
  padding-top: 20px;
`;
const GoogleButtonDiv1 = styled.div`
  width: 272px;
  height: 100%;
  margin: auto;
  position: relative;
`;
const GoogleInput1 = styled.input`
  height: 36px;
  position: absolute;
  bottom: 0;
  left: 0;
`;
const GoogleInput2 = styled.input`
  height: 36px;
  position: absolute;
  bottom: 0;
  right: 0;
`;

class Google extends React.Component{
  render(){
    return(
      <GoogleDiv className="Google">
        <GoogleHeaderDiv>
          <GoogleHeaderP>Gmail</GoogleHeaderP>
          <GoogleHeaderP>画像</GoogleHeaderP>
          <GoogleHeaderImg1 src='./imgs/Google/sikaku.png' alt="sikaku" />
          <GoogleHeaderImg2 src='./imgs/Google/hiyoko.png' alt="user" />
        </GoogleHeaderDiv>
        <GoogleMainDiv>
          <GoogleLogoDiv>
            <GoogleLogoImg src='./imgs/Google/googlelogo_color_272x92dp.png' alt="googlelogo" />
          </GoogleLogoDiv>
          <GoogleSearchDiv>
            <GoogleSearchformDiv>
              <GoogleFormDiv>
                <GoogleForm>
                  <GoogleMarkDiv>
                   <GoogleMarkImg src='./imgs/Google/mark.png' alt="searghmark" />
                  </GoogleMarkDiv>
                </GoogleForm>
                <GoogleButtonDiv>
                  <GoogleButtonDiv1>
                    <GoogleInput1 value="　Google 検索　" type="submit"/>
                    <GoogleInput2 value="　I'm Feeling Lucky　" type="submit"/>
                  </GoogleButtonDiv1>
                </GoogleButtonDiv>
              </GoogleFormDiv>
            </GoogleSearchformDiv>
          </GoogleSearchDiv>
        </GoogleMainDiv>
      </GoogleDiv>
    )
  }
}

export default Google;
