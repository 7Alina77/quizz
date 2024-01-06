import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import '../Landing/Landing.css';
import Header from '../Header/Header';

function Landing({onStartBtnClick, btnText}) {
  return (
    <section className='landing'>
      <main>
        <div className='landing__content'>
          <Header />
          <h1 className='landing__title'>Welcome to the Quizz!</h1>
          <p className='landing__text'>Take these quizz to test your knowledge on a variety of fun and interesting topics. Don't waste your time - play!</p>
          <h2 className='landing__rules'>Rules</h2>
          <ol className='landing__list'>
            <li className='landing__item'> There are 3 answer options for each question.</li>
            <li className='landing__item'>Click the right option and get new question</li>
            <li className='landing__item'>Answer all the questions to win</li>
          </ol>
          <Link to='/game'>
            <Button onStartBtnClick={onStartBtnClick} btnText={btnText} />
          </Link>
        </div>
      </main>
    </section>
  )
}

export default Landing;