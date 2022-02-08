import {connect} from 'react-redux'
import WorkspaceDeleteDropdown from './workspace_delete_dropdown'
import {deleteWorkspace} from '../../../../actions/workspace_actions'


const mSTP = (state) => ({
    currentWorkspaceId: state.entities.users[state.session.id].current_workspace_id
})

const mDTP = (dispatch) => ({
    deleteWorkspace: (workspaceId) => dispatch(deleteWorkspace(workspaceId))
})

export default connect(mSTP, mDTP)(WorkspaceDeleteDropdown)