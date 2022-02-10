import React from 'react'

class TaskPersonForm extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            task: this.props.task,
            show: false,
            taskUsers: this.props.taskUsers,
            nonTaskUsers: this.selectUsers()
        }
        this.handleFocus = this.handleFocus.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
    }

    selectUsers () {
        let nonTaskUsers = [];
        this.props.workspaceUsers.forEach(user => {
            if(!this.props.taskUsers.includes(user.id)){
                nonTaskUsers.push(user)
            }
        })
        return nonTaskUsers;
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
        // let updatedTask = Object.assign({}, this.state.task, {['users']: type})
        // this.props.updateTask(updatedTask, updatedTask.id)
        // this.setState({show: false})
    }
 
    render () {
        debugger
        return (
            <div className='task-person' onClick={this.handleFocus} onBlur={this.handleBlur}>
                <button id='task-person-display-button'>
                        Person
                    <ul onClick={e => e.stopPropagation()} id={this.state.show ? "task-person-display-dropdown" : "no-dropdown"}>
                        {this.state.taskUsers.map(user => {
                            <li className='task-users-dropdown-item' id=''>
                                {user.name}
                            </li>
                        })}
                        {this.state.nonTaskUsers.map(user => {
                            <li className='task-users-dropdown-item' id=''>
                                {user.name}
                            </li>
                        })}
                    </ul>
                </button>
            </div>
        )
    }
}

export default TaskPersonForm;