import { ADD_TO_CART, REMOVE_FROM_CART,CLEAR_CART } from "../action-types/cartConstants";

const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

const initialState = {
    cart: cartItems
    };

    function cartReducer(state = initialState, action) {
        let updatedCart;
        switch (action.type) {
            case ADD_TO_CART:
                // eslint-disable-next-line no-case-declarations
                const existingItem = state.cart.findIndex(item => item.id === action.payload.id && item.size === action.payload.size);
                if (existingItem !== -1) {
                    updatedCart = state.cart.map(item => {
                        if (item.id === action.payload.id && item.size === action.payload.size) {
                            item.quantity += action.payload.quantity;
                        }
                        return item;
                    });
                    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Guarda el carrito actualizado en el localStorage
                    return {
                        ...state,
                        cart: updatedCart,
                    };
                }
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
                case CLEAR_CART:
            localStorage.removeItem('cart');
            return {
                ...state,
                cart: [],
            };
            default:
                return state;
        }
    }
    
    export default cartReducer;