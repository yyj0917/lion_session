import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import NaverMapAPI from "../components/NaverMapApi";
import Header2 from "../components/Header2";
import Tabs from "../components/Tabs";
import Mission from '../components/Mission'
import '../maphome.css'; 
import hamburger from "../images/hamburger.svg";
import stt_icon from "../images/exercise0_mic.svg";

import location from "../images/location.svg";
import { Link } from "react-router-dom";
import { Container as MapDiv, NaverMap, NavermapsProvider } from 'react-naver-maps';
import { NaverMapsProvider } from 'react-naver-maps';
import exercise_road1_bottom from '../images/exercise_road1_bottom.svg'; // Import the image here
import exercise_road0_alert from '../images/exercise_road0_alert.svg'; // Path to the image
import Food from "../images/maphome_Food.svg";
import Cup from "../images/maphome_Cup.svg";
import Gas from "../images/maphome_Gas.svg";
import Bedroom from "../images/maphome_Bedroom.svg";

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


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
  position: relative;
  z-index : 0;
`;

const TextBox = styled.div`
  box-sizing: border-box;  
  width: 350px;
  border-radius: 10px;
  padding: 25px;
  background-color: #BA0C0C;
  color: #FFFFFF;
  font-size: 20px;
  font-weight: 500;
  line-height: 150%;
  text-align: center;
  width: 100;
  position: absolute;
  bottom: 65px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
`;

const TextContainer = styled.div`
    white-space: pre-line;
  `;


function Exercise_road_0() {
    const [showImage, setShowImage] = useState(true); // State to track whether to show the image or not
    const history = useHistory();
    const [searchValue, setSearchValue] = useState(""); // 입력된 내용을 저장할 상태
    const [showErrorBox, setShowErrorBox] = useState(false);
    
    const {transcript, listening } = useSpeechRecognition();
    // const { transcript } = useSpeechRecognition();

    const handleImageClick = () => {
        setShowImage(false); // Hide the image when clicked
    }

    const handleSearch = (event) => {
        event.preventDefault(); // Prevent form submission
        const inputValue = event.target.elements.search.value;
        
        // Check if the search value matches "창천문화공원"
        if (inputValue === "창천문화공원") {
            history.push("/practice2/exercise_road_2"); // Navigate to the excercise2 route
        } else {
            setShowErrorBox(true); // Show the error box
        }
    }
    

    useEffect(() => {
        if (transcript) {
            setSearchValue(transcript);
        }
    }, [transcript])
        
        

    return (
        <Container className="container">
            <Header2 title="실습2. 경로찾기" subtitle="도보로 '창천문화공원'가기" />
            <MapDiv
                className="map"
                style={{
                    width: '100%',
                    height: '800px',
                }}
            >
                <div className="overlay" style={{margin:"auto", padding: '0', width: '100%'}}>           
                    <div className="search-box" >
                        <form onSubmit={handleSearch} name="searchform">    
                            <input type="text" className="search" name="search" placeholder="장소, 버스, 지하철, 주소 검색" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
                            <img src={hamburger} alt="" className="search-image"></img>
                            <img src={stt_icon} alt="" className="stt" onClick={SpeechRecognition.startListening}></img>
                        </form>
                    </div>
                    
                    <div className="tab-list">
                        <Tabs name="음식점" image={Food}></Tabs>
                        <Tabs name="카페" image={Cup}></Tabs>
                        <Tabs name="주유소" image={Gas}></Tabs>
                        <Tabs name="펜션" image={Bedroom}></Tabs>
                    </div>
                </div>
                <div className="overlay">
                    {showImage && (
                        <img
                            src={exercise_road0_alert}
                            alt=""
                            style={{ cursor: "pointer", zIndex: 4 ,bottom:'0',width:'100vw',height:'100%'}}
                            onClick={handleImageClick}
                        />
                    )}
                    
                </div>
                   
                <NaverMap 
                    center={{lat: 37.558, lng: 126.9368}}
                />
            </MapDiv>
            
            <img src={exercise_road1_bottom} alt="" style={{width:'100%'}}/>
            
            {showErrorBox && (
                <TextBox>
                    <TextContainer>잘못 입력했어요!<br/>다시 입력해주세요.</TextContainer>
                </TextBox>
            )} 
        </Container>
    );
}

export default Exercise_road_0;