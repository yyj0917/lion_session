import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NaverMapAPI from "../components/NaverMapApi";
import { Container as MapDiv, NaverMap } from "react-naver-maps";
import Header2 from "../components/Header2";
import Park from "../images/park_enter.svg"
import Place from "../images/place_bus_station.svg"
import SmallList from "../images/bottomlistsmall.svg"
import Finger from "../images/finger.svg"

import { NavermapsProvider, Marker, InfoWindow } from "react-naver-maps";


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



const TextBox = styled.div`
  box-sizing: border-box;  
  width: 350px;
  border-radius: 10px;
  padding: 25px;
  background-color: #CAD5EC;
  color: #000000;
  font-size: 20px;
  font-weight: 500;
  line-height: 150%;
  text-align: center;
  width: 350px;
  position: absolute;
  bottom: 65px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
`;

const TextContainer = styled.div`
    white-space: pre-line;
`;


const Button = styled.button`
  margin-top: 10px;
  margin-left : 10px;
  margin-right :10px;
  padding: 10px 5px;
  width : 260px;
  height:50px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size : 20px;
  font-weight : 500;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const guideText = (
    <>
      지도 보는 연습이 충분히 되었나요?
    </>
);

function Tut10() {
    const { naver } = window;

    return (
        <Container>
            <Header2
            title="지도 연습해보기"
            subtitle="1. 길 검색해서 찾기"
            />
            <div>
                <img src={Park} alt="검색결과" style={{ display: "block", margin: 0}}/>
                <img src={Place} alt="장소버스 정류장" style={{ display: "block", margin: 0}}/>
            </div>
            <NavermapsProvider>
                <MapDiv
                style={{width: '100%',height: '800px', display: 'flex',justifyContent: 'center',
                }}
                >
               <NaverMap 
                        zoom={13}
                        center={{lat:37.5250482, lng:126.9613142}}
                    >
                        <Marker 
                            position={{lat:37.5450482,lng: 126.9603142}} // 효창
                        />
                        <Marker 
                            position={{lat:37.5450482,lng: 126.9603142}}
                            icon={{
                                content: `
                                  <div style="background-color: white; padding: 8px; border-radius: 5px;">효창공원</div>',
                                `
                              }} // 효창
                        />
                        <Marker
                            position={{lat:37.5550482,lng: 126.9703142}}                      
                        ></Marker>
                        <Marker
                            position={{lat:37.5550482,lng: 126.9703142}}                      
                            icon={{
                                content: `
                                  <div style="background-color: white; padding: 8px; border-radius: 5px;">우제공원</div>',
                                `
                              }}
                        >
                        </Marker>
                        <Marker 
                            position={{lat:37.5400482,lng: 126.9500142}} // 효창
                        />
                        <Marker 
                            position={{lat:37.5400482,lng: 126.9500142}}
                            icon={{
                                content: `
                                  <div style="background-color: white; padding: 8px; border-radius: 5px;">화진공원</div>',
                                `
                              }} // 효창
                        />
                        <Marker 
                            position={{lat:37.5600482,lng: 126.9400142}} // 효창
                        />
                        <Marker 
                            position={{lat:37.5600482,lng: 126.9400142}}
                            icon={{
                                content: `
                                  <div style="background-color: white; padding: 8px; border-radius: 5px;">현진공원</div>',
                                `
                              }} // 효창
                        />        
                        <Marker 
                            position={{lat:37.5680482,lng: 126.98}} // 효창
                        />
                        <Marker 
                            position={{lat:37.5680482,lng: 126.98}}
                            icon={{
                                content: `
                                  <div style="background-color: white; padding: 8px; border-radius: 5px;">재은공원</div>',
                                `
                              }} // 효창
                        />                 
                        

                    </NaverMap>
            
        </MapDiv>
        </NavermapsProvider>
            <div
            style={{display: 'flex',justifyContent: 'center', zIndex:2,}}
            >
                <img
                src={SmallList}
                alt="축소된검색리스트"
                style={{display: "block", bottom : -8, margin : 0,padding : 0}}
                className="overlay"
                />
            </div>

                <TextBox className="overlay" style={{zIndex:4}}>
                    <TextContainer>{guideText}</TextContainer>
                    <div style={{display:'flex', flexDirection: 'column'}}>
                        <Link to="/tutorial1/tut11">
                            <Button style={{ backgroundColor: '#182E5E', fontFamily : 'pretendard', letterSpacing: '1px', fontWeight:'300'}}>
                                네, 충분히 됐어요.
                            </Button>
                        </Link>
                        <Link to="/tutorial1/tut6">
                            <Button style={{ backgroundColor: '#808080',fontFamily : 'pretendard', letterSpacing: '1px', fontWeight:'300'}}>
                                아니요, 한 번 더 해볼래요.
                            </Button>
                        </Link>
                    </div>
                </TextBox>
        </Container>
    );     
}

export default Tut10;