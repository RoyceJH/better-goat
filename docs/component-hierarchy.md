# Component Hierarchy

**SplashContainer**
- SplashHeader
- SplashMain

**AuthFormContainer**
- AuthForm

**HomeContainer**
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

**NotebookIndexContainer** [Modal on HomeContainer]
- NotebookSearch
+ NotebookIndexItem

**NotebookShowContainer**
- NotebookHeader
  + NoteIndex

**SearchResultsContainer**
- Search
- NoteIndex

**TagIndexContainer** [Modal on HomeContainer]
- TagSearch
+ TagIndex

**TagShowContainer**
- TagHeader
+ NoteIndex

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
| "/join" | "SplashContainer" |
| "/signin" | "AuthFormContainer" |
| "/login" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/note/:noteId" | "NotesContainer" |
| "/home/notebook" | "NotebookIndexContainer" |
| "/home/notebook/:notebookId" | "NotebookShowContainer" |
| "/home/notebook/:notebookId/note/:noteId" | "NotebookShowContainer" |
| "/home/tag | "TagIndexContainer" |
| "/home/tag/:tagId" | "TagShowContainer" |
| "/home/tag/:tagId/note/:notedId" | "TagShowContainer" |
| "/home/search-results" | "SearchResultsContainer"
| "/new-note" | "NewNoteContainer" |
| "/search" | "Search" |
| "/new-notebook" | "NewNotebook" |
| "/new-tag" | "NewTag" |
| "/tag-search" | "TagSearch" |
| "/notebook-search" | "NotebookSearch" |
