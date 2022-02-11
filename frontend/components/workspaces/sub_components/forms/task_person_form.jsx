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
            if(!this.props.taskUsers.includes(user)){
                nonTaskUsers.push(user)
            }
        })
        return nonTaskUsers;
    }

    componentDidUpdate () {
        if(this.state.task !== this.props.task){
            this.setState({['task']: this.props.task})
        }
        if(this.state.taskUsers !== this.props.taskUsers){
            this.setState({'nonTaskUsers': this.selectUsers()})
            this.setState({'taskUsers': this.props.taskUsers})
        }
    }

    handleFocus (e) {
        const newState = !this.state.show  
        this.setState({show: newState})
    }

    handleBlur (e) {
        this.setState({show: false})
    }

    addUserTask(user) {
        let newUsersTask = {'user_id': user.id, 'task_id': this.props.task.id}
        this.props.createUsersTask(newUsersTask)
        this.setState({show: false})
    }

    removeUserTask(user) {
        // need to find task, then user in task array, then key into joinId
        let joinId;
        this.props.task.users.forEach(userObj => {
            if(userObj.id === user.id){
                joinId = userObj.join_id
            }
        })
        // debugger
        this.props.deleteUsersTask(joinId)
        this.setState({show: false})
    }

    handleClick (type) {
        // let updatedTask = Object.assign({}, this.state.task, {['users']: type})
        // this.props.updateTask(updatedTask, updatedTask.id)
        // this.setState({show: false})
    }
 
    render () {
        // {if(this.state.taskUsers.length === 0){
        //     let personBox = 
        //         <div className='empty-person-box'>

        //         </div>
        // }}
        return (
            <div className='task-person' onClick={this.handleFocus} onBlur={this.handleBlur}>
                <button id='task-person-display-button'>
                    <ul onClick={e => e.stopPropagation()} id={this.state.show ? "task-person-display-dropdown" : "no-dropdown"}>
                        {personBox}
                        {this.state.taskUsers.map(user => {
                            return(<li key={user.id} onClick={() => this.removeUserTask(user)} className='task-users-dropdown-item'>
                                {user.name}
                            </li>)
                        })}
                        <div id='break-line-people'>
                            Suggested People
                        </div>
                        {this.state.nonTaskUsers.map(user => {
                            return(<li key={user.id} onClick={() => this.addUserTask(user)} className='task-users-dropdown-item'>
                                {user.name}
                            </li>)
                        })}
                    </ul>
                </button>
            </div>
        )
    }
}

export default TaskPersonForm;