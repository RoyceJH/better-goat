import { RECEIVE_NOTE, REMOVE_NOTE, REMOVE_CURRENT_NOTE } from '../actions/note_actions';

const _defaultState = {};

const NoteReducer = (oldState = _defaultState, action) => {
  switch(action.type) {
    case RECEIVE_NOTE:
      return action.note;
    case REMOVE_NOTE:
      if(action.note.id === oldState.id) {
        return {};
      } else {
        return oldState;
      }
    case REMOVE_CURRENT_NOTE:
      return {};
    default:
      return oldState;
  }
};

export default NoteReducer;
