export const fetchAllWorkspaceData = (userId) => {
    return $.ajax({
        method: "GET",
        url: `/api/users/${userId}/workspaces` 
    })
}

// board util functions

export const createBoard = (board, workspace_id) => {
    debugger
    return $.ajax({
        method: "POST",
        url: `/api/workspaces/${workspace_id}/boards`,
        data: {board}
    })
}

export const deleteBoard = (board) => {
    debugger
    return $.ajax({
        method: "DELETE",
        url: `/api/boards/${board.id}`
    })
}

// project util functions

export const createProject = (project, board_id) => {
    return $.ajax({
        method: "POST",
        url: `/api/boards/${board_id}/projects`,
        data: {project}
    })
}

export const deleteProject = (project) => {
    debugger
    return $.ajax({
        method: "DELETE",
        url: `/api/projects/${project.id}`
    })
}
 

// task util functions

export const createTask = (task) => { 
    return $.ajax({
        method: "POST",
        url: `api/projects/${task.project_id}/tasks`,
        data: {task}
    })
}

// export const deleteTask = (task) => {
//     return $.ajax({
//         method: "DELETE",
//         url: `api/projects/${task.project_id}/tasks`,
//         data: {task}
//     })
// }