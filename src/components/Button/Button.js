import './Button.css';

function Button ({onAnswerBtnClick, onStartBtnClick, btnText}) {
  return (
    <section className='button'>
      <button onClick={onStartBtnClick || onAnswerBtnClick} className='button__btn hover'>{btnText}</button>
    </section>
  )
}

export default Button;