import * as WorkspaceApiUtil from '../util/entities_api_util';
export const CREATE_TASK = 'CREATE_TASK';


const receiveTask = (task) => ({
    type: CREATE_TASK, 
    task
}) 

export const createTask = (task, currentProjectId) => dispatch => (
    WorkspaceApiUtil.createTask(task, currentProjectId)
        .then(task => dispatch(receiveTask(task)))
)
  