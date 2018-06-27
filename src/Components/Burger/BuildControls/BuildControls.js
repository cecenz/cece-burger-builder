import React from 'react';
import BuildControl from './BuildControl/BuildControl';

import './build-controls.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
    { label: 'Bacon', type: 'bacon' }
]

export default function(props) {
    console.log(props);
    return (
        <div className="build-controls">
            {controls.map(obj => 
                <BuildControl 
                    label={obj.label} 
                    key={obj.type}
                    disabled={props.disabledInfo[obj.type]}
                    addIngredient={() => props.addIngredient(obj.type)}
                    removeIngredient={() => props.removeIngredient(obj.type)}
                />
            )}
        </div>
    )
}