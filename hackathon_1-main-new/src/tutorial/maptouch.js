import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import exercise_road4_top from '../images/exercise_road4_top.svg';
import Header2 from '../components/Header2';
import { NavermapsProvider } from 'react-naver-maps';
import { Container as MapDiv, NaverMap } from 'react-naver-maps';
import Mission from '../components/Mission';

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
`;

const Road4Top = styled.div`
  width: 100%;
  height: 120px;
  flex-shrink: 0;
  background-image: url(${exercise_road4_top});
  background-size: contain;
  background-repeat: no-repeat;
  margin-top: 26%;
  padding: 0;
`;

const Test = () => {
  const [zoom, changeZoom] = useState(0);
  const [init, setInit] = useState(true);
  const [zoomIn, isZoomedIn] = useState(false);
  const [moveRight, isMoveRight] = useState(false);
  const handleZoomChanged = (zoom) => {
    changeZoom(zoom);
    if (zoom >= 19 && zoom <= 24) {
        isZoomedIn(true);
        setInit(false);
    }
  } 
  const handleCenterChanged = (center) => {
    console.log(center)
    if (center._lng >= 126.9387624)
        isMoveRight(true);
    
  }

  return (
    <Container>
      <Header2 title="Test" subtitle="도보: 현재위치 -> 창천문화공원" className="overlay"/>          
      <NavermapsProvider
        ncpClientId={process.env.REACT_APP_NAVERMAP_API_KEY}
        error={<p>Maps Load Error</p>}
        loading={<p>Maps Loading...</p>}
        submodules={["geocoder"]}
      >
        <MapDiv
          style={{
            height: 800,
            width: '100%'
          }}
        >
          <NaverMap
            mapDivId={'maps-getting-started-uncontrolled'}
            style={{
              width: '100%',
              height: '100%'
            }}
            zoom={18}
            center={{ lat: 37.5607902, lng: 126.9367624 }}
            onZoomChanged={handleZoomChanged}
            onCenterChanged={handleCenterChanged}
          >
            <div className="overlay">
                {init && <Mission text="두 손가락을 동시에 갖다 대고 벌려서 지도를 크게 봐요." className="misson" />}
                {zoomIn && <Mission text="확대 성공" className="misson" />}
                {moveRight && <Mission text="성공!" className="misson" />}
            </div>
            {/* {zoomIn && <Mission text="두 손가락을 동시에 갖다 대고 오므려서 지도를 작게 봐요." className="misson" />}
            {!zoomIn && !init && marker && <Mission text="마커를 선택하셨습니다." className="misson" />} */}
          </NaverMap>
        </MapDiv>
      </NavermapsProvider>
    </Container>
  );
};

export default Test;