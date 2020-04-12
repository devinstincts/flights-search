import React from 'react';
import PropTypes from 'prop-types';
import FlightCardDetails from '../FlightCardDetails';
import AppPropTypes from '../../prop-types';
import './FlightCard.css';

const FlightCard = (props) => {
  const { itineraries, currencySymbol } = props;
  return (
    <div className="flightCardContainer">
      {
        itineraries.map((itinerary) => (
          <FlightCardDetails
            itinerary={itinerary}
            currencySymbol={currencySymbol}
            key={`${itinerary.OutboundLegId}:${itinerary.InboundLegId}`}
          />
        ))
      }
    </div>
  );
};

FlightCard.propTypes = {
  itineraries: PropTypes.arrayOf(AppPropTypes.Itinerary),
  currencySymbol: PropTypes.string,
};

FlightCard.defaultProps = {
  itineraries: [],
  currencySymbol: '£',
};

export default FlightCard;
