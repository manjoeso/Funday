import {RECEIVE_ALL_WORKSPACE_DATA} from '../../actions/workspace_actions'
import { CREATE_BOARD } from '../../actions/board_actions';

const boardsReducer = (oldState = {}, action) => {
    // debugger
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState)
    debugger

    switch(action.type){ 
        case RECEIVE_ALL_WORKSPACE_DATA:
            return action.payload['boards'];
        case CREATE_BOARD:
            newState[action.board.workspace_id].push(action.board);
            return newState;
        default: 
            return oldState;
    }
}

export default boardsReducer;