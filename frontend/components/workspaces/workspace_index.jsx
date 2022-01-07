import React from 'react';
import WorkspaceIndexItem from './workspace_index_item';
// import WorkspaceIndexItem from './workspace_index_item';

class WorkspaceIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            workspaces: []
        }

    }
    componentDidMount () {
        this.props.fetchWorkspaces(this.props.currentUser.id);
        // debugger
        // this.setState({workspaces: this.props.workspaces})
        
    }

 
    render () {
            return (
                <div className='workspace-board-container'>
                    <div className='workspace-parent-container'>
                        <h1>Workspaces</h1>
                        <div className='workspace-container'>
                            <ul>
                                {this.props.workspaces.map((workspace, idx) => <WorkspaceIndexItem key={idx} workspace={workspace}/>)}
                            </ul>
                                {
                                    // this.props.workspaces.forEach(workspace => workspace.board)
                                }
                        </div>
                    </div>
                    <div className='board-parent-container'>
                        <h1>Boards</h1>
                        <ul>

                        </ul>                        
                    </div>
            </div>
            )
    }
}

export default WorkspaceIndex;