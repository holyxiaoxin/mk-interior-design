import { SET_INITIAL_RENDER } from '../actions/util';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  initialRender: false
});

export default function counter(state = initialState, action = {}) {
  switch (action.type) {
  case SET_INITIAL_RENDER: {
    const count = state.get('initialRender');
    return state.set('initialRender', true);
  }
  default:
    return state;
  }
};
