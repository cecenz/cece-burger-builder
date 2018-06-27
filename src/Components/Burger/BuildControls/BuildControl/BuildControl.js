import React from 'react'

import './build-control.css';

export default function(props) {
    return (
        <div className="build-control">
            <div>{props.label}</div>
            <button disabled={props.disabled} onClick={props.removeIngredient}>Less</button>
            <button onClick={props.addIngredient}>More</button>
        </div>
    )
}