import { ADD_TO_CART } from "../action-types/cartConstants";
import axios from "axios";

export const addToCart = (product) => {
    return {
      type: ADD_TO_CART,
      payload: product,
    };
  };