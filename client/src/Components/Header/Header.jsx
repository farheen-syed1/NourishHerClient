import React, { useState } from 'react';
import './Header.css';
import { FaBars } from 'react-icons/fa'; 
import logo from '../../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Link className="navbar__link" to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className={`navbar__menu ${isMenuOpen ? 'navbar__menu--open' : ''}`}>
        <ul className="navbar__list">
          <Link className="navbar__link" to="/">
            <li className={`navbar__item ${location.pathname === '/' ? 'navbar__item--active' : ''}`}>Home</li>
          </Link>
          <Link className="navbar__link" to="/exercise">
            <li className={`navbar__item ${location.pathname === '/exercise' ? 'navbar__item--active' : ''}`}>Exercise</li>
          </Link>
          <Link className="navbar__link" to="/health-recipes">
            <li className={`navbar__item ${location.pathname === '/health-recipes' ? 'navbar__item--active' : ''}`}>Healthy Recipe</li>
          </Link>
          <Link className="navbar__link" to="/bmi">
            <li className={`navbar__item ${location.pathname === '/bmi' ? 'navbar__item--active' : ''}`}>BMI</li>
          </Link>
        </ul>
      </div>
      <div className="navbar__buttons">
      <Link  className="navbar__link" to="/login">    <button className="navbar__button navbar__button--login">Login</button></Link>
      <Link  className="navbar__link" to="/signUp">  <button className="navbar__button navbar__button--signup">Signup</button></Link>
      </div>
      <div className="navbar__hamburger-icon" onClick={toggleMenu}>
        <FaBars />
      </div>
    </div>
  );
}

export default Header;
