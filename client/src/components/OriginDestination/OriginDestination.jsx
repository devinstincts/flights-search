import React from 'react';
import rightArrowIcon from './right-arrow.svg';
import AppPropTypes from '../../prop-types';
import './OriginDestination.css';

const OriginDestination = (props) => {
  const { query } = props;
  return (
    <div className="originDestinationContainer">
      <div className="origin-wrapper">
        <span className="origin-dest-source">{query.OriginPlace.Code}</span>
        <img className="origin-arrow-icon" alt="To" src={rightArrowIcon} />
        <span className="origin-dest-source">{query.DestinationPlace.Code}</span>
      </div>
      <div className="origin-traveller-info">
        <span>
          {query.Adults + query.Children + query.Infants}
          {' '}
          travellers
        </span>
        <span>
          ,
          {' '}
          {query.CabinClass}
        </span>
      </div>
    </div>
  );
};

OriginDestination.propTypes = {
  query: AppPropTypes.Query,
};

OriginDestination.defaultProps = {
  query: {},
};

export default OriginDestination;
