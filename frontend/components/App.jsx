import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './sessions/login_form_container'
import SignupFormContainer from './sessions/sign_up_form_container'
import RedirectToDashContainer from './workspaces/redirect_to_dash_container'
import SplashContainer from './splash/splash_container'
import Modal from './modals/modal'

// import BoardShowContainer from './workspaces/show_components/board_show_container'
import WorkspaceShowContainer from './workspaces/show_components/workspace_show_container'
import BoardShowContainer from './workspaces/show_components/board_show_container'


const App = () => (
  <div> 
      <Modal />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/" component={SplashContainer} />
      <ProtectedRoute exact path="/" component={RedirectToDashContainer}/>
      <Switch>
        <ProtectedRoute path='/workspaces/:workspace_id' component={WorkspaceShowContainer} />
        <ProtectedRoute path='/:workspace_id/boards/:board_id' component={BoardShowContainer} />
      </Switch>      
  </div>
);  

export default App;  