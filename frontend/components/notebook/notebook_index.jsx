import React from 'react';
import { Link } from 'react-router';

//This class is hidden by defualt, to implement
class NotebookIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNotebooks();
  }

  handleDelete(notebookId) {
    return (e) => {
      this.props.deleteNotebook(notebookId);
    };
  }


  render() {
    const notebooks = this.props.notebooks.map( (notebook, idx) => {
      return <div key={idx} className='notebook-index-item container'>
        <div className='notebook-index-item title'>
          <h3>{`${notebook.title}`}</h3>
          <h4>0 notes</h4>
        </div>

        <div className='notebook-index-item utility'>
          <i className="fa fa-star-o" aria-hidden="true"></i>
          <i onClick={this.handleDelete(notebook.id)} className="fa fa-trash-o" aria-hidden="true"></i>
        </div>

      </div>;
    });
    return(
      <div className='notebook-index'>

        <div className='notebook-index-header'>

          <div className='top-line'>
            <h2>NOTEBOOKS</h2>
            <label>ADDNBMODAL</label>
          </div>

          <input type='text' placeholder='Find a notebook'/>
        </div>

        <div className='notebook-index-list'>
          {notebooks}
        </div>

      </div>
    );
  }
}

export default NotebookIndex;
