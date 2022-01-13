import { RECEIVE_PROJECT, REMOVE_PROJECT } from '../../actions/project_actions';
import {RECEIVE_ALL_WORKSPACE_DATA} from '../../actions/workspace_actions'

const projectsReducer = (oldState = {}, action) => {
    
    Object.freeze(oldState);

    let newState = Object.assign({}, oldState)

    switch(action.type){ 
        case RECEIVE_ALL_WORKSPACE_DATA:
            return action.payload['projects']; 
        case RECEIVE_PROJECT:
            return Object.assign({}, oldState, {[action.project.id]: action.project})
        case REMOVE_PROJECT:
            delete newState[action.project.id]
            return newState;
        default: 
            return oldState;
    }
}

export default projectsReducer;