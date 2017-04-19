import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_AUTH_ERRORS = 'CLEAR_AUTH_ERRORS';

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const receiveLoginErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  login: errors
});

const receiveSignupErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  signup: errors
});

export const clearErrors = (errors)  => ({
  type: CLEAR_AUTH_ERRORS,
});

export const login = user => dispatch => {
  return SessionAPIUtil.login(user)
    .then( (user) => dispatch(receiveCurrentUser(user)),
           (errors) => dispatch(receiveLoginErrors(errors)));
};

export const logout = () => dispatch => {
  return SessionAPIUtil.logout()
    .then( (user) => dispatch(receiveCurrentUser(user)),
           (errors) => dispatch(receiveSignupErrors(errors)));
};

export const signup = (user) => dispatch => {
  return SessionAPIUtil.signup(user)
    .then( (user) => dispatch(receiveCurrentUser(user)),
           (errors) => dispatch(receiveErrors(errors)));
};
