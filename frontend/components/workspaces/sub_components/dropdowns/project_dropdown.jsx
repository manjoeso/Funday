import React from 'react';


class ProjectDropdown extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            open: false 
        }
        this.focusOrBlur = this.focusOrBlur.bind(this); 
    }

    focusOrBlur(e) {
        let newState = !this.state.open
        this.setState({
            open: newState
        })
    }

    render() {
        return (
                <button onFocus={this.focusOrBlur} onBlur={this.focusOrBlur} className="dropdown-button">
                    {/* <DropdownIcon className="dropdown-icon"/> */}
                    <ul onClick={e => e.stopPropagation()} className={this.state.open ? "display-dropdown" : "no-dropdown"}>
                        <div className="board-inner-dropdown-button">Rename Project</div>
                        <div onClick={() => this.props.deleteProject(this.props.project)} className="board-inner-dropdown-button">Delete</div>
                    </ul>
                </button>
            
        )
    }
}

export default ProjectDropdown;