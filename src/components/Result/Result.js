import Button from '../Button/Button';
import './Result.css';

function Result({lengthOfQuestionsArray, score, btnText, onStartBtnClick}) {
  return (
    <section className='result'>
      <h1 className='result__title'>Your final score is: {score} of {lengthOfQuestionsArray} 	&#127881;</h1>
      <Button onStartBtnClick={onStartBtnClick} btnText={btnText}/>
    </section>
  )
}

export default Result;