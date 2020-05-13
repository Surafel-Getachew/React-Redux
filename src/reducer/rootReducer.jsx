import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import {combineReducers} from "redux"

const rootReducer = combineReducers({
    count:counterReducer,
    loggedIn:loggedReducer
});

export default rootReducer;
