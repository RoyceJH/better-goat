export const fetchNotes = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/notes'
  });
};

export const fetchNote = (noteId) => {
  return $.ajax({
    method: 'GET',
    url: `api/notes/${noteId}`
  });
};

export const createNote = (note) => {
  return $.ajax({
    method: 'POST',
    url: 'api/notes',
    data: {note}
  });
};

export const updateNotes = (note) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/notes/${note.id}`,
    data: {note}
  });
};

export const deleteNotes = (noteId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/notes/${noteId}`
  });
};
