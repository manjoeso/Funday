import { connect } from 'react-redux';
import ProjectForm from './project_form';
import { createProject } from '../../../../actions/project_actions';

const mSTP = (state) => ({
    project: {title: '' },
    currentWorkspaceId: state.entities.users[state.session.id].current_workspace_id
})

const mDTP = (dispatch) => ({
    createProject: (project, currentBoardId) => dispatch(createProject(project, currentBoardId))
})

export default connect(mSTP, mDTP)(ProjectForm)