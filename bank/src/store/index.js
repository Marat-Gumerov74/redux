import {combineReducers, createStore} from "redux";
import {cashReduser} from "./cashReduser";
import {customerReduser} from "./customerReduser";
import {composeWithDevTools} from "redux-devtools-extension";


const rootReducer = combineReducers({
  cash: cashReduser,
  customers: customerReduser
})

export const store = createStore(rootReducer, composeWithDevTools());