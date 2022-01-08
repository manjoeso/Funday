import {connect} from 'react-redux';
import BoardShow from './board_show';
// import { logout } from '../../actions/session_actions'

const mSTP = (state, ownProps) => ({
    // selectedBoard: state.entities.boards[ownProps.match.params.board_id], // this is incorrect
    boards: state.entities.boards[ownProps.match.params.workspace_id],
    workspaces: state.entities.workspaces[state.session.id],
    currentUser: state.entities.users[state.session.id]
})

// const mDTP = (dispatch) => ({
// })

export default connect(mSTP, null)(BoardShow)     