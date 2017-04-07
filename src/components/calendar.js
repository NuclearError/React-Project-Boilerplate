import React, { Component } from 'react';

import MonthsList from '../containers/months-list';
//import BookDetail from '../containers/book-detail';

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
