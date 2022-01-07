import {connect} from 'react-redux';
import BoardShow from './board_index';

const mSTP = (state, ownProps) => ({
    boards: state.entities.projects[ownProps.match.params.board_id]
})

// const mDTP = (dispatch) => ({
    
// })

export default connect(mSTP, null)(BoardShow) 