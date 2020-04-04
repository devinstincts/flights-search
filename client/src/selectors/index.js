const flightSearchResultsSelector = (state) => state.searchResults;

const searchResultsCallInProgressSelector = (state) => state.searchResultsCallInProgress;

export default {
  flightSearchResultsSelector,
  searchResultsCallInProgressSelector,
};
