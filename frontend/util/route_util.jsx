import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';
import RedirectToDashContainer from '../components/workspaces/redirect_to_dash_container'

const Auth = ({ loggedIn, path, component: Component }) => (
    <Route
        path={path}
        render={props => (
            loggedIn ? <RedirectToDashContainer {...props} /> : <Component {...props} />
        )}
    />
);

const Protected = ({ loggedIn, path, component: Component}) => (
    <Route
        path={path}
        render={props => (
            loggedIn ? <Component {...props} /> : <Redirect to="/login" />
        )}
    />
)

const mSTP = state => ({
    loggedIn: Boolean(state.session.id)
});

export const AuthRoute = withRouter(connect(mSTP)(Auth));
export const ProtectedRoute = withRouter(connect(mSTP)(Protected));