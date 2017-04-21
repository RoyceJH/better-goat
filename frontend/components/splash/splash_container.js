import Splash from './splash';
import { connect } from 'react-redux';
import { logout, signup } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return ({

  });
};

const mapDispatchToProps = dispatch => {
  return ({
    logout: () => dispatch(logout()),
    signup: () => dispatch(signup()),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
