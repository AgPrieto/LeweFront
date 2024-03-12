import { GET_ALL_ARTICLES, GET_ARTICLES_BY_NAME, GET_ARTICLES_BY_ID } from "../action-types/articlesContstants";
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
    }
    export const getArticlesByName = (name) => {
        console.log(name)
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
        }
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
    