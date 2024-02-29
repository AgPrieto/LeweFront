import { GET_ALL_ARTICLES } from "../action-types/articlesContstants";
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