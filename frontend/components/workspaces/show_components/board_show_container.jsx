import {connect} from 'react-redux';
import BoardShow from './board_show';
import {boardsSelector} from '../../selectors/boards_selector'
import {projectsSelector} from '../../selectors/projects_selector'

const mSTP = (state, ownProps) => ({
    workspaces: Object.values(state.entities.workspaces),
    boards: boardsSelector(state.entities.boards, ownProps.match.params.workspace_id),
    projects: projectsSelector(state.entities.projects, ownProps.match.params.board_id),
    currentUser: state.entities.users[state.session.id],
    currentBoard: state.entities.boards[ownProps.match.params.board_id]
})

// const mDTP = (dispatch) => ({
    // assignCurrentWorkspace: (currentUser, workspaceId) => dispatch(assignCurrentWorkspace(currentUser, workspaceId))
// })

export default connect(mSTP, null)(BoardShow)     