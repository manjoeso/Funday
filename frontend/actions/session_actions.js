import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';


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

export const signup = (formUser) => {
    return function (dispatch) {
        return SessionApiUtil.signup(formUser)
        .then(currentUser => dispatch(receiveCurrentUser(currentUser)))
        .fail((errors) => dispatch(receiveErrors(errors.responseJson)))
    }
}

export const login = (formUser) => {
    return function (dispatch) {
        return SessionApiUtil.login(formUser)
        .then(currentUser => dispatch(receiveCurrentUser(currentUser)))
        .fail((errors) => dispatch(receiveErrors(errors.responseJson)))
    } 
}

export const logout = () => {
    return function (dispatch) {
        return SessionApiUtil.logout()
        .then(() => dispatch(logoutCurrentUser()))
        .fail((errors) => dispatch(receiveErrors(errors.responseJson)))
    } 
}

