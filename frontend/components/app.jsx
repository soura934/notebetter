import React from "react";
import SidebarContainer from "./greeting/sidebar_container";
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { Route} from 'react-router-dom';
import { AuthRoute, ProtectedRoute} from '../util/route_util';
import HomePage from "./greeting/homePage";
import NoteIndexContainer from "./mainpage/note/note_index_container";
import EditorContainer from "./mainpage/note/editor_container";
import NoteInstruc from "./mainpage/note/note_instruct";





const App = () => (
  <div className="app">
    
    <ProtectedRoute path='/app' component={SidebarContainer} />
    <ProtectedRoute path='/app/notes' component={NoteIndexContainer} />
    <ProtectedRoute exact path='/app/notes' component={NoteInstruc} />
    <ProtectedRoute path='/app/notes/:noteId' component={EditorContainer} />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <Route exact path="/" component={HomePage} />
  </div>
);

export default App;