import { connect } from 'react-redux';

import NoteIndexItem from './note_index_item';

import { getTimeAgoOfNotes } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return{
    timeAgo: getTimeAgoOfNotes(ownProps),
  };
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteIndexItem);
