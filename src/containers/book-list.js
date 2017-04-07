import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

  renderList() {
    return this.props.books.map( (book) => {
      return (
        <li
          key={book.title}
          onClick={ () => this.props.selectBook(book) }
          className='book-list__item list-group-item'
        >
          {book.title}
        </li>
      );
    });
  };

  render() {
    return (
      <ul className='book-list__list list-group'>
        {this.renderList()}
      </ul>
    );
  };

}

function mapStateToProps(state) {
  // Whatever is returned will show up as props inside BookList
  // ie. contained within 'this.props'
  return {
    books: state.books
  }
}

// Anything returned from this function will end up as
// props on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be
  // passed to all of the reducers.
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from a component to a container -
// it needs to know about the new dispatch method, selectBook.
// It needs to be available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

// {this.renderList()}
