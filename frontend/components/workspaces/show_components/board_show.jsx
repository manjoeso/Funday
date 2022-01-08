import React from 'react';
import {Link} from 'react-router-dom'
import SidebarContainer from '../sub_components/sidebar_container'
import WorkspaceContainer from '../sub_components/workspace_container';
import BoardIndexContainer from '../sub_components/board_index_container';
import BoardDashboardContainer from '../sub_components/board_dashboard_container'

import { AuthRoute, ProtectedRoute } from '../../../util/route_util';


class BoardShow extends React.Component {
    constructor(props) {
        super(props)
       
    }

    componentDidMount () {
        // dispatch action, to set current board state to this.props.match.params.board_Id
    }

    // pass through current workspace to workspace container so 
    // we know which one is selected, eventually (when implementing drop down)
    
    render () {
        // debugger
        let currentWorkspaceId = this.props.match.params.workspace_id;
        let currentBoardId = this.props.match.params.board_id;
        if(this.props.workspaces){
            return (
                <div className='main-parent-container'>
                    <ProtectedRoute path="/"  component={SidebarContainer} />
                    <div className='dashboard-main-parent-container'>
                        <div className='workspace-board-parent-container'>
                            <WorkspaceContainer currentWorkspaceId={currentWorkspaceId}/> 
                            <BoardIndexContainer currentWorkspaceId={currentWorkspaceId} boards={this.props.boards}/>  
                        </div>
                        <div className='dashboard-container'>
                            <BoardDashboardContainer  
                                currentUser={this.props.currentUser}
                                currentBoardId={currentBoardId}
                            />
                        </div>
                    </div>
                </div>
            )
        } else {
            return null
        }
    }
}

export default BoardShow; 