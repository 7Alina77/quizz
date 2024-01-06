import Logo from '../Logo/Logo';
import './Navigation.css';
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <section className="navigation">
      <nav className="navigation__list">
        <NavLink to='/signup' className="navigation__item hover link">
          Sign-up
        </NavLink>
        <NavLink to='/signin' className="navigation__item hover link">
          Login
        </NavLink>
      </nav>
    </section>
  )
}

export default Navigation;