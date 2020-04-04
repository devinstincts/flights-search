import React from 'react';
import TestRenderer from 'react-test-renderer';

import Loader from '.';

describe('Loader', () => {
  it('should render correctly', () => {
    const tree = TestRenderer.create(<Loader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
