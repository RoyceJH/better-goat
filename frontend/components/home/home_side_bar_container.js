import { connect } from 'react-redux';
import HomeSideBar from './home_side_bar';

import { slideoutNotebook, slideoutTag, removeSlideout } from '../../actions/slideout_actions';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => ({
  slideout: state.slideout
});

const mapDispatchToProps = dispatch => ({
  slideoutNotebook: () => dispatch(slideoutNotebook()),
  slideoutTag: () => dispatch(slideoutTag()),
  removeSlideout: () => dispatch(removeSlideout()),
  logout: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeSideBar);
