import React from 'react';


class TaskDropdown extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            open: false 
        }
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
        return (
                <button onClick={this.handleClick} className="task-dropdown-button">
                    {/* <DropdownIcon className="dropdown-icon"/> */}
                    <ul onClick={e => e.stopPropagation()} className={this.state.open ? "task-display-dropdown" : "no-dropdown"}>
                        <div onClick={() => this.props.deleteTask(this.props.task)} className="board-inner-dropdown-button">Delete</div>
                        <div onClick={this.handleClick} className="board-inner-dropdown-button">Cancel</div>
                    </ul>
                </button>
            
        )
    }
}

export default TaskDropdown;