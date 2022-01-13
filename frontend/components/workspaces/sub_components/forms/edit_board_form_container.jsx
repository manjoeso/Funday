import { connect } from 'react-redux';
import EditBoardForm from './edit_board_form';
// import { editBoard } from '../../../../actions/board_actions';


const mSTP = (state) => ({
    currentWorkspaceId: state.entities.users[state.session.id].current_workspace_id
})

// const mDTP = (dispatch) => ({
//     editBoard: (board, currentWorkspaceId) => dispatch(editBoard(board, currentWorkspaceId))

// })

export default connect(mSTP, null)(EditBoardForm)