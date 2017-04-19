import React from 'react';
import { Provider } from 'react-redux';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import SessionFormContainer from './session_form/session_form_container';
import SplashContainer from './splash/splash_container';


const Root = ({store}) => {

  const _ensuredLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().currentUser;
    if(currentUser.username) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().currentUser;
    if(currentUser) {
      replace('/');
    }
  };

  // <Route path='/' component={App}/ >
  return(
    <Provider store={store}>
      <Router history={hashHistory} >
        <Route path='/' >
          <IndexRoute component={ SplashContainer } />
          <Route path='/login' component={ SessionFormContainer } onEnter={_redirectIfLoggedIn} />
          <Route path='/signup' component={ SessionFormContainer } onEnter={_redirectIfLoggedIn} />
        </Route>
      </Router>

    </Provider>
  );
};

export default Root;
