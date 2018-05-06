const initalState = {
    cart : []
};

const reducer = (state = initalState, action) => {
    if (action.type === 'ADD') {
        return {
            cart: state.cart.concat(action.product)
        };
    }
    return state;
};

export default reducer;