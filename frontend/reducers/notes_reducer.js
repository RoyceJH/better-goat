import { RECEIVE_NOTES, RECEIVE_NOTE, REMOVE_NOTE } from '../actions/note_actions';
import merge from 'lodash/merge';

const NotesReducer = (oldState = {}, action) => {
  switch(action.type) {
    case RECEIVE_NOTES:
      return action.notes;
    case RECEIVE_NOTE:
      const tempState = merge({}, oldState);
      delete tempState[action.note.id];
      tempState[action.note.id] = action.note;
      return tempState;
    case REMOVE_NOTE:
      const newState = merge({}, oldState);
      delete newState[action.note.id];
      return newState;
    default:
      return oldState;
  }
};

export default NotesReducer;
