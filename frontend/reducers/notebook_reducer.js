import { RECEIVE_NOTEBOOK } from '../actions/notebook_actions';

const NotebookReducer = (oldState = {}, action) => {
  switch(action.type) {
    case RECEIVE_NOTEBOOK:
      return action.notebook;
    default:
      return oldState;
  }
};

export default NotebookReducer;
