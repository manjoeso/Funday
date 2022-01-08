import {connect} from 'react-redux';
import RedirectToDash from './redirect_to_dash';
import { fetchAllWorkspaceData } from '../../actions/workspace_actions'
import { logout } from '../../actions/session_actions'

const mSTP = (state) => ({
    workspaces: state.entities.workspaces[state.session.id],
    currentUser: state.entities.users[state.session.id]
})


const mDTP = (dispatch) => ({
    fetchAllWorkspaceData: (userId) => (dispatch(fetchAllWorkspaceData(userId))),
    logout: () => (dispatch(logout()))
})
 
export default connect(mSTP, mDTP)(RedirectToDash)    