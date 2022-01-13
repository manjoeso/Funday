import React from 'react';
import { Link } from 'react-router-dom';

class WorkspaceDropdown extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            open: false,
            currentWorkspace: ''
        }
        // this.focusOrBlur = this.focusOrBlur.bind(this); 
        this.handleClick = this.handleClick.bind(this); 
    }

    handleClick (e) {
        e.preventDefault()
        this.setState( state => {
            return {
                open: !state.open
            }
        })
    }

    render() {
        if (this.props.currentWorkspace){
            return(
                <div className="workspace-dropdown-button-container">
                    <div onClick={this.handleClick} className='workspace-dropdown-button'>
                        <div className='workspace-dropdown-icon'>
                            {this.props.currentWorkspace.title[0]}
                        </div>
                        <div className='workspace-dropdown-title'>
                            {this.props.currentWorkspace.title}
                        </div>
                        <div className='arrow-icon'>
                            
                        </div>
                    </div>
                    <ul onClick={(e) => e.stopPropagation()} className={this.state.open ? "workspace-display-dropdown" : "no-dropdown"}>
                        <div className='workspace-inner-dropdown-container'>
                            <div className='workspace-inner-dropdown-title'>
                                My workspaces
                            </div>
                            {
                            this.props.workspaces.map((workspace) => {
                                return (
                                    // <li>
                                        <Link 
                                            key={workspace.id}
                                            className="workspace-inner-dropdown-button"
                                            to={`/workspaces/${workspace.id}`} 
                                            
                                        >
                                        {workspace.title}
                                        </Link>
                                    // </li>
                                )
                            })
                            }
                        </div>
                    </ul>
                </div>

            )
        } else {
            return (
                null
            )
        }
    }
}

export default WorkspaceDropdown;