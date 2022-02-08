import {RECEIVE_ALL_WORKSPACE_DATA, RECEIVE_WORKSPACE, REMOVE_WORKSPACE} from '../../actions/workspace_actions'

const workspacesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState)
    switch(action.type){ 
        case RECEIVE_ALL_WORKSPACE_DATA:
            return action.payload['workspaces'];
        case RECEIVE_WORKSPACE:
            return Object.assign({}, newState, {[action.workspace.id]: action.workspace})
        case REMOVE_WORKSPACE:
            delete newState[action.workspaceId]
            return newState;
        default: 
            return oldState;
    }
}

export default workspacesReducer;