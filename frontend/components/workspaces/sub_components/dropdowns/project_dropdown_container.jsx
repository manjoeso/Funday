import {connect} from 'react-redux';
import ProjectDropdown from './project_dropdown';
import {deleteProject} from '../../../../actions/project_actions'


// const mSTP = (state, ownProps) => ({
//     projects: state.entities.projects
// })

const mDTP = (dispatch) => ({
    deleteProject: (project) => dispatch(deleteProject(project))
})

export default connect(null, mDTP)(ProjectDropdown)      