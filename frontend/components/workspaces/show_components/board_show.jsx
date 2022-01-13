import React from 'react';
import {Link} from 'react-router-dom'
import SidebarContainer from '../sub_components/sidebar_container'
import WorkspaceContainer from '../sub_components/workspace_container';
import BoardIndexContainer from '../sub_components/board_index_container';
import ProjectShowContainer from '../sub_components/project_show_container'
import ProjectFormContainer from '../sub_components/forms/create_project_form_container'
import EditBoardFormContainer from '../sub_components/forms/edit_board_form_container'

import { AuthRoute, ProtectedRoute } from '../../../util/route_util';


class BoardShow extends React.Component {
    constructor(props) {
        super(props)
    }

    assignColor (idx) {
        let colorOptions = {
            0: "#579BFC",
            1: "#A25DDC",
            2: "#C4C4C4",
            3: "#CAB641",
            4: "#784bd1"
        }

        return (
            colorOptions[idx % 5]
        )
    }

    render () {
        let currentWorkspaceId = this.props.match.params.workspace_id;
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
                                <EditBoardFormContainer board={this.props.currentBoard}/>
                                <div className='banner-right'>

                            </div>  
                            </div>
                        
                            <div className='project-nav-bar'>
                                <ProjectFormContainer currentBoard={this.props.currentBoard}/>
                               
                            </div>
                            <div className='projects-parent-container'>
                                    {this.props.projects.map((project, idx) => 
                                    <ProjectShowContainer 
                                        key={project.id}
                                        project={project} 
                                        currentBoard={this.props.currentBoard}
                                        color={this.assignColor(idx)}
                                        >
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