import React from 'react';
import NotesIndexContainer from './notes_index_container';

class NotesShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let notesCount = this.props.notes.length;
    notesCount += (notesCount === 1) ? ' note' : ' notes';
    return(
      <div className='notes-show'>
        <div className='notes-show-header'>
          <h3>
            NOTES
          </h3>
        </div>

        <NotesIndexContainer notes={this.props.notes} />
      </div>
    );
  }
}

export default NotesShow;
