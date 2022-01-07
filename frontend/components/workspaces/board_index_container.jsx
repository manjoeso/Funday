import {connect} from 'react-redux';
import BoardIndex from './board_index';

const mSTP = (state, ownProps) => ({
    boards: state.entities.boards[ownProps.match.params.workspace_id]
})

// const mDTP = (dispatch) => ({
    
// })

export default connect(mSTP, null)(BoardIndex) 