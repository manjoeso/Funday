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
            <div style={{color: `${this.props.color}`}} className='task-dropdown-button-container'>
                <button onClick={this.handleClick} className="task-dropdown-button">
                    {/* <DropdownIcon className="dropdown-icon"/> */}
                    ▼
                </button>
                <ul onClick={e => e.stopPropagation()} className={this.state.open ? "task-display-dropdown" : "no-dropdown"}>
                    <div onClick={() => this.props.deleteTask(this.props.task)} className="task-inner-dropdown-button">Delete</div>
                    <div onClick={this.handleClick} className="task-inner-dropdown-button">Cancel</div>
                </ul>
            </div>
            
        )
    }
}

export default TaskDropdown;