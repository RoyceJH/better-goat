import { RECEIVE_NOTEBOOKS, RECEIVE_NOTEBOOK, REMOVE_NOTEBOOK } from '../actions/notebook_actions';
import merge from 'lodash/merge';

const _nullNotebook = ({});

const NotebookReducer = (oldState = _nullNotebook, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_NOTEBOOKS:
      return action.notebooks;
    case RECEIVE_NOTEBOOK:
      return merge({}, oldState, action.notebook);
    case REMOVE_NOTEBOOK:
      const newState = merge({}, oldState);
      delete newState[action.notebook];
      return newState;
    default:
      return oldState;
  }
};

export default NotebookReducer;
