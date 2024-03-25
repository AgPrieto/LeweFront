import axios from 'axios';
import { CONTACT_MAIL } from '../action-types/contactConstants';

export const contactMail = (contactData) => {
    return async (dispatch) => {
      try {
        const { data } = await axios.post("/contact", contactData);
        alert(data.message)
        return dispatch({
          type: CONTACT_MAIL,
          payload: data,
        });
      } catch (error) {
        alert(error.response.data.message);
        throw new Error(error.response.data.message);
      }
    };
  };