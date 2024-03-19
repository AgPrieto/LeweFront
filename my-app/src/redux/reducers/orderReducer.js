import { SEND_ORDER, GET_ORDERS} from "../action-types/orderContstants";

const initialState = {
    order: [],
    orders:[],
    };

function orderReducer(state = initialState, action) {
    switch (action.type) {
        case SEND_ORDER:
            return {
                ...state,
                order: action.payload,
            };
        case GET_ORDERS:
            return {
                ...state,
                orders: action.payload,
            };
        default:
            return state;
    }
}

export default orderReducer;