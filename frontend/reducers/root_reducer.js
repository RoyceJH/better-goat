import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ErrorReducer from './error_reducer';
import NotebookReducer from './notebook_reducer';
import SlideoutReducer from './slideout_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorReducer,
  notebooks: NotebookReducer,
  slideout: SlideoutReducer
});

export default RootReducer;
