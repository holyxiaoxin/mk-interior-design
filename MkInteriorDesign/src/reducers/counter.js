import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  count: 0
});

export default function counter(state = initialState, action = {}) {
  switch (action.type) {
  case INCREMENT_COUNTER: {
    const count = state.get('count');
    return state.set('count', count + 1);
  }
  case DECREMENT_COUNTER: {
    const count = state.get('count');
    return state.set('count', count - 1);
  }
  default:
    return state;
  }
};
