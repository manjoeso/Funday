import React from 'react';
import {Link, useLocation} from 'react-router-dom'
import SidebarContainer from '../sub_components/sidebar_container'
import WorkspaceContainer from '../sub_components/workspace_container';
import BoardIndexContainer from '../sub_components/board_index_container';
import WelcomeDashboard from '../sub_components/welcome_dashboard'
import { AuthRoute, ProtectedRoute } from '../../../util/route_util';


class WorkspaceShow extends React.Component {
    constructor(props) {
        super(props)


    }
    componentDidMount () {
        this.props.fetchAllWorkspaceData(this.props.currentUser.id);
    }

    componentDidUpdate () {
        this.props.assignCurrentWorkspace(this.props.currentUser, parseInt(this.props.currentWorkspaceId))
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
                            <WorkspaceContainer/> 
                            <BoardIndexContainer currentWorkspaceId={currentWorkspaceId} boards={this.props.boards}/>  
                        </nav>
                        <section className='dashboard-container'>
                            <WelcomeDashboard  currentUser={this.props.currentUser}/>
                        </section>
                    </section>
                </div>
            )
        } else {
            return null 
        }
    }
}

export default WorkspaceShow; 