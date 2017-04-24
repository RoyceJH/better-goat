import { connect } from 'react-redux';
import NotebookShow from './notebook_show';
import { fetchNotebook } from '../../actions/notebook_actions';
import { arrayNotebookIds, getNotesByNotebookId } from '../../reducers/selectors';
import { receiveModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  let notebook = state.notebooks[ownProps.params.notebookId] || {title: ""};
  return ({
    notebookId: ownProps.params.notebookId,
    notebook,
    notebooksArray: arrayNotebookIds(state),
    getNotes: (notebookId) => getNotesByNotebookId(state, notebookId),
  });
};

const mapDispatchToProps = dispatch => ({
  fetchNotebook: (notebookId) => dispatch(fetchNotebook(notebookId)),
  receiveModal: (component) => dispatch(receiveModal(component)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookShow);
