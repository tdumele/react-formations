import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import counterReducer from "./counter/reducer";

const persistedState = sessionStorage.getItem("counterApp")
  ? JSON.parse(sessionStorage.getItem("counterApp"))
  : {};

const reducers = combineReducers({
  counterReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  persistedState,
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
  // allow to save in the session
  sessionStorage.setItem("counterApp", JSON.stringify(store.getState()));
});

export default store;
