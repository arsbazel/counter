
import {Dispatch} from "redux";

export interface counterStateType {
    min: number
    max: number
    score: number
}


enum actions {
    SET_MIN = "SET_MIN",
    SET_MAX = "SET_MAX",
    INCREASE_VALUE = "INCREASE_VALUE",
    SET_STATE =  "SET_STATE",
}

export type counterActionType = setMinType | setMaxType | increaseValueType | setStateType


export const setMin = (value: number) => {
    return {type: actions.SET_MIN, value} as const
}
export type setMinType = ReturnType<typeof setMin>

export const setMax = (value:number) => {
    return {type: actions.SET_MAX, value} as const
}
export type setMaxType = ReturnType<typeof setMax>

export const increaseValue = () => {
    return {type: actions.INCREASE_VALUE} as const
}
export type increaseValueType = ReturnType<typeof increaseValue>

export const setState = (state: counterStateType) => {
    return {type: actions.SET_STATE, state} as const
}
export type setStateType = ReturnType<typeof setState>

const initial: counterStateType = {
    min: 0,
    max: 5,
    score: 0,
}


export const counterReducer = (state = initial, action: counterActionType) => {
    switch (action.type) {
        case actions.SET_MIN: {
            if(action.value > state.max) {
                return state
            }
            if (action.value > state.score) {
                return {...state, min: action.value, score: action.value}
            }
            return {...state, min: action.value}
        }
        case actions.SET_MAX: {
            if(action.value < state.min) {
                return state
            }
            if (action.value < state.score) {
            return {...state, max: action.value, score: action.value}
            }
            return {...state, max: action.value}
        }
        case actions.INCREASE_VALUE: {
            const newScore = state.score + 1
            if (newScore > state.max) {
                return state
            }
            return {...state, score: newScore}
        }
        case actions.SET_STATE: {
        return action.state
        }
        default:
            return state
    }
}

export const setToLocal = (state: counterStateType) => (dispatch: Dispatch)  => {
localStorage.setItem("state", JSON.stringify(state))

}

export const getFromLocal = () => (dispatch: Dispatch)  => {
    const state = localStorage.getItem("state")
        state && dispatch(setState(JSON.parse(state)))
}
