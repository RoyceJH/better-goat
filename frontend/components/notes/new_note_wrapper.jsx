import React from 'react';
import { connect } from 'react-redux';

import NoteEditorContainer from './note_editor_container';
import RootModalContainer from '../modal/root_modal_container';
import { receiveNote } from '../../actions/note_actions';


class NewNoteWrapper extends React.Component {

  render() {
    let emptyNote = {title: "", body: "", preview: "", author_id: null, notebook_id:null};
    return(
      <div className='full-screen-note-editor'>
        <NoteEditorContainer note={emptyNote}/>
        <RootModalContainer />
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  reeiveNote: (note) => dispatch(receiveNote(note)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewNoteWrapper);
