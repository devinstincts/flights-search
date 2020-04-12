import React from 'react';
import alertIcon from './notification.svg';
import './FlightAction.css';

const FlightsActionSection = () => (
  <div className="flightActionsContainer">
    <div className="flightSortFilterActionContainer">
      <span className="flight-filter-sort-action">Filter</span>
      <span className="flight-filter-sort-action">Sort</span>
    </div>
    <div className="flightPriceAlterContainer">
      <img className="flight-action-image" alt="Alerts" src={alertIcon} />
      <span>Price alerts</span>
    </div>
  </div>
);

export default FlightsActionSection;
