import { connect } from 'react-redux';
import Notebook from './notebook';
import {
  fetchNotebooks,
  fetchNotebook,
  createNotebook,
  updateNotebook,
  deleteNotebook
} from '../../actions/notebook_actions';

const mapStateToProps = ({ notebooks }) => {
  return({
    notebooks
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
)(Notebook);
