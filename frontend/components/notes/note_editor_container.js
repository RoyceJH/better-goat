import { connect } from 'react-redux';
import NoteEditor from './note_editor';
import { withRouter } from 'react-router';

import { createNote, updateNote, deleteNote, fetchNote, receiveNote, removeCurrentNote } from '../../actions/note_actions';
import { receiveModal } from '../../actions/modal_actions';
import { selectNotebooks } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  let note = { title: "", preview: "", body: "" };


  if(ownProps.formType === 'edit') {
    note = state.note;
  }

  return ({
    note,
    notebooks: selectNotebooks(state),
    formType: ownProps.formType,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const processForm = ownProps.formType === 'edit' ? updateNote : createNote;
  return ({
    fetchNote: (noteId) => dispatch(fetchNote(noteId)),
    processForm: (note) => dispatch(processForm(note)),
    deleteNote: (noteId) => dispatch(deleteNote(noteId)),
    receiveModal: (component) => dispatch(receiveModal(component)),
    receiveNote: (note) => dispatch(receiveNote(note)),
    removeCurrentNote: () => dispatch(removeCurrentNote()),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NoteEditor));
