import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import STYLES from './App.scss';
import Header from '../Header';
import OriginDestination from '../OriginDestination';
import FlightsActionSection from '../FlightsActionSection';
import FlightCard from '../FlightCard';
import {
  fetchFlightSearchResults,
  setFetchSearchResultsCallInProgress,
  FETCH_SEARCH_RESULTS,
  UPDATE_SEARCH_RESULTS,
} from '../../actions';
import selectors from '../../selectors';
import AppPropTypes from '../../prop-types';
import Loader from '../Loader';

const c = (className) => STYLES[className] || 'UNKNOWN';

const queryParams = {
  cabinClass: 'Economy',
  originPlace: 'EDI',
  destinationPlace: 'LHR',
  outboundDate: '2020-10-15',
  inboundDate: '2020-10-16',
};

const PAGE_SIZE = 10;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pageIndex: 0,
    };
  }

  componentDidMount = () => {
    const { props, state } = this;
    props.fetchFlightSearchResults(queryParams, {
      pageIndex: state.pageIndex,
      pageSize: PAGE_SIZE,
    }, FETCH_SEARCH_RESULTS);
  }

  onLoadMore = () => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    const { props, state } = this;
    this.setState(
      { pageIndex: state.pageIndex + 1 },
      () => {
        props.setFetchSearchResultsCallInProgress(true);
        props.fetchFlightSearchResults(queryParams, {
          pageIndex: state.pageIndex,
          pageSize: PAGE_SIZE,
        }, UPDATE_SEARCH_RESULTS);
      },
    );
  };

  render = () => {
    const { searchResults } = this.props;
    return (
      <div className={c('App')}>
        <Header />
        {
          searchResults
            ? (
              <main className={c('App__main')}>
                <OriginDestination query={searchResults.Query} />
                <FlightsActionSection />
                <FlightCard
                  itineraries={searchResults.Itineraries}
                  currencySymbol={searchResults.Currencies[0].Symbol}
                />
              </main>
            ) : <Loader className={c('App__loader')} loadingNotification="Searching for flights" />
        }
      </div>
    );
  };
}

App.propTypes = {
  fetchFlightSearchResults: PropTypes.func.isRequired,
  searchResults: AppPropTypes.SearchResults,
  setFetchSearchResultsCallInProgress: PropTypes.func.isRequired,
};

App.defaultProps = {
  searchResults: undefined,
};

export default connect((state) => ({
  searchResults: selectors.flightSearchResultsSelector(state),
}), {
  fetchFlightSearchResults,
  setFetchSearchResultsCallInProgress,
})(App);
