import React from 'react'
import TaskStatusFormContainer from './forms/task_status_form_container'
import TaskDateFormContainer from './forms/task_date_form_container'
import TaskPersonFormContainer from './forms/task_person_form_container'

class TaskIndexItem extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            task: this.props.task,
            disabled: true,
            editButtonClass: 'task-edit-button'
        }

        this.changeStatus = this.changeStatus.bind(this)
        this.updateTaskTitle = this.updateTaskTitle.bind(this)
        this.updateTaskStatus = this.updateTaskStatus.bind(this)
    }

    componentDidMount () {
        this.setState({task: this.props.task})
    }

    switchInput () {
        this.setState({ disabled: !this.state.disabled})
        this.setState({ editButtonClass: 'task-edit-button-hidden'})
    }
    
    updateTitle (e) {
        return e => (this.setState({['task']: {['title']: e.target.value}}))
    }

    changeStatus (event) {
        this.setState({['task']: {['status']: event.target.value}})
    }

    updateTaskStatus () {
        //  this.props.updateTask(this.state)
        this.props.updateTask(this.state.task, this.props.task.id)
    } 

    updateTaskTitle () {
        //  this.props.updateTask(this.state)
        this.props.updateTask(this.state.task, this.props.task.id)
        this.setState({editButtonClass: 'task-edit-button'})
        this.setState({disabled: !this.state.disabled})
    } 
    
    selectInput(e) {
        e.target.select();
    }
    render () {
        return (
            <div className='task-item-content-container'>
                <div style={{'borderLeft': `7px solid ${this.props.color}`}} 
                    className='task-item-left-side'>
                    <div className='task-title'>
                        <form onSubmit={this.updateTaskTitle}>
                            <input
                                disabled={this.state.disabled}
                                value={this.state.task.title}
                                onChange={this.updateTitle()}
                                onClick={this.selectInput}
                            >
                            </input>
                        </form>
                    </div>
                    <button 
                        className={this.state.editButtonClass}
                        onClick={() => this.switchInput()}>Edit</button>
                </div>
                <div className='task-item-right-side'>
                    <TaskPersonFormContainer task={this.props.task}/>
                    <TaskStatusFormContainer task={this.props.task}/>
                    <TaskDateFormContainer task={this.props.task}/>
                </div>
            </div>
        )
    }
}

export default TaskIndexItem;