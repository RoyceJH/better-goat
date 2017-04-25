import { RECEIVE_NOTES, RECEIVE_NOTE, REMOVE_NOTE } from '../actions/note_actions';
import merge from 'lodash/merge';

const NotesReducer = (oldState = {}, action) => {
  switch(action.type) {
    case RECEIVE_NOTES:
      return action.notes;
    case RECEIVE_NOTE:
      return merge({}, oldState, {[action.note.id]: action.note});
    case REMOVE_NOTE:
      const newState = merge({}, oldState);
      delete newState[action.note.id];
      return newState;
    default:
      return oldState;
  }
};

export default NotesReducer;
