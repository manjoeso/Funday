import {RECEIVE_ALL_WORKSPACE_DATA} from '../../actions/workspace_actions'
import {RECEIVE_TASK, REMOVE_TASK} from '../../actions/task_actions'
import {RECEIVE_USERS_TASK, REMOVE_USERS_TASK} from '../../actions/users_tasks_actions'
const tasksReducer = (oldState = {}, action) => {
    
    Object.freeze(oldState);

    let newState = Object.assign({}, oldState)

    switch(action.type){ 
        case RECEIVE_ALL_WORKSPACE_DATA:
            return action.payload['tasks'];
        case RECEIVE_TASK:
            return Object.assign({}, oldState, {[action.task.id]: action.task})
        case REMOVE_TASK:
            delete newState[action.task.id]
            return newState;
        case RECEIVE_USERS_TASK:
            newState[action.usersTask.task_id].users.push({id: action.usersTask.user_id, join_id: action.usersTask.id})
            return newState;
        case REMOVE_USERS_TASK:
            newState[action.usersTask.task_id].users = newState[action.usersTask.task_id].users.filter(user => action.usersTask.id !== user.join_id);
            return newState;
        default: 
            return oldState;
    }
}

export default tasksReducer;