import React from 'react';
import ReactQuill from 'react-quill';
import NoteInfo from '../modal/note_info';
import NotebookDropdown from './notebook_dropdown';

class NoteEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({note: props.note, hidden: true });
    this.handleBody = this.handleBody.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.addModal = this.addModal.bind(this);
    this.setNotebook = this.setNotebook.bind(this);
    this.toggleNotebookList = this.toggleNotebookList.bind(this);
    // this.timeout = null;
  }

  componentWillReceiveProps(newProps) {
    if(this.state.note.id !== newProps.note.id) {
      this.setState({note: newProps.note});
    }
  }

  deleteNote() {
    this.props.deleteNote(this.state.note.id);
  }

  handleBody(content, delta, source, editor ) {
    let preview = editor.getText().slice(0,130).replace('\\n', "");
    this.setState({preview: preview, body: content});
    this.props.updateNote(this.state.note);
    // clearTimeout(this.timeout);
    // this.timeout = setTimeout(this.props.updateNote(this.state.note), 5000);
  }

  changeTitle(e) {
    const title = e.target.value;
    this.setState({title}, this.handleSave);
  }

  addModal() {
    this.props.receiveModal(<NoteInfo />);
  }

  handleSave() {
    this.props.updateNote(this.state.note);
  }

  setNotebook(e) {
    let notebookId = e.currentTarget.value;
    let note = this.state.note;
    note.notebook_id = notebookId;
    this.setState({note}, this.props.updateNote(this.state.note));

  }

  toggleNotebookList(e) {
    if(this.state.hidden) {
      this.setState({hidden: false});
    } else {
      this.setState({hidden: true});
    }
  }

  render() {
    const toolbarOptions = [
      [{ 'font': [] }],
      [{ 'align': [] }],
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      ['clean']                                         // remove formatting button
    ];

    let selected = "";
    let selectedNotebookName;
    let hidden = this.state.hidden ? 'hidden' : '';
    const notebooks = this.props.notebooks.map( (notebook, idx) => {
      let selectedCheck = "";

      if(this.state.note.notebook_id) {
        if(notebook.id === this.state.note.notebook_id) {

          selected = 'selected';
          selectedCheck =
          <i className="fa fa-check-circle-o" aria-hidden="true"></i>;
          selectedNotebookName = notebook.title;
        }
      } else if (notebook.default){
        selected = 'selected';
        selectedCheck =
        <i className="fa fa-check-circle-o" aria-hidden="true"></i>;
        selectedNotebookName = notebook.title;
      }

      return(
        <li className='notebook-dropdown-item' value={notebook.id} key={idx} onClick={this.setNotebook}>
          <div className={`nb-drop-item-wrapper ${selected}`}>
            <label className='nb-drop-title'>
              {notebook.title}
            </label>

            <div className='nb-drop-checks'>
              <div className='selected-image'>
                { selectedCheck }
              </div>
            </div>
          </div>
        </li>
      );
    });

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
            <input
              onClick={this.handleSave}
              className='note-save'
              type='submit'
              value='Save Note'/>
          </div>

        </div>

        <div className='note-edit-wrapper' >

          <div className='notebook-dropdown-wrapper'>
            <span onClick={this.toggleNotebookList}>{selectedNotebookName}</span>
            <ul className={`notebook-dropdown ${hidden}`}>
              { notebooks }
            </ul>
          </div>

          <input
            placeholder='Title your note'
            onChange={this.changeTitle}
            value={this.state.note.title} />
          <ReactQuill
            modules={{
              toolbar: toolbarOptions}}
            value={this.state.note.body}
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
