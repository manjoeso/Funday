import { combineReducers } from "redux";
import sessionReducer from "./sessions/session_reducer";
import entitiesReducer from "./entities/entities_reducer";
import errorsReducer from "./sessions/errors_reducer";


const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer
}) 

export default rootReducer;