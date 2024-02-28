import { GET_ALL_CATEGORIES } from "../action-types/categoriesConstants";

const initialState = {
  categories: [],
}

function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    // Aquí puedes definir tus acciones
    case GET_ALL_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      }
    default:
      return state
  }
}

export default categoriesReducer;
