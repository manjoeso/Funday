import React from 'react'
import ReactDOM from 'react-dom'
import { login, logout, signup } from './actions/session_actions'
import configureStore from './store/store'
import Root from "./components/root";
import {fetchWorkspaces} from './actions/workspace_actions' 

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
        entities: {
            users: { [window.currentUser.id]: window.currentUser 
            }
        },
        session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
    store = configureStore();
    }
    // TESTING
    window.fetchWorkspaces = fetchWorkspaces;

    window.login = login;
    window.logout = logout;
    window.signup = signup;
    window.store = store;
    // TESTING 

    
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root)
})