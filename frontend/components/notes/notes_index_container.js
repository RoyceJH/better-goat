import { connect } from 'react-redux';
import NotesIndex from './notes_index';

const mapStateToProps = (state, ownProps) => {
  return {
    availableNotes: state.notes
  };
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesIndex);
