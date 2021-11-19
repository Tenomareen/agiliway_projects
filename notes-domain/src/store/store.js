import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import modalReducer from "../pages/Notes/reducers/modalReducer";
import noteDetailsReducer from "../pages/Notes/reducers/noteDetailsReducer";
import notesReducer from "../pages/Notes/reducers/notesReducer";

const rootReducer = combineReducers({
  notes: notesReducer,
  noteDetails: noteDetailsReducer,
  modal: modalReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
