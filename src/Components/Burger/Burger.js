import React, { Fragment } from 'react';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';

import './burger.css'

export default function(props) {
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />
        })
    })
    .reduce((arr, el) => {
        return arr.concat(el);
    }, []);
    if (transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredients</p>
    }
    return (
        <Fragment>
            <div className='burger'>
                <BurgerIngredient type='bread-top' />
                {transformedIngredients}
                <BurgerIngredient type='bread-bottom' />
            </div>
        </Fragment>
    )
}