import React from 'react';
import HomeSideBarContainer from './home_side_bar_container';
import NotebookIndexContainer from '../notebook/notebook_index_container';
import NoteEditorContainer from '../notes/note_editor_container';
import RootModalContainer from '../modal/root_modal_container';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='home-main'>
        <HomeSideBarContainer />
        <NotebookIndexContainer />
        {this.props.children}
        <NoteEditorContainer />
        <RootModalContainer />
      </div>
    );
  }
}

export default Home;
