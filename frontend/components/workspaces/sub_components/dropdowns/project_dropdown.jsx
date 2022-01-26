import React from 'react';


class ProjectDropdown extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            open: false 
        }
        this.handleClick = this.handleClick.bind(this); 
 
    }

    

    render() {
        return (
                <div onClick={this.handleClick} 
                    className="project-dropdown-button"
                    onMouseOver={this.props.color}>
                    {/* <DropdownIcon className="dropdown-icon"/> */}
                    <ul onClick={e => e.stopPropagation()} className={this.state.open ? "project-display-dropdown" : "no-dropdown"}>
                        <div onClick={() => this.props.deleteProject(this.props.project)} className="board-inner-dropdown-button">Delete</div>
                        <div onClick={this.handleClick} className="board-inner-dropdown-button">Cancel</div>
                    </ul>
                </div>
            
        )
    }
}

export default ProjectDropdown;