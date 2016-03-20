import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter';

const initialState = {
  count: 0
};

export default function counter(state = initialState, action = {}) {
  switch (action.type) {
  case INCREMENT_COUNTER:
    return { ...state, count: state.count + 1 };
  case DECREMENT_COUNTER:
    return { ...state, count:  state.count - 1 };
  default:
    return state;
  }
};
