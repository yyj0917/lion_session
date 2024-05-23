import React from "react";
import styled from "styled-components";
import Header2 from "./components/Header2";
import Mission from "./components/Mission";
import hamburger from "./images/hamburger.svg";
// import navigation from "./images/navigation.png";
// import sideicon from "./images/side_icon.svg";
import { Container as MapDiv, NaverMap } from "react-naver-maps";

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
`;

const SearchBox = styled.div`
  position: relative;
  margin-top: 10px;
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

// const NavigationIcon = styled.img`
//   position: fixed;
//   bottom: 0;
// `;

function Newmaphome() {
  const { naver } = window;

  return (
    <Container>
      <Header2 title="지도 연습해보기" subtitle="1. 길 검색해서 찾기"/>  
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
            <form method="post" name="searchform">
              <Hamburger src={hamburger} alt="" />
              <SearchInput type="text"  placeholder="장소, 버스, 지하철, 주소 검색" /> 
            </form>
          </SearchBox>
          {/* <SideIcon src={sideicon} alt=""/> */}
        </Overlay>
        <NaverMap />
        <Mission />
      </MapDiv>
      {/* <NavigationIcon src={navigation} alt=""/> */}
    </Container>
  );
}

export default Newmaphome;
