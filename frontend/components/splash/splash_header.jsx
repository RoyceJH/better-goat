import React from 'react';
import { Link } from 'react-router';

const SplashHeader = () => {

  return(
    <div className='splash-header'>

      <div className='splash-title'>
        <h1>GOAT</h1>
        <h1>BETTERGOAT</h1>
      </div>

      <div className='splash-nav-links'>
        <a href='https://github.com/RoyceJH' >GitHub</a>
        <Link to='/login' >Sign In</Link>
        <Link to='/login' >Guest User</Link>
      </div>

    </div>
  );
};

export default SplashHeader;
