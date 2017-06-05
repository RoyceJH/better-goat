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
          <img className='logo splash' src='https://s3.amazonaws.com/bettergoat-pro/evergoat-logo.png'/>
          <h1>BETTERGOAT</h1>
        </div>

        <div className='splash-nav-links'>
          <a href='https://github.com/RoyceJH/better-goat' >GitHub</a>
          <Link to='/login' >Sign In</Link>
        </div>

      </div>
    );

  }
}

export default SplashHeader;
