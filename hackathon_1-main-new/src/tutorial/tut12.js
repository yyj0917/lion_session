import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import NaverMapAPI from "../components/NaverMapApi";
import { Container as MapDiv, NaverMap } from "react-naver-maps";
import Header2 from "../components/Header2";
import Guide from '../components/Guide'
import Park from "../images/park_enter.svg"
import Hyochang from "../images/Hyochang.svg"




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





function Tut12() {
    const { naver } = window;

    // 요소 띄우기
    const [showElements, setShowElements] = useState(false);
    const [showGoodbye, setShowGoodbye] = useState(false); // 상태 추가

    const history = useHistory();

    useEffect(() => {
        // 가이드 표시
        const elementsTimer = setTimeout(() => {
            setShowElements(true);
        }, 2000);

        // 3초 후에 바바이 표시
        const goodbyeTimer = setTimeout(() => {
            setShowGoodbye(true);
        }, 5000);

        return () => {
            clearTimeout(elementsTimer);  // 가이드 표시
            clearTimeout(goodbyeTimer); // 바바이
        };
    }, []);

    const guideText = showGoodbye ? "'길 검색해서 찾기' 과정은 \n여기서 끝이에요.\n\n다음 시간에는 대중교통 이용하는\n 방법을 알아볼게요!\n\n 윗쪽의 X를 눌러서 \n첫 화면으로 돌아가세요." : (
        <>
          <Bold>‘효창공원’</Bold>을 찾아 누르는 것까지<br />
          성공했군요!<br/><br />
          지금까지 검색하려는 곳의 이름을<br />
          모를 때 지도에서 어떻게 찾는지<br />
          알려드렸어요.
        </>
    );

    return (
        <Container>
            <Header2
            title="지도 연습해보기"
            subtitle="1. 길 검색해서 찾기"
            />
            <div>
                <img src={Park} alt="검색결과" style={{ display: "block", margin: 0}}/>
            </div>

            {/* 지도영역 */}
            <MapDiv
            style={{width: '100%',height: '800px', display: 'flex',justifyContent: 'center',}}
            >
                <NaverMap center={{lat:37.5420482,lng: 126.9603142}}/>
            </MapDiv>

            {/* 하단이미지 */}
            <div
            style={{display: 'flex',justifyContent: 'center', zIndex:0,}}
            >
                <img
                src={Hyochang}
                alt="축소된검색리스트"
                style={{display: "block", bottom : -8, margin : 0,padding : 0}}
                className="overlay"
                />
            </div>

            {/* 가이드 2.5초 지나고 */}
            {showElements && (
                <Guide className="overlay" text={guideText} />
            )}

        </Container>
    );
       
}

export default Tut12;