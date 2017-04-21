import React from 'react';
import { withRouter } from 'react-router';

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
        {this.props.notebook.title}
      </div>
    );
  }
}

export default withRouter(NotebookShow);
