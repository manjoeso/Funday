import {login, removeErrors} from '../../actions/session_actions'
import {connect} from 'react-redux'
import LoginForm from './login_form'

const mSTP = (state, ownProps) => ({
    errors: Object.values(state.errors.session),
    formType: 'login'
})

const mDTP = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors())
})

export default connect(mSTP, mDTP)(LoginForm); 