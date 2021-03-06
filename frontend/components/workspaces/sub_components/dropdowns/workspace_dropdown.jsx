import React from 'react';
import { Link } from 'react-router-dom';

class WorkspaceDropdown extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            show: false 
        }
        this.handleFocus = this.handleFocus.bind(this); 
        this.handleClick = this.handleClick.bind(this); 
    }

    assignColor (idx) {
        let colorOptions = {
            0: "#f279f2",
            1: "#f65f7c",
            2: "#595ad4",
            3: "#ff146e",
            4: "#784bd1"
        }

        return (
            colorOptions[idx % 5]
        )
    }

    handleClick () {
        this.props.openModal('addWorkspace')
        this.setState({show: false})
    }

    handleFocus (e) {
        if (e.target.tagName === 'A') {
            setTimeout(() => this.setState({show: false}), 200)
            // need to dispatch here?
            this.props.assignCurrentWorkspaceId
            return;
        }
        const newState = !this.state.show 
        setTimeout(() => this.setState({show: newState}), 200)
    }

    handleBlur () {
        this.setState({show: false})
    }

    // createWorkspace () {
    //     let workspace = {title: }
    //     this.props.createWorkspace()
    // }

    render() {
        if (this.props.currentWorkspace){
            return (
                <div onFocus={this.handleFocus} className="workspace-dropdown-button-container">
                    <button onBlur={this.handleFocus} className='workspace-dropdown-button'>
                        <div style={{backgroundColor: `${this.assignColor(this.props.workspaces.indexOf(this.props.currentWorkspace))}`}} className='workspace-dropdown-icon'>
                            {this.props.currentWorkspace.title[0]}
                        </div>
                        <div className='workspace-dropdown-title'>
                            {/* {this.props.currentWorkspace.title} */}
                            {this.props.currentWorkspace.title.length > 11 ? (`${this.props.currentWorkspace.title.slice(0, 11)}` + '...') : this.props.currentWorkspace.title}

                        </div>
                        <div className={this.state.show ? "workspace-display-dropdown" : "no-dropdown"}>
                            <div className='workspace-inner-dropdown-container'>
                                    <div className='workspace-inner-dropdown-title'>
                                        My workspaces
                                    </div>
                                    <div className='workspace-index-container'>
                                        {
                                        this.props.workspaces.map((workspace, idx) => {
                                            return (
                                                    <Link 
                                                        key={workspace.id}
                                                        className="workspace-inner-dropdown-button"
                                                        to={`/workspaces/${workspace.id}`} 
                                                    >
                                                    <span style={{'backgroundColor': this.assignColor(idx)}} className= 'workspace-dropdown-icon'>
                                                        {workspace.title[0]}
                                                    </span>
                                                    <span className='ws-list-title'>
                                                        {workspace.title.length > 16 ? (`${workspace.title.slice(0, 16)}` + '...') : workspace.title}
                                                    </span>
                                                    </Link>
                                                )
                                        })
                                        }
                                    </div>
                                    <div id='add-workspace'
                                         onClick={this.handleClick}
                                    >
                                    Add Workspace
                                    </div>
                            </div>
                        </div>
                        <div className='arrow-icon'>
                                {//placeholder for icon, in css
                                }
                        </div>
                    </button>
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
