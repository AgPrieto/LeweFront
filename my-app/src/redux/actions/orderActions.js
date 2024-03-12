import { SEND_ORDER } from "../action-types/orderContstants";
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
}