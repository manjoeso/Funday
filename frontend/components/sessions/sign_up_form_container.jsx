import {signup, login, removeErrors} from '../../actions/session_actions'
import {connect} from 'react-redux'
import SignupForm from './signup_form'

const mSTP = (state, ownProps) => ({
    errors: Object.values(state.errors.session),
    formType: 'signup'
})

const mDTP = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors())
})

export default connect(mSTP, mDTP)(SignupForm); 