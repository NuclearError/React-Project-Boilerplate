import React, { Component } from 'react';

import Calendar from './calendar';
//import BookDetail from '../containers/book-detail';

export default class App extends Component {
/*
  constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};
	};
*/

  render() {
    return (
      <div className='hello'>
        <h1>Kynareth</h1>
        <Calendar />
      </div>
      /*
      <section className='book-list__container'>
        <BookList />
        <BookDetail />
      </section>
      */
    );
  }

}
