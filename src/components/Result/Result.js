import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import './Result.css';

function Result({lengthOfQuestionsArray, score, btnText, onStartBtnClick}) {
  return (
    <section className='result'>
      <h1 className='result__title'>Your final score is: {score} of {lengthOfQuestionsArray} 	&#127881;</h1>
      <Button onStartBtnClick={onStartBtnClick} btnText={btnText}/>
      <div className='result__auth'>
        <p className='result__text'>Keen on playing quizzes?</p>
        <Navigation />
        <Logo />
      </div>
    </section>
  )
}

export default Result;