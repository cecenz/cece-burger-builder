import React from 'react'

import './build-control.css';

export default function(props) {
    return (
        <div className="build-control">
            <div>{props.label}</div>
            <button>Less</button>
            <button>More</button>
        </div>
    )
}