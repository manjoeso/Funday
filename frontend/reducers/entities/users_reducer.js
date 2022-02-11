import {RECEIVE_CURRENT_USER, ASSIGN_WORKSPACE_ID} from '../../actions/session_actions'
import {RECEIVE_ALL_WORKSPACE_DATA} from '../../actions/workspace_actions'

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    // debugger
    
    let newState = Object.assign({}, oldState)
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, oldState, { [action.currentUser.id]: action.currentUser })
        case ASSIGN_WORKSPACE_ID:
            newState[action.currentUser.id].current_workspace_id = action.workspaceId
            return newState;
        case RECEIVE_ALL_WORKSPACE_DATA:
            return Object.assign({}, newState, action.payload.users)
        default: 
            return oldState;
    } 
}

export default usersReducer; 