import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TaskGroup from './task-group';

const Month = props => (
  <li key={props.abbr} className='months-list__item'>
    <div className='months-list-item__label-container'>
      <span className='months-list-item__label' onClick={() => this.props.onMonthSelect}>
        {props.abbr}
      </span>
    </div>
    <div className='months-list-item__task-container'>
      <TaskGroup thisMonth={props.abbr} />
    </div>
  </li>
);

Month.defaultProps = {
  onMonthSelect: () => {}
};

Month.propTypes = {
  onMonthSelect: PropTypes.func
};

export default Month;
