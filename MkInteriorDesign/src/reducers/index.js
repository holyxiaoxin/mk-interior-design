import { combineReducers } from 'redux';
import counter from './counter';
import util from './util';

const rootReducer = combineReducers({
  counter, util
});

export default rootReducer;
