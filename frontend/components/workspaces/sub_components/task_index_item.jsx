import React from 'react'

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
                    <div className='task-person'>
                        <div>
                            Person
                        </div>
                    </div>
                    <div className='task-status'>
                        <form onSubmit={this.updateTaskStatus}>
                            <select onChange={this.changeStatus} value={this.state.task.status}>
                                <option value='Working on it'>Working on it</option>
                                <option value='Stuck'>Stuck</option>
                                <option value='Done'>Done</option>
                                <option value=' '> </option>
                            </select>
                            {/* <input type='submit'></input> */}
                        </form>
                        {/* {this.props.task.status} */}
                    </div>
                    <div className='task-due-date'>
                        {this.props.task.due_date}
                    </div>
                </div>
            </div>
        )
    }
}

export default TaskIndexItem;