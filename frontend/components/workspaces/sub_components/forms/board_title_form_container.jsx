import { connect } from 'react-redux';
import BoardTitleForm from './board_title_form';
import { updateBoard } from '../../../../actions/board_actions';
import {openModal} from '../../../../actions/modal_actions'


const mSTP = (state, ownProps) => {
    return ({
        currentWorkspaceId: state.entities.users[state.session.id].current_workspace_id
    })
}

const mDTP = (dispatch) => ({
    updateBoard: (board) => dispatch(updateBoard(board)),
    openModal: modal => dispatch(openModal(modal))
})

export default connect(mSTP, mDTP)(BoardTitleForm)