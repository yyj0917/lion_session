import React from 'react';
import styled from 'styled-components';


const TextBox = styled.div`
  box-sizing: border-box;  
  width: 350px;
  border-radius: 10px;
  padding: 25px;
  background-color: #CAD5EC;
  color: #000000;
  font-size: 20px;
  font-weight: 500;
  line-height: 150%;
  text-align: center;
  width: 350px;
  position: absolute;
  bottom: 65px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
`;

function Guide({ text }) {
  const TextContainer = styled.div`
    white-space: pre-line;
  `;
  return (
    <TextBox>
      <TextContainer>{text}</TextContainer>
    </TextBox>
  );
}

export default Guide;
