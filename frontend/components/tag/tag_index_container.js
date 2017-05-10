import { connect } from 'react-redux';
import {
  fetchTags,
  fetchTag,
  createTag,
} from '../../actions/tag_actions';
import { receiveModal } from '../../actions/modal_actions';
import { selectTags, getNotesByTagId } from '../../reducers/selectors';
import TagIndex from './tag_index';

const mapStateToProps = (state) => {
  const slideout = state.slideout === 'tag' ? true : false;
  return {
    tags: selectTags(state),
    slideout,
    notes: (tagId) => getNotesByTagId(state, tagId)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchTags: () => dispatch(fetchTags()),
  fetchTag: (tagId) => dispatch(fetchTag(tagId)),
  createTag: (tag) => dispatch(createTag(tag)),
  receiveModal: (component) => dispatch(receiveModal(component)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagIndex);
