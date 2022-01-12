import * as WorkspaceApiUtil from '../util/entities_api_util';
export const RECEIVE_TASK = 'RECEIVE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';


const receiveTask = (task) => ({
    type: RECEIVE_TASK, 
    task
}) 

const removeTask = (task) => ({
    type: REMOVE_TASK, 
    task
}) 

export const createTask = (task) => dispatch => (
    WorkspaceApiUtil.createTask(task)
        .then(task => dispatch(receiveTask(task)))
)

export const updateTask = (task, id) => dispatch => (
    WorkspaceApiUtil.updateTask(task, id)
        .then(task => dispatch(receiveTask(task)))
)
  
export const deleteTask = (task) => dispatch => (
    WorkspaceApiUtil.deleteTask(task)
        .then(task => dispatch(removeTask(task)))
)