import React from 'react';
import {Link} from 'react-router-dom'

class WorkspaceIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            workspaces: []
        }

    }
    componentDidMount () {
        this.props.fetchAllWorkspaceData(this.props.currentUser.id);
    }

 
    render () {
        if(this.props.workspaces){
            return (
                <div className='workspace-parent-container'>
                    <div className='workspace-header'>
                        <h1>Workspaces</h1>
                    </div>
                    <div className='workspace-index-container'>
                        <ul> 
                            {this.props.workspaces.map((workspace) =>  <Link key={workspace.id}to={`/workspaces/${workspace.id}`}>{workspace.title}</Link>)}
                        </ul>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default WorkspaceIndex;