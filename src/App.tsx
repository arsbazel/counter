import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import {Scoreboard} from "./components/Scoreboard";
import {useDispatch, useSelector} from "react-redux";
import {increaseValue, setMax, setMin} from "./store/counter-reducer";
import {rootState} from "./store/store";

function App() {

    const dispatch= useDispatch()
    useEffect(() => {

    })
    const {score, min, max} = useSelector((state: rootState) => state.counter)

    const setScore = (value: number) => dispatch(setMin(value))

    const increaseHandler = () => {
        dispatch(increaseValue())
    }

    const resetHandler = () => {
        setScore(min)
    }


    return (
        <div className="App">
            <header className="App-header">
                <div className="container">
                    <Scoreboard maxValue={max} score={score}/>
                    <div className="button-container">
                        <Button disable={score >= max} callBack={increaseHandler} title={'inc'}/>
                        <Button disable={score <= min} callBack={resetHandler} title={'reset'}/>
                    </div>
                    <div className="button-container input">
                        <input type="number" size={2} name="minValue" onChange={(e) => {dispatch(setMin(+e.currentTarget.value))}}  value={min}/>
                        <label htmlFor="minValue">min</label>

                        <input type="number" size={2} name="maxValue" onChange={(e) => {dispatch(setMax(+e.currentTarget.value))}}  value={max}/>
                        <label htmlFor="maxValue">max</label>
                    </div>
                    <Button callBack={() => setScore} title={"set"} disable={false}/>
                </div>
            </header>
        </div>
    );
}

export default App;
