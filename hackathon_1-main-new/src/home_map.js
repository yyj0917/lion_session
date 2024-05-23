import React from 'react';
import MapHomeBox from './components/MapHomeBox';
import Header from './components/Header';
import { Link } from 'react-router-dom';
import Icon1 from './images/3dcon1.svg'
import Icon2 from './images/3dcon2.svg'
import Icon3 from './images/3dcon3.svg'
import Icon4 from './images/3dcon4.svg'
import Icon5 from './images/3dcon5.svg'
import Icon6 from './images/3dcon6.svg'


const BigBox = () => {
    const bigBoxStyle = {
        width: '393px',
        height: '689px',
        background: '#FFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const box = {
        margin: '10px 0px 0px 0px',
    }

    const textStyle = {
        flexShrink: 0,
        color: '#000',
        fontSize: '25px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal',
        whiteSpace: 'nowrap',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '20px',
    };

    const subTitle = {
        color: '#000',
        fontSize: '19px',
        color : '#0067C3',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal',    
    };
    
    const boldText = {
        color: '#000',
        fontSize: '23px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 'normal',
    };

    return (
        <div style={bigBoxStyle}>
            <Header title="지도 앱 익히기" />
            <div style={box}>
                <div style={textStyle}>
                    <div style={boldText}>이론</div> 
                    <div style={subTitle}>차근차근 배워봐요</div>
                </div>
                <Link to="/tutorial1/tut1" style={{ textDecoration: "none" }}>
                    <MapHomeBox title="1. 길 검색해서 찾기" time="예상 소요 시간 : 10분" img = {Icon1}/>
                </Link>
                <MapHomeBox title="2. 대중교통 이용하기" time="예상 소요 시간 : 5분" img = {Icon2}/>
                <MapHomeBox title="3. 즐겨찾기 설정하기" time="예상 소요 시간 : 7분" img = {Icon3}/>

            </div>
            <div style={box}>
                <div style={textStyle}>
                    <div style={boldText}>실습</div> 
                    <div style={subTitle}>혼자 직접 해봐요</div>
                </div>
                <Link to="/practice1" style={{ textDecoration: "none" }}>
                    <MapHomeBox title="1. 방향 찾기" time="예상 소요 시간 : 10분" img = {Icon4}/>
                </Link>
                <Link to="/practice2/exercise_road_0+1" style={{ textDecoration: "none" }}>
                    <MapHomeBox title="2. 경로 찾기" time="예상 소요 시간 : 5분" img = {Icon5}/>
                </Link>
                <MapHomeBox title="3. 자주 가는 장소 찾아가기" time="예상 소요 시간 : 3분" img = {Icon6}/>
                

            </div>
        </div>
    );
};

export default BigBox;


