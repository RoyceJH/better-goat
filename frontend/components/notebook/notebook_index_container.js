import { connect } from 'react-redux';
import NotebookIndex from './notebook_index';
import { selectNotebooks } from '../../reducers/selectors';
import {
  fetchNotebooks,
  fetchNotebook,
  createNotebook,
  updateNotebook,
  deleteNotebook
} from '../../actions/notebook_actions';

const mapStateToProps = state => {
  const slideout = state.slideout === 'notebook' ? true : false;
  return({
    notebooks: selectNotebooks(state),
    slideout
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchNotebooks: () => dispatch(fetchNotebooks()),
    fetchNotebook: (notebookId) => dispatch(fetchNotebook(notebookId)),
    createNotebook: (notebook) => dispatch(createNotebook(notebook)),
    updateNotebook: (notebook) => dispatch(updateNotebook(notebook)),
    deleteNotebook: (notebookId) => dispatch(deleteNotebook(notebookId))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookIndex);
