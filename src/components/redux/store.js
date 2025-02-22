import { combineReducers, createStore } from "redux";
import { langreducer, overreducer, modeReducer, overModereducer } from "./LangReducher";
const reducers = combineReducers({
    over: overreducer,
    modeOver: overModereducer,
    lang: langreducer,
    mode: modeReducer,
})
export const store = createStore(reducers)