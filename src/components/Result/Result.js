import './Result.css';

function Result({lengthOfQuestionsArray, score}) {
  return (
    <section className='result'>
      <h1 className='result__title'>Your final score is: {score} of {lengthOfQuestionsArray} 	&#127881;</h1>
    </section>
  )
}

export default Result;