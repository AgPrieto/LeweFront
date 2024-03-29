import {
  GET_ALL_CATEGORIES,
  GET_CATEGORY_ARTICLES,
  GET_CATEGORY_ARTICLES_BY_NAME,
  FILTER_BY_PRICE,
  ORDER_BY_PRICE,
  FILTER_BY_SIZE,
  RESET_FILTERS,
  UPDATE_FILTERED_PRODUCTS
} from "../action-types/categoriesConstants";

const initialState = {
  categories: [],
  categoriesArticlesBackup: [],
  categoryArticles: [],
  filteredByPrice: [],
  filteredBySize: [],
  filteredProducts: [],
  lastOrder: "ASC"
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
          name: action.payload.name,
          products: action.payload.products,
        },
        filteredByPrice: action.payload.products,
        filteredBySize: action.payload.products,
      };
      
      case GET_CATEGORY_ARTICLES_BY_NAME:
        return {
          ...state,
          filteredProducts: state.filteredByPrice.filter((product) =>
            product.name.toLowerCase().includes(action.payload.toLowerCase())
          ),
        };
        case FILTER_BY_PRICE:
  // eslint-disable-next-line no-case-declarations
  const filteredProducts = state.categoriesArticlesBackup.products.filter(
    (product) =>
      product.price >= action.payload[0] &&
      product.price <= action.payload[1]
  );

  // Ordena los productos filtrados según el último ordenamiento
  // eslint-disable-next-line no-case-declarations
  const sortedFilteredProducts = [...filteredProducts].sort((a, b) => {
    if (state.lastOrder === "ASC") {
      return a.price - b.price;
    }
    return b.price - a.price;
  });

  return {
    ...state,
    filteredByPrice: sortedFilteredProducts,
  };

  case ORDER_BY_PRICE:
    return {
      ...state,
      lastOrder: action.payload, // Almacena el último ordenamiento
      filteredByPrice: [...state.filteredByPrice].sort((a, b) => {
        if (action.payload === "ASC") {
          return a.price - b.price;
        }
        return b.price - a.price;
      }),
    };
        
        case FILTER_BY_SIZE:
      // eslint-disable-next-line no-case-declarations
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
        case UPDATE_FILTERED_PRODUCTS:
  return {
    ...state,
    filteredProducts: action.payload,
  };
      default:
        return state;
    }
  }
  
  
  export default categoriesReducer;
