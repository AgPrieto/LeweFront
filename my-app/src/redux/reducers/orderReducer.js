import { SEND_ORDER } from "../action-types/orderContstants";

const initialState = {
    order: [],
    };

function orderReducer(state = initialState, action) {
    switch (action.type) {
        case SEND_ORDER:
            return {
                ...state,
                order: action.payload,
            };
        default:
            return state;
    }
}

export default orderReducer;