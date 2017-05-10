import React from 'react';
import NotesIndexContainer from '../notes/notes_index_container';
import NoteEditorContainer from '../notes/note_editor_container';

class TagShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTag(this.props.tagId);
  }

  render() {
    const notes = this.props.getNotes(parseInt(this.props.tagId));
    const noteEditor = notes[0] ?
      <NoteEditorContainer
        key={notes[0].id}
        formType='edit'
        firstNote={notes[0]} />
      : "";

    return(
      <div className='tag-main'>
        <div className='tag-show'>
          <div className='tag-show-header'>
            <h3>
              {`TAG: ${this.props.tag.title.toUpperCase()}`}
            </h3>
          </div>

          <NotesIndexContainer notes={notes} />
        </div>

        <div className='home-note-editor-wrapper'>
          { noteEditor }
        </div>
      </div>
    );
  }
}

export default TagShow;
