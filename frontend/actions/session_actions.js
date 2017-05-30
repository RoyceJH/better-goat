import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = (errors)  => ({
  type: CLEAR_ERRORS,
});

export const login = user => dispatch => {
  return SessionAPIUtil.login(user)
    .then( (user) => dispatch(receiveCurrentUser(user)),
           (errors) => dispatch(receiveErrors(errors.responseJSON)));
};

export const logout = () => dispatch => {
  return SessionAPIUtil.logout()
    .then( () => dispatch(receiveCurrentUser({})));
};

export const signup = (user) => dispatch => {
  return SessionAPIUtil.signup(user)
    .then( (user) => dispatch(receiveCurrentUser(user)),
           (errors) => dispatch(receiveErrors(errors.responseJSON)));
};

export const updateUser = user => dispatch => {
  return SessionAPIUtil.updateProfile(user)
    .then((updatedUser) =>  {
      debugger
      dispatch(receiveCurrentUser(updatedUser));
    });
};
