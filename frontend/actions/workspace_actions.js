import * as WorkspaceApiUtil from '../util/entities_api_util';
export const RECEIVE_ALL_WORKSPACE_DATA = 'RECEIVE_ALL_WORKSPACE_DATA';

const receiveAllWorkspaceData = (payload) => ({
    type: RECEIVE_ALL_WORKSPACE_DATA, 
    payload
}) 

export const fetchAllWorkspaceData = userId => dispatch => (
    WorkspaceApiUtil.fetchAllWorkspaceData(userId)
        .then(payload => dispatch(receiveAllWorkspaceData(payload)))
)
 