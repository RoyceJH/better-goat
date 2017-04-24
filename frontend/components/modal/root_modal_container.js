import { connect } from 'react-redux';
import RootModal from './root_modal';
import { receiveModal, removeModal } from '../../actions/modal_actions';

const mapStateToProps = ({modal}) => ({
  component: modal.component,
  active: modal.active,
});

const mapDispatchToProps = dispatch => ({
  receiveModal: (component) => dispatch(receiveModal(component)),
  removeModal: () => dispatch(removeModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootModal);
