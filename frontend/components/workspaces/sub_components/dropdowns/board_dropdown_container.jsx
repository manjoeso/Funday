import {connect} from 'react-redux';
import BoardDropdown from './board_dropdown';
import {deleteBoard} from '../../../../actions/board_actions'


// const mSTP = (state, ownProps) => ({
//     projects: state.entities.projects
// })

const mDTP = (dispatch) => ({
    deleteBoard: (board) => dispatch(deleteBoard(board))
})

export default connect(null, mDTP)(BoardDropdown)      