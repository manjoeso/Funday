import {connect} from 'react-redux';
import WelcomeDashboard from './welcome_dashboard';

const mSTP = (state, ownProps) => {
    return ({
        workspaces: Object.values(state.entities.workspaces),
        currentWorkspace: state.entities.workspaces[state.entities.users[state.session.id].current_workspace_id],
        currentWorkspaceId: state.entities.users[state.session.id].current_workspace_id 
    })
}

// const mDTP = (dispatch) => ({
// })

export default connect(mSTP, null)(WelcomeDashboard)      