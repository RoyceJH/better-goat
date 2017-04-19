import { connect } from 'react-redux';
import Notebook from './notebook';

const mapStateToProps = ({ notebooks }) => {
  return({
    notebooks
  });
};

const mapDispatchToProps = (disatch) => {
  return ({

  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notebook);
