import { connect } from 'react-redux';
import NoteEditor from './note_editor';

import { createNote, updateNote, deleteNote, fetchNote } from '../../actions/note_actions';

const mapStateToProps = (state, ownProps) => {
  let note = {title:"", body:"", preview: ""};
  if(state.note) {
    note = state.note;
  }
  return ({
    note
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchNote: (noteId) => dispatch(fetchNote(noteId)),
    createNote: (note) => dispatch(createNote(note)),
    updateNote: (note) => dispatch(updateNote(note)),
    deleteNote: (noteId) => dispatch(deleteNote(noteId)),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteEditor);
