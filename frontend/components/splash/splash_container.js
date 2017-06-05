import Splash from './splash';
import { connect } from 'react-redux';
import { logout, signup, clearErrors, login } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return ({
    errors: state.errors,
    session: state.session
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    logout: () => dispatch(logout()),
    signup: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
    login: (user) => dispatch(login(user)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
