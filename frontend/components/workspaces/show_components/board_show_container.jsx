import {connect} from 'react-redux';
import BoardShow from './board_show';
import {boardsSelector} from '../../selectors/boards_selector'

const mSTP = (state, ownProps) => ({
    // selectedBoard: state.entities.boards[ownProps.match.params.board_id], // this is incorrect
    boards: boardsSelector(state.entities.boardList, ownProps.match.params.workspace_id),
    workspaces: state.entities.workspaces[state.session.id],
    projects: state.entities.projects[ownProps.match.params.board_id],
    currentUser: state.entities.users[state.session.id],
    currentBoard: state.entities.boardList[ownProps.match.params.board_id]
})

// const mDTP = (dispatch) => ({

// })

export default connect(mSTP, null)(BoardShow)     