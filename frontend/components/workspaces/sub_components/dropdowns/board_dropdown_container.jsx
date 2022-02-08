import {connect} from 'react-redux';
import BoardDropdown from './board_dropdown';
import {deleteBoard} from '../../../../actions/board_actions'
import {withRouter} from 'react-router'


const mSTP = (state, ownProps) => ({
    currentWorkspaceId: state.entities.users[state.session.id].current_workspace_id
})

const mDTP = (dispatch) => ({
    deleteBoard: (board) => dispatch(deleteBoard(board))
})

export default withRouter(connect(mSTP, mDTP)(BoardDropdown))      