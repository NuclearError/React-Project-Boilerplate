import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Task = props => (
  <li key={`task-item-${props.name}`} className="task__item">
    {props.variety ?
      <span className="task__item-variety">{props.variety} </span>
      :
      ''
    }
    <span className="task__item-name">{props.name}</span>
  </li>
);

Task.defaultProps = {
  variety: ''
};

Task.propTypes = {
  variety: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Task;
