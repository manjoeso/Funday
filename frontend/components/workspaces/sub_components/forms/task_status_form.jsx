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
        // console.log("FOCUS")
        // console.log(e.target.tagName)
        // console.log(e.currentTarget.tagName)
        // if (e.target.tagName === 'BUTTON') {
        //     setTimeout(() => this.setState({show: false}), 200)
        //     // need to dispatch here?
        //     this.props.assignCurrentWorkspaceId
        //     return;
        // }
        const newState = !this.state.show 
        debuger
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
        debugger
        return (
            <div onFocus={this.handleFocus} onBlur={this.handleFocus} className="task-status">
                <div 
                    className='task-status-display-button'
                    >{this.props.task.status}
                </div>
                <div className={this.state.show ? "task-status-display-dropdown" : "no-dropdown"}>
                    HELLO
                </div>
            </div>
        )
    }
}

export default TaskStatusForm;