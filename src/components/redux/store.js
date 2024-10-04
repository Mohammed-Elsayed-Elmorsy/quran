import { combineReducers, createStore } from "redux";
import { langreducer, overreducer } from "./LangReducher";
const reducers = combineReducers({
    lang: langreducer,
    over: overreducer
})
export const langStore = createStore(reducers)