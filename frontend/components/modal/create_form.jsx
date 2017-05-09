import React from 'react';
import { removeModal } from '../../actions/modal_actions';
import { removeSlideout } from '../../actions/slideout_actions';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  removeModal: () => dispatch(removeModal()),
  removeSlideout: () => dispatch(removeSlideout()),
});

class CreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: ""};
    this.handleChange = this.handleChange.bind(this);
    this.submitItem = this.submitItem.bind(this);
    this.cancelCreate = this.cancelCreate.bind(this);
  }

  cancelCreate(e) {
    this.props.removeModal();
  }

  handleChange(e) {
    let title = e.target.value;
    this.setState({title});
  }


  submitItem(e) {
    const newItem = {title: this.state.title};
    this.props.removeModal();
    this.props.removeSlideout();
    this.props.createAction(newItem).then(this.props.reroute);
  }

  render() {
    const submitClass = this.state.title === '' ? 'inactive' : '';
    const submitAction = this.state.title === '' ? '' : this.submitItem;
    return(
      <div className='modal-create-notebook'>
        <div className='modal-create-notebook-header'>
          <i className="fa fa-file-text-o" aria-hidden="true"></i>
          <label>{`CREATE ${this.props.item.toUpperCase()}`}</label>
          <div className='modal-create-notebook bottom-line'/>
        </div>

        <input
          type='text'
          className='create-notebook-title'
          onChange={this.handleChange}
          placeholder={this.props.placeholder}
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
            value={`Create ${this.props.item}`}
            />
        </div>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(CreateForm);
