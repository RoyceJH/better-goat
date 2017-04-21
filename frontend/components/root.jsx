import React from 'react';
import { Provider } from 'react-redux';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import SessionFormContainer from './session_form/session_form_container';
import SplashContainer from './splash/splash_container';
import HomeContainer from './home/home_container';


const Root = ({store}) => {

  const _ensuredLoggedIn = (nextState, replace) => {
    const session = store.getState().session.username;
    if(!session) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const session = store.getState().session.username;
    if(session) {
      replace('/home');
    }
  };

  // add on enter hook down the line
  return(
    <Provider store={store}>
      <Router history={hashHistory} >
        <Route path='/' >
          <IndexRoute component={ SplashContainer } />
          <Route path='/login' component={ SessionFormContainer } onEnter={_redirectIfLoggedIn} />
          <Route path='/signup' component={ SessionFormContainer } onEnter={_redirectIfLoggedIn} />

          <Route path='/home' component={ HomeContainer } onEnter={_ensuredLoggedIn}/>


        </Route>
      </Router>

    </Provider>
  );
};

export default Root;
