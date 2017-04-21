export const CHANGE_SLIDEOUT = 'CHANGE_SLIDEOUT';
export const REMOVE_SLIDEOUT = 'REMOVE_SLIDEOUT';

export const slideoutNotebook = () => ({
  type: CHANGE_SLIDEOUT,
  slideout: 'notebook'
});

export const slideoutTag = () => ({
  type: CHANGE_SLIDEOUT,
  slideout: 'tags'
});

export const removeSlideout = () => ({
  type: REMOVE_SLIDEOUT
});
