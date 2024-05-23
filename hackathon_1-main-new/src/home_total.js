import React from 'react';

import styled from 'styled-components';
import NaverMap from './images/Navermap.png';

const Container = styled.div`
    width: 350px;
    height: 689px;
    flex-shrink: 0;
    border-radius: 10px 10px 0px 0px;
    background: #ffffff;
    box-shadow: 0px -5px 10px 0px rgba(0, 0, 0, 0.10);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;

// box 스타일을 정의한 Styled Component
const Box = styled.div`
    width: 310px;
    height: 100px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
    margin: 10px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

// appBox 스타일을 정의한 Styled Component
const AppBox = styled.div`
    width: 350px;
    height: 689px;
    flex-shrink: 0;
    border-radius: 10px 10px 0px 0px;
    background: #E8EEF6;
    box-shadow: 0px -5px 10px 0px rgba(0, 0, 0, 0.10);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h1`
    color: #000;
    font-family: 'Inter', sans-serif;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 30px;
`;

const AppName = styled.div`

`;

const Img = styled.img`   
    width: 90px;
    height: 50px;
    flex-shrink: 0; 
`;

const IconName = styled.div`
    color: #000;
    font-family: Inter;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const Level = styled.div`
    color: #000;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;    
`;

const FirstBox = () => {
    return (
        <Container>
            <Title>어떤 앱을 배워볼까요?</Title>
            <AppBox>
                <Box>
                    <Img src={NaverMap} alt=""></Img>
                    <AppName>
                        <IconName>지도</IconName>
                        <Level>난이도 상</Level>
                    </AppName>
                </Box>
                <Box>
                    <div>카카오톡</div>
                    <div>난이도 상</div>
                </Box>
                <Box>
                    <div>쇼핑몰</div> 
                    <div>난이도 상</div>
                </Box>
                <Box>
                    <div>간편결제</div>
                    <div>난이도 상</div>
                </Box>
                <Box>
                    <div>은행앱</div>
                    <div>난이도 상</div>
                </Box>
            </AppBox>
        </Container>
    );
};

export default FirstBox;
