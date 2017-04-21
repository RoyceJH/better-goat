import React from 'react';
import SplashHeader from './splash_header';
import Greeting from './greeting';

class Splash extends React.Component {
  //Make greeting container
  render() {
    return (
      <div className='splash'>
        <SplashHeader />
        <div className='splash-main' >
          <img src='https://static.pexels.com/photos/220076/pexels-photo-220076.jpeg' />
          <Greeting signup={this.props.signup} errors={this.props.errors} clearErrors={this.props.clearErrors} login={this.props.login}/>
        </div>
      </div>
    );
  }
}

export default Splash;
