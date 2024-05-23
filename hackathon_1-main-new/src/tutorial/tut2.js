import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header2 from "../components/Header2";
import Tabs from "../components/Tabs";
import '../maphome.css'; 
import hamburger from "../images/hamburger.svg";
import Finger from '../images/finger.svg';


import { Link } from "react-router-dom";
import { Container as MapDiv, NaverMap, NavermapsProvider } from 'react-naver-maps';

import exercise_road1_bottom from '../images/exercise_road1_bottom.svg'; // Import the image here
import Food from "../images/maphome_Food.svg";
import Cup from "../images/maphome_Cup.svg";
import Gas from "../images/maphome_Gas.svg";
import Bedroom from "../images/maphome_Bedroom.svg";

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


function Tut2() {
    return (
        <Container>
            <Header2 title="지도 연습해보기" subtitle="1. 길 검색해서 찾기" />
            <MapDiv
                className="map"
                style={{
                    width: '100%',
                    height: '800px',
                }}
            >
                <div
                className="overlay"
                style={{width:'100%'}}>   

                    <div className="search-box">
                        <form name="searchform">    
                            <input type="text" className="search" name="search"
                            placeholder="장소, 버스, 지하철, 주소 검색"
                            style = {{fontFamily : 'pretendard', fontSize : '19px', fontWeight : '300'}} />
                            <img src={hamburger} alt="" className="search-image"></img>
                        </form>
                    </div>
                    
                    <div className="tab-list" style = {{fontFamily : 'pretendard'}}>
                        <Tabs name="음식점" image={Food}></Tabs>
                        <Tabs name="카페" image={Cup}></Tabs>
                        <Tabs name="주유소" image={Gas}></Tabs>
                        <Tabs name="펜션" image={Bedroom}></Tabs>
                    </div>

                    <Link to="/tutorial1/tut3" style={{ textDecoration: "none" }}>
                      <div style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: "transparent",
                          padding: '100px 30px',
                        }}>
                        <div 
                          style={{
                            color: 'black',
                            fontSize: 35,
                            fontWeight: 700,
                            textShadow: "-2px -2px 0 white, 0px -2px 0 white, 2px -2px 0 white, 2px 0 0 white, 2px 2px 0 white, 0 2px 0 white, -2px 2px 0 white, -2px 0 0 white",
                          }}
                        >
                          눌러서 시작하기!
                        </div>
                        <img src={Finger} alt="" 
                          style={{
                            width: '100px',
                            height: '100px',
                            marginLeft: 150,
                          }}
                        />
                      </div>
                    </Link>
                </div>
                <NaverMap />
            </MapDiv>

            <div
            style={{display: 'flex',justifyContent: 'center', zIndex:2, width:'100%'}}
            >
                <img
                src={exercise_road1_bottom}
                alt="하단이미지"
                style={{display: "block", bottom : -8, margin : 0,padding : 0, width:'100%'}}
                className="overlay"
                />
            </div>
        </Container>
    );
}

export default Tut2;