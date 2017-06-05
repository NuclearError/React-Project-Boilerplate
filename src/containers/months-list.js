import React, { Component } from 'react';
import { connect } from 'react-redux';
import Month from './month'

class MonthsList extends Component {

  renderList() {
    return this.props.months.map( (month) => {
      return (
        <Month abbr={month.abbr} />
      );
    });
  };

  render() {
    return (
      <ul className="months-list">
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

export default connect(mapStateToProps)(MonthsList);
