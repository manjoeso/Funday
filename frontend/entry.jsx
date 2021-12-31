import React from 'react'
import ReactDOM from 'react-dom'
import { login, logout, signup } from './util/session_api_util'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    window.login = login;
    window.logout = logout;
    window.signup = signup;

    ReactDOM.render(<h1>Hello world, it's working!!!</h1>, root)
})