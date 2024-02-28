import { GET_ALL_CATEGORIES } from "../action-types/categoriesConstants";
import axios from "axios";

export const getAllCategories = () => {
    return async (dispatch) => {
      try {
        const { data } = await axios.get(`/category`);
        console.log(data);
        return dispatch({
          type: GET_ALL_CATEGORIES,
          payload: data,
        });
      } catch (error) {
        throw new Error(error.message);
      }
    };
  };