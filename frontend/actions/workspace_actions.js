import * as WorkspaceApiUtil from '../util/entities_api_util';
export const RECEIVE_ALL_WORKSPACE_DATA = 'RECEIVE_ALL_WORKSPACE_DATA';
export const RECEIVE_WORKSPACE = 'RECEIVE_WORKSPACE';
export const REMOVE_WORKSPACE = 'REMOVE_WORKSPACE';

const receiveAllWorkspaceData = (payload) => ({
    type: RECEIVE_ALL_WORKSPACE_DATA,  
    payload
}) 

const receiveWorkspace = (workspace) => ({
    type: RECEIVE_WORKSPACE,
    workspace
})

const removeWorkspace = (workspaceId) => ({
    type: REMOVE_WORKSPACE,
    workspaceId
})

export const fetchAllWorkspaceData = userId => dispatch => (
    WorkspaceApiUtil.fetchAllWorkspaceData(userId)
        .then(payload => dispatch(receiveAllWorkspaceData(payload)))
)

export const createWorkspace = workspace => dispatch => (
    WorkspaceApiUtil.createWorkspace(workspace)
        .then(payload => dispatch(receiveWorkspace(payload)))
)

export const updateWorkspace = workspace => dispatch => (
    WorkspaceApiUtil.updateWorkspace(workspace)
        .then(payload => dispatch(receiveWorkspace(payload)))
)


export const deleteWorkspace = workspaceId => dispatch => (
    WorkspaceApiUtil.deleteWorkspace(workspaceId)
        .then(dispatch(removeWorkspace(workspaceId)))
)

 