import { connect } from 'react-redux';
import NewNote from './new_note';

const mapStateToProps = (state) => {
  return ({
    notes: state.notes
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({

  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewNote);
