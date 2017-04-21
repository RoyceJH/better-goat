import React from 'react';
import SplashHeader from './splash_header';
import Greeting from './greeting';

class Splash extends React.Component {

  render() {
    return (
      <div className='splash'>
        <SplashHeader />
        <div className='splash-main' >
          <img src='https://static.pexels.com/photos/220076/pexels-photo-220076.jpeg' />
          <Greeting signup={this.props.signup} errors={this.props.errors} clearErrors={this.props.clearErrors}/>
        </div>
      </div>
    );
  }
}

export default Splash;
