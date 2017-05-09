import { connect } from 'react-redux';
import HomeSideBar from './home_side_bar';

import { slideoutNotebook, slideoutTag, removeSlideout } from '../../actions/slideout_actions';
import { logout } from '../../actions/session_actions';
import { fetchNotes } from '../../actions/note_actions';

const mapStateToProps = state => ({
  slideout: state.slideout,
  user: state.session
});

const mapDispatchToProps = dispatch => ({
  slideoutNotebook: () => dispatch(slideoutNotebook()),
  slideoutTag: () => dispatch(slideoutTag()),
  removeSlideout: () => dispatch(removeSlideout()),
  logout: () => dispatch(logout()),
  fetchNotes: () => dispatch(fetchNotes()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeSideBar);
