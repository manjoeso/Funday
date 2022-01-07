import * as WorkspaceApiUtil from '../util/entities_api_util';
export const RECEIVE_WORKSPACES = 'RECEIVE_WORKSPACES';


const receiveWorkspaces = (workspaces) => ({
    type: RECEIVE_WORKSPACES, 
    workspaces
}) 

export const fetchWorkspaces = userId => dispatch => (
    WorkspaceApiUtil.fetchWorkspaces(userId)
        .then(workspaces => dispatch(receiveWorkspaces(workspaces)))
)
 