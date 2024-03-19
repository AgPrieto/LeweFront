import { SEND_ORDER, GET_ORDERS } from "../action-types/orderContstants";
import axios from "axios";

export const sendOrder = (order) => {
    return async (dispatch) => {
        try {
        const {data} = await axios.post("/whatsapp", order);
        window.open(data, '_blank', 'noopener');
        return dispatch({
            type: SEND_ORDER,
            payload: data,
        });
        } catch (error) {
        throw new Error(error.message);
        }
    };
};

export const getOrders = () => {
    return async (dispatch) => {
        try {
        const {data} = await axios.get("/order");
        return dispatch({
            type: GET_ORDERS,
            payload: data,
        });
        } catch (error) {
        throw new Error(error.message);
        }
    };
}