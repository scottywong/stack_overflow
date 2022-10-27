
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
import logo from '../../assets/Stack_Overflow_icon.svg.png';

const Footer = () => {
  return (
    <div className='footer-container footer--pin'>
      <a href="/" className='logo-footer'>
        <img className='logo-footer-image' src={logo}/>
      </a>
      <div className="footer-link-container">
        <i onClick={() => window.open('https://github.com/scottywong/stack_overflow')} className="fa-brands fa-github fa-2xl"></i>
        <i onClick={() => window.open('https://app.asana.com/0/1203171290527127/board')} className="fa-solid fa-list-check fa-2xl"></i>
        <div id='footer-name'>Boolean Bullies  </div>
      </div>
    </div>
  );
}

export default Footer;
