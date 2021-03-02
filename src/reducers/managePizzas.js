export default function managePizzas(state = {
    pizzas: [],
    displayPizza: ''
}, action) {
    switch (action.type) {
        case 'DISPLAY_PIZZA' :
            console.log("Successfully displayed delicious pie!")
        
        default :
            return state
    }
}