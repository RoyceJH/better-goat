import React from 'react';
import SplashHeader from './splash_header';

class Splash extends React.Component {
  render() {
    return (
      <div className='splash'>
        <SplashHeader />
        <div className='splash-main' >
          <button onClick={this.props.logout()}>TEMPLOGOUT</button>
          <img src='https://static.pexels.com/photos/86594/goat-animal-horns-black-and-white-86594.jpeg' />
        </div>
      </div>
    );
  }
}

export default Splash;
