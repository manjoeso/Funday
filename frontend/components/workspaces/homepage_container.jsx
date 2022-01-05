import {connect} from 'react-redux';
import Homepage from './homepage';
import { fetchWorkspaces } from '../../actions/workspace_actions'
import { logout } from '../../actions/session_actions'

const mSTP = (state) => ({
    workspaces: Object.values(state.entities.workspaces)
})

const mDTP = (dispatch) => ({
    fetchWorkspaces: (userId) => (dispatch(fetchWorkspaces(userId))),
    logout: () => (dispatch(logout()))
})

export default connect(mSTP, mDTP)(Homepage)