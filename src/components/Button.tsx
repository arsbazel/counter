import React from 'react'

type propsType = {
    callBack?: () => void
    title?: string
    disable?: boolean
}

export const Button = (props: propsType) => {

    return (
        <button disabled={props.disable} onClick={props.callBack}>{props.title} </button>)
}