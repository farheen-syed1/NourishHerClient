import React, { useState } from 'react';
import './Header.css';
import { FaBars } from 'react-icons/fa'; 
import logo from '../../assets/logo.png';



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
    <div className="navbar__logo">
      <img src={logo} alt="Logo" /> {/* Replace with your logo */}
    </div>
    <div className={`navbar__menu ${isMenuOpen ? 'navbar__menu--open' : ''}`}>
      <ul className="navbar__list">
        <li className="navbar__item navbar__item--active">Home</li>
        <li className="navbar__item">Exercise</li>
        <li className="navbar__item">Healthy Recipe</li>
        <li className="navbar__item">BMI</li>
      </ul>
    </div>
    <div className="navbar__buttons">
      <button className="navbar__button navbar__button--login">Login</button>
      <button className="navbar__button navbar__button--signup">Signup</button>
    </div>
    <div className="navbar__hamburger-icon" onClick={toggleMenu}>
      <FaBars />
    </div>
  </div>
  
  );
}

export default Header;
