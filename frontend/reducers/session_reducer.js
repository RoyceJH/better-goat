import { RECEIVE_CURRENT_USER, RECEIVE_AUTH_ERRORS } from '../actions/session_actions';
//RECEIVE_AUTH_ERRORS HANDLED ELSEWHERE?
import merge from 'lodash/merge';

const _nullUser = ({

});

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return action.user;
    default:
      return state;
  }
};

export default SessionReducer;
