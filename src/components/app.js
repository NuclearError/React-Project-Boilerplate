import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import Canvas from './canvas';
import Canvas from '../components/canvas';

class App extends Component {

  constructor(props) {
    super(props);

    // this is literally just here because i got sick of the
    // eslint recommendation to make this a fucntional component
    const meaninglessCrap = 123;
    if (meaninglessCrap == 123) {
      console.log('hello from the App!');
    }
  }

  render() {
    return (
      <React.fragment>
        <h1>Hello World</h1>
        <Canvas message="Hello from Canvas!" />
      </React.fragment>
    );
  }
}

export default App;
