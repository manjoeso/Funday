import React from 'react'

class ProjectForm extends React.Component {
    constructor (props){
        super(props)
        this.state = this.props.project;

        this.processCreate = this.processCreate.bind(this)
    }

    updateTitle (e) {
        return e => (this.setState({['title']: e.target.value}))
    }

    processCreate () {
        this.props.createProject(this.state, parseInt(this.props.currentBoard.id))
        .then(obj => this.createTasks(obj))
        .then(this.setState({['title']: ''})) // resets form input field
    }
    
    createTasks (obj) {
        debugger;
        let task = {}
        task['project_id'] = obj.project.id
        task['title'] = 'Item 1'
        this.props.createTask(task)
        task['title'] = 'Item 2'
        this.props.createTask(task)
    }

    render(){
        return (
            <div className='create-project-form-container'>
                <form onSubmit={this.processCreate}>
                    <label>
                        <input type='text' 
                            value={this.state.title}
                            onChange={this.updateTitle()}
                        />
                    </label>
                <button className='add-project-button' type='submit'>New Item</button>
                </form>
            </div>
        )
    }
}

export default ProjectForm;