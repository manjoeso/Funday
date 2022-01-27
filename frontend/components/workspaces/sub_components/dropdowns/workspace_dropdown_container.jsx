import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import WorkspaceDropdown from './workspace_dropdown';
import {assignCurrentWorkspace} from '../../../../actions/session_actions'
import { openModal } from '../../../../actions/modal_actions';



const mSTP = (state, ownProps) => {
    return ({
        workspaces: Object.values(state.entities.workspaces),
        currentWorkspace: state.entities.workspaces[state.entities.users[state.session.id].current_workspace_id],
        currentWorkspaceId: state.entities.users[state.session.id].current_workspace_id 
    })
}

const mDTP = (dispatch) => ({
    assignCurrentWorkspace: () => dispatch(assignCurrentWorkspace),
    openModal: (modal) => dispatch(openModal(modal))
})

export default connect(mSTP, mDTP)(WorkspaceDropdown)      