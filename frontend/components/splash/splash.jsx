import React from 'react';
import SplashHeader from './splash_header';
import Greeting from './greeting';

class Splash extends React.Component {
  render() {
    return (
      <div className='splash'>
        <SplashHeader />
        <div className='splash-main' >
          <img src='https://static.pexels.com/photos/86594/goat-animal-horns-black-and-white-86594.jpeg' />
          <Greeting signup={this.props.signup}/>
        </div>
      </div>
    );
  }
}

export default Splash;
