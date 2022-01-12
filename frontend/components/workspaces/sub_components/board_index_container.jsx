import {connect} from 'react-redux';
import BoardIndex from './board_index';
import {openModal} from '../../../actions/modal_actions'


const mSTP = (state, ownProps) => ({
    currentWorkspaceId: state.entities.users[state.session.id].current_workspace_id // adding in this causes issues with workspace/board selection
})

const mDTP = (dispatch) => ({
    openModal: (modal) => dispatch(openModal(modal))
})

export default connect(null, mDTP)(BoardIndex)     