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

    // focusOrBlur(e) {
    //     e.preventDefault()
    //     debugger
    //     // let newState = !this.state.open
    //     this.setState( state => {
    //         return {
    //             open: !state.open
    //         }
    //     })
    // }

    // redirect (id) {
    //     return (
    //         <Redirect to={`/workspaces/${id}`}/>
    //     )
    // }

    handleClick (e) {
        e.preventDefault()
        this.setState( state => {
            return {
                open: !state.open
            }
        })
    }
    // onClick={this.handleClick} onFocus={this.focusOrBlur} onBlur={this.focusOrBlur}
    render() {
        if (this.props.currentWorkspace){
            return(
                <div className="workspace-dropdown-button">
                    <div onClick={this.handleClick} className='workspace-dropdown-button-container'>
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
                            {this.props.workspaces.map((workspace) => {
                                return (
                                    <li>
                                        <Link 
                                            key={workspace.id}
                                            className="workspace-inner-dropdown-button"
                                            to={`/workspaces/${workspace.id}`} 
                                        >
                                        {workspace.title}
                                        </Link>
                                    </li>
                                )
                            })
                        }
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