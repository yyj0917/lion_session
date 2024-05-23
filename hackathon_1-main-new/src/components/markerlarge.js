import React, { useState } from 'react';
import '../App.css';
import mapMarkerImg from '../images/mapmarker.png';

const Marker = () => {
  // 마커 클릭 상태를 관리하는 상태 변수
  const [isClicked, setIsClicked] = useState(false);

  // 마커 클릭 이벤트 핸들러
  const handleMarkerClick = () => {
    setIsClicked(!isClicked); // 클릭 시 isClicked 값을 반전하여 상태 업데이트
  };

  return (
    <div
      className="marker"
      style={{
        fontSize: isClicked ? '15px' : '10px', 
        transform: isClicked ? 'scale(1.5)' : 'scale(1)', // 1.5배 커지도록
      }}
      onClick={handleMarkerClick} // 클릭 시 이벤트 핸들러 호출
    >
      <img src={mapMarkerImg} alt="Marker"/> 
    </div>
  );
};

const Practice2 = () => {
  return (
    <div className="container">
      <Marker />
    </div>
  );
};

export default Practice2;