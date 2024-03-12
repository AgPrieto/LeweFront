import { GET_ALL_ARTICLES, GET_ARTICLES_BY_NAME, GET_ARTICLES_BY_ID } from "../action-types/articlesContstants";

const initialState = {
    articles: [],
    articlesBackup: [],
    detail: []
    };

function articlesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_ARTICLES:
            return {
                ...state,
                articles: action.payload,
                articlesBackup: action.payload,
            };
            case GET_ARTICLES_BY_NAME:
                return {
                  ...state,
                  articles: 
                    {
                      product: state.articlesBackup.product.filter(
                        (product) =>
                          product.name.toLowerCase().includes(action.payload.toLowerCase())
                      ),
                    },
                };
                case GET_ARTICLES_BY_ID:
                  return {
                    ...state,
                    detail: action.payload, 
                  };
        default:
            return state;
    }
}

export default articlesReducer;