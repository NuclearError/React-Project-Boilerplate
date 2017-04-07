import { combineReducers } from 'redux';
import Months from './months';

const rootReducer = combineReducers({
  months: Months
});

export default rootReducer;
