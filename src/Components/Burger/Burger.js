import React from 'react';
import Aux from '../../hoc/Aux';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';
import BuildControls from '../Burger/BuildControls/BuildControls';

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
    console.log(transformedIngredients)
    return (
        <Aux>
            <div className='burger'>
                <BurgerIngredient type='bread-top' />
                {transformedIngredients}
                <BurgerIngredient type='bread-bottom' />
            </div>
            <BuildControls />
        </Aux>
    )
}