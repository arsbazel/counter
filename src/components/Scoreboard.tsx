import React from 'react';

type propsTypes = {
    score: number
    maxValue: number
}

export const Scoreboard = (props: propsTypes) => {
    let classes = 'scoreboard'
    if (props.score >= props.maxValue) {
        classes = 'scoreboard red'
    }

    return (
        <div className={classes}>{props.score}</div>
    );
};