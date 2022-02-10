import { connect } from 'react-redux';
import UserInviteModal from './user_invite_modal';
import {usersWorkspacesSelector} from '../selectors/users_workspaces_selector'
import {closeModal} from '../../actions/modal_actions'

const mSTP = (state, ownProps) => {
    return ({
        workspaceUsers: usersWorkspacesSelector(state)
    })
}

const mDTP = (dispatch) => ({
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(UserInviteModal)