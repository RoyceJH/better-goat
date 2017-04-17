# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users` - creates users

### Session

- `POST /api/session` - logs in user / creates session
- `DELETE /api/session` - logs out user

### Notes

- `GET /api/notes` - fetches all notes for user id
- `POST /api/notes` - create note
- `GET /api/notes/:noteId` - fetch note by id
- `PATCH /api/notes/:noteId` - edit/update note (on change as bonus)
- `DELETE /api/notes/:noteId` - deletes note by id
- `GET /api/notes/:noteId/tags` - gets all tags through the association for a note

### Notebooks

- `GET /api/notebooks` - fetches all notebooks for a user
- `POST /api/notebooks` - create notebook
- `GET /api/notebooks/:notebookId` - fetch notebook
- `PATCH /api/notebooks/:notebookId` - edit/update notebook
- `DELETE /api/notebooks/:notebookId` - deletes notebook
- `GET /api/notebooks/:notebookId/notes` - fetches all notes for a notebook

### Tags

- `GET /api/tags` - fetches all tags, with a tally of how many notes under each tag
- `POST /api/notes/:noteId/tags` - creates a tag through a note, adds tags to tags db and adds taggings
- `DELETE /api/notes/:noteId/tags/:tag_id` - remove tag from note, destroys tagging association

### Questions
- Will created tags persist forever? Delete tag from db if tags.count is 0?
