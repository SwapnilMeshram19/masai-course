import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { themeReducer } from "./themeReducer";



const rootreducer = combineReducers({
  counterReducer,
  themeReducer,
});

const store = legacy_createStore(rootreducer);

export { store };

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
