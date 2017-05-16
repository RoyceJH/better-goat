import { connect } from 'react-redux';
import NoteEditor from './note_editor';
import { withRouter } from 'react-router';

import { fetchTags } from '../../actions/tag_actions';
import { createNote, updateNote, deleteNote, fetchNote, receiveNote, removeNote, fetchNotes } from '../../actions/note_actions';
import { receiveModal } from '../../actions/modal_actions';
import { selectNotebooks, selectTagsByNote, selectTagsByTitle } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  let note = { title: "", preview: "", body: "", tags:[] };

  if(ownProps.formType === 'edit') {
    note = state.note;
  }

  return ({
    note,
    notebooks: selectNotebooks(state),
    formType: ownProps.formType,
    tags: (noteForTags) => selectTagsByNote(state, noteForTags),
    tagsByTitle: (title) => selectTagsByTitle(state, title),
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const processForm = ownProps.formType === 'edit' ? updateNote : createNote;
  return ({
    processForm: (note) => dispatch(processForm(note)),
    deleteNote: (noteId) => dispatch(deleteNote(noteId)),
    receiveModal: (component) => dispatch(receiveModal(component)),
    receiveNote: (note) => dispatch(receiveNote(note)),
    removeNote: (note) => dispatch(removeNote(note)),
    fetchTags: () => dispatch(fetchTags()),
    fetchNotes: () => dispatch(fetchNotes()),
    fetchNote: (noteId) => dispatch(fetchNote(noteId)),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NoteEditor));
