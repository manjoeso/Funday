import * as WorkspaceApiUtil from '../util/entities_api_util';
export const CREATE_BOARD = 'CREATE_BOARD';


const addBoard = (board) => ({
    type: CREATE_BOARD, 
    board
}) 

export const createBoard = board => dispatch => (
    WorkspaceApiUtil.createBoard(board)
        .then(board => dispatch(addBoard(board)))
)
 