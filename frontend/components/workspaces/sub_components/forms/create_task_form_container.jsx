import { connect } from 'react-redux';
import TaskForm from './task_form';
import { createTask } from '../../../../actions/task_actions';

const mSTP = (state, ownProps) => {
    // debugger
    return ({
        task: {title: '', project_id: ownProps.project.id },
    })
}

const mDTP = (dispatch) => ({
    createTask: (task) => dispatch(createTask(task))
})

export default connect(mSTP, mDTP)(TaskForm)