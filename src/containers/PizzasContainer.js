import React, { Component } from 'react';
import Cheese from '../components/Pizzas/Cheese';
import Pepperoni from '../components/Pizzas/Pepperoni';

class PizzasContainer extends Component {
    render() {
        return (
            <div>
                <Cheese />
                <Pepperoni />
            </div>
        )
    }
}

export default PizzasContainer;