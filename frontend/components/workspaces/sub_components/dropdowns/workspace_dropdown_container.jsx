import {connect} from 'react-redux';
import WorkspaceDropdown from './workspace_dropdown';
// import {deleteProject} from '../../../../actions/project_actions'


const mSTP = (state, ownProps) => {
    return ({
        workspaces: Object.values(state.entities.workspaces),
        currentWorkspace: state.entities.workspaces[state.entities.users[state.session.id].current_workspace_id],
        currentWorkspaceId: state.entities.users[state.session.id].current_workspace_id
    })
}

// const mDTP = (dispatch) => ({
// })

export default connect(mSTP, null)(WorkspaceDropdown)      