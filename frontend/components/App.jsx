import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './sessions/login_form_container'
import SignupFormContainer from './sessions/sign_up_form_container'

import SplashContainer from './splash/splash_container'

import WorkspaceIndexContainer from './workspaces/workspace_index_container'
import SidebarContainer from './workspaces/sidebar_container'
import BoardIndexContainer from './workspaces/board_index_container'


const App = () => (
  <div>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/" component={SplashContainer} />


      <div className='main-parent-container'>
        <ProtectedRoute path="/"  component={SidebarContainer} />
        <div className='dashboard-main-parent-container'> 
          <div className='workspace-board-parent-container'>
            <ProtectedRoute path='/'  component={WorkspaceIndexContainer} />
            <ProtectedRoute path='/workspaces/:workspace_id' component={BoardIndexContainer} />
          </div>
          <div className='board-show-parent-container'>
            {/* <ProtectedRoute path='/boards/:boarde_id' component={BoardShowContainer} /> */}
          </div>
        </div>
      </div>
  </div>
);













  //     {/* < Route exact path='/' component={HomepageContainer} /> */}
  //     <Switch>
  //       <Route exact path="/" component={SplashContainer} />
  //       <AuthRoute exact path="/login" component={LoginFormContainer} />
  //       <AuthRoute exact path="/signup" component={SignupFormContainer} />
  //     </Switch> 
  // </div>

export default App;  