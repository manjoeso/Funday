import {connect} from 'react-redux';
import BoardDashboard from './board_dashboard';


const mSTP = (state, ownProps) => ({
    // projects: state.entities.projects[ownProps.match.params.board_id]
})

// const mDTP = (dispatch) => ({
// })

export default connect(null, null)(BoardDashboard)      