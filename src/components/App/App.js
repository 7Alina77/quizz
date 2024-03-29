import React, { Component } from 'react';
import { useState } from 'react';
import './App.css';
import questions from '../../constants/constants';
import {indexContext} from '../../context/context';
import Game from '../Game/Game';
import Landing from '../Landing/Landing';
import { Routes, Route } from 'react-router-dom';
import Signup from '../Signup/Signup';
import Navigation from '../Navigation/Navigation';

function App() {
  const index = React.useContext(indexContext);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [questionsAll, setQuestionsAll] = useState(questions);
  const [indexOfContext, setIndexOfContext] = useState(index);
  const [btnText, setBtnText] = useState('Start Now!');
  const [score, setScore] = useState(0);
  const question = questionsAll[indexOfContext];
  const lengthOfQuestionsArray = questionsAll.length;
  

  const onStartBtnClick = () => {
    if(lengthOfQuestionsArray === indexOfContext) {
      setScore(0);
      setIndexOfContext(0);
    }
    setBtnText('Start Now!');
    setIsGameStarted(true);
  }

  const handleOnAnswerClick = (index) => {
    if(index === question.correct) {
      setScore(score+1);
      setBtnText('Restart game');
    } else {
      setScore(score);
    }
    setIndexOfContext(indexOfContext+1);
  }
  
  return (
    <indexContext.Provider value={indexOfContext}>
      <div className="App">
        <Routes>
          <Route path="/quizz" element={
            <Landing 
              onStartBtnClick={onStartBtnClick} 
              btnText={btnText}
            />}
          />
          <Route path='/game' element={
            <Game indexOfContext={indexOfContext}
              handleOnAnswerClick={handleOnAnswerClick}
              score={score} 
              lengthOfQuestionsArray={lengthOfQuestionsArray} 
              questionsAll= {questionsAll} 
              btnText={btnText} 
              onStartBtnClick={onStartBtnClick}
            />}
          />
        </Routes>
      </div>
    </indexContext.Provider>
  );
}

export default App;