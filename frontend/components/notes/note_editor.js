import React from 'react';
import ReactQuill from 'react-quill';
import { withRouter } from 'react-router';

import NoteInfo from '../modal/note_info';
import CreateNotebookModal from '../modal/create_notebook';

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
    this.addCreateModal = this.addCreateModal.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.cancelNewNote = this.cancelNewNote.bind(this);
    // this.timeout = null;
  }

  componentDidMount() {

    if(!this.props.formType) {
      this.setState({ title: "", preview: "", body: "" });
    }
    this.props.receiveNote(this.props.firstNote);
  }


  componentWillReceiveProps(newProps) {
    // if(this.state.note.id !== newProps.firstNote.id) {
    //
    // }
    // this.props.receiveNote(this.props.firstNote);
    if(!this.state.note.id) {
      this.props.receiveNote(this.props.firstNote);
    }

    if(this.state.note.id !== newProps.note.id) {
      this.setState({note: newProps.note});
    }
  }

  deleteNote() {
    this.props.removeNote(this.state.note);
    this.props.deleteNote(this.state.note.id);
  }

  handleBody(content, delta, source, editor ) {
    let preview = editor.getText().slice(0,130).replace('\\n', "");
    let note = this.state.note;
    note.preview = preview;
    note.body = content;
    this.setState({note});
  }

  changeTitle(e) {
    let note = this.state.note;
    note.title = e.target.value;
  }

  addModal() {
    this.props.receiveModal(<NoteInfo />);
  }

  handleSave() {
    if(!this.props.formType) {
      this.props.processForm(this.state.note).then(
        this.cancelNewNote
      );
    } else {
      this.props.processForm(this.state.note);
    }
  }

  setNotebook(e) {
    let notebookId = e.currentTarget.value;
    let note = this.state.note;

    if (note.notebook_id !== notebookId) {
      note.notebook_id = notebookId;
      this.setState({note}, () => {
        if(this.props.formType === 'edit') {
          this.handleSave();
        }
      });
    }
  }

  cancelNewNote() {
    this.props.router.push('/home');
  }

  toggleNotebookList(e) {
    if(this.state.hidden) {
      this.setState({hidden: false});
    } else {
      this.setState({hidden: true});
    }
  }

  addCreateModal() {
    this.props.receiveModal(<CreateNotebookModal />);
    this.setState({hidden: true});
  }

  render() {
    const toolbarOptions = [
      [{ 'font': [] }],
      // [{ 'align': [] }],
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      ['clean']                                         // remove formatting button
    ];

    const cancelButton = !this.props.formType ?
      <input
        onClick={this.cancelNewNote}
        className='note-save'
        type='submit'
        value='Cancel'/> :
        "";

    let selected = "";
    let selectedNotebookName;
    let hidden = this.state.hidden ? 'hidden' : '';
    const notebooks = this.props.notebooks.map( (notebook, idx) => {
      selected = "";
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
                { selectedCheck }
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
            { cancelButton }
            <input
              onClick={this.handleSave}
              className='note-save'
              type='submit'
              value='Save Note'/>
          </div>

        </div>

        <div className='note-edit-wrapper' >

          <div onClick={this.toggleNotebookList} className='notebook-dropdown-wrapper'>
            <i className="fa fa-book notebook-main" aria-hidden="true"></i>
            <span >{selectedNotebookName}</span>
            <i className="fa fa-angle-down notebook-down" aria-hidden="true"></i>
            <ul className={`notebook-dropdown ${hidden}`}>
              <li className='create-notebook' onClick={this.addCreateModal}>
                <div className='create-notebook-icon'>
                  <i className="fa fa-file-text-o" aria-hidden="true"></i>
                  <i className="fa fa-plus" aria-hidden="true"></i>
                </div>
                <span>Create new notebook</span>

              </li>
              { notebooks }
            </ul>
          </div>

          <input
            spellCheck="false"
            placeholder='Title your note'
            onChange={this.changeTitle}
            value={this.state.note.title} />
          <div className='ql-toolbar-bottom-line'></div>
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

export default withRouter(NoteEditor);
