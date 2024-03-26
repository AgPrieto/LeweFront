import {
  GET_ALL_ARTICLES,
  GET_ARTICLES_BY_NAME,
  GET_ARTICLES_BY_ID,
  GET_ADMIN_ARTICLES,
} from "../action-types/articlesContstants";

const initialState = {
  articles: [],
  articlesBackup: [],
  adminArticles: [],
  inactiveArticles: [],
  detail: [],
};

function articlesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_ARTICLES:
      localStorage.setItem("articlesBackup", JSON.stringify(action.payload));
      return {
        ...state,
        articles: action.payload,
        articlesBackup: action.payload,
      };
    case GET_ARTICLES_BY_NAME:
      return {
        ...state,
        articles: {
          product: state.articlesBackup.product.filter((product) =>
            product.name.toLowerCase().includes(action.payload.toLowerCase())
          ),
        },
      };
    case GET_ARTICLES_BY_ID:
      return {
        ...state,
        detail: action.payload,
      };
    case GET_ADMIN_ARTICLES:
      return {
        ...state,
        adminArticles: action.payload,
      };

    default:
      return state;
  }
}

export default articlesReducer;
