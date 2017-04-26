import React from 'react';
import ReactQuill from 'react-quill';
import NoteInfo from '../modal/note_info';

class NoteEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = (props.note);
    this.handleBody = this.handleBody.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.addModal = this.addModal.bind(this);
    // this.timeout = null;
  }

  componentWillReceiveProps(newProps) {
    if(this.state.id !== newProps.note.id) {
      this.setState(newProps.note);
    }
  }

  deleteNote() {
    this.props.deleteNote(this.state.id);
  }

  handleBody(content, delta, source, editor ) {
    let preview = editor.getText().slice(0,130).replace('\\n', "");
    this.setState({preview: preview, body: content});
    this.props.updateNote(this.state);
    // clearTimeout(this.timeout);
    // this.timeout = setTimeout(this.props.updateNote(this.state), 5000);
  }

  changeTitle(e) {
    const title = e.target.value;
    this.setState({title});
  }

  addModal() {
    this.props.receiveModal(<NoteInfo />);
  }

  render() {
    const nbs = <input>HELO</input>
    return(
      <div className='editor-main'>
        <div className='editor-actions'>
          <div className='editor-icons'>
            <label className='star-note'>
              <i className="fa fa-star-o" aria-hidden="true"></i>
            </label>

            <label className='info-note' onClick={this.addModal}>
              <i className="fa fa-info" aria-hidden="true"></i>
            </label>

            <label className='delete-note' onClick={this.deleteNote}>
              <i className="fa fa-trash-o" aria-hidden="true"></i>
            </label>
          </div>

          <div className='editor-buttons'>
            <i className="fa fa-arrows-alt" aria-hidden="true"></i>
            <input className='note-save' type='submit' value='Save Note'/>
          </div>

        </div>

        <div className='note-edit-wrapper' >
          <input
            placeholder='Title your note'
            onChange={this.changeTitle}
            value={this.state.title} />
          <ReactQuill
            value={this.state.body}
            onChange={this.handleBody}
            theme='snow'>
            <div className='editing-area'>
            </div>
          </ReactQuill>
        </div>
      </div>




    );
  }
}

export default NoteEditor;
