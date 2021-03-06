import React from 'react';
import NotesIndexContainer from './notes_index_container';
import NoteEditorContainer from './note_editor_container';

class NotesShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const notes = this.props.notes;
    let notesCount = notes.length;
    notesCount += (notesCount === 1) ? ' note' : ' notes';

    const noteEditor = notes[0] ? <NoteEditorContainer key={notes[0].id} formType='edit' firstNote={notes[0]} /> : "";

    return(
      <div className='notes-main' >

        <div className='notes-show'>
          <div className='notes-show-header'>
            <h3>
              NOTES
            </h3>
          </div>

          <NotesIndexContainer notes={this.props.notes} />
        </div>

        <div className='home-note-editor-wrapper'>
          { noteEditor }
        </div>

      </div>
    );
  }
}

export default NotesShow;
