import SessionForm from './session_form';
import { connect } from 'react-redux';
import {
  login, logout, signup, clearErrors
} from '../../actions/session_actions';
//Do I need logout? maybe not

const mapStateToProps = (state, ownProps) => {
  return ({
    loggedIn: Boolean(state.currentUser),
    errors: state.errors,
  });
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;

  return {
    logout: () => dispatch(logout()),
    processForm: (user) => dispatch(processForm(user)),
    clearErrors: () => dispatch(clearErrors()),
    formType,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
