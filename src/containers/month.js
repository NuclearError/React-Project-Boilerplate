import React, { Component } from 'react';

const Month = props => (
  <li
    key={props.abbr}
    className='months-list__item'
  >
    <div className='months-list-item__label-container'>
      <span
        className='months-list-item__label'
        onClick={() => onMonthSelect}
      >
        {props.abbr}
      </span>
    </div>
    <div className='months-list-item__content-container'>
      <p>{props.abbr}</p>
    </div>
  </li>
);

export default Month;
