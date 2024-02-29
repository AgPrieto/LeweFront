import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import {thunk} from "redux-thunk";

import categoriesReducer from "./reducers/categoriesReducer";
import articlesReducer from "./reducers/articlesReducer";

const rootReducer = combineReducers({
categoriesReducer,
articlesReducer
},);

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store