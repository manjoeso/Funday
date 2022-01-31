import React from 'react'

class TaskStatusForm extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            task: this.props.task,
            show: false
        }
        this.handleFocus = this.handleFocus.bind(this)
    }

    handleFocus (e) {
        console.log("FOCUS")
        console.log(e.target.tagName)
        console.log(e.currentTarget.tagName)
        // if (e.target.tagName === 'BUTTON') {
        //     setTimeout(() => this.setState({show: false}), 200)
        //     // need to dispatch here?
        //     this.props.assignCurrentWorkspaceId
        //     return;
        // }
        const newState = !this.state.show 
        this.setState({show: newState})
        // setTimeout(() => this.setState({show: newState}), 200)
    }

    updateStatus (e) {
        // return e => (this.setState({['title']: e.target.value}))
    }

    processChange () {
        // this.props.createTask(this.state).then(this.setState({['title']: ''}))
    }

 
    render () {
        return (
            <div className="task-status">
                <button 
                    id='task-status-display-button'
                    onFocus={this.handleFocus} 
                    onBlur={this.handleFocus}
                    >{this.props.task.status}
                </button>
                <ul id={this.state.show ? "task-status-display-dropdown" : "no-dropdown"}>
                    <li className='task-dropdown-item' id='working-on-it'>
                        Working on it
                    </li>
                    <li className='task-dropdown-item' id='stuck'>
                        Stuck
                    </li>
                    <li className='task-dropdown-item' id='done'>
                        Done
                    </li>
                    <li className='task-dropdown-item' id='empty'>

                    </li>
                </ul>
            </div>
        )
    }
}

export default TaskStatusForm;