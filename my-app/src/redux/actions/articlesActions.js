import {
  GET_ALL_ARTICLES,
  GET_ARTICLES_BY_NAME,
  GET_ARTICLES_BY_ID,
  CREATE_ARTICLE,
  UPDATE_ARTICLE,
} from "../action-types/articlesContstants";
import axios from "axios";

export const getAllArticles = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/product`);
      return dispatch({
        type: GET_ALL_ARTICLES,
        payload: data,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
};
export const getArticlesByName = (name) => {
  console.log(name);
  return async (dispatch) => {
    try {
      return dispatch({
        type: GET_ARTICLES_BY_NAME,
        payload: name,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
};
export const getArticlesById = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/product/${id}`);
      const product = response.data;

      return dispatch({
        type: GET_ARTICLES_BY_ID,
        payload: product,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
};
export const createArticle = (article) => {
  return async (dispatch) => {
    try {
      let {
        name,
        description,
        price,
        stockXS,
        stockS,
        stockM,
        stockL,
        stockXL,
        stockXXL,
        image,
        size,
        CategoryId,
      } = article;
      price = price === "" ? 0 : parseFloat(price);
      stockXS = stockXS === "" ? 0 : parseFloat(stockXS);
      stockS = stockS === "" ? 0 : parseFloat(stockS);
      stockM = stockM === "" ? 0 : parseFloat(stockM);
      stockL = stockL === "" ? 0 : parseFloat(stockL);
      stockXL = stockXL === "" ? 0 : parseFloat(stockXL);
      stockXXL = stockXXL === "" ? 0 : parseFloat(stockXXL);
      const structuredArticle = {
        name,
        description,
        price,
        stockXS,
        stockS,
        stockM,
        stockL,
        stockXL,
        stockXXL,
        image,
        size,
        CategoryId,
      };
      const { data } = await axios.post(`/product`, structuredArticle);
      return dispatch({
        type: CREATE_ARTICLE,
        payload: data,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
};
export const updateArticle = (article) => {
  return async (dispatch) => {
    try {
      let {
        id,
        name,
        description,
        price,
        stockXS,
        stockS,
        stockM,
        stockL,
        stockXL,
        stockXXL,
        image,
        size,
        CategoryId,
      } = article;
      price = price === "" ? 0 : parseFloat(price);
      stockXS = stockXS === "" ? 0 : parseFloat(stockXS);
      stockS = stockS === "" ? 0 : parseFloat(stockS);
      stockM = stockM === "" ? 0 : parseFloat(stockM);
      stockL = stockL === "" ? 0 : parseFloat(stockL);
      stockXL = stockXL === "" ? 0 : parseFloat(stockXL);
      stockXXL = stockXXL === "" ? 0 : parseFloat(stockXXL);
      const structuredArticle = {
        id,
        name,
        description,
        price,
        stockXS,
        stockS,
        stockM,
        stockL,
        stockXL,
        stockXXL,
        image,
        size,
        CategoryId,
      };
      const { data } = await axios.put(`/product`, structuredArticle);
      return dispatch({
        type: UPDATE_ARTICLE,
        payload: data,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
}

