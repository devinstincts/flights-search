import React from 'react';
import rightArrowIcon from './right-arrow.svg';
import util from '../../util';
import AppPropTypes from '../../prop-types';
import './FlightLeg.css';

const stopsTextClass = (value) => (value === 'Direct' ? 'flight-direct' : 'flight-stop');

const FlightLeg = ({ flightLeg }) => {
  const departure = new Date(`${flightLeg.Departure}Z`);
  const arrival = new Date(`${flightLeg.Arrival}Z`);
  const stopText = util.stopsText(flightLeg.Stops);
  return (
    <div className="flight-leg">
      <div className="flight-details-row">
        <img
          className="flight-carrier-img"
          alt={flightLeg.Carriers[0].Code}
          src={flightLeg.Carriers[0].ImageUrl}
        />
        <div className="flight-time-source-dest">
          <div className="flight-source-dest-details">
            <div className="flight-time">
              {`${departure.toLocaleTimeString().substr(0, 5)}`}
            </div>
            <div className="flight-code">{flightLeg.OriginStation.Code}</div>
          </div>
          <img className="flight-leg-arrow-icon" alt="To" src={rightArrowIcon} />
          <div className="flight-source-dest-details">
            <div className="flight-time">
              {`${arrival.toLocaleTimeString().substr(0, 4)}`}
            </div>
            <div className="flight-code">{flightLeg.DestinationStation.Code}</div>
          </div>
        </div>
        <div className="flight-total-duration">
          <div className="fight-total-time">{util.minutesInHrsAndMins(flightLeg.Duration)}</div>
          <div className={stopsTextClass(stopText)}>{stopText}</div>
        </div>
      </div>
    </div>
  );
};

FlightLeg.propTypes = {
  flightLeg: AppPropTypes.Leg.isRequired,
};

export default FlightLeg;
