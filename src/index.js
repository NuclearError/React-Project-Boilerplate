import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import Reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(Reducers)}>
    <App />
  </Provider>
  , document.querySelector('.kynareth'));

//ReactDOM.render( <App />, document.querySelector('.container') );
