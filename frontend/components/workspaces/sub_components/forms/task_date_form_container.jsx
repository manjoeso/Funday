import { connect } from 'react-redux';
import { updateTask } from '../../../../actions/task_actions';
import TaskDateForm from './task_date_form'


// const mSTP = (state) => ({
//     currentWorkspaceId: state.entities.users[state.session.id].current_workspace_id
// })

const mDTP = (dispatch) => ({
    updateTask: (task, id) => dispatch(updateTask(task, id))
})

export default connect(null, mDTP)(TaskDateForm)