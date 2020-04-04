import React from 'react';
import STYLES from './FlightLeg.scss';
import rightArrowIcon from './right-arrow.svg';
import util from '../../util';
import AppPropTypes from '../../prop-types';

const c = (className) => STYLES[className] || 'UNKNOWN';

const BLOCK_NAME = 'FlightLeg';

const stopsTextClass = (value) => (value === 'Direct' ? c(`${BLOCK_NAME}__duration-details__stops_text`) : '');

const FlightLeg = ({ flightLeg }) => {
  const departure = new Date(`${flightLeg.Departure}Z`);
  const arrival = new Date(`${flightLeg.Arrival}Z`);
  const stopText = util.stopsText(flightLeg.Stops);
  return (
    <div className={c(BLOCK_NAME)}>
      <div className={c(`${BLOCK_NAME}__OND-container`)}>
        <span className={c(`${BLOCK_NAME}__OND-icon`)}>
          <img
            className={c(`${BLOCK_NAME}__OND-carrier-image`)}
            alt={flightLeg.Carriers[0].Code}
            src={flightLeg.Carriers[0].ImageUrl}
          />
        </span>
        <div className={c(`${BLOCK_NAME}__origin-details`)}>
          <p>
            {`${departure.toLocaleTimeString().substr(0, 5)}`}
          </p>
          <p>{flightLeg.OriginStation.Code}</p>
        </div>
        <img className={c(`${BLOCK_NAME}__OND-right-icon`)} alt="To" src={rightArrowIcon} />
        <div className={c(`${BLOCK_NAME}__destination-details`)}>
          <p>
            {`${arrival.toLocaleTimeString().substr(0, 5)}`}
          </p>
          <p>{flightLeg.DestinationStation.Code}</p>
        </div>
      </div>
      <div className={c(`${BLOCK_NAME}__duration-details`)}>
        <p>{util.minutesInHrsAndMins(flightLeg.Duration)}</p>
        <p className={stopsTextClass(stopText)}>{stopText}</p>
      </div>
    </div>
  );
};

FlightLeg.propTypes = {
  flightLeg: AppPropTypes.Leg.isRequired,
};

export default FlightLeg;
