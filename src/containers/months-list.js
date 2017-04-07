import React, { Component } from 'react';
import { connect } from 'react-redux';

class MonthsList extends Component {

  renderList() {
    return this.props.months.map( (month) => {
      return (
        <li
          key={month.abbr}
          className='months-list__item'
        >
          {month.name}
        </li>
      );
    });
  };

  render() {
    return (
      <ul className="calendar__months-list">
        {this.renderList()}
      </ul>
    );
  };

}

function mapStateToProps(state) {
  // Whatever is returned will show up as props inside MonthsList
  // ie. contained within 'this.props'
  return {
    months: state.months
  }
}

// Promote MonthsList from a component to a container -
// it needs to know about the new dispatch method, selectBook.
// It needs to be available as a prop.
export default connect(mapStateToProps)(MonthsList);
