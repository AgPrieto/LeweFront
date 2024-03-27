import { GET_ANALYTICS } from "../action-types/analyticsConstants";
import axios from "axios";

export const getAnalytics = () => {
    return async (dispatch) => {
        try {
        const {data} = await axios.get("/admin/analytics");
        dispatch({
            type: GET_ANALYTICS,
            payload: data,
        });
        } catch (error) {
        return error;
        }
    };
    };
