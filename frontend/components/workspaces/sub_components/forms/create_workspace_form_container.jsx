import { connect } from 'react-redux';
import WorkspaceForm from './create_workspace_form';
import { createWorkspace } from '../../../../actions/workspace_actions';
import { createBoard } from '../../../../actions/board_actions';
import { createProject } from '../../../../actions/project_actions';
import { createTask } from '../../../../actions/task_actions';
import { closeModal } from '../../../../actions/modal_actions';
// import {withRouter} from 'react-router'


const mSTP = (state) => ({
    workspace: {title: 'New Workspace' },
    currentWorkspaceId: state.entities.users[state.session.id].current_workspace_id,
    currentUser: state.entities.users[state.session.id]
})

const mDTP = (dispatch) => ({
    createWorkspace: (workspace) => dispatch(createWorkspace(workspace)), 
    createBoard: (board, currentWorkspaceId) => dispatch(createBoard(board, currentWorkspaceId)),
    createProject: (project, currentBoardId) => dispatch(createProject(project, currentBoardId)),
    createTask: (task) => dispatch(createTask(task)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(WorkspaceForm)