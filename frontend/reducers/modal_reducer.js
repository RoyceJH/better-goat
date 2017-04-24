import { RECEIVE_MODAL, REMOVE_MODAL } from '../actions/modal_actions';
import merge from 'lodash/merge';

const _defaultModal = {
  component: {},
  active: false,
};

const ModalReducer = (oldState = _defaultModal, action) => {
  switch(action.type) {
    case RECEIVE_MODAL:
      return merge({}, oldState, {component:action.component, active: true});
    case REMOVE_MODAL:
      return merge({}, oldState, {active: false});
    default:
      return oldState;
  }
};

export default ModalReducer;
