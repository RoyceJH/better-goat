import { connect } from 'react-redux';
import NoteEditor from './note_editor';
import { withRouter } from 'react-router';

import { createNote, updateNote, deleteNote, fetchNote, receiveNote } from '../../actions/note_actions';
import { receiveModal } from '../../actions/modal_actions';
import { selectNotebooks } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  let note = state.note || {title:"", body:"", preview: ""};

  //janky code start(does not work)
    //tag Id here once tags implemented
// let
  //janky code end
  return ({
    note,
    notebooks: selectNotebooks(state),
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchNote: (noteId) => dispatch(fetchNote(noteId)),
    createNote: (note) => dispatch(createNote(note)),
    updateNote: (note) => dispatch(updateNote(note)),
    deleteNote: (noteId) => dispatch(deleteNote(noteId)),
    receiveModal: (component) => dispatch(receiveModal(component)),
    receiveNote: (note) => dispatch(receiveNote(note)),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NoteEditor));
