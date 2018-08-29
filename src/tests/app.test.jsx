// import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

import React from 'react';
import { shallow, render } from 'enzyme';
import App from '../components/app';

describe('<App /> component', () => {

  /*
  // Use this if working with Redux
  beforeEach(() => {
    configure({ adapter: new Adapter() });
  });
  */

  it('renders on the page', () => {
    const app = shallow( <App /> );
    // expect(app.find(Calendar).length).toBe(1); //
  });

});
