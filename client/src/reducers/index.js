import { FETCH_SEARCH_RESULTS, UPDATE_SEARCH_RESULTS, SET_FETCH_RESULTS_CALL_INPROGRESS } from '../actions';

const reducer = (state = {}, payload) => {
  switch (payload.type) {
    case FETCH_SEARCH_RESULTS:
      return { ...state, searchResults: payload.results };
    case UPDATE_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: {
          ...state.searchResults,
          Itineraries: [
            ...state.searchResults.Itineraries,
            ...payload.results.Itineraries,
          ],
        },
      };
    case SET_FETCH_RESULTS_CALL_INPROGRESS:
      return {
        ...state,
        searchResultsCallInProgress: payload.searchResultsCallInProgress,
      };
    default:
      return state;
  }
};

export default reducer;
