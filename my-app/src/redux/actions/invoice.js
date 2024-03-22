import { SEND_INVOICE } from "../action-types/invoiceConstants";
import axios from "axios";

export const sendInvoice = (invoice) => {
    return async (dispatch) => {
        try {
        console.log(invoice)
        const { data } = await axios.post(`/invoice`, [invoice]);
        return dispatch({
            type: SEND_INVOICE,
            payload: data,
        });
        } catch (error) {
        alert(error.response.data.message);
        throw new Error(error.response.data.message);
        }
    };
    };
