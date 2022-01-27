import React from 'react'

class TaskStatusForm extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            task: this.props.task,
            show: false
        }
        // this.processCreate = this.processCreate.bind(this)
    }

    updateStatus (e) {
        // return e => (this.setState({['title']: e.target.value}))
    }

    processChange () {
        // this.props.createTask(this.state).then(this.setState({['title']: ''}))
    }

 
    render () {
        return (
            <div className='task-status'>
                <form onSubmit={this.processChange}> 
                    <input
                        value={this.state.status}
                        onChange={this.updateStatus()}
                    />
                </form>
            </div>
        )
    }
}

export default TaskStatusForm;