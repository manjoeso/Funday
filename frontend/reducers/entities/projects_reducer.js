import {RECEIVE_ALL_WORKSPACE_DATA} from '../../actions/workspace_actions'

const projectsReducer = (oldState = {}, action) => {
    
    Object.freeze(oldState);

    switch(action.type){ 
        case RECEIVE_ALL_WORKSPACE_DATA:
            return action.payload['projects'];
        default: 
            return oldState;
    }
}

export default projectsReducer;