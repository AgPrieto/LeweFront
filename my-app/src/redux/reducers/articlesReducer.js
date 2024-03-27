import {
  GET_ALL_ARTICLES,
  GET_ARTICLES_BY_NAME,
  GET_ARTICLES_BY_ID,
  GET_ADMIN_ARTICLES,
  DISABLE_ARTICLE,
  GET_ARTICLES_BY_NAME_ADMIN,
} from "../action-types/articlesContstants";

const initialState = {
  articles: [],
  articlesBackup: [],
  adminArticles: [],
  adminArticlesBackup: [],
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
        adminArticlesBackup : action.payload,
      };
    case GET_ARTICLES_BY_NAME_ADMIN:
      return {
        ...state,
        adminArticles: state.adminArticlesBackup.filter((product) =>
          product.name.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
      case DISABLE_ARTICLE:
        return {
          ...state,
          adminArticles: state.adminArticles.map((article) =>
            article.id === action.payload.id ? action.payload : article
          ),
        };

    default:
      return state;
  }
}

export default articlesReducer;
