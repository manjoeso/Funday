import {connect} from 'react-redux';
import BoardIndex from './board_index';
import { createBoard } from '../../../actions/board_actions'

const mSTP = (state, ownProps) => ({
    // boards: state.entities.boards[this.props.workspace.id]
})

const mDTP = (dispatch) => ({
}) 

export default connect(null, null)(BoardIndex)  