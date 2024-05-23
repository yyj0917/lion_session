// 헤더

import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  box-sizing: border-box;  
  width: 393px;
  height: 100px;
  background-color: #2456C2;
  color: white;
  padding: 30px;
  font-size: 25px;
  font-weight: 600;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

function Header({ title }) {
  return <HeaderWrapper>{title}</HeaderWrapper>;
}

export default Header;