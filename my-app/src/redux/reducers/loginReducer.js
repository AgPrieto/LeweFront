import { LOGIN_REQUEST } from '../action-types/loginConstants';

const initialState = {
    isLoggedIn: false,
    // ...otros estados...
  };
  
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        return {
          ...state,
          isLoggedIn: true, // establece isLoggedIn en true cuando el login es exitoso
          // ...otros estados...
        };
      // ...otros casos...
      default:
        return state;
    }
  };
  
  export default loginReducer;
  