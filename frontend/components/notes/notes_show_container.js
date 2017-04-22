import NotesShow from './notes_show';
import { connect } from 'react-redux';

import { fetchNotes } from '../../actions/note_actions';

const mapStateToProps = state => ({
  notes: state.notes
});

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchNotes()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesShow);
