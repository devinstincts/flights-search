import React from 'react';

import STYLES from './Loader.scss';

const c = (className) => STYLES[className] || 'UNKNOWN';

const Loader = () => (
  <div className={c('load-container', 'load')}>
    <div className={c('loader')} />
  </div>
);

export default Loader;
