import {
  GET_ALL_CATEGORIES,
  GET_CATEGORY_ARTICLES,
  GET_CATEGORY_ARTICLES_BY_NAME,
  FILTER_BY_PRICE,
  ORDER_BY_PRICE,
  FILTER_BY_SIZE,
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
          categoryArticles: {
            name: state.categoryArticles.name || action.payload.name,
            products: action.payload.products,
          },
        };
      
    case GET_CATEGORY_ARTICLES_BY_NAME:
      return {
        ...state,
        categoryArticles: {
          products: state.categoriesArticlesBackup.products.filter((product) =>
            product.name.toLowerCase().includes(action.payload.toLowerCase())
          ),
        },
      };
    case FILTER_BY_PRICE:
      return {
        ...state,
        categoryArticles: {
          products: state.categoriesArticlesBackup.products.filter(
            (product) =>
              product.price >= action.payload[0] &&
              product.price <= action.payload[1]
          ),
        },
      };
    case ORDER_BY_PRICE:
      return {
        ...state,
        categoryArticles: {
          products: state.categoriesArticlesBackup.products.slice().sort((a, b) => {
            if (action.payload === "ASC") {
              return a.price - b.price;
            }
            return b.price - a.price;
          }),
        },
      };
    case FILTER_BY_SIZE:
      // eslint-disable-next-line no-case-declarations
      const selectedSizes = action.payload;
      if (selectedSizes.length === 0) {
        return {
          ...state,
          categoryArticles: {
            products: state.categoriesArticlesBackup.products,
          },
        };
      }
      return {
        ...state,
        categoryArticles: {
          products: state.categoriesArticlesBackup.products.filter(
            (article) => {
              return selectedSizes.some((talle) => {
                return article[talle] > 0;
              });
            }
          ),
        },
      };

    default:
      return state;
  }
}

export default categoriesReducer;
