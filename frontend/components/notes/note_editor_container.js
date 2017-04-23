import { connect } from 'react-redux';
import NoteEditor from './note_editor';

const mapStateToProps = (state) => {
  return ({
    notes: state.notes
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
