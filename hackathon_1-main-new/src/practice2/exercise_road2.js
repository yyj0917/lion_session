import React from 'react';
import styled from 'styled-components';
import exercise_road2_bottombox from '../images/exercise_road2_bottombox.svg';
import Header2 from '../components/Header2';
import { NavermapsProvider } from 'react-naver-maps';
import { Container as MapDiv, NaverMap, Marker } from 'react-naver-maps';
import { Link } from 'react-router-dom';
import X from '../images/Xicon.svg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  overflow-x: hidden;
  overflow-y: hidden;
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  margin: 0;
  position: relative; /* 추가된 부분 */
`;

const TextBox = styled.div`
    width: 393px;
    height: 62px;
    flex-shrink: 0;
    background: #FFF;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.10);
    display: flex;
    align-items: center;
    padding-left: 20px;
    font-family: Inter;
    font-size: 18px;
    font-weight: 700;
    line-height: normal;
    color: #000;
    
`;

const InnerBox = styled.div`
    width: 328px;
    height: 46px;
    flex-shrink: 0;
    stroke-width: 1px;
    stroke: #D8D8D8;
    position: relative;
    border: 1px solid #D8D8D8; /* Optional: Add border for the inner box */
    box-sizing: border-box;
    border-radius: 10px; /* 모서리 둥글게 */
    padding-top: 10px;
    padding-left: 10px;
   
`;

// const CloseIcon = styled.div`
//     color: #000;
//     text-align: center;
//     font-family: Inter;
//     font-size: 50px;
//     font-style: normal;
//     font-weight: 200;
//     line-height: normal;
//     cursor: pointer;
//     padding-left: 20px;
// `;

const StyledBottomBox = styled.div`
    width: 100%; 
    height: 200px;
    flex-shrink: 0;
    border-radius: 20px 10px 0px 0px;
    background: #fff;
    box-shadow: 0px -2px 4px 0px rgba(0, 0, 0, 0.1);
    position: relative;
    background-image: url(${exercise_road2_bottombox});
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    bottom: 0;
`;

const DepartBox = styled.div`
    width: 73px;
    height: 38px;
    flex-shrink: 0;
    border-radius: 40px;
    border: 1px solid #006BFF;
    background: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 10px;
    right: 95px;
`;

const DepartText = styled.p`
    color: #006BFF;
    text-align: center;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
`;

const ArrivalBox = styled.div`
    width: 73px;
    height: 38px;
    flex-shrink: 0;
    border-radius: 40px;
    background: #006BFF;
    position: absolute;
    bottom: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none; 
    
`;

const ArrivalText = styled.p`
    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
    text-decoration: none; 
    border: none; 
    
`;

const BottomBox = () => {
    return (
        <StyledBottomBox>
            <DepartBox>
                <DepartText>출발</DepartText>
            </DepartBox>
            <ArrivalBox>
                <Link to="/practice2/exercise_road_3" style={{textDecoration:'none'}}>
                    <ArrivalText>도착</ArrivalText>
                </Link>
            </ArrivalBox>
        </StyledBottomBox>
    );
};

const Exercise_road_2 = () => {
    return (
        <Container>
            <Header2 title="실습2. 경로찾기" subtitle="도보로 '창천문화공원'가기" />
            <TextBox>
                <InnerBox>
                    창천문화공원
                </InnerBox>
                <img src={X} style={{margin:'20px'}}/>
            </ TextBox>
            <NavermapsProvider 
                ncpClientId={process.env.REACT_APP_NAVERMAP_API_KEY}
                error={<p>Maps Load Error</p>}
                loading={<p>Maps Loading...</p>}
                submodules={["geocoder"]}
                // or finClientId, govClientId  
            >
                <MapDiv
                style={{
                height: 700,
                width: '100%'
                }}
                >
                <NaverMap
                mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
                zoom={17}
                center={{ lat: 37.5567852, lng: 126.9355017 }}
                >
                <Marker defaultPosition={{ lat: 37.5567852, lng: 126.9355017 }}/>
                
                </NaverMap>
                </MapDiv>
            </NavermapsProvider>
            <BottomBox />
        </Container>
    );
};

export default Exercise_road_2;