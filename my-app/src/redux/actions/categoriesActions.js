import { GET_ALL_CATEGORIES, GET_CATEGORY_ARTICLES, GET_CATEGORY_ARTICLES_BY_NAME } from "../action-types/categoriesConstants";
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