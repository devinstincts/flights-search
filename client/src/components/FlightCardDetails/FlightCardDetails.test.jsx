import React from 'react';
import ReactDOM from 'react-dom';
import ShallowRenderer from 'react-test-renderer/shallow';
import FlightCardDetails from '.';
import mockRes from '../../mock.json';

describe('FlightCardDetails', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FlightCardDetails
      itinerary={mockRes.Itineraries[0]}
      currencySymbol={mockRes.Currencies[0].Symbol}
    />, div);
  });

  it('snapshot', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<FlightCardDetails
      itinerary={mockRes.Itineraries[0]}
      currencySymbol={mockRes.Currencies[0].Symbol}
    />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
