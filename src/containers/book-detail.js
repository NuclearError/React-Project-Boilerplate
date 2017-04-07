import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {

    if (!this.props.book) {
      return <div className='book-detail'>Please select a book.</div>;
    }

    return (
      <div className='book-detail'>
        <p>Book chosen: { this.props.book.title }</p>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);
