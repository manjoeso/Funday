import { connect } from 'react-redux';
import ProjectForm from './project_form';
import { createProject } from '../../../../actions/project_actions';
import { createTask } from '../../../../actions/task_actions';
import {projectsSelector} from '../../../selectors/projects_selector'

const mSTP = (state, ownProps) => ({
        currentWorkspaceId: state.entities.users[state.session.id].current_workspace_id,
        firstProject: projectsSelector(state.entities.projects, ownProps.currentBoard.id).reverse()[0]
})

const mDTP = (dispatch) => ({
    createProject: (project, currentBoardId) => dispatch(createProject(project, currentBoardId)),
    createTask: (task) => dispatch(createTask(task))
})

export default connect(mSTP, mDTP)(ProjectForm)