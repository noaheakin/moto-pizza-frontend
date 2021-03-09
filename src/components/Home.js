import React, { Component } from 'react';
import PizzasContainer from '../containers/PizzasContainer';

class Home extends Component {
    render() {
        return (
            <div>
                Hello, Pizza Lovers!
                <PizzasContainer />
            </div>
        )
    }
}

export default Home;