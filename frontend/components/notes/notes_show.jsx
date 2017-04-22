import React from 'react';
import NotesIndexContainer from './notes_index_container';

class NotesShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    return(
      <div className='notes-show'>
        <div className='notes-show-header'>
          IM A HEADER FOR NOTES
        </div>

        <NotesIndexContainer notes={this.props.notes} />
      </div>
    );
  }
}

export default NotesShow;
