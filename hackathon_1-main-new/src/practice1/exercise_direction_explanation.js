import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header2 from '../components/Header2';
import ExerciseBox from '../components/exercise_direction_bottom';
import Map from '../images/exercise_direction_1_mapfix1.svg';
import Alert1 from '../images/exercise_direction_1_alert_ing.svg';
import Alert2 from '../images/exercise_direction_1_alert_end.svg'
import styled from 'styled-components';
import Acting from '../practice1/exercise_direction_acting';

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

const AlertMessage = styled.div`
  width: 320px;
  height: 320px;
  background-image: url(${Alert1});
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const AlertEnd = styled.div`
  width: 320px;
  height: 320px;
  background-image: url(${Alert2});
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const NextButton = styled.button`
  width: 80px;
  height: 39px;
  border-radius: 10px;
  background: #182E5E;
  position: absolute;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  border: 0px;

  /* 버튼 안의 텍스트 스타일 적용 */
  color: #ffffff;
  text-align: center;
  font-family : pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 140%;
`;

const PrevButton = styled.button`
  width: 80px;
  height: 39px;
  border-radius: 10px;
  background: #999999;
  position: absolute;
  bottom: 20px;
  left: 20px;
  cursor: pointer;
  border: 0px;


  /* 버튼 안의 텍스트 스타일 적용 */
  color: #FFFFFF;
  text-align: center;
  font-size: 20px;
  font-family : pretendard;
  font-style: normal;
  font-weight: 300;
  line-height: 140%;
`;



function Exercise_direction1() {
  const [textIndex, setTextIndex] = useState(0);
  const textList = [
    "1. 휴대폰을 가고자하는\n방향을 향해 들어주세요.",
    "2. 파란색 세모가\n현재 방향을 나타냅니다.",
    "3. 3초가 지나면 파란 점이\n이동하게 됩니다. 그때까지\n방향을 유지해주세요.",
    "4. 빨간표시가 도착점입니다.\n파란길을 따라\n도착지를 향해 가세요!",
  ];

  const handleNextClick = () => {
      if (textIndex < textList.length - 1) {
          setTextIndex(textIndex + 1);
      }
  };

  const handlePreviousClick = () => {
      if (textIndex > 0) {
          setTextIndex(textIndex - 1);
      }
  }

  return (
    <Container>
        <Header2 title="실습1. 방향찾기" subtitle="1단계: ㄱ자 방향"/>
        <img src={Map} alt=""></img>
        {textIndex !== textList.length - 1 && <AlertMessage />}
        {textIndex === textList.length - 1 && (
          <Link to="/practice1/acting">
            <AlertEnd />
          </Link>
        )}
        <ExerciseBox text={textList[textIndex]} />
        {textIndex !== textList.length - 1 && <NextButton onClick={handleNextClick}>다음</NextButton>}
        {textIndex !== 0 && <PrevButton onClick={handlePreviousClick}>이전</PrevButton>} 
    </Container>
  );
}

export default Exercise_direction1;