import {RECEIVE_ALL_WORKSPACE_DATA} from '../../actions/workspace_actions'

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    
    let newState = Object.assign({}, oldState)
    switch(action.type){
        case RECEIVE_ALL_WORKSPACE_DATA:
            return Object.assign({}, newState, action.payload.workspaceUsers)
        default: 
            return oldState;
    } 
}

export default usersReducer; 