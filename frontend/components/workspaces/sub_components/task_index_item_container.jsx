import {connect} from 'react-redux';
import {updateTask} from '../../../actions/task_actions'
import TaskIndexItem from './task_index_item'
import {assignCurrentWorkspace} from '../../../actions/session_actions'  


const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id]
})
const mDTP = (dispatch) => ({
    updateTask: (task, id) => dispatch(updateTask(task, id)),
    assignCurrentWorkspace: (currentUser, workspaceId) => dispatch(assignCurrentWorkspace(currentUser, workspaceId))
})

export default connect(mSTP, mDTP)(TaskIndexItem)