import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header() {
  return (
    <nav className='header'>
      <Logo />
      <Navigation />
    </nav>
  )
}

export default Header;