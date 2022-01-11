import React from 'react'

class TaskForm extends React.Component {
    constructor (props){
        super(props)
        this.state = this.props.task;

        this.processCreate = this.processCreate.bind(this)
    }

    updateTitle (e) {
        return e => (this.setState({['title']: e.target.value}))
    }

    processCreate () {
        debugger
        this.props.createTask(this.state)
    }

    render () {
        return (
            <form onSubmit={this.processCreate}> 
                <label>
                <input
                    id='new-task-input-field'
                    type='text'
                    value={this.state.title}
                    onChange={this.updateTitle()}
                    placeholder='+ Add Item'
                    />
                </label>
                <button id='new-task-form-button'>Add</button>
            </form>
        )
    }
}

export default TaskForm;