import * as NotebookAPIUtil from '../util/notebook_api_util';

export const RECEIVE_NOTEBOOKS = 'RECEIVE_NOTEBOOKS';
export const RECEIVE_NOTEBOOK = 'RECEIVE_NOTEBOOK';
export const REMOVE_NOTEBOOK = 'REMOVE_NOTEBOOK';

const receiveNotebooks = (notebooks) => ({
  type: RECEIVE_NOTEBOOKS,
  notebooks
});

const receiveNotebook = (notebook) => ({
  type: RECEIVE_NOTEBOOK,
  notebook
});

const removeNotebook = (notebook) => ({
  type: REMOVE_NOTEBOOK,
  notebook
});


export const fetchNotebooks = () => dispatch => {
  return NotebookAPIUtil.fetchNotebooks()
    .then( (notebooks) => dispatch(receiveNotebooks(notebooks)) );
};

export const fetchNotebook = (notebookId) => dispatch => {
  return NotebookAPIUtil.fetchNotebook(notebookId)
    .then( (notebook) => dispatch(receiveNotebook(notebook)) );
};

export const createNotebook = (notebook) => dispatch => {
  return NotebookAPIUtil.createNotebook(notebook)
    .then( (notebookSaved) => dispatch(receiveNotebook(notebookSaved)) );
};

export const updateNotebook = (notebook) => dispatch => {
  return NotebookAPIUtil.updateNotebook(notebook)
    .then( (notebookUpdated) => dispatch(receiveNotebook(notebookUpdated)) );
};

export const deleteNotebook = (notebookId) => dispatch => {
  return NotebookAPIUtil.deleteNotebook(notebookId)
    .then( (notebook) => dispatch(removeNotebook(notebook)) );
};
