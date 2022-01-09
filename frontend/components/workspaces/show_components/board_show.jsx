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

        this.findCurrentBoard = this.findCurrentBoard.bind(this);
    }

    findCurrentBoard () {
        let currentBoardId = parseInt(this.props.match.params.board_id);

        this.boards.forEach( board => {
            if (board.id === currentBoardId) {
                this.currentBoard = board;
            }
        })
    }

    componentDidMount () {
        this.findCurrentBoard;
    }
    
    render () {
        let currentWorkspaceId = this.props.match.params.workspace_id;
        debugger

        this.findCurrentBoard;
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
                            <h1> This is the board dashboard container for board with id {this.props.currentBoardId}</h1> 
                            <h1></h1>
                            <ul>
                                {
                                    this.props.projects.map(project => <li key={project.id}>{project.title}</li>)
                                }
                            </ul>
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