import { combineReducers } from 'redux';
import Months from './months';
//import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  months: Months,
});

export default rootReducer;
