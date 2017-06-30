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
        <li className={`task task--${taskClass}`}>
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
      .map(item => <Task variety={item.variety} name={item.name} />);
  };

  //  Refactor tasks below to loop through a reducer list
  render() {
    return (
      <ul className="task-container">
        {this.renderTask("Sow Indoors")}
        {this.renderTask("Sow Outside")}
        {this.renderTask("Plant Outside")}
        {this.renderTask("Harvest")}
      </ul>
    );
  };

}

function mapStateToProps(state) {
  // Whatever is returned will show up as props inside TaskGroup
  // ie. contained within 'this.props'
  return {
    data: state.data
  }
}

TaskGroup.propTypes = {
  thisMonth: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(TaskGroup);
