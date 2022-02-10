export const usersWorkspacesSelector = function(state)  {
    // let userArray = Object.values(userList)
    // if (state.entities.workspaces[state.entities.users[state.session.id].current_workspace_id].users === []){
    //     return [];
    // }

    let userIdArray = state.entities.workspaces[state.entities.users[state.session.id].current_workspace_id].users
    let returnArr = [];

    // if (userIdArray = []){
    //     return [];
    // }
    userIdArray.forEach(userId => {
        Object.values(state.entities.users).forEach(user => {
            if(userId.id === user.id){
                returnArr.push(user)
            }
        })
    })
    return returnArr;
}
