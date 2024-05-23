import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container as MapDiv, NaverMap, NavermapsProvider } from "react-naver-maps";
import Header2 from "../components/Header2";
import Guide from '../components/Guide'
import Park from "../images/park_enter.svg"
import Place from "../images/place_bus_station.svg"
import List from "../images/bottom_placelist.svg"
import Finger from "../images/finger.svg"

import { Marker, InfoWindow } from "react-naver-maps";
import { Link, useHistory } from "react-router-dom";

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


const GuideContainer = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
  position: absolute;
  bottom: 0px; 
  left: 0; 
  width: 100%; 
  z-index : 3;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const guideText = (
    <>
      가까운 공원 중 가장 큰 공원인<br />
      <Bold>‘효창공원’</Bold>을 가볼게요.<br />
      우리는 지도로 공원을 찾을 거니까,<br />
      지도를 한 번 클릭해서 아래 목록을<br />
      없애 볼까요?
    </>
);


function Tut4() {
    const { naver } = window;
    // 요소 띄우기
    const [showElements, setShowElements] = useState(false);

    useEffect(() => {
        const elementsTimer = setTimeout(() => {
            setShowElements(true);
        }, 1500); // 1.5초 후에 이미지 표시

        return () => {
            clearTimeout(elementsTimer);
        };
    }, []);

    const history = useHistory();

    const handleMapClick = () => {
        history.push("/tutorial1/tut5");
    };


    return (
        
        <Container>
            <Header2
            title="지도 연습해보기"
            subtitle="1. 길 검색해서 찾기"
            />
            <div>
                <img
                src={Park}
                alt="검색결과"
                style={{ display: "block", margin: 0}}
                />
                <img
                src={Place}
                alt="장소버스 정류장"
                style={{ display: "block", margin: 0}}
                />
            </div>        
            <NavermapsProvider>               
                <MapDiv
                style={{width: '100%',height: '800px', display: 'flex',justifyContent: 'center',
                }}
                onClick={handleMapClick}
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
            src={List}
            alt="검색리스트"
            style={{display: "block", bottom : -8, margin : 0,padding : 0}}
            className="overlay"
            />
        </div>
        


            {/* 0.5초 지나고 */}
            {showElements && (
                    <div style={{zIndex:4, pointerEvents:"none"}} className="overlay">                    
                        <div
                            style={{position: "absolute", top: 0, display: "flex", justifyContent: "center", width: "393px", height: "852px"}}
                        >
                            <img
                                src={Finger}
                                alt="Finger"
                                style={{ display: "block", margin: 0, paddingTop: 300, width : '100px',height:'100px' }}
                            />
                            <GuideContainer>
                            <Guide text={guideText}/>
                            </GuideContainer>
                        </div>                    
                    </div>                     
                )}


        </Container>
        
    );
       
}

export default Tut4;
