import {connect} from 'react-redux';
import {updateProject} from '../../../actions/project_actions'
import ProjectTitleForm from './project_title_form'
// const mSTP = (state) => ({
    
// })

const mDTP = (dispatch) => ({
    updateProject: (project, id) => dispatch(updateProject(project, id))
})

export default connect(null, mDTP)(ProjectTitleForm)