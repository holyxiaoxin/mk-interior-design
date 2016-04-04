import { LOGIN_WITH_FACEBOOK } from '../actions/user';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({});

export default function user(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN_WITH_FACEBOOK: {
      // TODO: Implement stubbed and remove log
      return state;
    }
    default:
      return state;
  }
};
