import {connect} from 'react-redux';
import {updateTask} from '../../../actions/task_actions'
import TaskIndexItem from './task_index_item'
// const mSTP = (state) => ({
    
// })

const mDTP = (dispatch) => ({
    updateTask: (task, id) => dispatch(updateTask(task, id))
})

export default connect(null, mDTP)(TaskIndexItem)