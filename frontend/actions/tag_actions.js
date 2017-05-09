import * as TagAPIUtil from '../util/tag_api_util';

export const RECEIVE_TAGS = 'RECEIVE_TAGS';
export const RECEIVE_TAG = 'RECEIVE_TAG';
export const REMOVE_TAG = 'REMOVE_TAG';

const receiveTags = (tags) => ({
  type: RECEIVE_TAGS,
  tags
});

const receiveTag = (tag) => ({
  type: RECEIVE_TAG,
  tag
});

const removeTag = (tag) => ({
  type: REMOVE_TAG,
  tag
});

export const fetchTags = () => dispatch => {
  return TagAPIUtil.fetchTags()
    .then((tags) => dispatch(receiveTags(tags)));
};

export const fetchTag = (tagId) => dispatch => {
  return TagAPIUtil.fetchTag(tagId)
    .then((tag) => dispatch(receiveTag(tag)));
};

export const createTag = (tag) => dispatch => {
  return TagAPIUtil.createTag(tag)
    .then((tag) => dispatch(receiveTag(tag)));
};

export const updateTag = (tag) => dispatch => {
  return TagAPIUtil.updateTag(tag)
    .then((tag) => dispatch(updateTag(tag)));
};

export const destroyTag = (tagId) => dispatch => {
  return TagAPIUtil.destroyTag(tagId)
    .then((tag) => dispatch(removeTag(tag)));
};
