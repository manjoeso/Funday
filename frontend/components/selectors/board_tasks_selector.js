import ProjectTitleForm from '../workspaces/sub_components/project_title_form'
import {projectsSelector} from './projects_selector'

export const boardTasksSelector = function(state, ownProps) {
    let projects = projectsSelector(state.entities.projects, ownProps.match.params.board_id).reverse()
    let tasks = state.entities.tasks 
    // need to grab an array of project objects,
    // once have, need to map over all task (objects) 
    // returns all tasks of all projects for a given board?

    let allTasks = [];
    if(Object.values(tasks).length > 0){
        projects.forEach(project => {
            Object.values(tasks).forEach(task => {
                if(project.id === task.project_id){
                    allTasks.push(task)
                }
            })
        })
    }
    return allTasks

}