import axios from 'axios';
import { LOGIN_REQUEST, LOGOUT_REQUEST } from '../action-types/loginConstants';

export const loginRequest = (userData) => {
    return async (dispatch) => {
      try {
        const { data } = await axios.post("/login", userData);
        return dispatch({
          type: LOGIN_REQUEST,
          payload: data,
        });
      } catch (error) {
        throw new Error(error.message);
      }
    };
  };

  export const logoutRequest = () => {
    return {
      type: LOGOUT_REQUEST,
    };
  };