import React from 'react';
import ReactDOM from 'react-dom';
import ShallowRenderer from 'react-test-renderer/shallow';
import FlightCard from './index';
import mockRes from '../../mock.json';

describe('FlightCard', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FlightCard
      itineraries={mockRes.Itineraries}
      currencySymbol={mockRes.Currencies[0].Symbol}
    />, div);
  });

  it('snapshot', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<FlightCard
      itineraries={mockRes.Itineraries}
      currencySymbol={mockRes.Currencies[0].Symbol}
    />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
