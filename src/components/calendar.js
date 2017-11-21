import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MonthsList from '../containers/months-list';

class Calendar extends Component {

  openMonthView(month) {
    console.log("Specific month clicked! ==> " + month);
  }

  render() {
    return (
      <div className='calendar'>
        <MonthsList onMonthSelect={this.openMonthView} />
      </div>
    );
  }
}

Calendar.propTypes = {
  //
};

export default Calendar;
