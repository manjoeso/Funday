export const fetchWorkspaces = (userId) => {
    return $.ajax({
        method: "GET",
        url: `/api/users/${userId}/workspaces` 
    })
}
 
export const fetchBoards = (workspaceId) => {
    return $.ajax({
        method: "GET",
        url: `api/workspaces/${workspaceId}/boards`
    })
}