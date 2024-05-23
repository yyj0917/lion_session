// 헤더2

import React from 'react';
import styled from 'styled-components';
// import YourSVGComponent from './your-svg-file.svg'; // SVG 파일을 컴포넌트로 불러옴
// import Header_X from './header_X.svg';
import Icon from './header_X';
import { Link } from 'react-router-dom';

// 헤더박스
const HeaderWrapper = styled.header`
  box-sizing: border-box;  
  width: 100%;
  height: 115px;
  background-color: #182E5E;
  color: white;
  padding: 0px;
  text-align: center;
  display: flex;
  flex-direction: column;
  z-index : 1;
  position: relative;
`;

// 제목
const Title = styled.div`
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 6px;
  margin-top: 43px;
`;

// 부제
const Subtitle = styled.div`
  font-size: 20px;
  font-weight: 300;
  margin-top: 0px;
  margin-bottom: 5px;
  padding-bottom:10px;
`;

// X 버튼
const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 20px;
  color: white;
  position: absolute;
  top: 68px;
  right: 10px;
`;


function Header2({ title, subtitle }) {
    const handleButtonClick = () => {
      // 나중에 함수추가
    };

    return (
      <HeaderWrapper>
        {/* 제목 */}
        <Title>{title}</Title>
        {/* 소제목 */}
        <Subtitle>{subtitle}</Subtitle>
        {/* X 버튼 */}
        <CloseButton>
        <Link to="/Home">
        <Icon />
        </Link>
        </CloseButton>
      </HeaderWrapper>
    );
  }
  
export default Header2;


