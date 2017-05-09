import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { createTag } from '../../actions/tag_actions';
import { removeModal } from '../../actions/modal_actions';
import { removeSlideout } from '../../actions/slideout_actions';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({
  createTag: (tag) => dispatch(createTag(tag)),
  removeModal: () => dispatch(removeModal()),
  removeSlideout: () => dispatch(removeSlideout()),
});

class CreateTag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: ""};
    this.handleChange = this.handleChange.bind(this);
    this.submitNotebook = this.submitNotebook.bind(this);
    this.cancelCreate = this.cancelCreate.bind(this);
  }

  submitNotebook(e) {
    const newTag = {title: this.state.title};
    this.props.removeModal();
    this.props.removeSlideout();
    this.props.createTag(newTag).then((action) => this.props.router.push(`/home/tag/${action.tag.id}`));
  }

  cancelCreate(e) {
    this.props.removeModal();
  }

  handleChange(e) {
    let title = e.target.value;
    this.setState({title});
  }

  render() {
    const submitClass = this.state.title === '' ? 'inactive' : '';
    const submitAction = this.state.title === '' ? '' : this.submitNotebook;
    return(
      <div className='modal-create-notebook'>
        <div className='modal-create-notebook-header'>
          <i className="fa fa-file-text-o" aria-hidden="true"></i>
          <label>CREATE TAG</label>
          <div className='modal-create-notebook bottom-line'/>
        </div>

        <input
          type='text'
          className='create-notebook-title'
          onChange={this.handleChange}
          placeholder='Title your tag'
          value={this.state.title}
          />

        <div className='notebook-modal'>
          <input
            className='cancel'
            onClick={this.cancelCreate}
            type='submit'
            value='Cancel'
            />
          <input
            className={`submit ${submitClass}`}
            onClick={submitAction}
            type='submit'
            value='Create tag'
            />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CreateTag));
