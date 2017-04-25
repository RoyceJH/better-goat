import { RECEIVE_NOTE, REMOVE_NOTE } from '../actions/note_actions';

const _defaultState = {};

const NoteReducer = (oldState = _defaultState, action) => {
  switch(action.type) {
    case RECEIVE_NOTE:
      return action.note;
    case REMOVE_NOTE:
      return {};
    default:
      return oldState;
  }
};

export default NoteReducer;
