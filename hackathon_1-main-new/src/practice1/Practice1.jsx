// ㄹ 모양 길 따라가기로 해봄.. 아직 모바일로 테스트는 안함

import React, { useState, useEffect } from 'react';

const LINE_WIDTH = 5;
const L_WIDTH = 100;
const L_HEIGHT = 200;

const DrawingScreen = () => {
  const [lines, setLines] = useState([
    { x: window.innerWidth / 2 - L_WIDTH / 2, y: window.innerHeight / 2 - L_HEIGHT / 2 }, // 왼쪽 위 시작점
    { x: window.innerWidth / 2 - L_WIDTH / 2, y: window.innerHeight / 2 + L_HEIGHT / 2 }, // 왼쪽 아래 점
    { x: window.innerWidth / 2 + L_WIDTH / 2, y: window.innerHeight / 2 + L_HEIGHT / 2 }, // 오른쪽 아래 점
  ]);

  useEffect(() => {
    // DeviceOrientationEvent와 DeviceMotionEvent를 지원하는지 확인
    if (window.DeviceOrientationEvent && window.DeviceMotionEvent) {
      const handleOrientationChange = (event) => {
        const angle = event.alpha;
        const directionAngle = calculateDirectionAngle(lines);
  
        // 휴대폰의 방향과 'ㄹ'의 방향이 일치하는 경우, 맨 위의 선을 없앰
        if (angle < directionAngle + 15 && angle > directionAngle - 15) {
          const newLines = lines.slice(1);
          setLines(newLines);
        }
      };
  
      // DeviceOrientationEvent 이벤트 리스너 등록
      window.addEventListener('deviceorientation', handleOrientationChange);
  
      return () => {
        // 컴포넌트가 언마운트될 때 이벤트 리스너 해제
        window.removeEventListener('deviceorientation', handleOrientationChange);
      };
    } else {
      console.log('DeviceOrientationEvent 또는 DeviceMotionEvent를 지원하지 않는 브라우저입니다.');
    }
  }, [lines]);

  const calculateDirectionAngle = (lines) => {
    const startX = lines[0].x;
    const startY = lines[0].y;
    const endX = lines[1].x;
    const endY = lines[2].y;
    const directionAngle = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI);
    return directionAngle;
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        {lines.map((line, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              backgroundColor: 'black',
              left: line.x,
              top: line.y,
              width: index === 0 ? L_WIDTH : LINE_WIDTH,
              height: index === 1 ? L_HEIGHT : LINE_WIDTH,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default DrawingScreen;





