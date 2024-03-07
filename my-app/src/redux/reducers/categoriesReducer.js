import {
  GET_ALL_CATEGORIES,
  GET_CATEGORY_ARTICLES,
  GET_CATEGORY_ARTICLES_BY_NAME,
} from "../action-types/categoriesConstants";

const initialState = {
  categories: [],
  categoriesArticlesBackup: [],
  categoryArticles: [],
};

function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    // Aquí puedes definir tus acciones
    case GET_ALL_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case GET_CATEGORY_ARTICLES:
      return {
        ...state,
        categoriesArticlesBackup: action.payload,
        categoryArticles: action.payload,
      };
    case GET_CATEGORY_ARTICLES_BY_NAME:
      return {
        ...state,
        categoryArticles: 
          {
            products: state.categoriesArticlesBackup.products.filter(
              (product) =>
                product.name.toLowerCase().includes(action.payload.toLowerCase())
            ),
          },
        
      };
    default:
      return state;
  }
}

export default categoriesReducer;
