import React from 'react';
import { Provider } from 'react-redux';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import SessionFormContainer from './session_form/session_form_container';
import SplashContainer from './splash/splash_container';
import HomeContainer from './home/home_container';
import NotebookShowContainer from './notebook/notebook_show_container';
import NotesShowContainer from './notes/notes_show_container';
import NewNoteWrapper from './notes/new_note_wrapper';
import NoteEditorContainer from './notes/note_editor_container';


const Root = ({store, getState}) => {

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

  const _selectDefault = (nextState, replcace => {
    debugger
  };

  // add on enter hook down the line
  return(
    <Provider store={store}>
      <Router history={hashHistory} >
        <Route path='/' >
          <IndexRoute component={ SplashContainer } />
          <Route path='/login' component={ SessionFormContainer } onEnter={_redirectIfLoggedIn} />
          <Route path='/signup' component={ SessionFormContainer } onEnter={_redirectIfLoggedIn} />

          <Route path='/notes/new' component={ NewNoteWrapper } />

          <Route path='/home' component={ HomeContainer } onEnter={_ensuredLoggedIn}>
            <IndexRoute component={ NotesShowContainer } />

            <Route onEnter={_selectDefault}
              path='/home/notebook/:notebookId'
              component={ NotebookShowContainer }
              >

              <Route path='/home/notebook/:notebookId/notes/:noteId' component={ NoteEditorContainer } />

            </Route>
          </Route>

        </Route>
      </Router>

    </Provider>
  );
};

export default Root;
