import { connect } from 'react-redux';
import BoardForm from './board_form';
import { createBoard } from '../../../../actions/board_actions';

const mSTP = (state) => ({
    board: {title: '' },
    currentWorkspaceId: state.entities.users[state.session.id].current_workspace_id
})

const mDTP = (dispatch) => ({
    createBoard: (board, currentWorkspaceId) => dispatch(createBoard(board, currentWorkspaceId))
})

export default connect(mSTP, mDTP)(BoardForm)