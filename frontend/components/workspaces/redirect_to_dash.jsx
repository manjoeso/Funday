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
        
    }

    // will need logic here for new accounts, possibly to create a default workspace for them?
    // will need create route before tackling this..
    // what if a user deletes all of their workspaces? default?
    // need logic somewhere to clear the state upon logging out, right now it persists.
    render () {
        if (this.props.workspaces){
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


