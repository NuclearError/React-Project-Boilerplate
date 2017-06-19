import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Month from './month';

class MonthsList extends Component {

  testData() {
      return this.props.data.map( (thing) => {
          return (
            <span>{thing.name}<br/></span>
          );
      });
  }

  renderList() {
    return this.props.months.map( (month) => {
      return (
        <Month key={month.abbr} abbr={month.abbr} />
      );
    });
  };

  render() {
    return (
        <div>
          <ul className="months-list">
            {this.renderList()}
          </ul>
          <div>
              TEST DATA:
              {this.testData()}
          </div>
        </div>
    );
  };

}

function mapStateToProps(state) {
  // Whatever is returned will show up as props inside MonthsList
  // ie. contained within 'this.props'
  return {
    months: state.months,
    data: state.data
  }
}

MonthsList.propTypes = {
  months: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(MonthsList);
