import React from 'react';
import ReactDOM from 'react-dom';
import ShallowRenderer from 'react-test-renderer/shallow';
import FlightsActionSection from './index';

describe('FlightsActionSection', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FlightsActionSection />, div);
  });

  it('should render correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<FlightsActionSection />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
