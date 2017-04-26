import React from 'react';
import { withRouter } from 'react-router';
import NotesIndexContainer from '../notes/notes_index_container';
import UpdateNotebook from '../modal/update_notebook';

class NotebookShow extends React.Component {
  constructor(props) {
    super(props);
    this.addModal = this.addModal.bind(this);
  }

  //TODO change handling of unaccessible notebooks (props.notebooksArray)
  componentDidMount() {
    this.props.fetchNotebook(this.props.notebookId)
      .then( (notebook) => {

      }, (err) => {
        this.props.router.push('/home');
      });
  }

  // componentWillReceiveProps(newProps) {
  //   debugger
  //   if(this.props.notebookId) {
  //     debugger
  //     this.props.receiveNote(this.props.getNotes(parseInt(this.props.notebookId)[0]));
  //   }
  // }

  addModal(e) {
    this.props.receiveModal(
      <UpdateNotebook notebookId={this.props.notebookId} />
    );
  }



  render() {
    const notes = this.props.getNotes(parseInt(this.props.notebookId));

    // jankeness breaks everything why?
    // debugger
    // if(notes[0]) {
    //   this.props.receiveNote(notes[0]);
    // }

    return(
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
    );
  }
}

export default withRouter(NotebookShow);
