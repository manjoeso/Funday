import React from 'react';
import {Link} from 'react-router-dom'
import SidebarContainer from '../sub_components/sidebar_container'
import WorkspaceContainer from '../sub_components/workspace_container';
import BoardIndexContainer from '../sub_components/board_index_container';
import BoardDashboardContainer from '../sub_components/board_dashboard_container'
import ProjectShowContainer from '../sub_components/project_show_container'

import { AuthRoute, ProtectedRoute } from '../../../util/route_util';


class BoardShow extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render () {
        let currentWorkspaceId = this.props.match.params.workspace_id;
        debugger
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
                            <div className='board-dashboard-banner'>
                                <div className='banner-left'>
                                    <p>{this.props.currentBoard.title}</p> 
                                </div>
                                <div className='banner-right'>

                                </div>
                            </div>
                            <div className='project-parent-container'>
                                    {this.props.projects.map(project => 
                                    <ProjectShowContainer 
                                        key={project.id}
                                        project={project} 
                                        currentBoard={this.props.currentBoard}>
                                    </ProjectShowContainer>)}
                            </div>
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