import { GET_ALL_ARTICLES } from "../action-types/articlesContstants";

const initialState = {
    articles: [],
    };

function articlesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_ARTICLES:
            return {
                ...state,
                articles: action.payload,
            };
        default:
            return state;
    }
}

export default articlesReducer;