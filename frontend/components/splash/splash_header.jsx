import React from 'react';
import { Link } from 'react-router';

class SplashHeader extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return(
      <div className='splash-header'>

        <div className='splash-title'>
          <h1>GOAT</h1>
          <h1>BETTERGOAT</h1>
        </div>

        <div className='splash-nav-links'>
          <a href='https://github.com/RoyceJH' >GitHub</a>
          <Link to='/login' >Sign In</Link>
          <Link>Guest User</Link>
        </div>

      </div>
    );

  }
}

export default SplashHeader;
