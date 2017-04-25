import { connect } from 'react-redux';
import NoteEditor from './note_editor';

const mapStateToProps = (state, ownProps) => {
  let note = {title:"", body:""};
  if(ownProps.params) {
    note = state.notes[ownProps.params.noteId];
  }
  return ({
    note: note
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({

  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteEditor);
