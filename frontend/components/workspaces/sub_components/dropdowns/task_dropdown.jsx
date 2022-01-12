import React from 'react';


class TaskDropdown extends React.Component {
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
                <button onFocus={this.focusOrBlur} onBlur={this.focusOrBlur} className="task-dropdown-button">
                    {/* <DropdownIcon className="dropdown-icon"/> */}
                    <ul onClick={e => e.stopPropagation()} className={this.state.open ? "display-dropdown" : "no-dropdown"}>
                        <div className="board-inner-dropdown-button">Rename Task</div>
                        <div onClick={() => this.props.deleteTask(this.props.task)} className="board-inner-dropdown-button">Delete</div>
                    </ul>
                </button>
            
        )
    }
}

export default TaskDropdown;