import React from 'react';
import { connect } from 'react-redux';

class SlideOut extends React.Component {
  constructor(props) {
    super(props);
    this.removeSlide = this.removeSlide.bind(this);
  }

  removeSlide() {
    this.props.removeSlideout();
  }

  render() {
    return(
    <div onClick={this.removeSlide} className='slider-modal'>
    </div>
  );
  }
}

import { removeSlideout } from '../actions/slideout_actions';

const mapDispatchToProps = dispatch => ({
  removeSlideout: () => dispatch(removeSlideout()),
});

export default connect(
  null,
  mapDispatchToProps
)(SlideOut);
