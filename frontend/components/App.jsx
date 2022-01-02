import React from "react";
import { Route, Routes } from "react-router-dom";
// import { Switch } from 'react-router'
import SplashContainer from './splash/splash_container'

import LoginFormContainer from './sessions/login_form_container'
import SignupFormContainer from './sessions/sign_up_form_container'


const App = () => (
  <div>
    <h1>App is working</h1>
      <Routes>
        <Route path="/" element={<SplashContainer/>} />
        <Route path="/login" element={<LoginFormContainer/>} />
        <Route path="/signup" element={<SignupFormContainer/>} />
      </Routes>
  </div>
);

export default App;