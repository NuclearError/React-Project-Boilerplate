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
            <h3 className='months-list-item__label'>
              {month.abbr}
            </h3>
          </div>
          <div className='months-list-item__content-container'>
            A small garden needn't mean small ambitions. Even in the tiniest garden,
            it's possible to grow a wide range of plants - even trees - and create a
            beautiful outdoor space that you can enjoy all year round. 
          </div>

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
