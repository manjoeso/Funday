import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_SESSION_ERRORS} from '../../actions/session_actions'


const sessionReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, {id: action.currentUser.id});
        case LOGOUT_CURRENT_USER:
            return Object.assign({}, {id: null});
        default: 
            return oldState;
    }
}

export default sessionReducer