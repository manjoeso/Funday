import { CREATE_BOARD } from '../../actions/board_actions';
import {RECEIVE_ALL_WORKSPACE_DATA} from '../../actions/workspace_actions'

const boardReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    
    switch(action.type){ 
        case RECEIVE_ALL_WORKSPACE_DATA:
            return action.payload['board'];
        case CREATE_BOARD:
            return Object.assign({}, oldState, {[action.board.id]: action.board})
        default: 
            return oldState;
    }
}

export default boardReducer;