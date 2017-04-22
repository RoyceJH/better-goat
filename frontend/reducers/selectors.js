export const selectNotebooks = ({notebooks}) => {
  return Object.keys(notebooks).map(key => notebooks[key]);
};

export const arrayNotebookIds = ({notebooks}) => {
  return Object.keys(notebooks);
};

export const getNotesByNotebookId = ({notes}, notebookId) => {
  const notesByNotebook = [];
  // if(notes) { debugger }
  for (var key in notes) {
    if(notes[key]['notebook_id'] === notebookId) {
      notesByNotebook.push(notes[key]);
    }
  }
  return notesByNotebook;
};
