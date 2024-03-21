import { LOGIN_REQUEST } from '../action-types/loginConstants';

const initialState = {
    user: {},
}

const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}

export default loginReducer;