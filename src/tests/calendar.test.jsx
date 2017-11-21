import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import React from 'react';
import { shallow, render } from 'enzyme';
import Calendar from '../components/calendar';
import MonthsList from '../containers/months-list';

describe('<Calendar /> component', () => {

  beforeEach(() => {
    configure({ adapter: new Adapter() });
  });

  it('renders on the page', () => {
    const calendar = shallow( <Calendar /> );
    expect(calendar.find(MonthsList).length).toBe(1);
  });

});
