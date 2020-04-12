import React from 'react';
import ReactDOM from 'react-dom';
import ShallowRenderer from 'react-test-renderer/shallow';
import FlightLeg from './index';
import mockRes from '../../mock.json';

describe('FlightLeg', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FlightLeg flightLeg={mockRes.Itineraries[0].inboundLeg} />, div);
  });

  it('should render correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<FlightLeg flightLeg={mockRes.Itineraries[0].inboundLeg} />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
