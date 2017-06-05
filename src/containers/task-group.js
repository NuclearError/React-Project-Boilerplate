import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from '../components/item';

const TaskGroup = props => (
  <div className="task-group">
    <span className="task-group__title">{this.props.taskTitle}</span>
    <Item plantName={this.props.plantName}/>
  </div>
);

TaskGroup.propTypes = {
  plantName: PropTypes.string.isRequired,
  taskTitle: PropTypes.string.isRequired,
};


export default TaskGroup;
