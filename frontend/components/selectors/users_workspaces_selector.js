export const usersWorkspacesSelector = function(state, ownProps)  {
    // let userArray = Object.values(userList)
    // if (state.entities.workspaces[state.entities.users[state.session.id].current_workspace_id].users === []){
    //     return [];
    // }
    // debugger
    let userIdArray = state.entities.workspaces[parseInt(ownProps.currentWorkspaceId)].users
    let returnArr = [];

    if (userIdArray === undefined){
        return [];
    }
    userIdArray.forEach(userId => {
        Object.values(state.entities.users).forEach(user => {
            if(userId.id === user.id){
                returnArr.push(user)
            }
        })
    })
    return returnArr;
}
