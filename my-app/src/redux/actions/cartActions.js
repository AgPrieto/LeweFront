import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../action-types/cartConstants";

export const addToCart = (product) => {
  console.log(product)
    return {
      type: ADD_TO_CART,
      payload: product,
    };
  };

  export const removeFromCart = (product) => {
    return {
      type: REMOVE_FROM_CART,
      payload: product,
    };
  };

  export const clearCart = () => ({
    type: CLEAR_CART,
  });