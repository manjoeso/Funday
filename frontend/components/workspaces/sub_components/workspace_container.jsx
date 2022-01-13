import {connect} from 'react-redux';
import Workspace from './workspace';
import { fetchAllWorkspaceData } from '../../../actions/workspace_actions'
import { logout } from '../../../actions/session_actions'

const mSTP = (state) => ({
    currentWorkspace: state.entities.workspaces[state.entities.users[state.session.id].current_workspace_id],
    workspaces: Object.values(state.entities.workspaces),
    currentUser: state.entities.users[state.session.id]
})

const mDTP = (dispatch) => ({
    fetchAllWorkspaceData: (userId) => (dispatch(fetchAllWorkspaceData(userId))),
    // fetchBoards: (workspaceId) => (dispatch(fetchBoards(workspaceId))),
    logout: () => (dispatch(logout()))
})

export default connect(mSTP, mDTP)(Workspace)     