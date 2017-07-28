import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Task from '../components/task';

class TaskGroup extends Component {

  checkAgainstMonthAndType(list, givenMonth, givenType) {
    return list.some(item => item.month === givenMonth && item.type === givenType);
  }

  taskTypeIsUsed(list, givenMonth, givenType) {
    return list.some(item => this.checkAgainstMonthAndType(item.tasks, givenMonth, givenType));
  };

  taskHasItems(list, givenMonth, givenType) {
    return this.checkAgainstMonthAndType(list, givenMonth, givenType);
  };

  renderTask(taskType) {
    const taskClass = taskType.toLowerCase().replace(" ", "-");

    if(this.taskTypeIsUsed(this.props.data, this.props.thisMonth, taskType)) {
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

  renderTaskGroup(tasks) {
    tasks.forEach(task =>
      this.renderTask( task.name )
    );
  }

  //  TODO: Refactor tasks below to loop through a reducer list
  render() {
    return (
      <ul className="task-container">
        {/* {this.renderTask("Sow Indoors")}
        {this.renderTask("Sow Outside")}
        {this.renderTask("Plant Outside")}
        {this.renderTask("Harvest")} */}
        {this.renderTaskGroup(this.props.taskTypes)}
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
