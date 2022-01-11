export const fetchAllWorkspaceData = (userId) => {
    return $.ajax({
        method: "GET",
        url: `/api/users/${userId}/workspaces` 
    })
}

export const createBoard = (board, workspace_id) => {
    debugger
    return $.ajax({
        method: "POST",
        url: `/api/workspaces/${workspace_id}/boards`,
        data: {board}
    })
}

export const createProject = (project, board_id) => {
    return $.ajax({
        method: "POST",
        url: `/api/boards/${board_id}/projects`,
        data: {project}
    })
}
 
export const createTask = (task, project_id) => {
    return $.ajax({
        method: "POST",
        url: `api/projects/${project_id}/tasks`,
        data: {task}
    })
}