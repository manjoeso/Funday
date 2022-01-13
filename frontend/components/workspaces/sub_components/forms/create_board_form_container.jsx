import { connect } from 'react-redux';
import BoardForm from './board_form';
import { createBoard } from '../../../../actions/board_actions';
import { createProject } from '../../../../actions/project_actions';
import { createTask } from '../../../../actions/task_actions';
import { closeModal } from '../../../../actions/modal_actions';
import {withRouter} from 'react-router'


const mSTP = (state) => ({
    board: {title: 'New Board' },
    currentWorkspaceId: state.entities.users[state.session.id].current_workspace_id
})

const mDTP = (dispatch) => ({
    createBoard: (board, currentWorkspaceId) => dispatch(createBoard(board, currentWorkspaceId)),
    createProject: (project, currentBoardId) => dispatch(createProject(project, currentBoardId)),
    createTask: (task) => dispatch(createTask(task)),
    closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(mSTP, mDTP)(BoardForm))