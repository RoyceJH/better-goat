import { connect } from 'react-redux';

import NoteIndexItem from './note_index_item';

import { getTimeAgoOfNotes } from '../../reducers/selectors';
import { fetchNote } from '../../actions/note_actions';

const mapStateToProps = (state, ownProps) => {
  return{
    timeAgo: getTimeAgoOfNotes(ownProps),
  };
};

const mapDispatchToProps = dispatch => ({
  fetchNote: (noteId) => dispatch(fetchNote(noteId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteIndexItem);
