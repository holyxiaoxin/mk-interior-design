import { LOGIN_WITH_FACEBOOK, SHOWN_NAVBAR_HINT } from '../actions/user';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  showNavbarHint: true // mock first time log in
});

export default function user(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN_WITH_FACEBOOK: {
      // TODO: Implement stubbed and remove log
      return state;
    }
    case SHOWN_NAVBAR_HINT: {
      console.log('setting');
      return state.set('showNavbarHint', false);
    }
    default:
      return state;
  }
};
