import { combineReducers } from 'redux';
import counter from './counter';
import user from './user';
import browse from './browse';

const rootReducer = combineReducers({
  counter, user, browse
});

export default rootReducer;
