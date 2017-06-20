import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Month from './month';

class MonthsList extends Component {

  renderList() {
    return this.props.months.map( (month) => {
      return (
        <Month key={month.abbr} abbr={month.abbr} />
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

MonthsList.propTypes = {
  months: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(MonthsList);
