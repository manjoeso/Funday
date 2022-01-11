import {connect} from 'react-redux';
import ProjectShow from './project_show';
// import {tasksSelector} from '../../selectors/tasks_selector'


const mSTP = (state) => ({
    tasks: state.entities.tasks
})

// const mDTP = (dispatch) => ({
    
// }) 

export default connect(mSTP, null)(ProjectShow)