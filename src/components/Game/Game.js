import React, { useState} from 'react';
import './Game.css';
import Result from '../Result/Result';
import { indexContext } from '../../context/context';
import Button from '../Button/Button';

function Game({indexOfContext, handleOnAnswerClick, score, lengthOfQuestionsArray, questionsAll, btnText, onStartBtnClick}) {
  const index = React.useContext(indexContext);
  const question = questionsAll[indexOfContext];

  function onAnswerClick(index) {
    handleOnAnswerClick(index);
  }

  return (
    <section className='game'>
      { lengthOfQuestionsArray !== indexOfContext || score === 0 ? 
        <div className='game__content'>
          <h1 className='game__title'>{question.title}</h1>
          <ul className='game__answers'>
          {question.variants.map((item, index) => {
            return (
              <li className='game__answer'>
                <Button btnText={item} onAnswerBtnClick={() => onAnswerClick(index)}></Button>
                {/* <button onClick={() => onAnswerClick(index)} className='game__answer-btn hover'>{item}</button> */}
              </li>
            )
          })}
          </ul>
          <h2 className='game__score'>Your score: {score}</h2>
        </div> 
        : 
        <Result lengthOfQuestionsArray={lengthOfQuestionsArray} score={score} btnText={btnText} onStartBtnClick={onStartBtnClick}/>
      }
    </section>
  )
}

export default Game;