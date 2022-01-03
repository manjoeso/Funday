import {signup} from '../../actions/session_actions'
import {connect} from 'react-redux'
import SessionForm from './session_form'

const mSTP = (state, ownProps) => ({
    errors: Object.values(state.errors.session),
    formType: 'signup'
})

const mDTP = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(signup(user))
})

export default connect(mSTP, mDTP)(SessionForm);