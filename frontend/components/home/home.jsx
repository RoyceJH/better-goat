import React from 'react';
import HomeSideBarContainer from './home_side_bar_container';
import NotebookIndexContainer from '../notebook/notebook_index_container';
import RootModalContainer from '../modal/root_modal_container';
import { withRouter } from 'react-router';

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


        <RootModalContainer />
      </div>
    );
  }
}

export default withRouter(Home);
