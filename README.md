# BetterGoat

[BetterGoat live](https://bettergoat.herokuapp.com/)
* Please note the live site is currently on Heroku Hobby Dynos, so please allow a couple seconds for BetterGoat to get up and running *

BetterGoat is a full-stack web application inspired by Evernote. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.

![screenshot](http://imgur.com/zG2V9op.png)

## Features & Implementation

### User Auth
Users are stored in the database with the columns: `username`, `password_digest`, and `session_token`.

Upon sign up of a new user, after meeting necessary validations for the user's `password`, the `password` is 'salted' and the resulting hash is stored in the database.

Upon login of a user, the `password` entered is salted based on the salt, preconfigured algorithm, and number of iterations of salt functions applied. The resulting hash is then compared to the `password_digest` stored in the database to validate the user's credentials.


### Notes
Notes are stored in the database with the following columns: `id`, `author_id`, `title`, `body`, `preview`, `notebook_id`, and the timestamps `created_at` and `updated_at`.

Upon login, an AJAX API request is made to the database to receive all notes for the current `user_id`. The notes received from the database is stored in the store.

Notes are rendered through two components, the `NotesIndexContainer` and the `NoteEditor`. The `NotesIndexContainer` shows an index of individual notes based on the current show page and their `previews`.

![screenshot](http://i.imgur.com/lgkfrQK.gif)

By default, the most recently updated note is selected when the `componentDidMount` and held in the current note slice of state or a blank note is rendered depending on whether a note is shown for update or create. Upon selection of another note, an action is dispatched to replace the current note. This current note is available for editing and updating with various text manipulation tools through the use of Quill.js library within the `NoteEditor` component.

```javascript
componentDidMount() {
  if(!this.props.formType) {
    this.setState({ title: "", preview: "", body: "" });
  } else {
    this.props.receiveNote(this.props.firstNote);
  }
}
```

### Notebooks
Notebooks are stored in the database with the columns: `title`, `author_id`, and `default`. Each user is assigned a default notebook when signing up. Notes can change the Notebook they belong to through the use of a dropdown, which has selected the current notebook of the note. When creating a new note, the default Notebook for each user is selected.

![screenshot](http://imgur.com/7EdZZbi.png)

When rendering the `NotebookShow` component, the `NotesIndex` component is rendered only including the notes belonging to a specific notebook through the route `/home/notebook/:notebookId`. Again, the most recently updated note belonging to the notebook is updated to the current note slice of state.

```javascript
export const getNotesByNotebookId = ({notes}, notebookId) => {
  const notesByNotebook = [];
  for (let key in notes) {
    if(notes[key]['notebook_id'] === notebookId) {
      notesByNotebook.push(notes[key]);
    }
  }
  return notesByNotebook.sort(compare);
};
```

### Tags
Tags are stored in the database with the columns: `title`, `author_id`. Tags are unique to each user. Using the `taggings` join table, there is a many-to-many relationship between `notes` and `tags`.

Each note that is fetched from the database using an `API` call has a collection of `tag_ids`. Using the `tag_ids`, the tags associated for each `note` is extracted from the `tags` slice of state to be display on the `NoteEditor`.

![screenshot](http://imgur.com/JI9WzZt.gif)


## Future Directions for the Project

### Search

### Work Chat
