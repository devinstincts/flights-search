import React from 'react';
import STYLES from './FlightsAction.scss';
import alertIcon from './notification.svg';

const c = (className) => STYLES[className] || 'UNKNOWN';

const FlightsActionSection = () => (
  <div className={c('FlightsAction')}>
    <div className={c('FlightsAction__filter-section')}>
      <span>Filter</span>
      <span>Sort</span>
    </div>
    <div>
      <img className={c('FlightsAction__alert-image')} alt="Alerts" src={alertIcon} />
      <span>Price alerts</span>
    </div>
  </div>
);

export default FlightsActionSection;
