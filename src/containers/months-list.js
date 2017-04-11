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
          <div className='months-list-item__label-container'>
            <span
              className='months-list-item__label'
              onClick={() => onMonthSelect}
            >
              {month.abbr}
            </span>
          </div>
          <div className='months-list-item__content-container'>
            Even in the tiniest garden,
            it's possible to grow a wide range of plants.
          </div>

        </li>
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

// Promote MonthsList from a component to a container -
// it needs to know about the new dispatch method, selectBook.
// It needs to be available as a prop.
export default connect(mapStateToProps)(MonthsList);
