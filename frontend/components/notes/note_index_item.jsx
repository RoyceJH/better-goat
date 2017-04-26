import React from 'react';
import { withRouter, hashHistory, Link } from 'react-router';

class NoteIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.goToNotes = this.goToNotes.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  goToNotes(noteId) {
    return (e) => {
      this.props.fetchNote(noteId);
    };
  }

  deleteNote(e) {
    this.props.deleteNote(this.props.note.id);
    e.stopPropagation();
  }

  render() {
    const {title, body, id, preview} = this.props.note;
    return(
      <li
        className='note-index-item-wrapper'
        onClick={this.goToNotes(id)}
      >

        <div className='note-index-list-item'>
          <div className='note-index-item title'>
            <h4>{title}</h4>
            <div className='note-index-item options'>
              <i className="fa fa-clock-o" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
              <i onClick={this.deleteNote}
                className="fa fa-trash-o" aria-hidden="true"></i>
            </div>
          </div>

          <div className='note-index-item time'>
            <label>{this.props.timeAgo}</label>
          </div>

          <div className='note-index-item body'>
            {preview}
          </div>

        </div>

      </li>
    );
  }
}

export default withRouter(NoteIndexItem);
