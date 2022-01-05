import {RECEIVE_WORKSPACES} from '../../actions/workspace_actions'

const workspacesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch(action.type){
        case RECEIVE_WORKSPACES:
            return Object.values(action.workspaces);
        default: 
            return oldState;
    }
}

export default workspacesReducer;