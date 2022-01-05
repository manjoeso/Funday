import React from 'react';
import { Link } from 'react-router-dom'

class WorkspaceIndexItem extends React.Component {
    constructor(props){
        super(props)
    }
    
    render () {
        return (
            <li>
                <Link to=''>{this.props.workspace.title}</Link>
            </li>
        )
    }
}

export default WorkspaceIndexItem;