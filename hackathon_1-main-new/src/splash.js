import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled,{ keyframes } from "styled-components";
import SplashBack from "./images/splash_back.svg"
import SplashEgg from "./images/splash_egg.svg"
import SplashTitle from "./images/splash_title.svg"


const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

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

const Text = styled.div`
display: flex;
align-items: center;
text-align:center;
color : white;
margin : 30px 0 20px 0;
font-size : 25px;
line-height: 140%;
`;

// 페이드인
const FadeInContainer = styled.div`
  animation: ${fadeIn} 1.5s ease-in-out;
`;


function Splash() {
  const history = useHistory();
  useEffect(() => {

    setTimeout(() => {
      history.push('/Home');
    }, 3000);
  }); // useHistory -> router-dom(@6 version에서 useNavigate와 유사한 기능) push, back, replace et.

    return (
      <FadeInContainer>
        <Container>
            {/* 배경 */}
            <div style={{width:'100%', height:'100%'}}>
                <img src ={SplashBack} alt="스플래시배경"style = {{width:'100%', height:'100%'}}/>
            </div>

            {/* 할배 */}
            <div className='overlay' style={{width:'100%', margin:'100px 0px 0px 0px'}}>
                <img src ={SplashEgg} alt="스플래시할배"style = {{width:'90%', marginRight:'30px'}}/>
                <Text>스마트폰 앱,<br/>할머니 할아버지도 잘 알아</Text>
                <img src ={SplashTitle} alt="스플래시할배"style = {{width:'40%', height:'100%'}}/>
            </div>

        </Container>
      </FadeInContainer>
    );
  };
  
  export default Splash;
  