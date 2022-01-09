import {connect} from 'react-redux';
import Sidebar from './sidebar';
import { logout } from '../../../actions/session_actions'

const mSTP = (state) => ({
    workspaces: state.entities.workspaces[state.session.id],
    currentUser: state.entities.users[state.session.id]
})

const mDTP = (dispatch) => ({
    logout: () => (dispatch(logout()))
})

export default connect(mSTP, mDTP)(Sidebar)