import {
  RECEIVE_NOTEBOOKS, RECEIVE_NOTEBOOK, REMOVE_NOTEBOOK
} from '../actions/notebook_actions';
import merge from 'lodash/merge';

const _nullNotebook = ({});

const NotebooksReducer = (oldState = _nullNotebook, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_NOTEBOOKS:
      return action.notebooks;
    case RECEIVE_NOTEBOOK:
      const notebook = action.notebook;
      return merge({}, oldState, {[notebook.id]:notebook});
    case REMOVE_NOTEBOOK:
      const newState = merge({}, oldState);
      delete newState[action.notebook.id];
      return newState;
    default:
      return oldState;
  }
};

export default NotebooksReducer;
