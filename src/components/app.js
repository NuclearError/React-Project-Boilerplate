import React, { Component } from 'react';

import Calendar from './calendar';

export default class App extends Component {

  render() {
    return (
      <div className='hello'>
        <h1>Kynareth</h1>
        <Calendar />
      </div>
    );
  }

}
