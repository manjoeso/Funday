import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import workspacesReducer from "./workspaces_reducer";
import boardsReducer from "./boards_reducer";
import boardReducer from "./board_reducer";
import projectsReducer from "./projects_reducer";
import tasksReducer from "./tasks_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    workspaces: workspacesReducer,
    boards: boardsReducer,
    projects: projectsReducer,
    tasks: tasksReducer,
    boardList: boardReducer
});

export default entitiesReducer;