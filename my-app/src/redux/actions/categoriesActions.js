import { GET_ALL_CATEGORIES, GET_CATEGORY_ARTICLES, GET_CATEGORY_ARTICLES_BY_NAME, FILTER_BY_PRICE, ORDER_BY_PRICE, FILTER_BY_SIZE, RESET_FILTERS } from "../action-types/categoriesConstants";
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

export const getCategoryArticles = (id) => {
    return async (dispatch) => {
      try {
        const { data } = await axios.get(`/category/${id}`);
        return dispatch({
          type: GET_CATEGORY_ARTICLES,
          payload: data,
        });
      } catch (error) {
        throw new Error(error.message);
      }
    };
  }

export const getCategoryArticlesByName = (name) => {
  console.log(name)
    return async (dispatch) => {
      try {
        return dispatch({
          type: GET_CATEGORY_ARTICLES_BY_NAME,
          payload: name,
        });
      } catch (error) {
        throw new Error(error.message);
      }
    };
  }

export const filterByPrice = (price) => {
  return async (dispatch) => {
    try {
      return dispatch({
        type: FILTER_BY_PRICE,
        payload: price,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
}

export const orderByPrice = (order) => {
  console.log(order)
  return async (dispatch) => {
    try {
      return dispatch({
        type: ORDER_BY_PRICE,
        payload: order,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
}

export const filterBySize = (size) => {
  console.log(size)
  return async (dispatch) => {
    try {
      return dispatch({
        type: FILTER_BY_SIZE,
        payload: size,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
  
}

export const resetFilters = () => {
  return {
    type: RESET_FILTERS,
  };
};