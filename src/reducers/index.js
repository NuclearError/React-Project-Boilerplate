import { combineReducers } from 'redux';
import Months from './months';
import Data from './mock';

const rootReducer = combineReducers({
  months: Months,
  data: Data
});

export default rootReducer;
