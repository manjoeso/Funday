import * as WorkspaceApiUtil from '../util/entities_api_util';
export const CREATE_PROJECT = 'CREATE_PROJECT';


const receiveProject = (project) => ({
    type: CREATE_PROJECT, 
    project
}) 

export const createProject = (project, currentBoardId) => dispatch => (
    WorkspaceApiUtil.createProject(project, currentBoardId)
        .then(project => dispatch(receiveProject(project)))
)
  