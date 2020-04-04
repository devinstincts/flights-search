import React from 'react';

import logo from './Atlavik.svg';
import STYLES from './Header.scss';

const c = (className) => STYLES[className] || 'UNKNOWN';

const Header = () => (
  <header className={c('Header')}>
    <a href="/">
      <span className={c('Header__hidden-text')}>Atlavik</span>
      <img className={c('Header__logo-image')} alt="Atlavik" src={logo} />
    </a>
  </header>
);

export default Header;
