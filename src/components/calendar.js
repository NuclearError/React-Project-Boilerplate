import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MonthsList from '../containers/months-list';

class Calendar extends Component {
  render() {
    return (
      <div className='calendar'>
        {/* <h2>Calendar</h2> */}
        <MonthsList />
      </div>
    );
  }
}

Calendar.propTypes = {
  //
};

export default Calendar;
