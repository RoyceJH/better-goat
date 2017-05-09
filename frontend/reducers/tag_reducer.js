import { RECEIVE_TAGS, RECEIVE_TAG, REMOVE_TAG } from '../actions/tag_actions';
import merge from 'lodash/merge';

const _defaultState = {};

const TagReducer = (oldState = _defaultState, action) => {
  switch(action.type) {
    case RECEIVE_TAGS:
      return action.tags;
    case RECEIVE_TAG:
      const newTag = action.tag;
      return merge({}, oldState, {[newTag.id]: newTag});
    case REMOVE_TAG:
      const newState = merge({}, oldState);
      delete newState[action.tag.id];
      return newState;
    default:
      return oldState;
  }
};

export default TagReducer;
