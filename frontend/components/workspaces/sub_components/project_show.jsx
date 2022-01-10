import React from 'react'

class ProjectShow extends React.Component { 
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div className='single-project-container'>
                <div className='project-banner'>
                    {this.props.project.title}
                </div>
                
                <div className='task-item-list-container'>
                    {this.props.tasks[this.props.project.id].map(task =>
                        <div className='task-container' key={task.id}>
                            <div className='task-title'>
                                {task.title}
                            </div>
                            <div className='task-person'>
                                Person
                            </div>
                            <div className='task-status'>
                                {task.status}
                            </div>
                            <div className='task-due-date'>
                                {task.due_date}
                            </div>
                        </div>)
                    }
                </div>
            </div>
        )
    }
}

export default ProjectShow;