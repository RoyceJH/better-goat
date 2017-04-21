import React from 'react';
import { Link, withRouter } from 'react-router';

class HomeSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.slideNotebooks = this.slideNotebooks.bind(this);
    this.slideTags = this.slideTags.bind(this);
  }

  handleLogout(e){
    e.preventDefault();
    this.props.logout();
    this.props.router.push('/');
  }

  slideNotebooks(e) {
    if(this.props.slideout === 'notebook') {
      this.props.removeSlideout();
    } else {
      this.props.slideoutNotebook();
    }
  }

  slideTags(e) {
    if(this.props.slideout === 'tag') {
      this.props.removeSlideout();
    } else {
      this.props.slideoutTag();
    }
  }

  render() {
    return (
      <div className='home-side-bar' >

        <div className='side-bar-1'>
          <h1>LOGO</h1>
        </div>

        <div className='side-bar-2'>
          <Link>Add Note</Link>
          <Link>Search</Link>
          <Link>Work Chat</Link>

        </div>

        <div className='side-bar-3' >
          <Link>Shortcuts</Link>
          <Link>Notes</Link>
          <Link onClick={this.slideNotebooks}>Notebooks</Link>
          <Link onClick={this.slideTags}>Tags</Link>

        </div>

        <div className='side-bar-4'>
          <button onClick={this.handleLogout}>logout</button>
        </div>

      </div>
    );
  }
}



export default withRouter(HomeSideBar);
