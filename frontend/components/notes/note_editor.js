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
    this.setTag = this.setTag.bind(this);
    this.deleteTag = this.deleteTag.bind(this);
  }

  componentDidMount() {
    if(!this.props.formType) {
      this.setState({ title: "", preview: "", body: "" , tags:[]});
    } else {
      this.props.receiveNote(this.props.firstNote);
    }
  }

  componentWillReceiveProps(newProps) {
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
    this.setState({note});
  }

  addModal() {
    this.props.receiveModal(<NoteInfo />);
  }

  handleSave() {
    let { note } = this.state;
    if(!this.props.formType) {
      this.props.processForm(note).then(
        this.cancelNewNote
      ).then(this.props.fetchTags).then(this.props.fetchNotes(note.id));
    } else {
      this.props.processForm(note)
        .then(this.props.fetchTags).then(this.props.fetchNote(note.id));
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

  setTag(e) {
    if(e.key === 'Enter') {
      let newTag = {id:null, title:e.target.value};
      let note = this.state.note;
      let exists = false;

      if(this.props.tagsByTitle(newTag.title)) {
        newTag = this.props.tagsByTitle(newTag.title);
        exists = true;
      }

      note.tags.push(newTag);
      this.setState({note});
      e.target.value = '';
    }
  }

  deleteTag(tag) {
    return (e) => {
      let toDelete = tag;
      let delIdx;
      let note = this.state.note;
      note.tags.forEach((currentTag, idx) => {
        if(currentTag.title === toDelete.title){
          delIdx = idx;
        }
      });

      delete note.tags[delIdx];
      this.setState({note});
    };
  }

  toolbarOptions() {
    return [
      [{ 'font': [] }],
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      ['clean']                                         // remove formatting button
    ];
  }

  // tagBlocks() {
  //   let { tags } = this.state.note;
  //   if(tags) {
  //     tagBlocks = tags.map((tag => {
  //       return <li className='tags-list' key={tag.title}>
  //         {tag.title}
  //         <i className="fa fa-minus-circle" aria-hidden="true"
  //           onClick={this.deleteTag(tag).bind(this)}></i>
  //       </li>;
  //     }));
  //   }
  // }

  render() {
    let { tags } = this.state.note;

    const cancelButton = !this.props.formType ?
      <input
        onClick={this.cancelNewNote}
        className='note-save'
        type='submit'
        value='Cancel'/> :
        "";

    let tagBlocks;
    if(tags) {
      tagBlocks = tags.map((tag => {
        return <li className='tags-list' key={tag.title}>
          {tag.title}
          <i className="fa fa-minus-circle" aria-hidden="true"
            onClick={this.deleteTag(tag).bind(this)}></i>
        </li>;
      }));
    }

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

    //Shortcut icon
    // <i className="fa fa-star-o" aria-hidden="true"></i>

    return(
      <div className='editor-main'>
        <div className='editor-actions'>
          <div className='editor-icons'>
            <label className='star-note'>
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

          <div className='note-attributes'>
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

            <div className='tag-blocks'>
              <i className="fa fa-bookmark-o" aria-hidden="true"></i>
              <ul>
                { tagBlocks }
                <li onKeyPress={this.setTag} className='new-tag'><input placeholder='+'></input></li>
              </ul>
            </div>
          </div>

          <input
            spellCheck="false"
            placeholder='Title your note'
            onChange={this.changeTitle}
            value={this.state.note.title} />
          <div className='ql-toolbar-bottom-line'></div>
          <ReactQuill
            modules={{
              toolbar: this.toolbarOptions()}}
            value={this.state.note.body}
            onChange={this.handleBody}
            theme='snow'
            placeHolder='Start typing here...'>
            <div className='editing-area'>
            </div>
          </ReactQuill>
        </div>
      </div>
    );
  }
}

export default withRouter(NoteEditor);
