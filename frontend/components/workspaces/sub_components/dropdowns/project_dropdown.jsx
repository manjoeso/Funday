import React from 'react';


class ProjectDropdown extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            open: false 
        }
        this.handleFocus = this.handleFocus.bind(this); 
        this.handleBlur = this.handleBlur.bind(this); 
 
    }

    handleFocus (e) {
        e.preventDefault()
        let newState = !this.state.open
        this.setState({open: newState })
    }

    handleBlur () {
        console.log('blur')
        this.setState({open: false })
    }

    render() {
        return (
                <div  className='project-button-container'>
                    <button onFocus={this.handleFocus}  className="project-dropdown-button"
                            style={{'backgroundColor': this.props.color}}>
                    ▼
                    </button> 
                    {/* <DropdownIcon className="dropdown-icon"/> */}
                    <ul onBlur={this.handleBlur} onFocus={this.handleFocus} className={this.state.open ? "project-display-dropdown" : "no-dropdown"}>
                        <div onClick={() => this.props.deleteProject(this.props.project)} className="board-inner-dropdown-button">Delete</div>
                        <div onClick={this.handleBlur} className="board-inner-dropdown-button">Cancel</div>
                    </ul>
                </div>
            
        )
    }
}

export default ProjectDropdown;

