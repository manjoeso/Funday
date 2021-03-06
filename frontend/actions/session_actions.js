import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const REMOVE_SESSION_ERRORS = 'REMOVE_SESSION_ERRORS';
export const ASSIGN_WORKSPACE_ID = 'ASSIGN_WORKSPACE_ID';
 

const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})  

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const assignCurrentWorkspace = (currentUser, workspaceId) => {
  return ({
    type: ASSIGN_WORKSPACE_ID,
    workspaceId: workspaceId,
    currentUser: currentUser
  })
}

export const removeErrors = () => ({
    type: REMOVE_SESSION_ERRORS
})

export const signup = user => dispatch => (
    SessionApiUtil.signup(user).then(currentUser => (
      dispatch(receiveCurrentUser(currentUser))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
  );
  
export const login = user => dispatch => (
    SessionApiUtil.login(user).then(currentUser => (
      dispatch(receiveCurrentUser(currentUser))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
  );
  
  export const logout = () => dispatch => (
    SessionApiUtil.logout().then(currentUser => (
      dispatch(logoutCurrentUser())
    ))
  );
  
