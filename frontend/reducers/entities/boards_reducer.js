import {RECEIVE_ALL_WORKSPACE_DATA} from '../../actions/workspace_actions'

const boardsReducer = (oldState = {}, action) => {
    
    Object.freeze(oldState);

    switch(action.type){ 
        case RECEIVE_ALL_WORKSPACE_DATA:
            return action.payload['boards'];
        default: 
            return oldState;
    }
}

export default boardsReducer;