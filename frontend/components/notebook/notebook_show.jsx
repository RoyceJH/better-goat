import React from 'react';
import { withRouter } from 'react-router';
import NotesIndexContainer from '../notes/notes_index_container';

class NotebookShow extends React.Component {
  constructor(props) {
    super(props);
    // this.state = (this.props.notebooks);
  }

  //TODO change handling of unaccessible notebooks (props.notebooksArray)
  componentDidMount() {
    this.props.fetchNotebook(this.props.notebookId)
      .then( (notebook) => {

      }, (err) => {
        this.props.router.push('/home');
      });
  }

  render() {
    return(
      <div className='notebook-show'>
        <div className='notebook-show-header'>
          <span>EDIT NOTEBOOK</span>
          <h3>
            {this.props.notebook.title}
          </h3>
        </div>

        <NotesIndexContainer notes={this.props.notes} />

      </div>
    );
  }
}

export default withRouter(NotebookShow);
