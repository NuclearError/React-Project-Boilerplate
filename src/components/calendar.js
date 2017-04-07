import React, { Component } from 'react';

import MonthsList from '../containers/months-list';

export default class Calendar extends Component {
  render() {
    return (
      <div className='calendar'>
        <h2>Calendar</h2>
        <MonthsList />
      </div>
    );
  }
}
