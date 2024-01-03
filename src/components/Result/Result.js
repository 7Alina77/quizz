import { Component } from 'react';
import Button from '../Button/Button';
import Landing from '../Landing/Landing';
import './Result.css';
import {  BrowserRouter, Routes, Route, Link } from 'react-router-dom/dist';

function Result({lengthOfQuestionsArray, score, btnText, onStartBtnClick}) {
  return (
    <section className='result'>
      <h1 className='result__title'>Your final score is: {score} of {lengthOfQuestionsArray} 	&#127881;</h1>
      <Button onStartBtnClick={onStartBtnClick} btnText={btnText}/>
    </section>
  )
}

export default Result;