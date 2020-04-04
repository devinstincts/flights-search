import axios from 'axios';

export const FETCH_SEARCH_RESULTS = 'FETCH_SEARCH_RESULTS';

export const UPDATE_SEARCH_RESULTS = 'UPDATE_SEARCH_RESULTS';

export const SET_FETCH_RESULTS_CALL_INPROGRESS = 'SET_FETCH_RESULTS_CALL_INPROGRESS';

export const receivedFlightSearchResults = (results, actionType) => ({
  type: actionType,
  results,
});

export const setFetchSearchResultsCallInProgress = (searchResultsCallInProgress) => ({
  type: SET_FETCH_RESULTS_CALL_INPROGRESS,
  searchResultsCallInProgress,
});

export function fetchFlightSearchResults(searchParams, queryParams, action) {
  return (dispatch) => axios.get('http://localhost:5000/api/v1/flight-live-prices', {
    params: searchParams,
  }).then((response) => {
    dispatch(receivedFlightSearchResults(response.data, action));
    dispatch(setFetchSearchResultsCallInProgress(false));
  }).catch((err) => {
    dispatch(setFetchSearchResultsCallInProgress(false));
    throw err;
  });
}
