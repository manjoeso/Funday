import * as WorkspaceApiUtil from '../util/entities_api_util';
export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';


const receiveBoards = (boards) => ({
    type: RECEIVE_BOARDS, 
    boards
}) 

export const fetchBoards = workspaceId => dispatch => (
    WorkspaceApiUtil.fetchBoards(workspaceId)
        .then(boards => dispatch(receiveBoards(boards)))
)
 