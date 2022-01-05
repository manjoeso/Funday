import React from 'react';
import WorkspaceIndexItem from './workspace_index_item';


class Homepage extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount () {
        this.props.fetchWorkspaces(this.props.currentUser.id);
    }

    render () {
            return (
                <div className='homepage-parent-container'>
                    <div className='sidebar'>
                        <div className='logout-button'>
                            <button onClick={()=> this.props.logout()}>Logout</button>
                        </div>
                    </div>
                    <div className='main-work-area'>
                        <div className='workspace-board-container'>
                            <div className='workspace-parent-container'>
                                <h1>Workspaces</h1>
                                <div className='workspace-container'>
                                    <ul>
                                        {this.props.workspaces.map((workspace, idx) => <WorkspaceIndexItem key={idx} workspace={workspace}/>)}
                                    </ul>
                                        { // my line of thinking is this - css classes - workspace container, parent, workspace board container - will all be INSIDE workspace index item? 
                                        // from there, boards nested inside, projects/tasks nested inside boards? this way, we have access to all the necessary info and the correct 
                                        // ids are availabale and pushed to display
                                            //this.props.workspaces.forEach(workspace => workspace.board)
                                        }
                                </div>
                            </div>
                            <div className='board-parent-container'>
                                <h1>Boards go here</h1>                        
                            </div>
                        </div>
                    </div>
                </div>
            )
    }
}

export default Homepage;