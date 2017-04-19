import React from 'react';
import { Link, withRouter } from 'react-router';

const HomeSideBar = (props) => {
  const handleLogout = (e) => {
    e.preventDefault();
    props.logout();
    props.router.push('/');
  };

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
        <Link>Notebooks</Link>
        <Link>Tags</Link>

      </div>

      <div className='side-bar-4'>
        <button onClick={handleLogout}>logout</button>
      </div>

    </div>
  );
};

export default withRouter(HomeSideBar);
