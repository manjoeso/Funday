import React from 'react'

class TaskStatusForm extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            task: this.props.task,
            show: false,
            color: ''
        }
        this.handleFocus = this.handleFocus.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
    }

    componentDidUpdate () {
        if(this.state.task !== this.props.task){
            this.setState({['task']: this.props.task})
        }
    }

    handleFocus (e) {
        const newState = !this.state.show  
        this.setState({show: newState})
    }

    handleBlur (e) {
        this.setState({show: false})
    }

    handleClick (type) {
        let updatedTask = Object.assign({}, this.state.task, {['status']: type})
        this.props.updateTask(updatedTask, updatedTask.id)
        this.setState({show: false})
    }
 
    render () {
        let backgroundColor = '';
        let title = this.props.task.status;
        if(title === 'Working on it'){
            backgroundColor = '#f8a83c'
        } else if(title === 'Done'){
            backgroundColor = '#00c875'
        } else if(title === 'Stuck'){
            backgroundColor = '#e2445c'
        } else if(title === ''){
            backgroundColor = '#c4c4c4'
        }
        return (
            <div className="task-status" onClick={this.handleFocus} onBlur={this.handleBlur} >
                <button id='task-status-display-button'
                        style={{backgroundColor: backgroundColor}}
                        >
                        {this.props.task.status}
                    <ul onClick={e => e.stopPropagation()} id={this.state.show ? "task-status-display-dropdown" : "no-dropdown"}>
                        <li className='task-dropdown-item' id='working-on-it' value='working on it' onClick={() => this.handleClick('Working on it')}>
                            Working on it
                        </li>
                        <li className='task-dropdown-item' id='stuck' onClick={() => this.handleClick('Stuck')}>
                            Stuck
                        </li>
                        <li className='task-dropdown-item' id='done' onClick={() => this.handleClick('Done')}>
                            Done
                        </li>
                        <li className='task-dropdown-item' id='empty' onClick={() => this.handleClick('')}>

                        </li>
                    </ul>
                </button>
            </div>
        )
    }
}

export default TaskStatusForm;