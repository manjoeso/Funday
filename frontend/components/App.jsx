import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import SplashContainer from './splash/splash_container'

import LoginFormContainer from './sessions/login_form_container'
import SignupFormContainer from './sessions/sign_up_form_container'
import { AuthRoute } from '../util/route_util';


const App = () => (
  <div>
    <header>
      <Link to='/' className='header-link'/>
    </header>
      <Switch>
        <Route exact path="/" component={SplashContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
      </Switch>
  </div>
);

export default App;