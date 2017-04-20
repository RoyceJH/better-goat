import React from 'react';
import { Link, withRouter } from 'react-router';

class HomeSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.slideNotebooks = this.slideNotebooks.bind(this);
  }

  handleLogout(e){
    e.preventDefault();
    this.props.logout();
    this.props.router.push('/');
  }

  slideNotebooks(e) {
    debugger
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
          <Link>Tags</Link>

        </div>

        <div className='side-bar-4'>
          <button onClick={this.handleLogout}>logout</button>
        </div>

      </div>
    );
  }
}



export default withRouter(HomeSideBar);
