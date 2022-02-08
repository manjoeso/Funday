import { connect } from 'react-redux';
import WorkspaceTitleForm from './workspace_title_form';
import { updateWorkspace } from '../../../../actions/workspace_actions';


const mSTP = (state) => ({
    currentWorkspaceId: state.entities.users[state.session.id].current_workspace_id
})

const mDTP = (dispatch) => ({
    updateWorkspace: (workspace) => dispatch(updateWorkspace(workspace))
})

export default connect(mSTP, mDTP)(WorkspaceTitleForm)