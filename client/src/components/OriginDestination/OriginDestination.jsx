import React from 'react';
import STYLES from './OriginDestination.scss';
import rightArrowIcon from './right-arrow.svg';
import AppPropTypes from '../../prop-types';

const c = (className) => STYLES[className] || 'UNKNOWN';

const OriginDestination = (props) => {
  const { query } = props;
  return (
    <div className={c('OriginDestination__container')}>
      <div>
        <span className={c('OriginDestination__origin')}>{query.OriginPlace.Code}</span>
        <img className={c('OriginDestination__right-icon')} alt="To" src={rightArrowIcon} />
        <span className={c('OriginDestination__destination')}>{query.DestinationPlace.Code}</span>
      </div>
      <div>
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
