import React from 'react';
import { withRouter, hashHistory, Link } from 'react-router';

class NoteIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.goToNotes = this.goToNotes.bind(this);
  }

  goToNotes(noteId) {
    return (e) => {
      hashHistory.push(`${this.props.path}/notes/${noteId}`);
      // this.props.router.push(`notes/${noteId}`);
    };
  }

  render() {
    const {title, body, id} = this.props.note;
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
              <i className="fa fa-trash-o" aria-hidden="true"></i>
            </div>
          </div>

          <div className='note-index-item time'>
            <label>6 MINUTES AGO</label>
          </div>

          <div className='note-index-item body'>
            {body.slice(0, 130)}
          </div>

        </div>

      </li>
    );
  }
}

export default withRouter(NoteIndexItem);
