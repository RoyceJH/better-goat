import Splash from './splash';
import { connect } from 'react-redux';
import { logout, signup, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return ({
    errors: state.errors
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    logout: () => dispatch(logout()),
    signup: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
