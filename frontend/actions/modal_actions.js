export const RECEIVE_MODAL = 'RECEIVE_MODAL';
export const REMOVE_MODAL = 'REMOVE_MODAL';

export const receiveModal = (component) => ({
  type: RECEIVE_MODAL,
  component
});

export const removeModal = () => ({
  type: REMOVE_MODAL
});
