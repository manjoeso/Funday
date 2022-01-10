export const boardsSelector = function(boardList, workspaceId)  {
    let boardArray = Object.values(boardList)
    let returnArr = [];
    let id = parseInt(workspaceId)

    boardArray.forEach(board => {
        if (board.workspace_id === id) {
            returnArr.push(board);
        }
    })
    return returnArr;
}
