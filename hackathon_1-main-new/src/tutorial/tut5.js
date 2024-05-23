import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Container as MapDiv, NaverMap } from "react-naver-maps";
import Header2 from "../components/Header2";
import Guide from '../components/Guide'
import Park from "../images/park_enter.svg"
import Place from "../images/place_bus_station.svg"
import List from "../images/bottom_placelist.svg"
import SmallList from "../images/bottomlistsmall.svg"
import Finger from "../images/finger.svg"

import { Marker, InfoWindow } from "react-naver-maps";


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

const Bold = styled.span`
  font-weight: bold;
`;

const guideText = (
    <>
      이제 지도가 크게 보이네요!<br />
      지도를 둘러보며 <Bold>‘효창공원’</Bold>을<br />
      찾아 보아요.<br />
      손가락으로 지도 보는 연습,<br />
      지금 해볼게요!
    </>
);

function Tut5() {
    const { naver } = window;

    // 요소 띄우기
    const [showElements, setShowElements] = useState(false);
    const history = useHistory();

    useEffect(() => {
        // 가이드 표시
        const elementsTimer = setTimeout(() => {
            setShowElements(true);
        }, 1000);


        // 페이지 전환
        const nextPageTimer = setTimeout(() => {
            history.push("/tutorial1/tut6");
          }, 3000);


        return () => {
            clearTimeout(elementsTimer);  // 가이드 표시
            clearTimeout(nextPageTimer);  // 페이지 전환
        };
    }, []);

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
            <div
            style={{display: 'flex',justifyContent: 'center', zIndex:0,}}
            >
                <img
                src={SmallList}
                alt="축소된검색리스트"
                style={{display: "block", bottom : -8, margin : 0,padding : 0}}
                className="overlay"
                />
            </div>

            {/* 0.5초 지나고 */}
            {showElements && (
                <Guide className="overlay" text={guideText} />
            )}
        </Container>
    );
       
}

export default Tut5;