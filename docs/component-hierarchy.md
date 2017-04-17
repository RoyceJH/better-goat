# Component Hierarchy

In addition to the wireframes, you should diagram a tree indicating your application's overall component structure.

Discuss how you will nest your components. If components will need containers, indicate what state and dispatch props they will need. For presentational components, discuss what props and state they will need.

Map out your React Routes with their respective components and paths.

See the sample project proposal for an example of this.


**AuthFormContainer**
- AuthForm

**HomeContainer**
- ModalFullScreen [active: false, contents: null] - For Signup and Login
- Home
- Sidebar
- ModalSlideOut [active: false, contents: null] - For NotebookContainer and TagContainer

//Two slices of state for modal? or have the bottom two as a render component

**NotesContainer**
- NotesHeader
 * NoteIndex

**NoteIndex**
- NoteIndexItem
 + NoteDetail
   + NoteTools
   - NotebookSearch
   - Tags
     - Tag
   * Note

**NotebookContainer** [Modal on HomeContainer]
- NotebookHeader
 - NotebookSearch
 + NoteIndex

**SearchResultsContainer**
- Search
- NoteIndex

**TagContainer** [Modal on HomeContainer]
- TagHeader
 - TagSearch
 + TagIndex


**TagIndex**
- TagIndexItem
 - Tag
 * NoteIndex


**NewNoteContainer**
- NewNote
 - RTETools
 - NewNoteButton

**NewNotebook**
- NewNotebook

**NewTag**
- NewTag

**NotebookSearch** - [Bonus]
+ AutoSearch
* AutoSearchResults

**TagsSearch** - [Bonus]
+ AutoSearch
* AutoSearchResults

## Routes

|Path   | Component   |
|-------|-------------|
| "/home" | "HomeContainer" |
| "/home/note/:noteId" | "NotesContainer" |
| "/home/notebook/:notebookId/note/:noteId" | "NotebookContainer" |
| "/home/tag/:tagId/note/:notedId" | "TagContainer" |
| "/home/search-results" | "SearchResultsContainer"
| "/new-note" | "NewNoteContainer" |
| "/search" | "Search" |
| "/new-notebook" | "NewNotebook" |
| "/new-tag" | "NewTag" |
| "/tag-search" | "TagSearch" |
| "/notebook-search" | "NotebookSearch" |
