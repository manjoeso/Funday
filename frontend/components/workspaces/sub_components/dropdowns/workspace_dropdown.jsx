import React from 'react';
import {Link, Redirect} from 'react-router-dom'

class WorkspaceDropdown extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            open: false,
            currentWorkspace: ''
        }
        this.focusOrBlur = this.focusOrBlur.bind(this); 
    }

    focusOrBlur(e) {
        let newState = !this.state.open
        this.setState({ 
            open: newState
        })
    }

    // redirect (id) {
    //     return (
    //         <Redirect to={`/workspaces/${id}`}/>
    //     )
    // }

    render() {
        if (this.props.currentWorkspace){
            return(
                <button onFocus={this.focusOrBlur} onBlur={this.focusOrBlur} className="workspace-dropdown-button">
                    <div className='workspace-dropdown-button-container'>
                        <div className='workspace-dropdown-icon'>
                            {this.props.currentWorkspace.title[0]}
                        </div>
                        <div className='workspace-dropdown-title'>
                            {this.props.currentWorkspace.title}
                        </div>
                        <div class='arrow-icon'>
                            
                        </div>
                        <ul onClick={e => e.stopPropagation()} className={this.state.open ? "workspace-display-dropdown" : "no-dropdown"}>
                                {this.props.workspaces.map((workspace) =>  
                                        <Link 
                                            key={workspace.id}
                                            className="workspace-inner-dropdown-button"
                                            to={`/workspaces/${workspace.id}`} 
                                        >{workspace.title}
                                    </Link>
                                    // <button onClick={() => redirect(workspace.id)}>{workspace.title}</button>
                                )
                                }
                        </ul>
                    </div>
                </button>

            )
        } else {
            return (
                null
            )
        }
    }
}

export default WorkspaceDropdown;