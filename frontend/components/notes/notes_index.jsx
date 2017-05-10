import React from 'react';
import NoteIndexItemContainer from './note_index_item_container';
import NoteEditorContainer from './note_editor_container';
import { Link } from 'react-router';

class NotesIndex extends React.Component {
  render() {

    let notes = this.props.notes.map((note, idx) => {
      return <NoteIndexItemContainer key={idx} note={note} />;
    });

    let notesCount = notes.length;
    notesCount += notesCount === 1 ? ' note' : ' notes';

    if (notes.length === 0 ) {
      notes = <div className='add-note-prompt-wrapper'>
                <div className='add-note-prompt'>
                  Click<Link
                        to={'/notes/new'}>
                        <i className="fa fa-plus-square-o" aria-hidden="true"/>
                        </Link>
                          to add a note.
                </div>
             </div>;
    }

    // <label>Options&nbsp;</label>
    // <i className="fa fa-angle-down" aria-hidden="true"></i>
    return(
      <div className='notes-index'>
        <div className='notes-index-header'>
          <span>{notesCount}</span>

          <div className='options-selector' >
          </div>
        </div>

        <div className='notes-index-list-wrapper'>
          <ul className='notes-index-list'>
            {notes}

          </ul>
        </div>
      </div>
    );
  }
}

export default NotesIndex;
