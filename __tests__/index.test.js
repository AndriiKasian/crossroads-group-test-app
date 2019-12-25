import React from 'react'
import renderer from 'react-test-renderer'

import App from '../pages/index'

describe('App component', () => {
  it('should render correctly', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  })
});
