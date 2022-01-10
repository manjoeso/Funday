export const projectsSelector = function(projectList, boardId)  {
    let projectArray = Object.values(projectList)
    let returnArr = [];
    let id = parseInt(boardId)

    projectArray.forEach(project => {
        if (project.board_id === id) {
            returnArr.push(project);
        }
    })
    return returnArr;
}
