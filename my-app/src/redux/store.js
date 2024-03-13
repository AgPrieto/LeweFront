import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import {thunk} from "redux-thunk";

import categoriesReducer from "./reducers/categoriesReducer";
import articlesReducer from "./reducers/articlesReducer";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
categoriesReducer,
articlesReducer,
cartReducer
},);

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store