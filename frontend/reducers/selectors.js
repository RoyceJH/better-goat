export const selectNotebooks = ({notebooks}) => {
  return Object.keys(notebooks).map(key => notebooks[key]);
};

export const arrayNotebookIds = ({notebooks}) => {
  return Object.keys(notebooks);
};

export const arrayNotes = ({notes}) => {
  return Object.keys(notes).map(key => notes[key]);
};

export const getNotesByNotebookId = ({notes}, notebookId) => {
  const notesByNotebook = [];
  for (var key in notes) {
    if(notes[key]['notebook_id'] === notebookId) {
      notesByNotebook.push(notes[key]);
    }
  }
  return notesByNotebook;
};

export const getTimeAgoOfNotes = ({note}) => {
  const timeElapsed = Date.now() - new Date(note.updated_at);

  const inSecs = timeElapsed / 1000;

  if(inSecs < 30) {
    return 'MOMENTS AGO';
  } else if (inSecs / 60 < 1) {
    return Math.floor(inSecs) + ' SECONDS AGO';
  }

  const inMins = inSecs / 60;

  if(inMins / 60 < 1) {
    return Math.floor(inMins) + ' MINUTES AGO';
  }

  const inHrs = inMins / 60;

  if (inHrs < 24) {
    if (Math.floor(inHrs / 60) === 1) {
      return  Math.floor(inHrs / 60) + ' HOUR AGO';
    } else {
      return Math.floor(inHrs) + ' HOURS AGO';
    }
  }
  const inDays = inHrs / 24;

  switch(Math.round(inDays)) {
    case 1:
      return '1 DAY AGO';
    case 2:
      return '2 DAYS AGO';
    case 3:
      return '3 DAYS AGO';
    case 4:
      return '4 DAYS AGO';
    case 5:
      return '5 DAYS AGO';
    case 6:
      return '6 DAYS AGO';
  }

  if(inDays < 14) {
    return 'LAST WEEK';
  }

  return new Date(note.updated_at).toDateString().toUpperCase();
};
