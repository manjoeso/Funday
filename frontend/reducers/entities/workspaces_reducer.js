import {RECEIVE_ALL_WORKSPACE_DATA, RECEIVE_WORKSPACE} from '../../actions/workspace_actions'

const workspacesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState)
    switch(action.type){ 
        case RECEIVE_ALL_WORKSPACE_DATA:
            return action.payload['workspaces'];
        case RECEIVE_WORKSPACE:
            return Object.assign({}, newState, {[action.workspace.id]: action.workspace})
        default: 
            return oldState;
    }
}

export default workspacesReducer;