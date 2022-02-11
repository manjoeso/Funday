import React from 'react'
import ProjectDropdownContainer from './dropdowns/project_dropdown_container'
import TaskDropdownContainer from './dropdowns/task_dropdown_container'
import TaskFormContainer from './forms/create_task_form_container'
import TaskIndexItemContainer from './task_index_item_container'
import ProjectTitleFormContainer from './project_title_form_container'

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
        // have this.props.color for styling here
        // conditional here, if no tasks, make some, else display
        return (
            <div className='single-project-container'>
                <div className='project-banner'>
                    <div className='project-banner-left'>
                        <ProjectDropdownContainer color={this.props.color} project={this.props.project}/>
                        <ProjectTitleFormContainer color={this.props.color} project={this.props.project}/>
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
                            <TaskDropdownContainer color={this.props.color} task={task}/>
                            <TaskIndexItemContainer currentWorkspaceId={this.props.currentWorkspaceId}
                                                    color={this.props.color}
                                                    task={task}/>
                        </div>)
                    }
                </div>
                <div id='task-form-container' className='task-container'>
                    <TaskFormContainer color={this.props.color} project={this.props.project}/>
                </div>
            </div>
        )
    }
}

export default ProjectShow;