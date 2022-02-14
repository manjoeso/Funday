import {connect} from 'react-redux';
import BoardShow from './board_show';
import { fetchAllWorkspaceData } from '../../../actions/workspace_actions'
import { createProject } from '../../../actions/project_actions'
import { createTask } from '../../../actions/task_actions'
import {boardsSelector} from '../../selectors/boards_selector'
import {projectsSelector} from '../../selectors/projects_selector'
import {boardTasksSelector} from '../../selectors/board_tasks_selector'
import { assignCurrentWorkspace } from '../../../actions/session_actions'

const mSTP = (state, ownProps) => ({
    workspaces: Object.values(state.entities.workspaces),
    boards: boardsSelector(state.entities.boards, ownProps.match.params.workspace_id),
    projects: projectsSelector(state.entities.projects, ownProps.match.params.board_id).reverse(),
    currentUser: state.entities.users[state.session.id],
    currentBoard: state.entities.boards[ownProps.match.params.board_id],
    currentWorkspaceId: ownProps.match.params.workspace_id,
    firstProject: projectsSelector(state.entities.projects, ownProps.match.params.board_id).reverse()[0],
    allTasks: boardTasksSelector(state, ownProps)
}) 

const mDTP = (dispatch) => ({
    fetchAllWorkspaceData: (userId) => (dispatch(fetchAllWorkspaceData(userId))),
    assignCurrentWorkspace: (currentUser, workspaceId) => dispatch(assignCurrentWorkspace(currentUser, workspaceId)),
    createProject: (project, currentBoardId) => dispatch(createProject(project, currentBoardId)),
    createTask: (task) => dispatch(createTask(task))
})

export default connect(mSTP, mDTP)(BoardShow)     