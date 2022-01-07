import {connect} from 'react-redux';
import Sidebar from './sidebar';
import { logout } from '../../actions/session_actions'

const mSTP = (state) => ({
})

const mDTP = (dispatch) => ({
    logout: () => (dispatch(logout()))
})

export default connect(null, mDTP)(Sidebar)