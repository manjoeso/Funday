import React from 'react'

class ProjectShow extends React.Component { 
    constructor(props) {
        super(props)
    }

    tasksSelector = function(tasks, projectId) {
        let taskArray = Object.values(tasks)
        let returnArr = [];
        let id = parseInt(projectId)
    
        taskArray.forEach(task => {
            if (task.project_id === id) {
                returnArr.push(task)    
            }
        })
        return returnArr;
    }

    render () {
        debugger
        // conditional here, if no tasks, make some, else display
        return (
            <div className='single-project-container'>
                <div className='project-banner'>
                    <div className='project-banner-left'>
                        {this.props.project.title}
                    </div>
                    <div className='project-banner-right'>
                        <span>Person</span>
                        <span>Status</span>
                        <span>Date</span>
                    </div>
                </div>
                
                <div className='task-item-list-container'>
                    {this.tasksSelector(this.props.tasks, this.props.project.id).map(task =>
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