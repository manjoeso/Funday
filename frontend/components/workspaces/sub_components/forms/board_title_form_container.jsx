import { connect } from 'react-redux';
import BoardTitleForm from './board_title_form';
import { updateBoard } from '../../../../actions/board_actions';


const mSTP = (state) => ({
    currentWorkspaceId: state.entities.users[state.session.id].current_workspace_id
})

const mDTP = (dispatch) => ({
    updateBoard: (board) => dispatch(updateBoard(board))
})

export default connect(mSTP, mDTP)(BoardTitleForm)