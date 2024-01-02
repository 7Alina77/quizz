import React, { useState} from 'react';
import './Game.css';
import Result from '../Result/Result';
import { indexContext } from '../../context/context';

function Game({questionsAll}) {
  const [score, setScore] = useState(0)
  const index = React.useContext(indexContext);
  const [indexOfContext, setIndexOfContext] = useState(index);
  const question = questionsAll[indexOfContext];
  const lengthOfQuestionsArray = questionsAll.length;

  function onAnswerClick(index) {
    setIndexOfContext(indexOfContext+1);
    if(index === question.correct) {
      setScore(score+1);
    } else {
      setScore(score);
    }
  }

  return (
    <section className='game'>
      { lengthOfQuestionsArray !== indexOfContext ? 
        <div className='game__content'>
          <h1 className='game__title'>{question.title}</h1>
          <ul className='game__answers'>
          {question.variants.map((item, index) => {
            return (
              <li className='game__answer'>
                <button onClick={() => onAnswerClick(index)} className='game__answer-btn hover'>{item}</button>
              </li>
            )
          })}
          </ul>
          <h2 className='game__score'>Your score: {score}</h2>
        </div> 
        : 
        <Result lengthOfQuestionsArray={lengthOfQuestionsArray} score={score}/>
      }
    </section>
  )
}

export default Game;