jest.unmock('react');
jest.unmock('enzyme');
jest.unmock('../components/app');

import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/app';

describe('<App /> component', () => {

  // variable declarations here
  let app;

  beforeEach(() => {
    app = shallow( <App /> );
  });

  it('renders on the page', () => {
    expect(app.length).toBe(1);
    // expect(app).toMatchSnapshot();
  });

});
