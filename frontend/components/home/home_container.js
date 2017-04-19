import Home from './home';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

const mapStateToProps = store => ({

});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
