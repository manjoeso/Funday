import {RECEIVE_ALL_WORKSPACE_DATA} from '../../actions/workspace_actions'
import {CREATE_TASK} from '../../actions/task_actions'

const tasksReducer = (oldState = {}, action) => {
    
    Object.freeze(oldState);

    switch(action.type){ 
        case RECEIVE_ALL_WORKSPACE_DATA:
            return action.payload['tasks'];
        case CREATE_TASK:
            return Object.assign({}, oldState, {[action.task.id]: action.task})
        default: 
            return oldState;
    }
}

export default tasksReducer;