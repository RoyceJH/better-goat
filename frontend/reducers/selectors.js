export const selectNotebooks = ({notebooks}) => {
  return Object.keys(notebooks).map(key => notebooks[key]);
};

export const arrayNotebookIds = ({notebooks}) => {
  return Object.keys(notebooks);
};

export const notebookNotes = ({notes}, notebookId) => {
  //select notes here array please
  return [];
};
