import * as WorkspaceApiUtil from '../util/entities_api_util';
export const RECEIVE_USERS_TASK = 'RECEIVE_USERS_TASK';
export const REMOVE_USERS_TASK = 'REMOVE_USERS_TASK';


const receiveUsersTask = (usersTask) => ({
    type: RECEIVE_USERS_TASK, 
    usersTask
}) 

const removeUsersTask = (usersTask) => ({
    type: REMOVE_USERS_TASK, 
    usersTask
}) 

export const createUsersTask = (usersTask) => dispatch => (
    WorkspaceApiUtil.createUsersTask(usersTask)
        .then(usersTask => dispatch(receiveUsersTask(usersTask)))
)

export const deleteUsersTask = (usersTask) => dispatch => (
    WorkspaceApiUtil.deleteUsersTask(usersTask)
        .then(usersTask => dispatch(removeUsersTask(usersTask)))
)