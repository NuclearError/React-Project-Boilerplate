import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './item';

const Task = props => (
  <div className="task">
    <span className="task__title">{this.props.taskTitle}</span>
    <Item plantName={this.props.plantName}/>
  </div>
);

Task.propTypes = {
  plantName: PropTypes.string.isRequired,
  taskTitle: PropTypes.string.isRequired,
};

export default Task;
