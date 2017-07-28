import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Task from '../components/task';

class TaskGroup extends Component {
  constructor(props) {
    super(props);
    this.checkAgainstMonthAndType = this.checkAgainstMonthAndType.bind(this);
    this.taskTypeIsUsed = this.taskTypeIsUsed.bind(this);
    this.taskHasItems = this.taskHasItems.bind(this);
    this.renderTaskGroup = this.renderTaskGroup.bind(this);
    this.renderTask = this.renderTask.bind(this);
    this.renderTaskItems = this.renderTaskItems.bind(this);
  }

  checkAgainstMonthAndType(list, givenMonth, givenType) {
    return list.some(item => item.month === givenMonth && item.type === givenType);
  }

  taskTypeIsUsed(list, givenMonth, givenType) {
    return list.some(item => this.checkAgainstMonthAndType(item.tasks, givenMonth, givenType));
  };

  taskHasItems(list, givenMonth, givenType) {
    return this.checkAgainstMonthAndType(list, givenMonth, givenType);
  };

  renderTaskGroup(tasks) {
    // tasks.map(task => task.name).forEach(this.renderTask);
    const taskNames = tasks.map(task => task.name);
    // taskNames.forEach(taskName => this.renderTask(taskName));
    console.log("taskNames = " + taskNames + "; typeof = " + typeof(taskNames) + "; taskNames[0] = " + taskNames[0] + "; typeof = " + typeof(taskNames[0]))
    taskNames.forEach(taskName => this.renderTask(`"${taskName}"`));
  };

  renderTask(taskType) {
    const taskClass = taskType.toLowerCase().replace(" ", "-");

    if( this.taskTypeIsUsed(this.props.data, this.props.thisMonth, taskType) ) {
      return (
        <li key={`key-${taskClass}`} className={`task task--${taskClass}`}>
          <h3 className={`task__title task__title--${taskClass}`}>{taskType}</h3>
          <ul className="task__item-list">
            {this.renderTaskItems(taskType)}
          </ul>
        </li>
      );
    }
  };

  renderTaskItems(taskType) {
    return this.props.data
      .filter(item => this.taskHasItems(item.tasks, this.props.thisMonth, taskType))
      .map(item => <Task key={`task-${item.name}`} variety={item.variety} name={item.name} />);
  };

  render() {
    return (
      <ul className="task-container">
        {this.renderTaskGroup(this.props.taskTypes) /* THIS DOESN'T WORK */}
        {/* {this.renderTask("Sow Indoors")}  // THIS STILL WORKS */}
      </ul>
    );
  };

}

function mapStateToProps(state) {
  // Whatever is returned will show up as props inside TaskGroup
  // ie. contained within 'this.props'
  return {
    taskTypes: state.taskTypes,
    data: state.data
  }
}

TaskGroup.propTypes = {
  thisMonth: PropTypes.string.isRequired,
  taskTypes: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(TaskGroup);
