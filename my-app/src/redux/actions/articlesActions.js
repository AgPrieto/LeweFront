import { GET_ALL_ARTICLES, GET_ARTICLES_BY_NAME } from "../action-types/articlesContstants";
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