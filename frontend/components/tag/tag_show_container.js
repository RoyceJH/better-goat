import TagShow from './tag_show';
import { connect } from 'react-redux';
import { getNotesByTagId } from '../../reducers/selectors';
import { fetchTag } from '../../actions/tag_actions';
import { receiveNote, removeCurrentNote } from '../../actions/note_actions';

const mapStateToProps = (state, ownProps) => {
  let tag = state.tags[ownProps.params.tagId] || { title: ""};
  return {
    tagId: ownProps.params.tagId,
    tag,
    getNotes: (tagId) => getNotesByTagId(state, tagId),
  };
};

const mapDispatchToProps = dispatch => ({
  fetchTag: (tagId) => dispatch(fetchTag(tagId)),
  receiveNote: (note) => dispatch(receiveNote(note)),
  removeCurrentNote: () => dispatch(removeCurrentNote())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagShow);
