import React from 'react';
import {Link} from 'react-router-dom'
import SidebarContainer from '../sub_components/sidebar_container'
import WorkspaceContainer from '../sub_components/workspace_container';
import BoardIndexContainer from '../sub_components/board_index_container';
import ProjectShowContainer from '../sub_components/project_show_container'
import ProjectFormContainer from '../sub_components/forms/create_project_form_container'
import BoardTitleFormContainer from '../sub_components/forms/board_title_form_container'

import { AuthRoute, ProtectedRoute } from '../../../util/route_util';


class BoardShow extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount () {
        if(this.props.workspaces.length < 1){
            this.props.fetchAllWorkspaceData(this.props.currentUser.id);
        }
    }

    componentDidUpdate () {
        if (this.props.currentUser.current_workspace_id !== parseInt(this.props.currentWorkspaceId)){
            this.props.assignCurrentWorkspace(this.props.currentUser, parseInt(this.props.currentWorkspaceId))
        }
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
        if(this.props.workspaces.length > 0){
            return (
                <div className='main-parent-container'>
                    <nav className='sidebar'>
                        <ProtectedRoute path="/"  component={SidebarContainer} />
                    </nav>
                    <section className='main-work-area'>
                        <nav className='workspace-board-parent-container'>
                            <WorkspaceContainer currentWorkspaceId={currentWorkspaceId}/> 
                            <BoardIndexContainer 
                                currentWorkspaceId={currentWorkspaceId}
                                boards={this.props.boards}
                                currentBoard={this.props.currentBoard}
                            />  
                        </nav>
                        <section className='dashboard-container'>
                            <div className='board-dashboard-banner'>
                                <BoardTitleFormContainer board={this.props.currentBoard}/> 
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
                        </section>
                    </section>
                </div>
            )
        } else {
            return null
        }
    }
}

export default BoardShow; 