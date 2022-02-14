export const fetchAllWorkspaceData = (userId) => {
    return $.ajax({
        method: "GET",
        url: `/api/users/${userId}/workspaces` 
    })
}

// workspace util functions
export const createWorkspace = (workspace) => {
    return $.ajax({
        method: "POST",
        url: `/api/workspaces/`,
        data: {workspace}
    })
}

export const updateWorkspace = (workspace) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/workspaces/${workspace.id}`,
        data: {workspace}
    })
}

export const deleteWorkspace = (workspaceId) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/workspaces/${workspaceId}`
    })
}

// board util functions

export const createBoard = (board, workspace_id) => {
    return $.ajax({
        method: "POST",
        url: `/api/workspaces/${workspace_id}/boards`,
        data: {board}
    })
}

export const updateBoard = (board) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/boards/${board.id}`,
        data: {board}
    })
}

export const deleteBoard = (board) => {
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
    return $.ajax({
        method: "DELETE",
        url: `/api/projects/${project.id}`
    })
}

export const updateProject = (project, id) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/projects/${id}`,
        data: {project}
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

export const deleteTask = (task) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/tasks/${task.id}`
    })
}
export const updateTask = (task, id) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/tasks/${id}`,
        data: {task}
    })
}

// task users joins table 
export const createUsersTask = (users_task) => { // needs to be object with 2 keys: user_id and task_id
    return $.ajax({
        method: "POST",
        url: `/api/users_tasks`,
        data: {users_task}
    })
}
export const deleteUsersTask = (join_id) => { // needs to be object with 2 keys: user_id and task_id
    return $.ajax({
        method: "DELETE",
        url: `/api/users_tasks/${join_id}`
    })
}
