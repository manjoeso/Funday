import * as WorkspaceApiUtil from '../util/entities_api_util';
export const RECEIVE_USERS_TASK = 'RECEIVE_USERS_TASK';


const receiveUsersTask = (task) => ({
    type: RECEIVE_USERS_TASK, 
    usersTask
}) 

export const createUsersTask = (usersTask) => dispatch => (
    WorkspaceApiUtil.createUsersTask(usersTask)
        .then(usersTask => dispatch(receiveUsersTask(usersTask)))
)