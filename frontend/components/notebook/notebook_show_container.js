import { connect } from 'react-redux';
import NotebookShow from './notebook_show';
import { fetchNotebook } from '../../actions/notebook_actions';
import { arrayNotebookIds, notebookNotes } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  let notebook = state.notebooks[ownProps.params.notebookId] || {title: ""};

  return ({
    notebookId: ownProps.params.notebookId,
    notebook,
    notebooksArray: arrayNotebookIds(state),
    notes: notebookNotes(state, ownProps.params.notebookId),
  });
};

const mapDispatchToProps = dispatch => ({
  fetchNotebook: (notebookId) => dispatch(fetchNotebook(notebookId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookShow);
