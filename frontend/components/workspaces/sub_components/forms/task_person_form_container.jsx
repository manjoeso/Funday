import { connect } from 'react-redux';
import { createUsersTask, deleteUsersTask } from '../../../../actions/users_tasks_actions';
import TaskPersonForm from './task_person_form'
import {usersWorkspacesSelector} from '../../../selectors/users_workspaces_selector'
import {usersTasksSelector} from '../../../selectors/users_tasks_selector'

const mSTP = (state, ownProps) => {
    // debugger
    return ({
        taskUsers: usersTasksSelector(state, ownProps),
        workspaceUsers: usersWorkspacesSelector(state, ownProps)
    })
}

const mDTP = (dispatch) => ({
    createUsersTask: (usersTask) => dispatch(createUsersTask(usersTask)),
    deleteUsersTask: (joinId) => dispatch(deleteUsersTask(joinId))
})

export default connect(mSTP, mDTP)(TaskPersonForm)