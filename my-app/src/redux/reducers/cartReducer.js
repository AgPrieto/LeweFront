import { ADD_TO_CART, REMOVE_FROM_CART } from "../action-types/cartConstants";

const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

const initialState = {
    cart: cartItems
    };

    function cartReducer(state = initialState, action) {
        let updatedCart;
        switch (action.type) {
            case ADD_TO_CART:
                updatedCart = [...state.cart, action.payload];
                localStorage.setItem('cart', JSON.stringify(updatedCart)); // Guarda el carrito actualizado en el localStorage
                return {
                    ...state,
                    cart: updatedCart,
                };
            case REMOVE_FROM_CART:
                updatedCart = state.cart.filter(product => product.id !== action.payload.id);
                localStorage.setItem('cart', JSON.stringify(updatedCart)); // Guarda el carrito actualizado en el localStorage
                return {
                    ...state,
                    cart: updatedCart
                };
            default:
                return state;
        }
    }
    
    export default cartReducer;