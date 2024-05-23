import React from "react";
import styled from "styled-components";
import Header2 from "../components/Header2";
import Halfegg from "../images/halfegg.svg";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F7F1DE;
  overflow-x: hidden;
  overflow-y: hidden;
  width: 393px;
  height: 852px;
  margin: 0;
  position:relative;
`;


const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: auto;
  border-radius: 15px;
  background: #F5F5F8;
  box-shadow: 0px 6px 6px 0px rgba(0, 0, 0, 0.1);
  margin-top: 40px;
  padding: 30px 0px;
`;

const Mission = styled.div`
  width: 300px;
  color: #000;
  text-align: center;
  font-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

const Image = styled.img`
  margin: 35px;
  width: 240px;
`;

const StartBox = styled.div`
    width: 300px;
    height: 60px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #2456C2;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    box-shadow: 0px 6px 6px 0px rgba(0, 0, 0, 0.15);
`;

const StartText = styled.p`
    color: #FFF;
    text-align: center;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
    text-decoration: none; 
    border: none; 
`;


function Tut1() {
  return (
    <Container>
        <Header2 title="지도 연습해보기" subtitle="1. 길 검색해서 찾기" 
          style={{marginTop : 0, top : 0, paddingTop : 0,}}
        />
        <Body>
          <Mission>
            당신은 지금 <strong>‘신촌역’</strong>에서
            출발해,<br/>친구와 근처
            공원에서 만나기로<br/>했어요.
            공원까지 길을 찾아가는<br/>
            연습을 해 보아요.
          </Mission>
        </Body>
        <Image src={Halfegg}></Image>
        <Link to="/tutorial1/tut2" style={{ textDecoration: "none" }}>
        <StartBox>
          
              <StartText>시작하기</StartText>
          
        </StartBox>
        </Link>
    </Container>
  );
};

export default Tut1;
