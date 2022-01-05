import {connect} from 'react-redux';
import Workspace from './workspace';
import { fetchWorkspaces } from '../../actions/workspace_actions'

const mSTP = (state) => ({
    workspaces: Object.values(state.entities.workspaces)
})

const mDTP = (dispatch) => ({
    fetchWorkspaces: (userId) => (dispatch(fetchWorkspaces(userId)))
})

export default connect(mSTP, mDTP)(Workspace)