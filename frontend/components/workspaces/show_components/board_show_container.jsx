import {connect} from 'react-redux';
import BoardShow from './board_show';
import { fetchAllWorkspaceData } from '../../../actions/workspace_actions'
import {boardsSelector} from '../../selectors/boards_selector'
import {projectsSelector} from '../../selectors/projects_selector'
import { assignCurrentWorkspace } from '../../../actions/session_actions'

const mSTP = (state, ownProps) => ({
    workspaces: Object.values(state.entities.workspaces),
    boards: boardsSelector(state.entities.boards, ownProps.match.params.workspace_id),
    projects: projectsSelector(state.entities.projects, ownProps.match.params.board_id).reverse(),
    currentUser: state.entities.users[state.session.id],
    currentBoard: state.entities.boards[ownProps.match.params.board_id],
    currentWorkspaceId: ownProps.match.params.workspace_id
})

const mDTP = (dispatch) => ({
    fetchAllWorkspaceData: (userId) => (dispatch(fetchAllWorkspaceData(userId))),
    assignCurrentWorkspace: (currentUser, workspaceId) => dispatch(assignCurrentWorkspace(currentUser, workspaceId))
})

export default connect(mSTP, mDTP)(BoardShow)     