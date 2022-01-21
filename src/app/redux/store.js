import {combineReducers, createStore} from "redux";
import {idReducer} from "./idReducer";


export const store = createStore(combineReducers({
    idReducer:idReducer
}))