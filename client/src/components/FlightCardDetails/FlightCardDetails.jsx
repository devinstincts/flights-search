import React from 'react';
import PropTypes from 'prop-types';

import STYLES from './FlightCardDetails.scss';
import FlightLeg from '../FlightLeg/FlightLeg';
import AppPropTypes from '../../prop-types';

const c = (className) => STYLES[className] || 'UNKNOWN';

const FlightCardFooter = (itinerary, currencySymbol) => (
  <div className={c('FlightCardDetails__footer')}>
    <div className={c('FlightCardDetails__footer-amount')}>
      <p>
        {currencySymbol}
        {itinerary.PricingOptions[0].Price}
      </p>
      <p className={c('FlightCardDetails__footer-agent')}>{itinerary.PricingOptions[0].Agents[0].Name}</p>
    </div>
    {/* eslint-disable-next-line react/button-has-type */}
    <button>
      Select
    </button>
  </div>
);

const FlightCardDetails = (props) => {
  const { itinerary, itinerary: { outboundLeg, inboundLeg }, currencySymbol } = props;
  return (
    <div className={c('FlightCardDetails__parent-container')}>
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
