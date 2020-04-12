import axios from 'axios';

import {
  receivedFlightSearchResults,
  setFetchSearchResultsCallInProgress,
  fetchFlightSearchResults, SET_FETCH_RESULTS_CALL_INPROGRESS,
} from './index';

jest.mock('axios');

describe('Actions test suite', () => {
  it('receivedFlightSearchResults', () => {
    const result = receivedFlightSearchResults([], 'test');
    expect(result.type).toBe('test');
    expect(result.results).toEqual([]);
    expect(result.results).toHaveLength(0);
  });

  it('setFetchSearchResultsCallInProgress', () => {
    const result = setFetchSearchResultsCallInProgress(true);
    expect(result.type).toBe(SET_FETCH_RESULTS_CALL_INPROGRESS);
    expect(result.searchResultsCallInProgress).toBe(true);
  });

  it('fetchFlightSearchResults success', async () => {
    axios.get.mockResolvedValue({ data: { test: true } });
    const dispatchMock = jest.fn();
    await fetchFlightSearchResults()(dispatchMock);
    expect(dispatchMock).toHaveBeenCalled();
  });

  it('fetchFlightSearchResults failure', async () => {
    axios.get.mockRejectedValue({ data: { test: true } });
    const dispatchMock = jest.fn();
    await expect(fetchFlightSearchResults()(dispatchMock)).rejects
      .toEqual({ data: { test: true } });
    expect(dispatchMock).toHaveBeenCalled();
  });
});
