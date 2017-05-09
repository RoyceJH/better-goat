import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { createTag } from '../../actions/tag_actions';
import CreateForm from './create_form';

const mapDispatchToProps = dispatch => ({
  createTag: (tag) => dispatch(createTag(tag)),
});

class CreateTag extends React.Component {
  render() {
    return(
      <CreateForm
        createAction={this.props.createTag}
        item={'tag'}
        reroute={(action) => {this.props.router.push(`/home/tags/${action.tag.id}`);}}
        placeholder='Name your tag'
      />
    );
  }
}

export default connect(null, mapDispatchToProps)(withRouter(CreateTag));
