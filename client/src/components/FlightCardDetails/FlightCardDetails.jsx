import React from 'react';
import PropTypes from 'prop-types';

import FlightLeg from '../FlightLeg/FlightLeg';
import AppPropTypes from '../../prop-types';
import './FlightCardDetails.css';

const FlightCardFooter = (itinerary, currencySymbol) => (
  <div className="card-footer-container">
    <div className="card-footer-amount-wrapper">
      <div className="card-footer-amount">
        {currencySymbol}
        {itinerary.PricingOptions[0].Price}
      </div>
      <div className="card-footer-agent">{itinerary.PricingOptions[0].Agents[0].Name}</div>
    </div>
    {/* eslint-disable-next-line react/button-has-type */}
    <button className="card-select-btn">
      Select
    </button>
  </div>
);

const FlightCardDetails = (props) => {
  const { itinerary, itinerary: { outboundLeg, inboundLeg }, currencySymbol } = props;
  return (
    <div className="flightCardDetailsContainer">
      <div>
        <FlightLeg flightLeg={outboundLeg} />
        <FlightLeg flightLeg={inboundLeg} />
      </div>
      {FlightCardFooter(itinerary, currencySymbol)}
    </div>
  );
};

FlightCardDetails.propTypes = {
  itinerary: AppPropTypes.Itinerary.isRequired,
  currencySymbol: PropTypes.string.isRequired,
};

export default FlightCardDetails;
