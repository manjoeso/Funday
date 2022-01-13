import React from 'react'
import {Redirect} from 'react-router-dom'
import SidebarContainer from './sub_components/sidebar_container'
import { AuthRoute, ProtectedRoute } from '../../util/route_util';

class RedirectToDash extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount () {
        this.props.fetchAllWorkspaceData(this.props.currentUser.id);
        // this.props.assignCurrentWorkspace(this.props.currentUser, this.props.workspaces[0].id)
    }
   
    // need logic somewhere to clear the state upon logging out, right now it persists.
    render () {
        if (this.props.workspaces.length > 0){
            let id = this.props.workspaces[0].id
            return(
                <Redirect to={`/workspaces/${id}`}/>
            )
            } else {
                return (
                    <div>
                        <h1>Loading!</h1>
                        <button onClick={()=> this.props.logout()}>Logout</button>
                    </div>
                )
            }
    }
}

export default RedirectToDash;


