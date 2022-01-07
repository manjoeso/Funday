import {RECEIVE_BOARDS} from '../../actions/board_actions'

const boardsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch(action.type){ 
        case RECEIVE_BOARDS:
            return action.boards; // replaces current state with boards!
        default: 
            return oldState;
    }
}

export default boardsReducer;