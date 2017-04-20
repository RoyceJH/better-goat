import React from 'react';
import HomeSideBar from './home_side_bar';
import NotebookIndexContainer from '../notebook/notebook_index_container';
import NewNoteContainer from '../note/new_note_container';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='home-main'>
        <HomeSideBar logout={this.props.logout}/>
        <NotebookIndexContainer />
        <NewNoteContainer />
      </div>
    );
  }
}

export default Home;
