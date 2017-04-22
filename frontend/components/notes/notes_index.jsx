import React from 'react';

class NotesIndex extends React.Component {
  render() {
    // debugger
    const notes = this.props.notes.map((note, idx) => {
      return <span>{note.title}</span>;
    });
    return(
      <div className='notes-index'>
        {notes}
      </div>
    );
  }
}

export default NotesIndex;
