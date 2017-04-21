import React from 'react';
import HomeSideBarContainer from './home_side_bar_container';
import NotebookIndexContainer from '../notebook/notebook_index_container';
import NewNoteContainer from '../note/new_note_container';

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
        <NewNoteContainer />
      </div>
    );
  }
}

export default Home;
