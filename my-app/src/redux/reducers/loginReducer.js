import { LOGIN_REQUEST, LOGOUT_REQUEST } from '../action-types/loginConstants';

const initialState = {
  isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn')) || false,
  // ...otros estados...
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      localStorage.setItem('isLoggedIn', true);
      return {
        ...state,
        isLoggedIn: true, // establece isLoggedIn en true cuando el login es exitoso
        // ...otros estados...
      };
      case LOGOUT_REQUEST:
        localStorage.setItem('isLoggedIn', false);
        return {
          ...state,
          isLoggedIn: false,
        };
    default:
      return state;
  }
};

export default loginReducer;

  