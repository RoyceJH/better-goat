import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';


const _nullError = ([]);

const ErrorReducer = (state = _nullError, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return _nullError;
    default:
      return state;
  }
};

export default ErrorReducer;
