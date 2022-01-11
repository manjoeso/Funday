import * as WorkspaceApiUtil from '../util/entities_api_util';
export const CREATE_BOARD = 'CREATE_BOARD';
export const REMOVE_BOARD = 'REMOVE_BOARD';


const receiveBoard = (board) => ({
    type: CREATE_BOARD, 
    board
}) 

const removeBoard = (board) => ({
    type: REMOVE_BOARD, 
    board
}) 


export const createBoard = (board, currentWorkspaceId) => dispatch => (
    WorkspaceApiUtil.createBoard(board, currentWorkspaceId)
        .then(board => dispatch(receiveBoard(board)))
)


export const deleteBoard = (board) => dispatch => (
    WorkspaceApiUtil.deleteBoard(board)
        .then(board => dispatch(removeBoard(board)))
)
  