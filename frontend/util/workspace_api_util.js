export const receiveWorkspace = (userId) => {
    return $.ajax({
        method: "POST",
        url: `/api/users/${userId}` 
    })
}