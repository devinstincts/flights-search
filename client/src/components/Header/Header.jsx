import React from 'react';

import logo from './Atlavik.svg';
import './header.css';


const Header = () => (
  <header className="headerContainer">
    <a href="/" className="header-anchor">
      <img className="header-logo" alt="Atlavik" src={logo} />
      <span className="header-company-name">Atlavik</span>
    </a>
  </header>
);

export default Header;
