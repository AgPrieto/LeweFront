import { GET_ANALYTICS } from "../action-types/analyticsConstants";

const initialState = {
    totalArticles: 0,
    totalOrders: 0,
    grossIncome: 0,
    mostSold: [],
    allCategories: [],
    categoriesData: [],
    disabledArticles: [],
    monthlySales: [],
};

function analyticsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ANALYTICS:
            return {
                ...state,
                totalArticles: action.payload.totalArticles,
                totalOrders: action.payload.totalOrders,
                grossIncome: action.payload.grossIncome,
                mostSold: action.payload.mostSold,
                allCategories: action.payload.allCategories,
                categoriesData: action.payload.categoriesData,
                disabledArticles: action.payload.disabledArticles,
                monthlySales: action.payload.monthlySales,
            };
        default:
            return state;
    }
}

export default analyticsReducer;