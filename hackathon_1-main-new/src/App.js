import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';


import Splash from './splash'
import Home from './home_map';

import Tut1 from './tutorial/tut1';
import Tut2 from './tutorial/tut2';
import Tut3 from './tutorial/tut3';
import Tut4 from './tutorial/tut4';
import Tut5 from './tutorial/tut5';
import Tut6 from './tutorial/tut6';
import Tut7 from './tutorial/tut7';
import Tut8 from './tutorial/tut8';
import Tut9 from './tutorial/tut9';
import Tut10 from './tutorial/tut10';
import Tut11 from './tutorial/tut11';
import Tut12 from './tutorial/tut12';

import ExerciseRoad3 from './practice2/exercise_road3';
import ExerciseRoad4 from './practice2/exercise_road4';
import ExerciseRoad0 from './practice2/exercise_road0+1';
import ExerciseRoad2 from './practice2/exercise_road2';
import ExerciseDirection1 from './practice1/exercise_direction_explanation';
import ExerciseDirection1Acting from './practice1/exercise_direction_acting';
import MapHome from './maphome';
import Dictaphone from './practice2/speech_recognition';

// import Maphome from './maphome';
// import MapHomeBox from './MapHomeBox';

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background-color: #ffffff;;
//   overflow-x: hidden;
//   overflow-y: hidden;
//   width: 393px;
//   height: 852px; // calc(var(--vh, 1vh) * 100);
//   margin: 0;
//   font-family : Pretendard;
//   letter-spacing: 1px;
// `;



function App() {

  function setScreenHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenHeight();
  });

  function setScreenWidth() {
    let vw = window.innerWidth * 0.01;
    document.documentElement.style.setProperty("--vw", `${vw}px`);
  }
  useEffect(() => {
    setScreenWidth();
  });

  return (
    // <div className='app-container'>
      <Router>
        <Switch>
          <Route exact path="/"><Splash /></Route>
          <Route exact path="/Home"><Home /></Route> 
          <Route exact path="/tutorial1/tut1"><Tut1 /></Route> 
          <Route exact path="/tutorial1/tut2"><Tut2 /></Route> 
          <Route exact path="/tutorial1/tut3"><Tut3 /></Route> 
          <Route exact path="/tutorial1/tut4"><Tut4 /></Route>
          <Route exact path="/tutorial1/tut5"><Tut5 /></Route> 
          <Route exact path="/tutorial1/tut6"><Tut6 /></Route> 
          <Route exact path="/tutorial1/tut7"><Tut7 /></Route>
          <Route exact path="/tutorial1/tut8"><Tut8 /></Route> 
          <Route exact path="/tutorial1/tut9"><Tut9 /></Route> 
          <Route exact path="/tutorial1/tut10"><Tut10 /></Route>
          <Route exact path="/tutorial1/tut11"><Tut11 /></Route>
          <Route exact path="/tutorial1/tut12"><Tut12 /></Route>                    
          <Route exact path="/practice1"><ExerciseDirection1 /></Route>
          <Route exact path="/practice1/acting"><ExerciseDirection1Acting /></Route>
          <Route exact path="/practice2/exercise_road_0+1"><ExerciseRoad0 /></Route>
          <Route exact path="/practice2/exercise_road_2"><ExerciseRoad2/></Route> 
          <Route exact path="/practice2/exercise_road_3"><ExerciseRoad3/></Route> 
          <Route exact path="/practice2/exercise_road_4"><ExerciseRoad4/></Route> 
          <Route exact path="/maphome"><MapHome /></Route>
          <Route exact path="/dict"><Dictaphone /></Route>
        </Switch>
      </Router>
    // </div>
  );
}

export default App;
