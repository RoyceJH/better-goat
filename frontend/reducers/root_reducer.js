import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ErrorReducer from './error_reducer';
import NotebooksReducer from './notebooks_reducer';
import NotebookReducer from './notebook_reducer';
import SlideoutReducer from './slideout_reducer';
import NotesReducer from './notes_reducer';
import ModalReducer from './modal_reducer';
import NoteReducer from './current_note_reducer';
import TagReducer from './tag_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorReducer,
  notebooks: NotebooksReducer,
  notebook: NotebookReducer,
  slideout: SlideoutReducer,
  notes: NotesReducer,
  modal: ModalReducer,
  note: NoteReducer,
  tags: TagReducer
});

export default RootReducer;
