import React, { Component } from 'react';

import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';

export default class App extends Component {
  render() {
    return (
      <section className='book-list__container'>
        <BookList />
        <BookDetail />
      </section>
    );
  }
}
