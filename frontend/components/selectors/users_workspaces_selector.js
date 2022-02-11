export const usersWorkspacesSelector = function(state, ownProps)  {
    
    if (state.entities.workspaces[state.entities.users[state.session.id].current_workspace_id].users === []){
        return [];
    }
    
    let userIdArray = state.entities.workspaces[state.entities.users[state.session.id].current_workspace_id].users
    let returnArr = [];

    if (userIdArray === undefined){
        return [];
    }
    userIdArray.forEach(userId => {
        Object.values(state.entities.workspaceUsers).forEach(user => {
            if(userId.id === user.id){
                returnArr.push(user)
            }
        })
    })
    return returnArr;
}
