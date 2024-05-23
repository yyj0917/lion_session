import React, { useState } from "react";
import styled from "styled-components";
import Header2 from "../components/Header2";
import Mission from "../components/Mission";
import hamburger from "../images/hamburger.svg";
// import navigation from "./images/navigation.png";
import sideicon from "../images/side_icon.svg";
import { Container as MapDiv, NaverMap } from "react-naver-maps";
import exercise_road1_bottom from '../images/exercise_road1_bottom.svg';
import Finger from '../images/finger.svg';
import { useHistory } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  overflow-x: hidden;
  overflow-y: hidden;
  width: 393px;
  height: 852px;
  margin: 0;
  position: relative;
  z-index : 0;
`;

const Blackoverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 검정색, 투명도 50% */
  z-index: 1;
`;


const SearchBox = styled.div`
  position: relative;
  margin-top: 10px;
  z-index: 2; // 더 높은 값으로 설정
`;

const SearchInput = styled.input`
  width: 325px;
  height: 50px;
  flex-shrink: 0;
  outline: none;
  border: none;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
  padding-left: 35px;
  font-size:18px;
`;

const Hamburger = styled.img`
  position: absolute;
  left: 10px;
  top: 18px;
  width: 18px;
  height: 14px;
`;

const Overlay = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SideIcon = styled.img`
  align-self: flex-end;
  margin-top : 20px;
`;

const GuideContainer = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
  position: absolute;
  bottom: 0px; 
  left: 0; 
  width: 100%; 
  z-index: 2;
`;



const TextBox = styled.div`
  width: 350px;
  position: absolute;
  bottom: 65px;
  box-sizing: border-box;  
  width: 350px;
  border-radius: 10px;
  padding: 25px;
  background-color: ${props => props.showError ? '#BA0C0C' : '#CAD5EC'};
  color: ${props => props.showError ? '#FFFFFF' : '#000000'};
  font-size: 19px;
  font-weight: 500;
  line-height: 150%;
  text-align: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
`;


// const TextBox = styled.div`
//   box-sizing: border-box;  
//   width: 350px;
//   border-radius: 10px;
//   padding: 25px;
//   background-color: #CAD5EC;
//   color: #000000;
//   font-size: 20px;
//   font-weight: 500;
//   line-height: 150%;
//   text-align: center;
//   width: 350px;
//   position: absolute;
//   bottom: 65px;
//   box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
// `;

const TextContainer = styled.div`
    white-space: pre-line;
`;


function Tut3() {
  const [searchText, setSearchText] = useState("");
  const [guideText, setGuideText] = useState("당신은 어느 공원에 갈지\n아직 정하지 않았어요.\n그렇다면 그냥 ‘공원’이라고 검색을\n해볼까요?"); // 상태 변수로 변
  const [showError, setShowError] = useState(false);
  const history = useHistory();

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    
    if (searchText.toLowerCase() === "공원") {
      history.push("/tutorial1/tut4");
    } else {
      setShowError(true);
      setGuideText("잘못 입력했어요!\n다시 한 번 입력해 볼까요?");
    }
  };

  return (
    <Container>
      <Blackoverlay />
      <Header2
      title="지도 연습해보기"
      subtitle="1. 길 검색해서 찾기"
      />
      <MapDiv
        style={{
          width: '100%',
          height: '800px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Overlay>
          <SearchBox>
            <form method="post" name="searchform" onSubmit={handleSearchSubmit}>
              <Hamburger src={hamburger} alt="" />
              <SearchInput type="text"
              placeholder="장소, 버스, 지하철, 주소 검색" 
              style = {{fontFamily : 'pretendard', fontSize : '19px', fontWeight : '300'}}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}/> 
            </form>
          </SearchBox>
          <SideIcon src={sideicon} alt=""/>
        </Overlay>
        
        <img
          src={Finger}
          alt=""
          style={{
            zIndex : '2',
            width : 100,
            height :170,
          }}
        />
        <NaverMap />
        <Mission />
      </MapDiv>

      <div
            style={{display: 'flex',justifyContent: 'center', zIndex:0, width:'100%'}}
            >
                <img
                src={exercise_road1_bottom}
                alt="하단이미지"
                style={{display: "block", bottom : -8, margin : 0,padding : 0, width:'100%'}}
                className="overlay"
                />
      </div>

      <GuideContainer>
        <TextBox showError={showError}>
          <TextContainer>{guideText}</TextContainer>
        </TextBox>
      </GuideContainer>
    </Container>
  );
}

export default Tut3;
