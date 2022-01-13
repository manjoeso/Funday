import {connect} from 'react-redux';
import RedirectToDash from './redirect_to_dash';
import { fetchAllWorkspaceData } from '../../actions/workspace_actions'
import { logout } from '../../actions/session_actions'


const mSTP = (state) => {
    
    return ({
        // workspaces: state.entities.workspaces[state.session.id],
        workspaces: Object.values(state.entities.workspaces),
        currentUser: state.entities.users[state.session.id]
    })
}


const mDTP = (dispatch) => ({
    fetchAllWorkspaceData: (userId) => (dispatch(fetchAllWorkspaceData(userId))),
    logout: () => (dispatch(logout()))
})
 
export default connect(mSTP, mDTP)(RedirectToDash)    