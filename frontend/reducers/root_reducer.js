import { combineReducers } from "redux";
import sessionReducer from "./sessions/session_reducer";
import entitiesReducer from "./entities/entities_reducer";
import errorsReducer from "./sessions/errors_reducer";
import modalReducer from "./ui/modal_reducer";
import uiReducer from "./ui/ui_reducer";


const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer,
    modal: modalReducer
}) 

export default rootReducer;