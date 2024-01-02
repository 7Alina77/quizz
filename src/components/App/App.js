import React from 'react';
import { useState } from 'react';
import './App.css';
import questions from '../../constants/constants';
import {indexContext} from '../../context/context';
import Game from '../Game/Game';
import Landing from '../Landing/Landing';

function App() {
  const index = React.useContext(indexContext);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [questionsAll, setQuestionsAll] = useState(questions);
  const [indexOfContext, setIndexOfContext] = useState(index);
  

  const onStartBtnClick = () => {
    setIsGameStarted(true);
  }
  
  return (
    <indexContext.Provider value={indexOfContext}>
      <div className="App">
        {!isGameStarted ? 
        <Landing onStartBtnClick={onStartBtnClick}/>
        :
        <Game questionsAll= {questionsAll}/>
        }
      </div>
    </indexContext.Provider>
  );
}

export default App;