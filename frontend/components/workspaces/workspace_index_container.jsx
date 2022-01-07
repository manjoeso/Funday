import {connect} from 'react-redux';
import WorkspaceIndex from './workspace_index';
import { fetchWorkspaces } from '../../actions/workspace_actions'
import { fetchBoards } from '../../actions/board_actions'
import { logout } from '../../actions/session_actions'

const mSTP = (state) => ({
    workspaces: Object.values(state.entities.workspaces),
    boards: Object.values(state.entities.boards),
    currentUser: state.entities.users[state.session.id]
})

const mDTP = (dispatch) => ({
    fetchWorkspaces: (userId) => (dispatch(fetchWorkspaces(userId))),
    fetchBoards: (workspaceId) => (dispatch(fetchBoards(workspaceId))),
    logout: () => (dispatch(logout()))
})

export default connect(mSTP, mDTP)(WorkspaceIndex) 