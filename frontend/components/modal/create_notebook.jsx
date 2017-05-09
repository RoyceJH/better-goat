import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { createNotebook } from '../../actions/notebook_actions';
import CreateForm from './create_form';

const mapDispatchToProps = dispatch => ({
  createNotebook: (notebook) => dispatch(createNotebook(notebook)),
});

class CreateNotebook extends React.Component {
  render() {
    return(
      <CreateForm
        createAction={this.props.createNotebook}
        item={'notebook'}
        reroute={(action) => this.props.router.push(`/home/notebook/${action.notebook.id}`)}
        placeholder='Title your notebook'
      />
    );
  }
}

export default connect(null, mapDispatchToProps)(withRouter(CreateNotebook));
