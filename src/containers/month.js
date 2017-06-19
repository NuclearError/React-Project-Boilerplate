import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TaskGroup from './task-group';

const Month = props => (
  <li
    key={props.abbr}
    className='months-list__item'
  >
    <div className='months-list-item__label-container'>
      <span
        className='months-list-item__label'
        onClick={() => this.props.onMonthSelect}
      >
        {props.abbr}
      </span>
    </div>
    <div className='months-list-item__content-container'>
        {/* 
      <TaskGroup taskTitle={this.props.taskTitle} plantName={this.props.plantName} />
      */ }
    </div>
  </li>
);

Month.defaultProps = {
  plantName: 'Peas',
  taskTitle: 'Sow Indoors',
  onMonthSelect: () => {}
};

Month.propTypes = {
  plantName: PropTypes.string,
  taskTitle: PropTypes.string,
  onMonthSelect: PropTypes.func,
};

export default Month;
