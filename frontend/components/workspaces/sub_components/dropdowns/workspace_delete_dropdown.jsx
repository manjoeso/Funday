import React from 'react'

class WorkspaceDeleteDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
    }

    handleClick () {
        let newState = !this.state.show
        this.setState({show: newState})
    }

    handleBlur () {
        this.setState({show: false})
    }

    render() { 
        return ( 
            <div className='workspace-header'>
                <div className='workspace'>
                    Workspace
                </div>
                <div className='workspace-delete-button-container'>
                    <button className='workspace-delete-dropdown-button' onClick={this.handleClick} onBlur={this.handleBlur}>

                    </button>
                    <ul onClick={e => e.stopPropagation()} id={this.state.show ? "workspace-delete-display-dropdown" : "no-dropdown"}>
                        <li id='delete-workspace' onClick={() => this.props.deleteWorkspace(this.props.currentWorkspaceId)}>
                            Delete
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default WorkspaceDeleteDropdown;