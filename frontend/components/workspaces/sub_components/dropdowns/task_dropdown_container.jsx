import {connect} from 'react-redux';
import TaskDropdown from './task_dropdown';
import {deleteTask} from '../../../../actions/task_actions'


// const mSTP = (state, ownProps) => ({
//     projects: state.entities.projects
// })

const mDTP = (dispatch) => ({
    deleteTask: (task) => dispatch(deleteTask(task))
})

export default connect(null, mDTP)(TaskDropdown)      