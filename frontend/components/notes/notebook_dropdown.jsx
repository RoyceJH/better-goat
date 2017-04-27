import React from 'react';
import { connect } from 'react-redux';

class NotebookDropdown extends React.Component {
  constructor(props) {
    super(props);

  }


  updateNotebook() {

  }

  render() {
    return(
      <label className='notebook-dropdown'>
      </label>
    );
  }
}

import { selectNotebook } from '../../actions/notebook_actions';

const mapStateToProps = (state, ownProps) => ({
  note: state.note,
  notebooks: state.notebooks,
  notebook: state.notebooks[ownProps.notebookId]
});

const mapDispatchToProps = dispatch => ({
  selectNotebook: (notebook) => dispatch(selectNotebook()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookDropdown);
