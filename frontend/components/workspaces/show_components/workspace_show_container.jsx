import {connect} from 'react-redux';
import WorkspaceShow from './workspace_show';
import { fetchAllWorkspaceData } from '../../../actions/workspace_actions'
// import { logout } from '../../actions/session_actions'

const mSTP = (state, ownProps) => ({
    workspaces: state.entities.workspaces[state.session.id],
    boards: state.entities.boards[ownProps.match.params.workspace_id],
    currentUser: state.entities.users[state.session.id]
})

const mDTP = (dispatch) => ({
    fetchAllWorkspaceData: (userId) => (dispatch(fetchAllWorkspaceData(userId))),
})

export default connect(mSTP, mDTP)(WorkspaceShow)     