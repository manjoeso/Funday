import React from 'react';
import {Link} from 'react-router-dom'

class Workspace extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            workspaces: []
        }

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
                            {this.props.workspaces.map((workspace) =>  
                                <Link 
                                    key={workspace.id} 
                                    to={`/workspaces/${workspace.id}`} 
                                    state={{ currentWorkspaceId: workspace.id }}
                                >
                                {workspace.title}
                                </Link>)
                            }
                        </ul>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default Workspace;