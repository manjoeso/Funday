export const usersTasksSelector = function(state, ownProps)  {

    let userIdArray = state.entities.tasks[ownProps.task.id].users
    let user = state.entities.users;

    // want to return userIdArray converted to objects
    let returnArr = [];
    userIdArray.forEach(userId => {
        Object.values(state.entities.users).forEach(user => {
            if(userId.id === user.id){
                returnArr.push(user)
            }
        })
    })
    return returnArr;
}
