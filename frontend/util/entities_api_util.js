export const fetchAllWorkspaceData = (userId) => {
    return $.ajax({
        method: "GET",
        url: `/api/users/${userId}/workspaces` 
    })
}

export const createBoard = (board) => {
    // debugger
    return $.ajax({
        method: "POST",
        url: `/api/workspaces/${board.workspace_id}/boards`,
        data: {board}
    })
}
 
// export const fetchBoards = (workspaceId) => {
//     return $.ajax({
//         method: "GET",
//         url: `api/workspaces/${workspaceId}/boards`
//     })
// }