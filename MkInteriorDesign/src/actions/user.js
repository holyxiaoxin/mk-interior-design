import { get, post } from '../util/request';

export const LOGIN_WITH_FACEBOOK = 'LOGIN_WITH_FACEBOOK';
const facebookLogin = (data) => {
  return {
    type: LOGIN_WITH_FACEBOOK,
    data
  };
}

export const SHOWN_NAVBAR_HINT = 'SHOWN_NAVBAR_HINT';
const shownNavbarHint = () => {
  return {
    type: SHOWN_NAVBAR_HINT
  };
}

// TODO: Implement stubbed
const facebookLoginAsync = () => {
  return dispatch => {
    get('http://swapi.co/api/planets/1/')
    .then(data => dispatch(facebookLogin(data)));
  };
}

export default { facebookLoginAsync, shownNavbarHint };
