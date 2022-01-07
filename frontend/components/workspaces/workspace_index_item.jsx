import React from 'react';
import { Link } from 'react-router-dom'

class WorkspaceIndexItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            boards: this.props.workspace.boards
        }
    } 

    updateBoards () {
        // this.setState({boards: })
        console.log('updating!')
    }

    render () {
        return (
            <div>
                <li>
                    <Link to={`/workspaces/${this.props.workspace.id}`}>{this.props.workspace.title}</Link>
                </li>
            </div>

        )
    }
}

export default WorkspaceIndexItem;