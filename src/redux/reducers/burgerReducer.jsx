const initialState = {
    burger: [
        { id: 'salad', price: 10, quantity: 2 },
        { id: 'cheese', price: 5, quantity: 2 },
        { id: 'beef', price: 20, quantity: 2 },
    ],
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'CHANGE_QUANTITY': {
            let { id, quantity } = payload
            let burgerUpdate = [...state.burger];
            let topping = burgerUpdate.find(item => item.id === id)
            if (topping) {
                topping.quantity += quantity;
                if (topping.quantity <= 0) {
                    topping.quantity = 1
                }
            }
            state.burger = burgerUpdate;
            return { ...state }
        }
        default:
            return state
    }
}
