import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TaskGroup from './task-group';

const Month = (props) => {

  const clickHandler = (event) => {
    event.preventDefault();
    props.onMonthSelect(props.name);
  };

  return (
    <li key={props.key} className='months-list__item'>
      <div className='months-list-item__label-container'>
        <span
          className='months-list-item__label'
          onClick={event => clickHandler(event)}
        >
          {props.abbr}
        </span>
      </div>
      <div className='months-list-item__task-container'>
        <TaskGroup thisMonth={props.abbr} />
      </div>
    </li>
  );
};

Month.defaultProps = {
  key: ''
};

Month.propTypes = {
  key: PropTypes.string,
  abbr: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onMonthSelect: PropTypes.func.isRequired
};

export default Month;
