import React, { useState, useEffect } from "react";
import Header2 from "./components/Header2";
import Tabs from "./components/Tabs";
import Mission from './components/Mission'
import './maphome.css';
import hamburger from "./images/hamburger.svg";
import navigation from "./images/navigation.png";
import { Container as MapDiv, NaverMap, NavermapsProvider } from 'react-naver-maps';
import Food from "./images/maphome_Food.svg";
import Cup from "./images/maphome_Cup.svg";
import Gas from "./images/maphome_Gas.svg";
import Bedroom from "./images/maphome_Bedroom.svg";

function Maphome() {
  return (
    <div className="container">
      <Header2 title="지도 연습해보기" subtitle="1. 길 검색해서 찾기"/>  
      <MapDiv
        className="map"
        style={{
          width: '100%',
          height: '800px',
        }}
      >
        <div className="overlay">
          <div className="search-box">
            <form method="post" name="searchform">
              <input type="text" className="search" placeholder="장소, 버스, 지하철, 주소 검색" /> 
              <img src={hamburger} alt="" className="search-image"></img>
            </form>
          </div>
          <div className="tab-list">
            <Tabs name="음식점" image={Food}></Tabs>
            <Tabs name="카페" image={Cup}></Tabs>
            <Tabs name="주유소" image={Gas}></Tabs>
            <Tabs name="펜션" image={Bedroom}></Tabs>
          </div>
        </div>
        <NaverMap />
        <Mission />
      </MapDiv>
      <img src={navigation} alt="" className="navigation"></img>
    </div>
  );
}

export default Maphome;