import { RECEIVE_ERRORS, CLEAR_AUTH_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';


const _nullError = ({});

const ErrorReducer = (state = _nullError, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      return merge({}, state, action.type);
    case CLEAR_AUTH_ERRORS:
      return _nullError;
    default:
      return state;
  }
};

export default ErrorReducer;
