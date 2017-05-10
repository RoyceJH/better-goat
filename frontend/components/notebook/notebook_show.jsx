import React from 'react';
import { withRouter } from 'react-router';
import NotesIndexContainer from '../notes/notes_index_container';
import UpdateNotebook from '../modal/update_notebook';
import NoteEditorContainer from '../notes/note_editor_container';

class NotebookShow extends React.Component {
  constructor(props) {
    super(props);
    this.addModal = this.addModal.bind(this);
    this.state = ({search: ""});
  }

  //TODO change handling of unaccessible notebooks (props.notebooksArray)
  componentDidMount() {
    this.props.fetchNotebook(this.props.notebookId)
      .then( (notebook) => {

      }, (err) => {
        this.props.router.push('/home');
      });
    // this.props.receiveNote(this.props.getNotes(parseInt(this.props.notebookId))[0]);
  }

  addModal(e) {
    this.props.receiveModal(
      <UpdateNotebook notebookId={this.props.notebookId} />
    );
  }

  render() {
    const notes = this.props.getNotes(parseInt(this.props.notebookId));
    const noteEditor = notes[0] ?
      <NoteEditorContainer
        key={notes[0].id}
        formType='edit'
        firstNote={notes[0]} />
      : "";

    return(
      <div className='notebook-main'>
        <div className='notebook-show'>
          <div className='notebook-show-header'>
            <span>
              <i onClick={this.addModal} className="fa fa-info-circle" aria-hidden="true"></i>
            </span>

            <h3>
              {this.props.notebook.title}
            </h3>
          </div>

          <NotesIndexContainer notes={notes} />

        </div>

        <div className='home-note-editor-wrapper'>
          { noteEditor }
        </div>

      </div>
    );
  }
}

export default withRouter(NotebookShow);
