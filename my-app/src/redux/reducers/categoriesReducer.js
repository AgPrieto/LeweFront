import {
  GET_ALL_CATEGORIES,
  GET_CATEGORY_ARTICLES,
  GET_CATEGORY_ARTICLES_BY_NAME,
  FILTER_BY_PRICE,
  ORDER_BY_PRICE,
  FILTER_BY_SIZE,
  RESET_FILTERS
} from "../action-types/categoriesConstants";

const initialState = {
  categories: [],
  categoriesArticlesBackup: [],
  categoryArticles: [],
  filteredByPrice: [],
  filteredBySize: [],
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
        filteredByPrice: action.payload.products,
        filteredBySize: action.payload.products,
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
          filteredByPrice: state.categoriesArticlesBackup.products.filter(
            (product) =>
              product.price >= action.payload[0] &&
              product.price <= action.payload[1]
          ),
        };
        case ORDER_BY_PRICE:
          return {
            ...state,
            filteredByPrice: [...state.filteredByPrice].sort((a, b) => {
              if (action.payload === "ASC") {
                return a.price - b.price;
              }
              return b.price - a.price;
            }),
          };
        
        case FILTER_BY_SIZE:
      const selectedSizes = action.payload;
      if (selectedSizes.length === 0) {
        return {
          ...state,
          filteredBySize: state.categoriesArticlesBackup.products,
        };
      }
      return {
        ...state,
        filteredBySize: state.categoriesArticlesBackup.products.filter(
          (article) => {
            return selectedSizes.some((talle) => {
              return article[talle] > 0;
            });
          }
        ),
      };
          
        
      case RESET_FILTERS:
        return {
          ...state,
          categoryArticles: {
            name: state.categoryArticles.name,
            products: [...state.categoriesArticlesBackup.products],
          },
          filteredByPrice: [...state.categoriesArticlesBackup.products],
          filteredBySize: [...state.categoriesArticlesBackup.products],
        };
      default:
        return state;
    }
  }
  
  export default categoriesReducer;
