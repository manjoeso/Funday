import { connect } from 'react-redux';
import BoardForm from './board_form';
import { createBoard } from '../../../../actions/board_actions';
import { createProject } from '../../../../actions/project_actions';
import { closeModal } from '../../../../actions/modal_actions';


const mSTP = (state) => ({
    board: {title: '' },
    currentWorkspaceId: state.entities.users[state.session.id].current_workspace_id
})

const mDTP = (dispatch) => ({
    createBoard: (board, currentWorkspaceId) => dispatch(createBoard(board, currentWorkspaceId)),
    createProject: (project, currentBoardId) => dispatch(createProject(project, currentBoardId)),
    closeModal: () => dispatch(closeModal())

})

export default connect(mSTP, mDTP)(BoardForm)