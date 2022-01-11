import {RECEIVE_CURRENT_USER, ASSIGN_WORKSPACE_ID} from '../../actions/session_actions'

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, oldState, { [action.currentUser.id]: action.currentUser })
        case ASSIGN_WORKSPACE_ID:
            action.currentUser['current_workspace_id'] = action.workspaceId
        default: 
            return oldState;
    }
}

export default usersReducer; 