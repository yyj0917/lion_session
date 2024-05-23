import React, { useState, useEffect } from "react";
import styled from "styled-components";
import exercise_road4_top from "../images/exercise_road4_top.svg";
import Header2 from "../components/Header2";
import { NavermapsProvider} from "react-naver-maps";
import { Container as MapDiv, NaverMap, Marker } from "react-naver-maps";
import Guide from "../components/Guide";
import Park from "../images/park_enter.svg";
import Place from "../images/place_bus_station.svg";
import SmallList from "../images/bottomlistsmall.svg";
import Finger from "../images/finger.svg";
import Success from "../images/alert_success.svg";
import { useHistory } from "react-router-dom";
import ArrowUp from "../images/arrow_scaleIn_up.svg";
import ArrowDown from "../images/arrow_scaleIn_down.svg";

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

const Tut8 = () => {
  const { naver } = window;
  const [showDirection, setShowDirection] = useState(true);
  const [zoom, changeZoom] = useState(0);
  const [zoomIn, isZoomedIn] = useState(false);
  const [guideText, setGuideText] = useState(
    "두 손가락을 동시에 갖다 대고 \n벌려서 지도를 크게 봐요."
  );
  const history = useHistory();
  useEffect(() => {
    if (showDirection) {
      setTimeout(() => {
        setShowDirection(false);
      }, 1500);
    }
  }, [showDirection]);
  const handleZoomChanged = (zoom) => {
    changeZoom(zoom);
    console.log(zoom);
    if (zoom >= 15 && zoom <= 20) {
      isZoomedIn(true);
    }
  };
  useEffect(() => {
    if (zoomIn) {
      setTimeout(() => {
        history.push("/tutorial1/tut9");
      }, 2000);
    }
  }, [zoomIn, history]);
  return (
    <Container>
      <Header2
        title="지도 연습해보기"
        subtitle="1. 길 검색해서 찾기"
        className="overlay"
      />
      <div>
        <img
          src={Park}
          alt="검색결과"
          style={{ display: "block", margin: 0 }}
        />
        <img
          src={Place}
          alt="장소버스 정류장"
          style={{ display: "block", margin: 0 }}
        />
      </div>
      <NavermapsProvider
        ncpClientId={process.env.REACT_APP_NAVERMAP_API_KEY}
        error={<p>Maps Load Error</p>}
        loading={<p>Maps Loading...</p>}
        submodules={["geocoder"]}
      >
        <MapDiv
          style={{
            height: 800,
            width: "100%",
          }}
        >
          <NaverMap
            mapDivId={"maps-getting-started-uncontrolled"}
            style={{
              width: "100%",
              height: "100%",
            }}
            zoom={13}
            center={{ lat: 37.5250482, lng: 126.9613142 }}
            onZoomChanged={handleZoomChanged}
          >
                       <Marker
              position={{ lat: 37.5450482, lng: 126.9603142 }} // 효창
            >
            </Marker>
            <Marker
              position={{ lat: 37.5450482, lng: 126.9603142 }} // 효창
              icon={{
                content: `
                  <div style="background-color: white; padding: 8px; border-radius: 5px;">효창공원</div>',
                `
              }}
            >
            </Marker>
            <Marker
              position={{ lat: 37.5550482, lng: 126.9703142 }} // 효창
            >
            </Marker>
            <Marker
              position={{ lat: 37.5550482, lng: 126.9703142 }}
              icon={{
                content: `
                  <div style="background-color: white; padding: 8px; border-radius: 5px; background-image: url('../images/mapmarker.png')">  
                    우제공원
                  </div>
                `,
              }}
            >
            </Marker>
            <Marker
              position={{ lat: 37.5400482, lng: 126.9500142 }} // 효창
            >
            </Marker>
            <Marker
              position={{ lat: 37.5400482, lng: 126.950014 }}
              icon={{
                content: `
                  <div style="background-color: white; padding: 8px; border-radius: 5px; background-image: url('../images/mapmarker.png')">  
                    화진공원
                  </div>
                `,
              }}
            >
            </Marker>
            <Marker
              position={{ lat: 37.5600482, lng: 126.9400142 }} // 효창
            >
            </Marker>
            <Marker
              position={{ lat: 37.5600482, lng: 126.9400142 }}
              icon={{
                content: `
                  <div style="background-color: white; padding: 8px; border-radius: 5px; background-image: url('../images/mapmarker.png')">  
                    화진공원
                  </div>
                `,
              }}
            >
            </Marker>
            <Marker
              position={{ lat: 37.5680482, lng: 126.98 }} // 효창
            >
            </Marker>
            <Marker
              position={{ lat: 37.5680482, lng: 126.98 }}
              icon={{
                content: `
                  <div style="background-color: white; padding: 8px; border-radius: 5px; background-image: url('../images/mapmarker.png')">  
                    재은공원
                  </div>
                `,
              }}
            >
            </Marker>
            {showDirection && (
              <div
                className="overlay"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "transparent",
                  zIndex: 2,
                  margin: "120px 80px",
                  width: "260px",
                  height: "240px",
                  position: "relative",
                }}
              >
                <img
                  src={ArrowUp}
                  alt=""
                  style={{
                    width: "120px",
                    height: "70px",
                    position: "absolute",
                    right: 0, 
                    top: 0, 
                  }}
                />
                <img
                  src={Finger}
                  alt=""
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                />
                <img
                  src={ArrowDown}
                  alt=""
                  style={{
                    width: "120px",
                    height: "70px",
                    position: "absolute",
                    left: 0, 
                    bottom: 0, 
                  }}
                />
              </div>
            )}
          </NaverMap>
        </MapDiv>
      </NavermapsProvider>
      <div style={{ display: "flex", justifyContent: "center", zIndex: 0 }}>
        <img
          src={SmallList}
          alt="축소된검색리스트"
          style={{ display: "block", bottom: -8, margin: 0, padding: 0 }}
          className="overlay"
        />
      </div>
      <GuideContainer>
        <Guide text={guideText} />
      </GuideContainer>
      <div>
        {zoomIn && (
          <img
            src={Success}
            alt="새 이미지"
            style={{
              display: "block",
              margin: 0,
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)", // 정중앙으로 이동
              zIndex: 4,
            }}
            className="overlay"
          />
        )}
      </div>
    </Container>
  );
};

export default Tut8;