import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import booksReducer from "./reducers/booksReducer";
import bookReducer from "./reducers/bookDetailReducer";

const rootReducer = combineReducers({
  books: booksReducer,
  book: bookReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
