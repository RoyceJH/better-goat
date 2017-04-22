import NotesShow from './notes_show';
import { connect } from 'react-redux';

import { fetchNotes } from '../../actions/note_actions';
import { arrayNotes } from '../../reducers/selectors';

const mapStateToProps = state => ({
  notes: arrayNotes(state)
});

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchNotes()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesShow);
