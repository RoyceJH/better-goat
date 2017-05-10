import React from 'react';
import { Link, withRouter } from 'react-router';
import SlideOut from '../slideout';
import CreateNotebook from '../modal/create_notebook';

class NotebookIndex extends React.Component {
  constructor(props) {
    super(props);
    this.goToShowPage = this.goToShowPage.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.addModal = this.addModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchNotebooks();
  }

  handleDelete(notebookId) {
    return (e) => {
      this.props.deleteNotebook(notebookId);
      e.stopPropagation();
    };
  }

  goToShowPage(notebookId) {
    return (e) => {
      this.props.router.push(`/home/notebook/${notebookId}`);
      this.props.removeSlideout();
    };
  }

  addModal(e) {
    this.props.receiveModal(<CreateNotebook />);
  }

  render() {
    const slidden = this.props.slideout ? "selected" : "";
    const slideModal = this.props.slideout ? <SlideOut/> : "";

    const notebooks = this.props.notebooks.map( (notebook, idx) => {
      let notesCount = this.props.notes(notebook.id).length;
      if(notesCount === 1) {
        notesCount += ' note';
      } else {
        notesCount += ' notes';
      }

      return <div key={idx} className='notebook-index-item container' onClick={this.goToShowPage(notebook.id)}>
        <div className='notebook-index-item title'>
          <h3>{notebook.title}</h3>
          <label className='notebook-index-item count'>{notesCount}</label>
        </div>

        <div className='notebook-index-item utility'>
          <i className="fa fa-star-o" aria-hidden="true"></i>
          <i onClick={this.handleDelete(notebook.id)} className="fa fa-trash-o" aria-hidden="true"></i>
        </div>

      </div>;
    });

    // <input type='text' placeholder='Find a notebook'/>
    return(
        <div className={`notebook-index ${slidden}`}>
          <div className='notebook-wrapper' >
            <div className='notebook-index-header'>

              <div className='top-line'>
                <h2>NOTEBOOKS</h2>
                <label onClick={this.addModal}>
                  <i className="fa fa-file-text-o" aria-hidden="true"></i>
                  <i className="fa fa-plus" aria-hidden="true"></i>
                  </label>
              </div>

            </div>

            <div className='notebook-index-list-wrapper'>
              <div className='notebook-index-list'>
                {notebooks}
              </div>
            </div>
          </div>

          {slideModal}
        </div>

    );
  }
}

export default withRouter(NotebookIndex);
