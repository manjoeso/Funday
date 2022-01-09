import React from 'react'

class ProjectShow extends React.Component { 
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div>
                <div className='project-banner'>
                    {this.props.project.title}
                </div>
                <div className='task-item-container'>
                    {this.props.tasks[this.props.project.id].map(task => <li key={task.id}>{task.title}</li>)}
                </div>
            </div>
            // {this.props.tasks[this.props.project.id].map(task => task.title)}
        )
    }
}

export default ProjectShow;