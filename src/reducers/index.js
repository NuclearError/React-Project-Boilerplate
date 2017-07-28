import { combineReducers } from 'redux';
import Months from './months';
import TaskTypes from './task-types';
import Data from './mock';

const rootReducer = combineReducers({
  months: Months,
  taskTypes: TaskTypes,
  data: Data
});

export default rootReducer;
