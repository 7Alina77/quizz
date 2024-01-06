import './Logo.css';
import logo from '../../img/logo.png';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <section className="logo">
      <Link to='/quizz'>
        <div className="logo__container hover">
          <img className="logo__img" src={logo} alt='logo'/>
        </div>
      </Link>
    </section>
  )
}

export default Logo;