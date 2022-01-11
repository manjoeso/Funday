import { CREATE_PROJECT } from '../../actions/project_actions';
import {RECEIVE_ALL_WORKSPACE_DATA} from '../../actions/workspace_actions'

const projectsReducer = (oldState = {}, action) => {
    
    Object.freeze(oldState);

    switch(action.type){ 
        case RECEIVE_ALL_WORKSPACE_DATA:
            return action.payload['projects'];
        case CREATE_PROJECT:
            return Object.assign({}, oldState, {[action.project.id]: action.project})
        default: 
            return oldState;
    }
}

export default projectsReducer;