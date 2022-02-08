import React from 'react'

class ProjectForm extends React.Component {
    constructor (props){
        super(props)
        this.state = this.props.project;

        this.createProject = this.createProject.bind(this)
        this.createItem = this.createItem.bind(this)
    }

    createProject () {
        this.props.createProject({title: 'New Group'}, parseInt(this.props.currentBoard.id))
        .then(obj => this.createTasks(obj))
        .then(this.setState({['title']: ''})) // resets form input field
    }

    createItem () {
        let task = {}
        task['project_id'] = this.props.firstProject.id
        task['title'] = 'New Item'
        this.props.createTask(task)
    }
    
    createTasks (obj) {
        let task = {}
        task['project_id'] = obj.project.id
        task['title'] = 'Item 1'
        this.props.createTask(task)
        task['title'] = 'Item 2'
        this.props.createTask(task)
    }

    render(){
        return (
            <div className='project-nav-bar'>
                <div className='create-project-form-container'>
                    <button onClick={() => this.createItem()} className='add-project-button'>New Item</button>
                    <button onClick={() => this.createProject()} className='add-project-item-button'></button>
                </div>
            </div>
        )
    }
}

export default ProjectForm;