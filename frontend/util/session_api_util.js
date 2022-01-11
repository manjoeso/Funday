export const login = (user) => {
    return $.ajax({
        method: "POST",
        url: "/api/session",   
        data: {user} 
    })
}

export const logout = () => {
    return $.ajax({
        method: "DELETE",
        url: "/api/session",   
    })
}
 
export const signup = (user) => {
    return $.ajax({
        method: "POST",
        url: "/api/users",   
        data: {user} })
}

// export const assignCurrentWorkspace = (currentUser, workspaceId) => {
//     currentUser.workspaceId = workspaceId;
//     return $.ajax({
//         method: "PATCH",
//         url: '/api/users',
//         data: {currentUser}
//     })
// }

// export const assignCurrentWorkspace = (workspaceId) => {}
