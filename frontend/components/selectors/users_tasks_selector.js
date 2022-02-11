export const usersTasksSelector = function(state, ownProps)  {
    let userIdArray = state.entities.tasks[ownProps.task.id].users
    if(userIdArray === undefined){
        return [];
    }
    let returnArr = [];
    userIdArray.forEach(userId => {
        Object.values(state.entities.workspaceUsers).forEach(user => {
            if(userId.id === user.id){
                returnArr.push(user)
            }
        })
    })
    return returnArr;
}
