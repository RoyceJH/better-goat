import React from 'react';
import NoteIndexItemContainer from './note_index_item_container';

class NotesIndex extends React.Component {
  render() {
    const notes = this.props.notes.map((note, idx) => {
      return <NoteIndexItemContainer key={idx} note={note} path={this.props.path}/>;
    });

    let notesCount = notes.length;
    notesCount += notesCount === 1 ? ' note' : ' notes';

    return(
      <div className='notes-index'>
        <div className='notes-index-header'>
          <span>{notesCount}</span>

          <div className='options-selector' >
            <label>Options&nbsp;</label>
            <i className="fa fa-angle-down" aria-hidden="true"></i>
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
