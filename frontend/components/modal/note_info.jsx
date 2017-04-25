import React from 'react';
import { connect } from 'react-redux';

import { removeModal } from '../../actions/modal_actions';
import { roughSizeOfObject } from '../../reducers/selectors';

const mapStateToProps = state => ({
  note: state.note,
  size: roughSizeOfObject(state.note),
});

const mapDispatchToProps = dispatch => ({
  removeModal: () => dispatch(removeModal()),
});

class NoteInfo extends React.Component {
  constructor(props) {
    super(props);
    this.cancelNoteInfo = this.cancelNoteInfo.bind(this);
    this.state = (props.note);
  }

  cancelNoteInfo() {
    this.props.removeModal();
  }

  render() {
    return(
      <div className='modal-info-note'>

        <div className='note-info-header'>
          <i className="fa fa-info-circle" aria-hidden="true"></i>
          <label>NOTE INFO</label>
          <div className='modal-info bottom-line'/>
          <div className='modal-note-title'>{this.state.title}</div>
        </div>

        <div className='overview'>
          <label>Overview</label>
          <div className='created-at'>
            <label>CREATED:</label>
            <span>{new Date(this.state.created_at).toLocaleString('en-US', {
                hour12: true,
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
              })}</span>
          </div>

          <div className='updated-at'>
            <label>UPDATED:</label>
            <span>{new Date(this.state.updated_at).toLocaleString('en-US', {
                hour12: true,
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
              })}</span>
          </div>

          <div className='size'>
            <label>SIZE:</label>
            <span>{this.props.size}</span>
          </div>
        </div>

        <div className='cancel'>
          <input
            onClick={this.cancelNoteInfo}
            type='submit'
            className='confirm'
            value='Confirm' />
        </div>

      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteInfo);
