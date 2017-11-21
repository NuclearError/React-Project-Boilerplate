/*
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';

import React from 'react';
import { shallow, render } from 'enzyme';
import MonthsList from '../containers/months-list';
import Month from '../components/month';

describe('<MonthsList /> component', () => {

  beforeEach(() => {
    configure({ adapter: new Adapter() });
  });

  it('renders on the page', () => {
    const store = {};
    const monthsList = shallow( <MonthsList { context: { store: mockStore() } /> );
    //const monthsList = shallow( <MonthsList /> );
    expect(monthsList.find(Month).length).toBe(12);
  });

});
*/
