import * as WorkspaceApiUtil from '../util/entities_api_util';
export const CREATE_BOARD = 'CREATE_BOARD';


const addBoard = (board) => ({
    type: CREATE_BOARD, 
    board
}) 

export const createBoard = (board, currentWorkspaceId) => dispatch => (
    WorkspaceApiUtil.createBoard(board, currentWorkspaceId)
        .then(board => dispatch(addBoard(board)))
)
  