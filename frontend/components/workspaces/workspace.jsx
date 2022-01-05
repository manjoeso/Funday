import React from 'react';
import WorkspaceIndexItem from './workspace_index_item'
class Workspace extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount () {
        this.props.fetchWorkspaces(this.props.currentUser.id);
    }

    render () {
            return (
                <div>
                    <ul>
                        {
                            this.props.workspaces.map((workspace, idx) => <WorkspaceIndexItem key={idx} workspace={workspace}/>)
                        }
                    </ul>
                    <ul>
                        {
                            //this.props.workspaces.forEach(workspace => workspace.board)
                        }
                    </ul>
                </div>
        )
    }
}

export default Workspace;