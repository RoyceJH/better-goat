import React from 'react';
import { connect } from 'react-redux';

import { createNotebook } from '../../actions/notebook_actions';
import { removeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({
  createNotebook: (notebook) => dispatch(createNotebook(notebook)),
  removeModal: () => dispatch(removeModal()),
});

class CreateNotebook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: ""};
    this.handleChange = this.handleChange.bind(this);
    this.submitNotebook = this.submitNotebook.bind(this);
  }

  submitNotebook(e) {
    const newNotebook = {title: this.state.title};
    this.props.removeModal();
    this.props.createNotebook(newNotebook);
  }

  handleChange(e) {
    let title = e.target.value;
    this.setState({title});
  }

  render() {
    return(
      <div className='modal-create-notebook'>
        <i className="fa fa-file-text-o" aria-hidden="true"></i>
        <label>CREATE NOTEBOOK</label>
        <input
          type='text'
          className='create-notebook-title'
          onChange={this.handleChange}
          placeholder='Title your notebook'
          value={this.state.title}
          />

        <div className='create-notebook-buttons'>
          <input type='submit' name='Cancel'/>
          <input
            onClick={this.submitNotebook}
            type='submit'
            name='Create notebook'
            />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNotebook);
