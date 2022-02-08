import { RECEIVE_BOARD, REMOVE_BOARD } from '../../actions/board_actions';
import {RECEIVE_ALL_WORKSPACE_DATA} from '../../actions/workspace_actions'

const boardsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState)
    switch(action.type){ 
        case RECEIVE_ALL_WORKSPACE_DATA:
            return action.payload['boards'];
        case RECEIVE_BOARD:
            return Object.assign({}, oldState, {[action.board.id]: action.board})
        case REMOVE_BOARD:
            delete newState[action.board.id]
            return newState;
        default: 
            return oldState;
    }
}

export default boardsReducer; 