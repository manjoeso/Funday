import {connect} from 'react-redux';
import Sidebar from './sidebar';
import { logout } from '../../../actions/session_actions'

const mSTP = (state) => ({
    workspaces: Object.values(state.entities.workspaces),
    currentUser: state.entities.users[state.session.id]
})

const mDTP = (dispatch) => ({
    logout: () => (dispatch(logout()))
})

export default connect(mSTP, mDTP)(Sidebar)