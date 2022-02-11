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
 
    render () {
        let personBox;
        {if(this.state.taskUsers.length === 0){
            personBox = <img src={personLogo} className='empty-person-box'/>
        } else if(this.state.taskUsers.length === 1) {
            personBox = <div className='one-person-box'>{this.state.taskUsers[0].name[0]}</div>
        } else if(this.state.taskUsers.length === 2) {
            personBox = 
                <div  className='multi-person-cont'>
                    <div id='multi-1' className='multiple-person-box'>{this.state.taskUsers[0].name[0]}</div>
                    <div id='multi-2' className='multiple-person-box'>{this.state.taskUsers[1].name[0]}</div>
                </div>
        } else {
            personBox = <div className='multi-person-cont'>
                    <div id='multi-1' className='multiple-person-box'>{this.state.taskUsers[0].name[0]}</div>
                    <div id='multi-2' className='multiple-person-box'>+ {this.state.taskUsers.length-1}</div>
            </div>
        }
    }
        return (
            <div className='task-person' onClick={this.handleFocus} onBlur={this.handleBlur}>
                <button id='task-person-display-button'>
                    <div className='add-person'>+</div>
                    {personBox}
                    <ul onClick={e => e.stopPropagation()} id={this.state.show ? "task-person-display-dropdown" : "no-dropdown"}>
                        {/* {personBox} */}
                        {this.state.taskUsers.map(user => {
                            return(<li key={user.id} onClick={() => this.removeUserTask(user)} className='task-users-dropdown-item-selected'>
                                <div className='task-user-name' >{user.name}</div>
                                <div className='remove-task-user'>X</div>
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