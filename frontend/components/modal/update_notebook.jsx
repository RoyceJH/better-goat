import React from 'react';
import { connect } from 'react-redux';

import { updateNotebook } from '../../actions/notebook_actions';
import { removeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
  notebook: state.notebooks[ownProps.notebookId]
});

const mapDispatchToProps = dispatch => ({
  updateNotebook: (notebook) => dispatch(updateNotebook(notebook)),
  removeModal: () => dispatch(removeModal()),
});

class UpdateNotebook extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.notebook;
    this.cancelUpdate = this.cancelUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateNotebook = this.updateNotebook.bind(this);
  }

  cancelUpdate() {
    this.props.removeModal();
  }

  handleChange(e) {
    const title = e.target.value;
    this.setState({title});
  }

  updateNotebook() {
    this.props.removeModal();
    this.props.updateNotebook(this.state);
  }

  render() {
    return(
      <div className='modal-update-notebook'>

        <div className='update-header'>
          <i className="fa fa-info-circle" aria-hidden="true"></i>
          <label>NOTEBOOK INFO</label>
          <div className='modal-update-notebook bottom-line'/>
        </div>

        <div className='overview'>
          <label>Overview</label>
          <div className='update-box'>
            <span>TITLE</span>
            <input
              onChange={this.handleChange}
              value={this.state.title}
              />
          </div>
        </div>

        <div className='notebook-modal' >
          <input
            className='cancel'
            onClick={this.cancelUpdate}
            type='submit'
            value='Cancel'
            />

          <input
            className='submit'
            onClick={this.updateNotebook}
            type='submit'
            value='Save'
            />

        </div>

        <div className='add-spacing'></div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateNotebook);
