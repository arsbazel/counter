import {applyMiddleware, combineReducers, createStore} from "redux";
import {counterReducer, counterStateType} from "./counter-reducer";
import thunk from "redux-thunk";

export interface rootState {
    counter: counterStateType
}


const reducers = combineReducers({
    counter: counterReducer
})
export const store = createStore(reducers, applyMiddleware(thunk))